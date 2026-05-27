export class SearchFilter {
  private container: HTMLElement;
  private input: HTMLInputElement;
  private buttons: HTMLButtonElement[] = [];
  private onFilter: (query: string, difficulty: string) => void;
  private activeDifficulty: string = 'all';

  constructor(onFilter: (query: string, difficulty: string) => void) {
    this.onFilter = onFilter;
    this.container = document.createElement('div');
    this.container.className = 'search-filter';

    this.input = document.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = 'Search modules...';
    this.input.className = 'search-filter__input';
    this.input.addEventListener('input', () => this.emit());

    const difficulties = ['all', 'beginner', 'intermediate'];
    const btnGroup = document.createElement('div');
    btnGroup.className = 'search-filter__buttons';

    difficulties.forEach((diff) => {
      const btn = document.createElement('button');
      btn.className = `search-filter__btn ${diff === 'all' ? 'search-filter__btn--active' : ''}`;
      btn.textContent = diff.charAt(0).toUpperCase() + diff.slice(1);
      btn.dataset.difficulty = diff;
      btn.addEventListener('click', () => {
        this.activeDifficulty = diff;
        this.buttons.forEach((b) => b.classList.remove('search-filter__btn--active'));
        btn.classList.add('search-filter__btn--active');
        this.emit();
      });
      this.buttons.push(btn);
      btnGroup.appendChild(btn);
    });

    this.container.appendChild(this.input);
    this.container.appendChild(btnGroup);
  }

  private emit(): void {
    this.onFilter(this.input.value.trim(), this.activeDifficulty);
  }

  mount(parent: HTMLElement): void {
    parent.appendChild(this.container);
  }

  reset(): void {
    this.input.value = '';
    this.activeDifficulty = 'all';
    this.buttons.forEach((b) => b.classList.remove('search-filter__btn--active'));
    this.buttons[0]?.classList.add('search-filter__btn--active');
    this.emit();
  }
}
