import { Component, computed, input } from '@angular/core';

export const UiLoadingSizes = ['xsmall', 'small', 'medium', 'large'] as const;
export type UiLoadingSize = (typeof UiLoadingSizes)[number];

@Component({
  host: {
    '[class]': 'cssClass()',
  },
  selector: 'ui-loading',
  styleUrls: ['./loading.css'],
  templateUrl: './loading.html',
})
export class UiLoadingComponent {
  label = input<string>();
  size = input.required<UiLoadingSize>();

  protected cssClass = computed(() => ({
    [`size-${this.size()}`]: !!this.size(),
  }));
}
