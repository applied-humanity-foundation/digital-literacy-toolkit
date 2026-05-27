import { Locale, TranslationStrings } from '../types';

const translations: Record<Locale, TranslationStrings> = {
  en: {
    'nav.modules': 'Modules',
    'nav.features': 'Features',
    'nav.about': 'About',
    'hero.title': 'Digital Literacy for Everyone',
    'hero.subtitle': 'Free, interactive learning modules for essential digital skills',
    'hero.cta': 'Start Learning',
    'modules.title': 'Learning Modules',
    'modules.search': 'Search modules...',
    'modules.all': 'All',
    'modules.beginner': 'Beginner',
    'modules.intermediate': 'Intermediate',
    'modules.start': 'Start',
    'modules.review': 'Review',
    'quiz.next': 'Next',
    'quiz.prev': 'Previous',
    'quiz.submit': 'Submit',
    'quiz.close': 'Close',
    'quiz.score': 'Your Score',
    'progress.title': 'Your Progress',
    'progress.completed': 'completed',
    'footer.built': 'Built with care by',
    'footer.foundation': 'Applied Humanity Foundation',
  },
  zh: {
    'nav.modules': '学习模块',
    'nav.features': '功能特性',
    'nav.about': '关于我们',
    'hero.title': '人人都能掌握的数字素养',
    'hero.subtitle': '免费的交互式学习模块，掌握必备数字技能',
    'hero.cta': '开始学习',
    'modules.title': '学习模块',
    'modules.search': '搜索模块...',
    'modules.all': '全部',
    'modules.beginner': '入门',
    'modules.intermediate': '进阶',
    'modules.start': '开始',
    'modules.review': '复习',
    'quiz.next': '下一题',
    'quiz.prev': '上一题',
    'quiz.submit': '提交',
    'quiz.close': '关闭',
    'quiz.score': '你的得分',
    'progress.title': '学习进度',
    'progress.completed': '已完成',
    'footer.built': '用心打造 ——',
    'footer.foundation': 'Applied Humanity Foundation',
  },
};

let currentLocale: Locale = 'en';

export function setLocale(locale: Locale): void {
  currentLocale = locale;
  localStorage.setItem('dlt-locale', locale);
}

export function getLocale(): Locale {
  const saved = localStorage.getItem('dlt-locale') as Locale | null;
  return saved ?? (navigator.language.startsWith('zh') ? 'zh' : 'en');
}

export function t(key: string): string {
  return translations[currentLocale]?.[key] ?? translations['en']?.[key] ?? key;
}

export function initI18n(): void {
  currentLocale = getLocale();
}
