import { describe, it, expect, beforeEach } from 'vitest';
import { modules } from '../src/modules';

describe('Quiz Logic', () => {
  it('should have exactly 4 options per question', () => {
    modules.forEach((mod) => {
      mod.quiz.forEach((q) => {
        expect(q.options).toHaveLength(4);
      });
    });
  });

  it('should calculate score correctly', () => {
    const quiz = modules[0].quiz;
    const userAnswers = quiz.map((q) => q.correctIndex);
    const correct = quiz.filter((q, i) => userAnswers[i] === q.correctIndex).length;
    expect(correct).toBe(quiz.length);
  });

  it('should return 0 for all wrong answers', () => {
    const quiz = modules[0].quiz;
    const wrongAnswers = quiz.map((q) => (q.correctIndex + 1) % q.options.length);
    const correct = quiz.filter((q, i) => wrongAnswers[i] === q.correctIndex).length;
    expect(correct).toBe(0);
  });

  it('should have non-empty question text', () => {
    modules.forEach((mod) => {
      mod.quiz.forEach((q) => {
        expect(q.text.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it('should have non-empty options', () => {
    modules.forEach((mod) => {
      mod.quiz.forEach((q) => {
        q.options.forEach((opt) => {
          expect(opt.trim().length).toBeGreaterThan(0);
        });
      });
    });
  });
});
