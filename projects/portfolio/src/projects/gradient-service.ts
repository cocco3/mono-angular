import { Injectable } from '@angular/core';

/**
 * Cycles through a predefined list of CSS gradients, restarting when exhausted.
 *
 * Provided in a parent component to scope gradient state locally.
 *
 * @example
 *
 * ```ts
 * @Component({ providers: [GradientService] })
 * export class ParentComponent {}
 *
 * @Component()
 * export class ChildComponent {
 *   private readonly gradients = inject(GradientService);
 *   gradient = this.gradients.next();
 * }
 * ```
 */
@Injectable()
export class GradientService {
  private readonly gradients = [
    'linear-gradient(120deg, #6d92a1, #c2b49a)',
    'linear-gradient(75deg, #a1686d, #b8a58f)',
    'linear-gradient(200deg, #5f799d, #a4b4c0)',
    'linear-gradient(145deg, #7d6570, #b3a27a)',
    'linear-gradient(180deg, #48669c, #8fa88b)',
    'linear-gradient(220deg, #866597, #b9a7b1)',
  ];

  private available: string[] = [...this.gradients];
  private used: string[] = [];

  public next() {
    if (this.available.length === 0) {
      // Cycle complete: reset
      this.available = [...this.used];
      this.used = [];
    }

    const next = this.available.shift()!;
    this.used.push(next);
    return next;
  }

  public reset() {
    this.available = [...this.gradients];
    this.used = [];
  }
}
