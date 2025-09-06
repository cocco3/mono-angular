import { Injectable, signal, type TemplateRef } from '@angular/core';
import { uniqueId } from '@cocco3/utils';
import { type UiAlertKind } from '../alert/alert.component';
import { injectToastConfig } from './ToastConfig';

type ShowToastOptions = {
  dismissible?: boolean;
  duration?: number;
  heading?: string;
  id?: string;
  kind: UiAlertKind;
};

type ToastBase = {
  dismissible: boolean;
  heading?: string;
  id: string;
  kind: UiAlertKind;
  visible: boolean;
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

  showMessage(message: string, options: ShowToastOptions) {
    const toast: UiToastMessage = {
      dismissible: options.dismissible ?? this.toastConfig.dismissible,
      heading: options.heading,
      id: options.id || uniqueId(),
      kind: options.kind,
      visible: true,
      type: 'message',
      message,
    };

    this.setupAutoDismiss(toast, options.duration);

    this.toasts.update((list) => [...list, toast]);
  }

  showTemplate(template: TemplateRef<unknown>, options: ShowToastOptions) {
    const toast: UiToastTemplate = {
      dismissible: options.dismissible ?? this.toastConfig.dismissible,
      heading: options.heading,
      id: options.id || uniqueId(),
      kind: options.kind,
      visible: true,
      type: 'template',
      template,
    };

    this.setupAutoDismiss(toast, options.duration);

    this.toasts.update((list) => [...list, toast]);
  }

  dismiss(id: string) {
    this.toasts.update((list) =>
      list.map((toast) =>
        toast.id === id ? { ...toast, visible: false } : toast
      )
    );

    if (this.timeoutMap.has(id)) {
      clearTimeout(this.timeoutMap.get(id));
      this.timeoutMap.delete(id);
    }
  }

  remove(id: string) {
    this.toasts.update((list) => list.filter((toast) => toast.id !== id));
  }

  clearAll() {
    this.toasts.set([]);
  }
}
