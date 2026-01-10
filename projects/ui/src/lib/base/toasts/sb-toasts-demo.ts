import {
  Component,
  viewChild,
  inject,
  type TemplateRef,
  input,
} from '@angular/core';
import { type Milliseconds } from '@cocco3/utils';
import { UiToastService } from './ToastService';
import { type UiAlertKind } from '../alert/alert.component';

@Component({
  selector: 'sb-toasts-demo',
  template: `
    <style>
      :host .inner {
        display: flex;
        gap: 12px;
        place-self: center center;
      }
    </style>

    <div class="inner">
      <button (click)="showMessage()">Show Message</button>
      <button (click)="showTemplate()">Show Template</button>
      <button (click)="clearAll()">Clear All</button>
    </div>

    <ng-template #customToastTemplate>
      <div>
        <strong>Hello world!</strong> This toast uses a <em>template</em> for
        rich content.
        <br />
        <a href="#">View details</a>
      </div>
    </ng-template>
  `,
})
export class SbToastsDemoComponent {
  private readonly toastService = inject(UiToastService);
  private readonly customToastTemplate = viewChild.required<
    TemplateRef<unknown>
  >('customToastTemplate');

  dismissible = input<boolean>(false);
  duration = input<Milliseconds>();
  heading = input<string>();
  kind = input.required<UiAlertKind>();

  protected showMessage() {
    this.toastService.showMessage(
      'The quick brown fox jumps over the lazy dog.',
      {
        dismissible: this.dismissible(),
        duration: this.duration(),
        heading: this.heading(),
        kind: this.kind(),
      }
    );
  }

  protected showTemplate() {
    this.toastService.showTemplate(this.customToastTemplate(), {
      dismissible: this.dismissible(),
      duration: this.duration(),
      heading: this.heading(),
      kind: this.kind(),
    });
  }

  protected clearAll() {
    this.toastService.clearAll();
  }
}
