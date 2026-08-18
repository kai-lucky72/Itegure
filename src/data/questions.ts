import { Question, QuestionCategory } from '../types';
import { QUESTIONS_PART1 } from './questionsPart1';
import { QUESTIONS_PART2 } from './questionsPart2';
import { QUESTIONS_PART3 } from './questionsPart3';
import { QUESTIONS_PART4 } from './questionsPart4';
import { QUESTIONS_PART5 } from './questionsPart5';
import { QUESTIONS_PART6 } from './questionsPart6';
import { QUESTIONS_PART7 } from './questionsPart7';
import { QUESTIONS_PART8 } from './questionsPart8';

// 400 Comprehensive, Authentic Static Questions for Rwandan Provisional Driving License
export const QUESTIONS_BANK: Question[] = [
  ...QUESTIONS_PART1,
  ...QUESTIONS_PART2,
  ...QUESTIONS_PART3,
  ...QUESTIONS_PART4,
  ...QUESTIONS_PART5,
  ...QUESTIONS_PART6,
  ...QUESTIONS_PART7,
  ...QUESTIONS_PART8,
];

// Helper to get 20 randomized questions for a mock exam session
export function getRandomExamQuestions(count: number = 20): Question[] {
  const shuffled = [...QUESTIONS_BANK].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, QUESTIONS_BANK.length));
}

// Helper to filter by category
export function getQuestionsByCategory(category: QuestionCategory): Question[] {
  return QUESTIONS_BANK.filter(q => q.category === category);
}

// Helper to search questions by text keyword
export function searchQuestions(query: string, lang: 'rw' | 'en' | 'fr' = 'rw'): Question[] {
  const clean = query.toLowerCase().trim();
  if (!clean) return QUESTIONS_BANK;
  return QUESTIONS_BANK.filter(q => {
    const questionText = q.question[lang]?.toLowerCase() || '';
    const explanationText = q.explanation[lang]?.toLowerCase() || '';
    const optionsText = q.options[lang]?.join(' ').toLowerCase() || '';
    return questionText.includes(clean) || explanationText.includes(clean) || optionsText.includes(clean);
  });
}
