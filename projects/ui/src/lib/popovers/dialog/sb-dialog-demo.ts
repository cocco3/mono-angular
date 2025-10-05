import { Component, output } from '@angular/core';
import { UiButtonComponent } from '../../base/button/button.component';

@Component({
  imports: [UiButtonComponent],
  selector: 'sb-dialog-demo',
  template: `
    <style>
      :host {
        background: darkgreen;
        box-sizing: border-box;
        display: grid;
        height: 120vh;
      }
      :host .inner {
        display: flex;
        gap: 12px;
        place-self: center center;
      }
    </style>
    <div class="inner">
      <button
        (click)="handleShowDialogClick()"
        ui-button
        kind="secondary"
        size="medium"
      >
        Show dialog
      </button>
      <button
        ui-button
        (click)="handleShowModalClick()"
        kind="secondary"
        size="medium"
      >
        Show modal (with backdrop)
      </button>
      <ng-content />
    </div>
  `,
})
export class SbDialogDemoComponent {
  readonly showDialogClicked = output();
  readonly showModalClicked = output();

  handleShowDialogClick() {
    this.showDialogClicked.emit();
  }

  handleShowModalClick() {
    this.showModalClicked.emit();
  }
}
