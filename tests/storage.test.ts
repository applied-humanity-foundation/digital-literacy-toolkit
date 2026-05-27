import { describe, it, expect, beforeEach } from 'vitest';
import { getProgress, saveProgress, getCompletedCount, clearAllProgress } from '../src/utils/storage';

describe('Storage Utils', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return null for unknown module', () => {
    expect(getProgress('nonexistent')).toBeNull();
  });

  it('should save and retrieve progress', () => {
    saveProgress('test-module', {
      completedQuestions: 3,
      totalQuestions: 5,
      score: 3,
      completedAt: '2026-01-01T00:00:00Z',
    });
    const progress = getProgress('test-module');
    expect(progress).not.toBeNull();
    expect(progress!.completedQuestions).toBe(3);
    expect(progress!.score).toBe(3);
  });

  it('should count completed modules', () => {
    saveProgress('mod-1', { completedQuestions: 3, totalQuestions: 3, score: 3, completedAt: '' });
    saveProgress('mod-2', { completedQuestions: 1, totalQuestions: 3, score: 1, completedAt: '' });
    saveProgress('mod-3', { completedQuestions: 5, totalQuestions: 5, score: 4, completedAt: '' });
    expect(getCompletedCount()).toBe(2);
  });

  it('should clear all progress', () => {
    saveProgress('mod-1', { completedQuestions: 3, totalQuestions: 3, score: 3, completedAt: '' });
    clearAllProgress();
    expect(getProgress('mod-1')).toBeNull();
  });
});
