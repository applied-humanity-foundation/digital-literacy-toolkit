import { Module } from '../types';
import { getProgress } from '../utils/storage';

export class LearningPath {
  private container: HTMLElement;
  private modules: Module[];

  constructor(modules: Module[]) {
    this.modules = modules;
    this.container = document.createElement('div');
    this.container.className = 'learning-path';
    this.render();
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="learning-path__title">Recommended Learning Path</div>
      <div class="learning-path__timeline">
        ${this.modules.map((mod, index) => {
          const progress = getProgress(mod.id);
          const isComplete = progress && progress.completedQuestions === progress.totalQuestions;
          return `
            <div class="learning-path__node ${isComplete ? 'learning-path__node--complete' : ''}">
              <div class="learning-path__connector ${index === 0 ? 'learning-path__connector--hidden' : ''}"></div>
              <div class="learning-path__dot">
                ${isComplete ? '✓' : index + 1}
              </div>
              <div class="learning-path__info">
                <span class="learning-path__name">${mod.title}</span>
                <span class="learning-path__difficulty badge badge--${mod.difficulty}">${mod.difficulty}</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  update(): void {
    this.render();
  }

  mount(parent: HTMLElement): void {
    parent.appendChild(this.container);
  }
}
