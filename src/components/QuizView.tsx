import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Question, Language, ExamAnswer, ExamResult, Difficulty } from '../types';
import { Check, X, ArrowRight, RotateCcw, AlertTriangle, Lightbulb, Clock, CheckCircle2, ChevronRight, Zap, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizViewProps {
  questions: Question[];
  language: Language;
  onFinishExam: (result: ExamResult) => void;
  onExit: () => void;
  modeTitle?: string;
  isTimed?: boolean;
  difficulty: Difficulty;
}

const DIFFICULTY_TIMES: Record<Difficulty, number> = { easy: 90, medium: 60, hard: 30 };

const DIFFICULTY_LABELS: Record<Difficulty, { rw: string; en: string; fr: string }> = {
  easy: { rw: 'Byoroshye', en: 'Easy', fr: 'Facile' },
  medium: { rw: 'Hagati', en: 'Medium', fr: 'Moyen' },
  hard: { rw: 'Bikomeye', en: 'Hard', fr: 'Difficile' },
};

const STUDY_TIPS = [
  {
    rw: "Ibyapa by'uruziga rutukura bibuza (Interdiction), iby'uruziga rw'ubururu bitegeka (Obligation), naho ibya mpandeshatu biburira amakuba (Danger).",
    en: "Red circular signs prohibit, blue circular signs mandate orders, while triangular signs warn of impending hazards.",
    fr: "Les panneaux ronds à bord rouge interdisent, les ronds bleus obligent et les triangles avertissent d'un danger."
  },
  {
    rw: "Ku masangano yose adafite ibyapa cyangwa amatara, itegeko rihoraho ni uguhereza inzira ikinyabiziga giturutse iburyo bwawe.",
    en: "At all uncontrolled intersections without signs or signals, the fundamental rule is always to give way to traffic from the right.",
    fr: "Aux carrefours sans signalisation, la règle absolue est la priorité de passage aux véhicules venant de droite."
  },
  {
    rw: "Umuvuduko ntarengwa mu nsisiro / mu mijyi ni 40 km/h kuri bose uretse iyo hari icyapa kibyemera.",
    en: "The standard default speed limit in built-up urban areas is 40 km/h unless posted otherwise by road signs.",
    fr: "La vitesse maximale en agglomération est fixée par défaut à 40 km/h sauf indication contraire."
  },
  {
    rw: "Kunyurana ku kindi kinyabiziga (Dépassement) bikorwa ku ruhande rw'ibumoso gusa mu Rwanda.",
    en: "Overtaking another moving vehicle is strictly executed on the left-hand side under Rwandan traffic regulations.",
    fr: "Le dépassement s'effectue obligatoirement par la gauche sur les routes au Rwanda."
  },
  {
    rw: "Ubugari ntarengwa bw'ikinyabiziga n'imizigo ni 2.50 m, naho ubuhagarike ntarengwa uhereye ku butaka ni 4.30 m.",
    en: "Maximum vehicle width limit is 2.50 meters, and maximum legal height from road surface is 4.30 meters.",
    fr: "La largeur maximale autorisée est de 2,50 m et la hauteur maximale hors-tout de 4,30 m."
  }
];

export const QuizView: React.FC<QuizViewProps> = ({
  questions,
  language,
  onFinishExam,
  onExit,
  modeTitle,
  isTimed = true,
  difficulty,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<ExamAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState(0);
  const [instantMode, setInstantMode] = useState(false); // Instant validation on click
  const [tipIndex, setTipIndex] = useState(0);

  const remainingRef = useRef(0);
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeUpHandlerRef = useRef<() => void>(() => {});

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  // Sync state if navigating to a question that was already answered
  useEffect(() => {
    if (!currentQuestion) return;
    const existingAnswer = answers.find(a => a.questionId === currentQuestion.id);
    if (existingAnswer) {
      setSelectedOption(existingAnswer.selectedOptionIndex);
      setIsAnswerSubmitted(true);
    } else {
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    }
  }, [currentIndex, currentQuestion, answers]);

  // Per-question countdown: reset whenever the question changes
  useEffect(() => {
    remainingRef.current = DIFFICULTY_TIMES[difficulty];
    setSecondsRemaining(DIFFICULTY_TIMES[difficulty]);
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }
  }, [currentQuestion?.id, difficulty]);

  // Tick every second; when the per-question time expires, record it as wrong and move on
  useEffect(() => {
    if (!isTimed || !currentQuestion) return;
    const interval = setInterval(() => {
      setTimeSpentSeconds(t => t + 1);
      remainingRef.current -= 1;
      setSecondsRemaining(remainingRef.current);
      if (remainingRef.current <= 0) {
        clearInterval(interval);
        timeUpHandlerRef.current();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimed, currentQuestion?.id]);

  // Rotate study tip on question advance
  useEffect(() => {
    setTipIndex((currentIndex) % STUDY_TIPS.length);
  }, [currentIndex]);

  const finalizeExam = useCallback((finalAnswers: ExamAnswer[]) => {
    const score = finalAnswers.filter(a => a.isCorrect).length;
    // Pass threshold in Rwanda is 12 out of 20 (60%)
    const passed = (score / totalQuestions) >= 0.6;

    const result: ExamResult = {
      id: 'exam-' + Date.now(),
      timestamp: Date.now(),
      mode: 'exam',
      totalQuestions,
      score,
      passed,
      timeSpentSeconds,
      answers: finalAnswers,
    };

    onFinishExam(result);
  }, [totalQuestions, timeSpentSeconds, onFinishExam]);

  const handleTimeUp = useCallback(() => {
    if (!currentQuestion || isAnswerSubmitted) return;
    const timeUpAnswer: ExamAnswer = {
      questionId: currentQuestion.id,
      selectedOptionIndex: null,
      isCorrect: false,
    };
    setIsAnswerSubmitted(true);
    setSelectedOption(null);
    setAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== currentQuestion.id);
      return [...filtered, timeUpAnswer];
    });
    if (currentIndex + 1 >= totalQuestions) {
      const withTimeUp = [...answers.filter(a => a.questionId !== currentQuestion.id), timeUpAnswer];
      finalizeExam(withTimeUp);
    } else {
      advanceTimerRef.current = setTimeout(() => setCurrentIndex(prev => prev + 1), 1500);
    }
  }, [currentQuestion, isAnswerSubmitted, currentIndex, totalQuestions, answers, finalizeExam]);

  // Keep the latest time-up handler in a ref so the interval always calls the fresh one
  useEffect(() => {
    timeUpHandlerRef.current = handleTimeUp;
  });

  const submitCurrentAnswer = useCallback((optIndex: number) => {
    if (!currentQuestion || isAnswerSubmitted) return;

    const isCorrect = optIndex === currentQuestion.correctIndex;
    setIsAnswerSubmitted(true);
    setSelectedOption(optIndex);

    const newAnswer: ExamAnswer = {
      questionId: currentQuestion.id,
      selectedOptionIndex: optIndex,
      isCorrect,
    };

    // Update or add to answers
    setAnswers((prev) => {
      const filtered = prev.filter(a => a.questionId !== currentQuestion.id);
      return [...filtered, newAnswer];
    });

    if (isCorrect) {
      try {
        confetti({
          particleCount: 25,
          spread: 45,
          origin: { y: 0.8 },
          colors: ['#4A6741', '#CCD5AE', '#D4A373']
        });
      } catch (e) {
        // Safe fallback
      }
    }
  }, [currentQuestion, isAnswerSubmitted]);

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
    if (instantMode) {
      submitCurrentAnswer(index);
    }
  };

  const handleManualSubmit = () => {
    if (selectedOption !== null && !isAnswerSubmitted) {
      submitCurrentAnswer(selectedOption);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finalizeExam(answers);
    }
  };

  // Keyboard Navigation Support (A, B, C, D / 1, 2, 3, 4 / Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const key = e.key.toUpperCase();
      if (key === 'A' || key === '1') {
        if (!isAnswerSubmitted) handleSelectOption(0);
      } else if (key === 'B' || key === '2') {
        if (!isAnswerSubmitted) handleSelectOption(1);
      } else if (key === 'C' || key === '3') {
        if (!isAnswerSubmitted) handleSelectOption(2);
      } else if (key === 'D' || key === '4') {
        if (!isAnswerSubmitted) handleSelectOption(3);
      } else if (e.key === 'Enter') {
        if (!isAnswerSubmitted && selectedOption !== null) {
          submitCurrentAnswer(selectedOption);
        } else if (isAnswerSubmitted) {
          handleNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswerSubmitted, selectedOption, currentIndex, totalQuestions, answers]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const correctCount = answers.filter(a => a.isCorrect).length;
  const incorrectCount = answers.filter(a => !a.isCorrect).length;
  const accuracy = answers.length > 0 ? Math.round((correctCount / answers.length) * 100) : 0;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  if (!currentQuestion) {
    return (
      <div className="bg-white rounded-[32px] p-12 text-center border border-[#E5E2D9] max-w-lg mx-auto">
        <AlertTriangle className="w-12 h-12 text-[#D4A373] mx-auto mb-4" />
        <h2 className="text-xl font-bold text-[#2D2D2D] mb-2">Nta bibazo bibonetse</h2>
        <button 
          onClick={onExit}
          className="bg-[#4A6741] text-white px-6 py-2.5 rounded-full font-semibold cursor-pointer"
        >
          Subira Ahabanza
        </button>
      </div>
    );
  }

  const optionLetters = ['A', 'B', 'C', 'D'];
  const isCorrect = isAnswerSubmitted && selectedOption === currentQuestion.correctIndex;

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Quiz Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white px-6 py-3.5 rounded-2xl border border-[#E5E2D9] shadow-2xs">
        <div className="flex items-center gap-3">
          <span className="bg-[#4A6741] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {modeTitle || (language === 'rw' ? 'Ikizamini cya Polisi (20 Qs)' : language === 'en' ? 'Mock Exam (20 Qs)' : 'Examen Blanc (20 Qs)')}
          </span>
          <span className="text-xs font-semibold text-[#8B8678] hidden sm:inline">
            {language === 'rw' ? 'Gutsinda: 12/20 (60%)' : language === 'en' ? 'Pass: 12/20 (60%)' : 'Réussite: 12/20 (60%)'}
          </span>
          <span className="bg-[#F1EDE4] text-[#8B8678] text-xs font-bold px-3 py-1 rounded-full border border-[#E5E2D9] hidden sm:inline">
            {DIFFICULTY_LABELS[difficulty][language]} • {DIFFICULTY_TIMES[difficulty]}s/Q
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Instant Evaluation Toggle */}
          <button
            onClick={() => setInstantMode(!instantMode)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border ${
              instantMode
                ? 'bg-[#E9EDC9] text-[#4A6741] border-[#CCD5AE]'
                : 'bg-[#F9F7F2] text-[#8B8678] border-[#E5E2D9] hover:text-[#2D2D2D]'
            }`}
            title="Kanda rimwe uhite ubona igisubizo"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{instantMode ? (language === 'rw' ? 'Ibisubizo Ako Kanya: ON' : 'Instant Mode: ON') : (language === 'rw' ? 'Ibisubizo Ako Kanya: OFF' : 'Instant Mode: OFF')}</span>
          </button>

          {isTimed && (
            <div className="bg-[#F9F7F2] px-3.5 py-1.5 rounded-full border border-[#E5E2D9] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4A373]" />
              <span className={`text-xs font-bold font-mono ${secondsRemaining < 15 ? 'text-[#E07A5F] animate-pulse' : 'text-[#2D2D2D]'}`}>
                {formatTime(secondsRemaining)}
              </span>
            </div>
          )}

          <button
            onClick={() => {
              if (window.confirm(language === 'rw' ? 'Urashaka guhagarika iki kizamini ukasubira ahabanza?' : 'Do you want to end this session and return to home?')) {
                onExit();
              }
            }}
            className="bg-[#2D2D2D] hover:bg-black text-white px-4 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer"
          >
            {language === 'rw' ? 'Gusoza' : language === 'en' ? 'End Session' : 'Quitter'}
          </button>
        </div>
      </div>

      {/* Main Grid: Question Card + Progress Sidebar */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Section: Question & Options (8 Cols) */}
        <section className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-white rounded-[32px] p-6 sm:p-10 shadow-2xs border border-[#E5E2D9] relative overflow-hidden flex flex-col justify-between min-h-[440px]">
            {/* Top Progress Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#E5E2D9]">
              <div
                className="h-full bg-[#4A6741] transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            <div>
              {/* Question Header & Category */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[#4A6741] font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                  <span>{language === 'rw' ? `IKIBASO CYA ${currentIndex + 1} KURI ${totalQuestions}` : `QUESTION ${currentIndex + 1} OF ${totalQuestions}`}</span>
                </span>
                {currentQuestion.articleRef && (
                  <span className="bg-[#F1EDE4] text-[#8B8678] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#E5E2D9]">
                    {currentQuestion.articleRef}
                  </span>
                )}
              </div>

              {/* Question Title */}
              <h2 className="text-xl sm:text-2xl font-bold leading-snug text-[#2D2D2D] mb-6">
                {currentQuestion.question[language] || currentQuestion.question.rw}
              </h2>

              {/* Options Grid */}
              <div className="grid grid-cols-1 gap-3.5 mb-6">
                {currentQuestion.options[language]?.map((optionText, optIndex) => {
                  let buttonStyle = 'border-2 border-[#E5E2D9] hover:border-[#4A6741] hover:bg-[#F1F4F0] text-[#2D2D2D] bg-white';
                  let badgeStyle = 'border border-[#E5E2D9] bg-[#F9F7F2] text-[#2D2D2D] group-hover:bg-[#4A6741] group-hover:text-white group-hover:border-[#4A6741]';

                  if (isAnswerSubmitted) {
                    if (optIndex === currentQuestion.correctIndex) {
                      // Correct answer highlight
                      buttonStyle = 'border-2 border-[#4A6741] bg-[#F1F4F0] text-[#4A6741] font-bold shadow-xs';
                      badgeStyle = 'bg-[#4A6741] text-white border-[#4A6741] font-bold';
                    } else if (selectedOption === optIndex) {
                      // User's wrong pick
                      buttonStyle = 'border-2 border-[#E07A5F] bg-[#FCEEEA] text-[#E07A5F] font-bold';
                      badgeStyle = 'bg-[#E07A5F] text-white border-[#E07A5F] font-bold';
                    } else {
                      buttonStyle = 'border border-[#E5E2D9] opacity-40 text-[#8B8678] bg-[#F9F7F2]';
                      badgeStyle = 'border border-[#E5E2D9] text-[#8B8678] bg-white';
                    }
                  } else if (selectedOption === optIndex) {
                    buttonStyle = 'border-2 border-[#4A6741] bg-[#F1F4F0] text-[#2D2D2D] font-bold shadow-xs';
                    badgeStyle = 'bg-[#4A6741] text-white border-[#4A6741] font-bold';
                  }

                  return (
                    <button
                      key={optIndex}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(optIndex)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all flex items-center gap-4 group cursor-pointer ${buttonStyle}`}
                    >
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${badgeStyle}`}>
                        {optionLetters[optIndex]}
                      </span>
                      <span className="text-base sm:text-lg flex-1 leading-normal">
                        {optionText}
                      </span>
                      {isAnswerSubmitted && optIndex === currentQuestion.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-[#4A6741] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Submit action before answering */}
            {!isAnswerSubmitted ? (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#E5E2D9]">
                <span className="text-xs text-[#8B8678]">
                  {language === 'rw' ? 'Kanda ku gisubizo cyangwa ukoreshe buto za clavier (A, B, C, D)' : 'Select an option or use keyboard keys (A, B, C, D)'}
                </span>

                <button
                  disabled={selectedOption === null}
                  onClick={handleManualSubmit}
                  className={`w-full sm:w-auto px-8 py-3 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    selectedOption !== null
                      ? 'bg-[#4A6741] text-white hover:bg-[#3D5636] shadow-sm cursor-pointer hover:scale-[1.02]'
                      : 'bg-[#E5E2D9] text-[#8B8678] cursor-not-allowed'
                  }`}
                >
                  <span>{language === 'rw' ? 'Emeza Igisubizo' : language === 'en' ? 'Submit Answer' : 'Valider la Réponse'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNextQuestion}
                  className="bg-[#4A6741] hover:bg-[#3D5636] text-white px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
                >
                  <span>
                    {currentIndex + 1 < totalQuestions
                      ? (language === 'rw' ? 'Ikibazo Gikurikira' : language === 'en' ? 'Next Question' : 'Question Suivante')
                      : (language === 'rw' ? 'Reba Amanota' : language === 'en' ? 'View Final Results' : 'Voir les Résultats')}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Instant Feedback Banner */}
          {isAnswerSubmitted && (
            <div
              className={`rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between border gap-4 transition-all duration-300 ${
                isCorrect
                  ? 'bg-[#E9EDC9] border-[#CCD5AE] text-[#2D2D2D]'
                  : 'bg-[#FCEEEA] border-[#F5C7BC] text-[#2D2D2D]'
              }`}
            >
              <div className="flex items-start gap-4 flex-1">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                    isCorrect ? 'bg-[#4A6741] text-white' : 'bg-[#E07A5F] text-white'
                  }`}
                >
                  {isCorrect ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className={`font-bold text-base ${isCorrect ? 'text-[#4A6741]' : 'text-[#E07A5F]'}`}>
                      {isCorrect
                        ? (language === 'rw' ? 'Igisubizo cy\'Ukuri! (Correct)' : language === 'en' ? 'Correct Answer!' : 'Bonne Réponse!')
                        : (language === 'rw' ? 'Wibeshye! (Incorrect)' : language === 'en' ? 'Incorrect Answer' : 'Réponse Incorrecte')}
                    </p>
                    {currentQuestion.articleRef && (
                      <span className="text-xs bg-white/80 px-2 py-0.5 rounded font-bold text-[#4A6741] border border-[#CCD5AE]">
                        {currentQuestion.articleRef}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#2D2D2D] leading-relaxed">
                    {currentQuestion.explanation[language] || currentQuestion.explanation.rw}
                  </p>
                </div>
              </div>

              <button
                onClick={handleNextQuestion}
                className="bg-[#4A6741] hover:bg-[#3D5636] text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shrink-0 transition-colors shadow-sm cursor-pointer w-full sm:w-auto justify-center"
              >
                <span>
                  {currentIndex + 1 < totalQuestions
                    ? (language === 'rw' ? 'Ikibazo Gikurikira' : language === 'en' ? 'Next Question' : 'Question Suivante')
                    : (language === 'rw' ? 'Reba Amanota' : language === 'en' ? 'View Final Results' : 'Voir les Résultats')}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>

        {/* Right Section: Progress Tracker & Stats (4 Cols) */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          {/* Progress Tracker Card */}
          <div className="bg-[#F1EDE4] rounded-[32px] p-6 border border-[#E5E2D9] shadow-2xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-base text-[#2D2D2D]">
                {language === 'rw' ? 'Urutonde rw\'Ibibazo' : language === 'en' ? 'Progress Tracker' : 'Progression'}
              </h3>
              <span className="text-xs font-semibold text-[#8B8678]">
                {answers.length} / {totalQuestions}
              </span>
            </div>

            {/* 5-column aspect-square question badges with click-to-navigate */}
            <div className="grid grid-cols-5 gap-2.5 mb-6">
              {questions.map((q, idx) => {
                const answer = answers.find(a => a.questionId === q.id);
                const isCurrent = idx === currentIndex;

                let style = 'bg-white border border-[#E5E2D9] text-[#8B8678] hover:border-[#4A6741]';
                if (answer) {
                  style = answer.isCorrect
                    ? 'bg-[#4A6741] text-white font-bold'
                    : 'bg-[#E07A5F] text-white font-bold';
                } else if (isCurrent) {
                  style = 'border-2 border-[#4A6741] bg-white text-[#4A6741] font-bold shadow-2xs scale-105';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`aspect-square rounded-xl flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${style}`}
                    title={`Question ${idx + 1}`}
                  >
                    {(idx + 1).toString().padStart(2, '0')}
                  </button>
                );
              })}
            </div>

            {/* Session Stats Sub-block */}
            <div className="pt-6 border-t border-[#E5E2D9]">
              <h4 className="text-xs font-bold text-[#8B8678] uppercase tracking-wider mb-4">
                {language === 'rw' ? 'Imibare y\'Ibihe' : language === 'en' ? 'Session Stats' : 'Statistiques'}
              </h4>
              <div className="space-y-3.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-[#2D2D2D]">
                    {language === 'rw' ? 'Ubushobozi (Accuracy)' : language === 'en' ? 'Accuracy' : 'Précision'}
                  </span>
                  <span className="text-sm font-bold text-[#2D2D2D]">{accuracy}%</span>
                </div>

                <div className="w-full bg-[#E5E2D9] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#D4A373] h-full rounded-full transition-all duration-300"
                    style={{ width: `${accuracy}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#8B8678]">{language === 'rw' ? 'Ibyo watsinze' : language === 'en' ? 'Correct' : 'Correctes'}</span>
                  <span className="font-bold text-[#4A6741]">{correctCount}</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#8B8678]">{language === 'rw' ? 'Ibyo wishe' : language === 'en' ? 'Incorrect' : 'Incorrectes'}</span>
                  <span className="font-bold text-[#E07A5F]">{incorrectCount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Study Tip Dark Card */}
          <div className="bg-[#2D2D2D] rounded-[32px] p-6 text-white shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-[#D4A373]">
              <Lightbulb className="w-4 h-4" />
              <h3 className="font-bold text-xs tracking-wider uppercase">
                {language === 'rw' ? 'Inama y\'Isuzuma' : language === 'en' ? 'Study Tip' : 'Conseil Clé'}
              </h3>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              {STUDY_TIPS[tipIndex][language] || STUDY_TIPS[tipIndex].rw}
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
};
