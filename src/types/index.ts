export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'beginner' | 'intermediate';
  sections: Section[];
  quiz: Question[];
}

export interface Section {
  title: string;
  content: string;
}

export interface Question {
  text: string;
  options: string[];
  correctIndex: number;
}

export interface QuizResult {
  moduleId: string;
  totalQuestions: number;
  correctAnswers: number;
  completedAt: string;
}

export interface ModuleProgress {
  completedQuestions: number;
  totalQuestions: number;
  score: number;
  completedAt: string;
}

export type Locale = 'en' | 'zh';

export interface TranslationStrings {
  [key: string]: string;
}

export interface AppConfig {
  locale: Locale;
  theme: 'dark' | 'light';
  particlesEnabled: boolean;
  analyticsEnabled: boolean;
}
