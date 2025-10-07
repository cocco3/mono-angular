import { Component, input } from '@angular/core';

export const UiItemGridRepeatOptions = ['auto-fill', 'auto-fit'] as const;
export type UiItemGridRepeat = (typeof UiItemGridRepeatOptions)[number];

@Component({
  host: {
    '[style.--grid-gap]': 'gap()',
    '[style.--min-item-width]': 'minItemWidth()',
    '[style.--grid-auto-repeat]': 'repeatCount()',
  },
  selector: 'ui-item-grid',
  styleUrl: './item-grid.css',
  template: '<ng-content />',
})
export class UiItemGridComponent {
  /** Any valid CSS size value. */
  gap = input.required<string>();

  /** Any valid CSS size value. */
  minItemWidth = input.required<string>();

  /**
   * **auto-fill**: Fills the row with as many columns as it can fit, so there may be empty columns that occupy space.
   *
   * **auto-fit**: Fits the currently available columns by expanding them so that they take up any available space, and collapses empty ones.
   */
  repeatCount = input<UiItemGridRepeat>('auto-fill');
}
