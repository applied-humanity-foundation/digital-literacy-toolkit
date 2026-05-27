import type { Module, UserProgress, AppConfig } from './types';
import { modules } from './modules';
import { ModuleCard } from './components/ModuleCard';
import { QuizModal } from './components/QuizModal';
import { SearchFilter } from './components/SearchFilter';
import { ProgressBar } from './components/ProgressBar';
import { LearningPath } from './components/LearningPath';
import { ParticleBackground } from './components/ParticleBackground';
import { StorageManager } from './utils/storage';
import { Analytics } from './utils/analytics';
import { I18n } from './utils/i18n';

export class App {
  private root: HTMLElement | null = null;
  private config: AppConfig = { locale: 'en', theme: 'dark', particlesEnabled: true };
  private storage = new StorageManager();
  private analytics = new Analytics();
  private i18n = new I18n();
  private quizModal: QuizModal | null = null;
  private particles: ParticleBackground | null = null;
  private filteredModules: Module[] = [...modules];

  mount(root: HTMLElement): void {
    this.root = root;
    this.loadConfig();
    this.i18n.setLocale(this.config.locale);
    this.render();
    this.analytics.trackEvent('app_loaded', { locale: this.config.locale });
  }

  private loadConfig(): void {
    const saved = this.storage.getItem<AppConfig>('app_config');
    if (saved) {
      this.config = { ...this.config, ...saved };
    }
  }

  private render(): void {
    if (!this.root) {
      return;
    }

    this.root.innerHTML = '';
    this.root.className = `app theme-${this.config.theme}`;

    if (this.config.particlesEnabled) {
      this.particles = new ParticleBackground(this.root);
    }

    const header = this.createHeader();
    const main = document.createElement('main');
    main.className = 'main-content';

    const searchFilter = new SearchFilter((query, category) => {
      this.filterModules(query, category);
    });
    main.appendChild(searchFilter.render());

    const overallProgress = this.calculateOverallProgress();
    const progressBar = new ProgressBar(overallProgress, modules.length, this.i18n.t('progress'));
    main.appendChild(progressBar.render());

    const learningPath = new LearningPath(modules, this.storage);
    main.appendChild(learningPath.render());

    const grid = document.createElement('div');
    grid.className = 'module-grid';
    this.renderModuleCards(grid);
    main.appendChild(grid);

    this.root.appendChild(header);
    this.root.appendChild(main);
  }

  private createHeader(): HTMLElement {
    const header = document.createElement('header');
    header.className = 'app-header';
    header.innerHTML = `
      <div class="header-content">
        <h1>${this.i18n.t('appTitle')}</h1>
        <p class="subtitle">${this.i18n.t('appSubtitle')}</p>
      </div>
    `;
    return header;
  }

  private renderModuleCards(container: HTMLElement): void {
    container.innerHTML = '';
    for (const mod of this.filteredModules) {
      const progress = this.storage.getProgress(mod.id);
      const card = new ModuleCard(mod, progress, (m) => this.openModule(m));
      container.appendChild(card.render());
    }
  }

  private filterModules(query: string, category: string): void {
    const q = query.toLowerCase().trim();
    this.filteredModules = modules.filter((m) => {
      const matchesQuery = !q || m.title.toLowerCase().includes(q) || m.description.toLowerCase().includes(q);
      const matchesCategory = !category || category === 'all' || m.category === category;
      return matchesQuery && matchesCategory;
    });
    const grid = this.root?.querySelector('.module-grid');
    if (grid instanceof HTMLElement) {
      this.renderModuleCards(grid);
    }
  }

  private openModule(mod: Module): void {
    this.analytics.trackEvent('module_opened', { moduleId: mod.id });
    this.quizModal = new QuizModal(mod, this.storage, this.analytics, this.i18n, () => {
      this.quizModal?.destroy();
      this.quizModal = null;
      this.render();
    });
    this.quizModal.show();
  }

  private calculateOverallProgress(): number {
    return modules.reduce((count, m) => {
      const p = this.storage.getProgress(m.id);
      return count + (p?.completed ? 1 : 0);
    }, 0);
  }

  destroy(): void {
    this.particles?.destroy();
    this.quizModal?.destroy();
    if (this.root) {
      this.root.innerHTML = '';
    }
  }
}
