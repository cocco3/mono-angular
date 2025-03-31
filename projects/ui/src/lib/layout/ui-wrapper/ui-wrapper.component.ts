import { Component } from '@angular/core';

/**
 * Use this to set consistent page max-width and gutters.
 */
@Component({
  selector: 'ui-wrapper',
  styleUrl: './ui-wrapper.css',
  template: '<ng-content />',
})
export class UiWrapperComponent {}
