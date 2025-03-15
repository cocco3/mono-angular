import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ui-button',
  imports: [CommonModule],
  template: `<ng-content />`,
  styleUrls: ['./button.css'],
})
export class UiButtonComponent {}
