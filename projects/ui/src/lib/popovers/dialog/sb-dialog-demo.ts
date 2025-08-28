import { Component, output } from '@angular/core';

@Component({
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
      <button (click)="handleShowDialogClick()">Show dialog</button>
      <button (click)="handleShowModalClick()">
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
