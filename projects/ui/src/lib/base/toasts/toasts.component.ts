import { Component, computed, inject, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { UiToastService } from './ToastService';
import { UiAlertComponent } from '../alert/alert.component';

export const UiToastPlacements = [
  'top-start',
  'top-center',
  'top-end',
  'bottom-start',
  'bottom-center',
  'bottom-end',
] as const;
export type UiToastPlacement = (typeof UiToastPlacements)[number];

/**
 * Application-level popup notifications to display brief messages.
 */
@Component({
  host: {
    '[class]': 'cssClass()',
    '[style.--_toast-offset]': 'offset()',
  },
  imports: [NgTemplateOutlet, UiAlertComponent],
  selector: 'ui-toasts',
  styleUrl: './toasts.css',
  templateUrl: './toasts.html',
})
export class UiToastsComponent {
  private readonly toastService = inject(UiToastService);

  protected activeToasts = this.toastService.activeToasts;

  /** Alignment and justification of toast messages. */
  placement = input.required<UiToastPlacement>();

  /** Offset from edge of screen. */
  offset = input<string>('24px');

  protected handleDismissClick(id: string) {
    this.toastService.dismiss(id);
  }

  protected cssClass = computed(() => ({
    [`align-top`]: this.placement().includes('top'),
    [`align-bottom`]: this.placement().includes('bottom'),
    [`justify-start`]: this.placement().includes('start'),
    [`justify-center`]: this.placement().includes('center'),
    [`justify-end`]: this.placement().includes('end'),
  }));
}
