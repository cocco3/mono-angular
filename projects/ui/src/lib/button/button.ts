import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'button[ui-button]',
  imports: [CommonModule],
  template: `<ng-content />`,
  styles: ['./button.css'],
})
export class UiButtonComponent {}
