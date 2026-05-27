import { Module, Question, QuizResult } from '../types';
import { saveProgress, getProgress } from '../utils/storage';

export class QuizModal {
  private overlay: HTMLElement;
  private currentQuestion: number = 0;
  private answers: Map<number, number> = new Map();
  private module: Module;
  private onClose: () => void;

  constructor(module: Module, onClose: () => void) {
    this.module = module;
    this.onClose = onClose;
    this.overlay = this.createOverlay();
  }

  private createOverlay(): HTMLElement {
    const overlay = document.createElement('div');
    overlay.className = 'quiz-overlay';
    overlay.innerHTML = `
      <div class="quiz-modal">
        <button class="quiz-modal__close">&times;</button>
        <div class="quiz-modal__header">
          <h2>${this.module.title}</h2>
          <div class="quiz-modal__progress">
            <span class="quiz-modal__step">Question 1 of ${this.module.quiz.length}</span>
            <div class="progress-bar"><div class="progress-bar__fill" style="width: 0%"></div></div>
          </div>
        </div>
        <div class="quiz-modal__body"></div>
        <div class="quiz-modal__footer">
          <button class="btn btn--secondary quiz-prev" disabled>Previous</button>
          <button class="btn btn--primary quiz-next">Next</button>
        </div>
      </div>
    `;

    overlay.querySelector('.quiz-modal__close')!.addEventListener('click', () => this.close());
    overlay.querySelector('.quiz-prev')!.addEventListener('click', () => this.prev());
    overlay.querySelector('.quiz-next')!.addEventListener('click', () => this.next());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.close();
    });

    return overlay;
  }

  private renderQuestion(): void {
    const question = this.module.quiz[this.currentQuestion];
    const body = this.overlay.querySelector('.quiz-modal__body')!;
    const selected = this.answers.get(this.currentQuestion);

    body.innerHTML = `
      <div class="quiz-question">
        <p class="quiz-question__text">${question.text}</p>
        <div class="quiz-question__options">
          ${question.options.map((opt, i) => `
            <button class="quiz-option ${selected === i ? 'quiz-option--selected' : ''}" data-index="${i}">
              <span class="quiz-option__marker">${String.fromCharCode(65 + i)}</span>
              <span class="quiz-option__text">${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    body.querySelectorAll('.quiz-option').forEach((btn) => {
      btn.addEventListener('click', () => {
        const index = parseInt((btn as HTMLElement).dataset.index!);
        this.answers.set(this.currentQuestion, index);
        this.renderQuestion();
      });
    });

    const step = this.overlay.querySelector('.quiz-modal__step')!;
    step.textContent = `Question ${this.currentQuestion + 1} of ${this.module.quiz.length}`;

    const fill = this.overlay.querySelector('.progress-bar__fill') as HTMLElement;
    fill.style.width = `${((this.currentQuestion + 1) / this.module.quiz.length) * 100}%`;

    const prevBtn = this.overlay.querySelector('.quiz-prev') as HTMLButtonElement;
    const nextBtn = this.overlay.querySelector('.quiz-next') as HTMLButtonElement;
    prevBtn.disabled = this.currentQuestion === 0;
    nextBtn.textContent = this.currentQuestion === this.module.quiz.length - 1 ? 'Submit' : 'Next';
  }

  private next(): void {
    if (this.currentQuestion === this.module.quiz.length - 1) {
      this.submit();
    } else {
      this.currentQuestion++;
      this.renderQuestion();
    }
  }

  private prev(): void {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      this.renderQuestion();
    }
  }

  private submit(): void {
    const results: QuizResult = {
      moduleId: this.module.id,
      totalQuestions: this.module.quiz.length,
      correctAnswers: 0,
      completedAt: new Date().toISOString(),
    };

    this.module.quiz.forEach((q, i) => {
      if (this.answers.get(i) === q.correctIndex) {
        results.correctAnswers++;
      }
    });

    saveProgress(this.module.id, {
      completedQuestions: results.totalQuestions,
      totalQuestions: results.totalQuestions,
      score: results.correctAnswers,
      completedAt: results.completedAt,
    });

    this.showResults(results);
  }

  private showResults(results: QuizResult): void {
    const body = this.overlay.querySelector('.quiz-modal__body')!;
    const percent = Math.round((results.correctAnswers / results.totalQuestions) * 100);

    body.innerHTML = `
      <div class="quiz-results">
        <div class="quiz-results__score">${percent}%</div>
        <p class="quiz-results__text">
          You got ${results.correctAnswers} out of ${results.totalQuestions} correct!
        </p>
        <p class="quiz-results__message">
          ${percent >= 70 ? 'Great job! Module completed.' : 'Keep practicing — you can retake this quiz anytime.'}
        </p>
      </div>
    `;

    const footer = this.overlay.querySelector('.quiz-modal__footer')!;
    footer.innerHTML = `<button class="btn btn--primary quiz-close">Close</button>`;
    footer.querySelector('.quiz-close')!.addEventListener('click', () => this.close());
  }

  open(): void {
    this.currentQuestion = 0;
    this.answers.clear();
    document.body.appendChild(this.overlay);
    this.renderQuestion();
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.overlay.remove();
    document.body.style.overflow = '';
    this.onClose();
  }
}
