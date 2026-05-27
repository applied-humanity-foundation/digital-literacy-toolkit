import { ModuleProgress } from '../types';

const STORAGE_KEY = 'dlt-progress';

function getAllProgress(): Record<string, ModuleProgress> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getProgress(moduleId: string): ModuleProgress | null {
  const all = getAllProgress();
  return all[moduleId] ?? null;
}

export function saveProgress(moduleId: string, progress: ModuleProgress): void {
  const all = getAllProgress();
  all[moduleId] = progress;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch (e) {
    console.warn('Failed to save progress:', e);
  }
}

export function getCompletedCount(): number {
  const all = getAllProgress();
  return Object.values(all).filter((p) => p.completedQuestions === p.totalQuestions).length;
}

export function clearAllProgress(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function exportProgress(): string {
  return JSON.stringify(getAllProgress(), null, 2);
}

export function importProgress(json: string): boolean {
  try {
    const data = JSON.parse(json);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}
