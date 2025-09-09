import { Component, computed, input } from '@angular/core';
import { clamp } from '@cocco3/utils';

export const UiProgressBarKinds = [
  'neutral',
  'negative',
  'warning',
  'positive',
  'info',
] as const;
export type UiProgressBarKind = (typeof UiProgressBarKinds)[number];

export const UiProgressBarSizes = ['small', 'medium', 'large'] as const;
export type UiProgressBarSize = (typeof UiProgressBarSizes)[number];

export const UiProgressBarCorners = ['sharp', 'rounded', 'pill'] as const;
export type UiProgressBarCorner = (typeof UiProgressBarCorners)[number];

@Component({
  host: {
    '[class]': 'cssClass()',
    role: 'progressbar',
    'aria-valuemin': '0',
    '[attr.aria-valuemax]': 'max()',
    '[attr.aria-valuenow]': 'ariaValueNow()',
    '[attr.aria-valuetext]': 'ariaValueText()',
    '[style.--_progress-width]':
      'isIndeterminate() ? undefined : fillPercent()',
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

  /** Number between 0 and max. If no value, will be considered indeterminate. */
  value = input<number>();

  /** Color/hierachy of the fill color. */
  kind = input<UiProgressBarKind>('neutral');

  /** How rounded the corners should be. */
  corners = input<UiProgressBarCorner>('rounded');

  /** Height of the bar. */
  size = input.required<UiProgressBarSize>();

  /** Optional. Label used for screen readers. Defaults to percentage for determinate, or "Loading" for indeterminate.  */
  label = input<string>();

  protected isIndeterminate = computed(() => this.value() === undefined);

  protected ariaValueNow = computed(() => {
    return this.isIndeterminate() ? undefined : this.clampedValue();
  });

  protected ariaValueText = computed(() => {
    const hasCustomLabel = !!this.label();
    const defaultLabel = this.isIndeterminate()
      ? 'Loading'
      : this.fillPercent();
    return hasCustomLabel ? this.label() : defaultLabel;
  });

  protected clampedValue = computed(() => {
    return clamp(0, this.value() || 0, this.max());
  });

  private fillRatio = computed(() => {
    return this.clampedValue() / this.max();
  });

  protected fillPercent = computed(() => {
    return `${this.fillRatio() * 100}%`;
  });

  protected cssClass = computed(() => ({
    ['indeterminate']: this.isIndeterminate(),
    [`kind-${this.kind()}`]: !!this.kind(),
    [`corners-${this.corners()}`]: !!this.corners(),
    [`size-${this.size()}`]: !!this.size(),
  }));
}
