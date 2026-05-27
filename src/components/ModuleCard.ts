import { Module } from '../types';
import { getProgress } from '../utils/storage';

export class ModuleCard {
  private element: HTMLElement;
  private module: Module;
  private onSelect: (module: Module) => void;

  constructor(module: Module, onSelect: (module: Module) => void) {
    this.module = module;
    this.onSelect = onSelect;
    this.element = this.create();
  }

  private create(): HTMLElement {
    const card = document.createElement('div');
    card.className = 'module-card';
    card.dataset.moduleId = this.module.id;
    card.dataset.difficulty = this.module.difficulty;

    const progress = getProgress(this.module.id);
    const completionPercent = progress ? Math.round((progress.completedQuestions / progress.totalQuestions) * 100) : 0;

    card.innerHTML = `
      <div class="module-card__icon">${this.module.icon}</div>
      <div class="module-card__content">
        <h3 class="module-card__title">${this.module.title}</h3>
        <p class="module-card__description">${this.module.description}</p>
        <div class="module-card__meta">
          <span class="badge badge--${this.module.difficulty}">${this.module.difficulty}</span>
          <span class="module-card__lessons">${this.module.sections.length} lessons</span>
        </div>
      </div>
      <div class="module-card__progress">
        <div class="progress-bar">
          <div class="progress-bar__fill" style="width: ${completionPercent}%"></div>
        </div>
        <span class="progress-bar__label">${completionPercent}%</span>
      </div>
      <button class="module-card__btn">${completionPercent === 100 ? 'Review' : 'Start'}</button>
    `;

    card.addEventListener('click', () => this.onSelect(this.module));
    return card;
  }

  mount(container: HTMLElement): void {
    container.appendChild(this.element);
  }

  update(): void {
    const progress = getProgress(this.module.id);
    const percent = progress ? Math.round((progress.completedQuestions / progress.totalQuestions) * 100) : 0;
    const fill = this.element.querySelector('.progress-bar__fill') as HTMLElement;
    const label = this.element.querySelector('.progress-bar__label') as HTMLElement;
    const btn = this.element.querySelector('.module-card__btn') as HTMLElement;

    if (fill) fill.style.width = `${percent}%`;
    if (label) label.textContent = `${percent}%`;
    if (btn) btn.textContent = percent === 100 ? 'Review' : 'Start';
  }

  matches(query: string, difficulty?: string): boolean {
    const textMatch = !query ||
      this.module.title.toLowerCase().includes(query.toLowerCase()) ||
      this.module.description.toLowerCase().includes(query.toLowerCase());
    const difficultyMatch = !difficulty || difficulty === 'all' || this.module.difficulty === difficulty;
    return textMatch && difficultyMatch;
  }

  show(): void { this.element.style.display = ''; }
  hide(): void { this.element.style.display = 'none'; }
}
