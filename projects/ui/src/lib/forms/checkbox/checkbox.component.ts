import { Component } from '@angular/core';

/**
 * Usage: Add `ui-checkbox` to any `<input>` element.
 */
@Component({
  host: {
    type: 'checkbox',
  },
  exportAs: 'uiCheckbox',
  selector: `input[ui-checkbox]`,
  standalone: true,
  styleUrls: ['./checkbox.css'],
  template: '',
})
export class UiCheckboxComponent {}
