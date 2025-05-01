import { Component, computed, input } from '@angular/core';

export const UiAlertKinds = ['default', 'error', 'warning', 'success'] as const;
export type UiAlertKind = (typeof UiAlertKinds)[number];

@Component({
  host: {
    '[class]': 'cssClass()',
  },
  selector: 'ui-alert',
  styleUrl: './alert.css',
  templateUrl: './alert.html',
})
export class UiAlertComponent {
  kind = input.required<UiAlertKind>();

  protected cssClass = computed(() => ({
    [`kind-${this.kind()}`]: !!this.kind(),
  }));
}
