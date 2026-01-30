import { Component, computed, input } from '@angular/core';

export const UiLoadingSizes = ['xsmall', 'small', 'medium', 'large'] as const;
export type UiLoadingSize = (typeof UiLoadingSizes)[number];

export const UiLoadingDirections = ['row', 'column'] as const;
export type UiLoadingDirection = (typeof UiLoadingDirections)[number];

@Component({
  host: {
    '[class]': 'cssClass()',
  },
  selector: 'ui-loading',
  styleUrl: './loading.css',
  templateUrl: './loading.html',
})
export class UiLoadingComponent {
  dir = input<UiLoadingDirection>('column');
  label = input<string>();
  size = input.required<UiLoadingSize>();

  protected cssClass = computed(() => ({
    [`dir-${this.dir()}`]: !!this.dir(),
    [`size-${this.size()}`]: !!this.size(),
  }));
}
