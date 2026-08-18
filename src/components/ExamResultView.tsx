import React, { useEffect, useRef } from 'react';
import { ExamResult, Language, Question } from '../types';
import { Award, CheckCircle, XCircle, RotateCcw, RefreshCw, ArrowRight, BookOpen, Clock, BarChart3, Check, X, ListChecks } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExamResultViewProps {
  result: ExamResult;
  allQuestions: Question[];
  language: Language;
  onRestartSameExam: () => void;
  onNewExam: () => void;
  onGoHome: () => void;
  onOpenBank: () => void;
}

export const ExamResultView: React.FC<ExamResultViewProps> = ({
  result,
  allQuestions,
  language,
  onRestartSameExam,
  onNewExam,
  onGoHome,
  onOpenBank,
}) => {
  const reviewRef = useRef<HTMLDivElement>(null);
  const percentage = Math.round((result.score / result.totalQuestions) * 100);
  const isPassed = result.passed; // >= 12 / 20 in Rwanda

  useEffect(() => {
    if (isPassed) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4A6741', '#CCD5AE', '#D4A373', '#E9EDC9']
      });
    }
  }, [isPassed]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="w-full flex flex-col gap-8 max-w-5xl mx-auto pb-12">
      {/* Top Banner Result Card */}
      <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#E5E2D9] shadow-2xs text-center relative overflow-hidden">
        <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-sm ${
          isPassed ? 'bg-[#E9EDC9] text-[#4A6741]' : 'bg-[#FCEEEA] text-[#E07A5F]'
        }`}>
          {isPassed ? <Award className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
        </div>

        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
          isPassed ? 'bg-[#E9EDC9] text-[#4A6741] border border-[#CCD5AE]' : 'bg-[#FCEEEA] text-[#E07A5F] border border-[#F5C7BC]'
        }`}>
          {isPassed
            ? (language === 'rw' ? 'WATSINZE IKIZAMINI!' : language === 'en' ? 'EXAM PASSED!' : 'EXAMEN RÉUSSI!')
            : (language === 'rw' ? 'NTABWO WATSINZE' : language === 'en' ? 'EXAM FAILED' : 'ÉCHEC À L\'EXAMEN')}
        </span>

        <h2 className="text-4xl sm:text-5xl font-black text-[#2D2D2D] mb-4">
          {result.score} / {result.totalQuestions}
        </h2>

        <p className="text-base sm:text-lg text-[#8B8678] max-w-xl mx-auto mb-8 leading-relaxed">
          {isPassed
            ? (language === 'rw'
                ? `Wabonye ${percentage}%. Iki gipimo kirenze 60% (12/20) gikenewe ngo uhabwe uruhushya rw'agateganyo muri Polisi y'u Rwanda!`
                : `You scored ${percentage}%. This exceeds the official 60% (12/20) pass mark required by Rwanda National Police!`)
            : (language === 'rw'
                ? `Wabonye ${percentage}%. Ukeneye nibura amanota 12/20 (60%) kugira ngo utsinde ikizamini cya Polisi. Komeza witoze ku bibazo 400!`
                : `You scored ${percentage}%. You need at least 12/20 (60%) to pass the official police exam. Practice more with our 400 questions!`)}
        </p>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
          <div className="bg-[#F9F7F2] p-4 rounded-2xl border border-[#E5E2D9]">
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#8B8678] mb-1">
              <CheckCircle className="w-3.5 h-3.5 text-[#4A6741]" />
              <span>{language === 'rw' ? 'Ibisubizo Byiza' : 'Correct'}</span>
            </div>
            <p className="text-2xl font-bold text-[#4A6741]">{result.score}</p>
          </div>

          <div className="bg-[#F9F7F2] p-4 rounded-2xl border border-[#E5E2D9]">
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#8B8678] mb-1">
              <XCircle className="w-3.5 h-3.5 text-[#E07A5F]" />
              <span>{language === 'rw' ? 'Ibyo Wishe' : 'Incorrect'}</span>
            </div>
            <p className="text-2xl font-bold text-[#E07A5F]">{result.totalQuestions - result.score}</p>
          </div>

          <div className="bg-[#F9F7F2] p-4 rounded-2xl border border-[#E5E2D9]">
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#8B8678] mb-1">
              <Clock className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>{language === 'rw' ? 'Igihe Wakoresheje' : 'Time Taken'}</span>
            </div>
            <p className="text-2xl font-bold text-[#2D2D2D]">{formatTime(result.timeSpentSeconds)}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onRestartSameExam}
            className="bg-[#4A6741] hover:bg-[#3D5636] text-white px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{language === 'rw' ? 'Subiramo Iki Kizamini (Ibibazo 20 Bimwe)' : language === 'en' ? 'Restart Test (Same 20 Qs)' : 'Refaire le Test (Mêmes 20 Qs)'}</span>
          </button>

          <button
            onClick={onNewExam}
            className="bg-[#4A6741] hover:bg-[#3D5636] text-white px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>{language === 'rw' ? 'Ikizamini Gishya (20 Bitunguranye)' : language === 'en' ? 'New Random Test (20 from 400)' : 'Nouveau Test (20 Qs Aléatoires)'}</span>
          </button>

          <button
            onClick={() => reviewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="bg-[#F1EDE4] hover:bg-[#E5E2D9] text-[#2D2D2D] px-6 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 border border-[#E5E2D9] transition-colors cursor-pointer"
          >
            <ListChecks className="w-4 h-4 text-[#4A6741]" />
            <span>{language === 'rw' ? 'Subiramo Ibisubizo' : language === 'en' ? 'Review Answers' : 'Revoir les Réponses'}</span>
          </button>

          <button
            onClick={onOpenBank}
            className="bg-white hover:bg-[#F9F7F2] text-[#2D2D2D] px-6 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 border border-[#E5E2D9] transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#4A6741]" />
            <span>{language === 'rw' ? 'Witoze Ibibazo Byose 400' : 'Study Full 400 Question Bank'}</span>
          </button>

          <button
            onClick={onGoHome}
            className="bg-white hover:bg-[#F9F7F2] text-[#8B8678] hover:text-[#2D2D2D] px-6 py-3.5 rounded-full font-bold text-sm border border-[#E5E2D9] transition-colors cursor-pointer"
          >
            {language === 'rw' ? 'Ahabanza' : 'Home'}
          </button>
        </div>
      </div>

      {/* Detailed Review of All 20 Questions */}
      <div ref={reviewRef} className="flex flex-col gap-4 scroll-mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-[#2D2D2D]">
            {language === 'rw' ? 'Isuzuma ry\'Ibibazo Byose Byakozwe' : 'Question Breakdown & Solutions'}
          </h3>
          <span className="text-xs font-semibold text-[#8B8678]">
            {result.answers.length} {language === 'rw' ? 'Ibibazo' : 'Questions'}
          </span>
        </div>

        <div className="space-y-4">
          {result.answers.map((answer, index) => {
            const question = allQuestions.find(q => q.id === answer.questionId);
            if (!question) return null;

            const isAnswerCorrect = answer.isCorrect;

            return (
              <div
                key={question.id}
                className="bg-white rounded-2xl p-6 border border-[#E5E2D9] shadow-2xs flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        isAnswerCorrect ? 'bg-[#E9EDC9] text-[#4A6741]' : 'bg-[#FCEEEA] text-[#E07A5F]'
                      }`}
                    >
                      {isAnswerCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-[#8B8678] uppercase">
                        {language === 'rw' ? `IKIBASO ${index + 1}` : `QUESTION ${index + 1}`}
                      </span>
                      <h4 className="text-base font-bold text-[#2D2D2D]">
                        {question.question[language] || question.question.rw}
                      </h4>
                    </div>
                  </div>

                  {question.articleRef && (
                    <span className="text-xs bg-[#F9F7F2] text-[#8B8678] px-2.5 py-1 rounded-full font-semibold border border-[#E5E2D9] shrink-0">
                      {question.articleRef}
                    </span>
                  )}
                </div>

                {/* Options Review */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {question.options[language]?.map((opt, optIdx) => {
                    const isCorrectOpt = optIdx === question.correctIndex;
                    const isUserPick = optIdx === answer.selectedOptionIndex;

                    let bg = 'bg-[#F9F7F2] border-[#E5E2D9] text-[#8B8678]';
                    if (isCorrectOpt) {
                      bg = 'bg-[#E9EDC9] border-[#CCD5AE] text-[#4A6741] font-semibold';
                    } else if (isUserPick && !isAnswerCorrect) {
                      bg = 'bg-[#FCEEEA] border-[#F5C7BC] text-[#E07A5F] font-semibold';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-xl border text-xs flex items-center gap-2.5 ${bg}`}
                      >
                        <span className="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center font-bold text-[10px] shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {isCorrectOpt && <Check className="w-3.5 h-3.5 text-[#4A6741]" />}
                        {isUserPick && !isAnswerCorrect && <X className="w-3.5 h-3.5 text-[#E07A5F]" />}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="bg-[#F1EDE4] rounded-xl p-3.5 text-xs text-[#2D2D2D] leading-relaxed border border-[#E5E2D9]">
                  <strong className="text-[#4A6741] mr-1">
                    {language === 'rw' ? 'Ibisobanuro n\'Itegeko:' : 'Explanation & Legal Note:'}
                  </strong>
                  {question.explanation[language] || question.explanation.rw}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
