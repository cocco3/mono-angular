import { Injectable, signal, type TemplateRef } from '@angular/core';
import { type Milliseconds, uniqueId } from '@cocco3/utils';
import { type UiAlertKind } from '../alert/alert.component';
import { injectToastConfig } from './ToastConfig';

export type UiToastOptions = {
  dismissible?: boolean;
  duration?: Milliseconds;
  heading?: string;
  id?: string;
  kind: UiAlertKind;
};

type ToastBase = {
  dismissible: boolean;
  duration?: Milliseconds;
  heading?: string;
  id: string;
  kind: UiAlertKind;
};

type UiToastMessage = ToastBase & {
  type: 'message';
  message: string;
};

type UiToastTemplate = ToastBase & {
  type: 'template';
  template: TemplateRef<unknown>;
};

type UiToast = UiToastMessage | UiToastTemplate;

@Injectable({
  providedIn: 'root',
})
export class UiToastService {
  private readonly toastConfig = injectToastConfig();

  private toasts = signal<UiToast[]>([]);
  readonly activeToasts = this.toasts.asReadonly();

  private timeoutMap = new Map<string, ReturnType<typeof setTimeout>>();

  /**
   * If no delay is supplied, success messages get an auto dismiss
   */
  private setupAutoDismiss(toast: UiToast, duration?: number) {
    const autoDismissDelay =
      duration ??
      (toast.kind === 'positive' ? this.toastConfig.duration : duration);

    if (autoDismissDelay) {
      const timeout = setTimeout(
        () => this.dismiss(toast.id),
        autoDismissDelay
      );
      this.timeoutMap.set(toast.id, timeout);
    }
  }

  /**
   * Show a toast with a simple string message.
   */
  showMessage(message: string, options: UiToastOptions) {
    const toast: UiToastMessage = {
      dismissible: options.dismissible ?? this.toastConfig.dismissible,
      duration: options.duration,
      heading: options.heading,
      id: options.id || uniqueId(),
      kind: options.kind,
      type: 'message',
      message,
    };

    this.setupAutoDismiss(toast, options.duration);

    this.toasts.update((list) => [...list, toast]);
  }

  /**
   * Show a toast with a custom template.
   */
  showTemplate(template: TemplateRef<unknown>, options: UiToastOptions) {
    const toast: UiToastTemplate = {
      dismissible: options.dismissible ?? this.toastConfig.dismissible,
      duration: options.duration,
      heading: options.heading,
      id: options.id || uniqueId(),
      kind: options.kind,
      type: 'template',
      template,
    };

    this.setupAutoDismiss(toast, options.duration);

    this.toasts.update((list) => [...list, toast]);
  }

  /**
   * Dismiss a toast by ID.
   */
  dismiss(id: string) {
    this.toasts.update((list) => list.filter((toast) => toast.id !== id));

    if (this.timeoutMap.has(id)) {
      clearTimeout(this.timeoutMap.get(id));
      this.timeoutMap.delete(id);
    }
  }

  /**
   * Clear all toasts.
   */
  clearAll() {
    this.toasts.set([]);
  }
}
