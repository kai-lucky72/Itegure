export type Language = 'rw' | 'en' | 'fr';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type QuestionCategory =
  | 'definitions'
  | 'priority'
  | 'signs'
  | 'speed'
  | 'lights'
  | 'overtaking'
  | 'towing'
  | 'technical'
  | 'penalties'
  | 'parking';

export interface LocalizedText {
  rw: string;
  en: string;
  fr: string;
}

export interface Question {
  id: number;
  category: QuestionCategory;
  question: LocalizedText;
  options: {
    rw: string[];
    en: string[];
    fr: string[];
  };
  correctIndex: number;
  explanation: LocalizedText;
  articleRef?: string;
  signType?: string;
  signSvg?: string;
}

export interface ExamAnswer {
  questionId: number;
  selectedOptionIndex: number | null;
  isCorrect: boolean;
  timeSpentSeconds?: number;
}

export interface ExamResult {
  id: string;
  timestamp: number;
  mode: 'exam' | 'practice' | 'category' | 'mistakes';
  categoryFilter?: QuestionCategory;
  totalQuestions: number;
  score: number;
  passed: boolean;
  timeSpentSeconds: number;
  answers: ExamAnswer[];
}

export interface RoadSign {
  id: string;
  category: 'warning' | 'prohibition' | 'mandatory' | 'priority' | 'info' | 'markings';
  code: string;
  name: LocalizedText;
  description: LocalizedText;
  svgType: string;
}

export type ViewMode = 'home' | 'quiz' | 'bank' | 'signs' | 'revision_notes' | 'stats';
