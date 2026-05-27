export class ProgressBar {
  private container: HTMLElement;
  private fill: HTMLElement;
  private label: HTMLElement;
  private current: number;
  private max: number;

  constructor(current: number = 0, max: number = 100) {
    this.current = current;
    this.max = max;
    this.container = document.createElement('div');
    this.container.className = 'progress-bar-component';

    this.fill = document.createElement('div');
    this.fill.className = 'progress-bar-component__fill';

    this.label = document.createElement('span');
    this.label.className = 'progress-bar-component__label';

    const track = document.createElement('div');
    track.className = 'progress-bar-component__track';
    track.appendChild(this.fill);

    this.container.appendChild(track);
    this.container.appendChild(this.label);
    this.update(current, max);
  }

  update(current: number, max: number): void {
    this.current = Math.min(current, max);
    this.max = max;
    const percent = max > 0 ? Math.round((this.current / this.max) * 100) : 0;
    this.fill.style.width = `${percent}%`;
    this.label.textContent = `${this.current} / ${this.max}`;
    this.fill.classList.toggle('progress-bar-component__fill--complete', percent === 100);
  }

  mount(parent: HTMLElement): void {
    parent.appendChild(this.container);
  }

  getElement(): HTMLElement {
    return this.container;
  }
}
