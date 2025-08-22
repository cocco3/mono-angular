import { Component, computed, input } from '@angular/core';
import { clamp } from '@cocco3/utils';

export const UiProgressBarKinds = [
  'neutral',
  'info',
  'error',
  'warning',
  'success',
] as const;
export type UiProgressBarKind = (typeof UiProgressBarKinds)[number];

export const UiProgressBarSizes = ['small', 'medium', 'large'] as const;
export type UiProgressBarSize = (typeof UiProgressBarSizes)[number];

export const UiProgressBarShapes = ['round', 'square'] as const;
export type UiProgressBarShape = (typeof UiProgressBarShapes)[number];

@Component({
  host: {
    '[class]': 'cssClass()',
    role: 'progressbar',
    'aria-valuemin': '0',
    '[attr.aria-valuemax]': 'max()',
    '[attr.aria-valuenow]': 'clampedValue()',
    '[attr.aria-valuetext]': 'fillPercent()',
    '[style.--_progress-width]': 'fillPercent()',
    '[style.--_progress-segments]': 'segments()',
  },
  selector: 'ui-progress-bar',
  styleUrls: ['./progress-bar.css'],
  template: '',
})
export class UiProgressBarComponent {
  /** Divide the bar into segments. Defaults to 1 for a normal progress bar. */
  segments = input<number>(1);

  /** The maximum value. Defaults to 100. */
  max = input<number>(100);

  /** Number between 0 and max. */
  value = input.required<number>();

  /** Color/hierachy of the fill color. */
  kind = input<UiProgressBarKind>('neutral');

  /** Rounded or squared edges. */
  shape = input<UiProgressBarShape>('round');

  /** Height of the bar. */
  size = input.required<UiProgressBarSize>();

  protected clampedValue = computed(() => {
    const min = 0;
    return clamp(min, this.value(), this.max());
  });

  private fillRatio = computed(() => {
    return this.clampedValue() / this.max();
  });

  protected fillPercent = computed(() => {
    return `${this.fillRatio() * 100}%`;
  });

  protected cssClass = computed(() => ({
    [`kind-${this.kind()}`]: !!this.kind(),
    [`shape-${this.shape()}`]: !!this.shape(),
    [`size-${this.size()}`]: !!this.size(),
  }));
}
