import { describe, it, expect } from 'vitest';
import { modules, getModuleById, getModulesByDifficulty } from '../src/modules';

describe('Module Registry', () => {
  it('should have exactly 6 modules', () => {
    expect(modules).toHaveLength(6);
  });

  it('should have unique IDs for all modules', () => {
    const ids = modules.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('should have valid difficulty levels', () => {
    modules.forEach((mod) => {
      expect(['beginner', 'intermediate']).toContain(mod.difficulty);
    });
  });

  it('should have at least 3 quiz questions per module', () => {
    modules.forEach((mod) => {
      expect(mod.quiz.length).toBeGreaterThanOrEqual(3);
    });
  });

  it('should have valid correct answer indices', () => {
    modules.forEach((mod) => {
      mod.quiz.forEach((q) => {
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThan(q.options.length);
      });
    });
  });

  it('should find a module by ID', () => {
    const mod = getModuleById('computer-basics');
    expect(mod).toBeDefined();
    expect(mod!.title).toBe('Computer Basics');
  });

  it('should return undefined for unknown ID', () => {
    expect(getModuleById('nonexistent')).toBeUndefined();
  });

  it('should filter modules by difficulty', () => {
    const beginner = getModulesByDifficulty('beginner');
    beginner.forEach((m) => expect(m.difficulty).toBe('beginner'));
  });

  it('should have non-empty content in all sections', () => {
    modules.forEach((mod) => {
      expect(mod.sections.length).toBeGreaterThan(0);
      mod.sections.forEach((s) => {
        expect(s.title.length).toBeGreaterThan(0);
        expect(s.content.length).toBeGreaterThan(0);
      });
    });
  });
});
