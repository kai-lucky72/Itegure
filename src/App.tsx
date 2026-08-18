/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, ViewMode, Question, ExamResult, QuestionCategory, Difficulty } from './types';
import { QUESTIONS_BANK, getRandomExamQuestions, getQuestionsByCategory } from './data/questions';
import { Header } from './components/Header';
import { HomeDashboard } from './components/HomeDashboard';
import { QuizView } from './components/QuizView';
import { ExamResultView } from './components/ExamResultView';
import { QuestionBankView } from './components/QuestionBankView';
import { RoadSignsView } from './components/RoadSignsView';
import { RevisionGuideView } from './components/RevisionGuideView';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('provisoire_lang');
      return (saved === 'en' || saved === 'fr' || saved === 'rw') ? saved : 'rw';
    } catch {
      return 'rw';
    }
  });

  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<Question[]>([]);
  const [activeExamResult, setActiveExamResult] = useState<ExamResult | null>(null);
  const [quizModeTitle, setQuizModeTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [examHistory, setExamHistory] = useState<ExamResult[]>(() => {
    try {
      const saved = localStorage.getItem('provisoire_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    try {
      localStorage.setItem('provisoire_lang', newLang);
    } catch (e) {
      console.error(e);
    }
  };

  const startNewExam = () => {
    // Pick 20 randomized questions from the 400 question bank
    const random20 = getRandomExamQuestions(20);
    setActiveQuizQuestions(random20);
    setActiveExamResult(null);
    setQuizModeTitle(
      language === 'rw' ? 'Ikizamini cya Polisi (20 Qs)' : language === 'en' ? 'Official Mock Exam (20 Qs)' : 'Examen Blanc (20 Qs)'
    );
    setCurrentView('quiz');
  };

  const restartSameExam = () => {
    // Same 20 questions, but re-randomize the order
    const shuffled = [...activeQuizQuestions].sort(() => 0.5 - Math.random());
    setActiveQuizQuestions(shuffled);
    setActiveExamResult(null);
    setCurrentView('quiz');
  };

  const startCategoryExam = (category: QuestionCategory) => {
    const catQuestions = getQuestionsByCategory(category);
    // Shuffle and pick up to 20
    const shuffled = [...catQuestions].sort(() => 0.5 - Math.random()).slice(0, 20);
    setActiveQuizQuestions(shuffled);
    setActiveExamResult(null);
    setQuizModeTitle(
      language === 'rw' ? `Kwitoza: ${category}` : `Practice: ${category}`
    );
    setCurrentView('quiz');
  };

  const startCustomExam = (customQuestions: Question[]) => {
    setActiveQuizQuestions(customQuestions);
    setActiveExamResult(null);
    setQuizModeTitle(
      language === 'rw' ? 'Ikizamini ku Bibazo Byatoranyijwe' : 'Custom Question Set Quiz'
    );
    setCurrentView('quiz');
  };

  const handleFinishExam = (result: ExamResult) => {
    setActiveExamResult(result);
    const updatedHistory = [result, ...examHistory];
    setExamHistory(updatedHistory);
    try {
      localStorage.setItem('provisoire_history', JSON.stringify(updatedHistory));
    } catch (e) {
      console.error(e);
    }
  };

  const passedTestsCount = examHistory.filter(e => e.passed).length;
  const totalCompleted = examHistory.length;
  const averageScore = totalCompleted > 0
    ? Math.round(examHistory.reduce((acc, curr) => acc + (curr.score / curr.totalQuestions) * 100, 0) / totalCompleted)
    : 0;

  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans text-[#2D2D2D] p-4 sm:p-8 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header with Natural Tones Navigation & Language switcher */}
        <Header
          currentView={currentView}
          onSelectView={(view) => {
            if (view === 'quiz' && activeQuizQuestions.length === 0) {
              startNewExam();
            } else {
              setCurrentView(view);
            }
          }}
          language={language}
          onLanguageChange={handleLanguageChange}
          totalAnswered={QUESTIONS_BANK.length}
          passedTests={passedTestsCount}
        />

        {/* View Routing */}
        <main className="w-full">
          {currentView === 'home' && (
            <HomeDashboard
              language={language}
              onStartExam={startNewExam}
              onStartCategoryExam={startCategoryExam}
              onOpenBank={() => setCurrentView('bank')}
              onOpenSigns={() => setCurrentView('signs')}
              onOpenRevision={() => setCurrentView('revision_notes')}
              totalQuestions={QUESTIONS_BANK.length}
              completedTests={totalCompleted}
              averageScore={averageScore}
              difficulty={difficulty}
              onDifficultyChange={setDifficulty}
            />
          )}

          {currentView === 'quiz' && (
            <>
              {activeExamResult ? (
                <ExamResultView
                  result={activeExamResult}
                  allQuestions={QUESTIONS_BANK}
                  language={language}
                  onRestartSameExam={restartSameExam}
                  onNewExam={startNewExam}
                  onGoHome={() => setCurrentView('home')}
                  onOpenBank={() => setCurrentView('bank')}
                />
              ) : (
                <QuizView
                  questions={activeQuizQuestions.length > 0 ? activeQuizQuestions : getRandomExamQuestions(20)}
                  language={language}
                  onFinishExam={handleFinishExam}
                  onExit={() => setCurrentView('home')}
                  modeTitle={quizModeTitle}
                  isTimed={true}
                  difficulty={difficulty}
                />
              )}
            </>
          )}

          {currentView === 'bank' && (
            <QuestionBankView
              questions={QUESTIONS_BANK}
              language={language}
              onStartExamWithQuestions={startCustomExam}
            />
          )}

          {currentView === 'signs' && (
            <RoadSignsView language={language} />
          )}

          {currentView === 'revision_notes' && (
            <RevisionGuideView language={language} />
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full mt-12 pt-6 pb-6 border-t border-[#E5E2D9] text-xs text-[#8B8678] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-center sm:text-left">
          <p className="font-bold text-[#2D2D2D]">
            Provisoire RW © 2026 — Built by Kagabo Lucky. All rights reserved.
          </p>
          <span className="hidden sm:inline text-[#E5E2D9]">•</span>
          <p className="text-[#8B8678]">
            Iteka rya Perezida N° 85/01 (Rwanda Traffic Police Regulations)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#E9EDC9] text-[#4A6741] font-bold text-xs px-3 py-1 rounded-full border border-[#CCD5AE]">
            400 Questions Bank • 100% Free
          </span>
        </div>
      </footer>
    </div>
  );
}
