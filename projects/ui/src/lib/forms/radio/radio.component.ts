import { Component } from '@angular/core';

/**
 * Usage: Add `ui-radio` to any `<input>` element.
 */
@Component({
  host: {
    type: 'radio',
  },
  exportAs: 'uiRadio',
  selector: `input[ui-radio]`,
  standalone: true,
  styleUrls: ['./radio.css'],
  template: '',
})
export class UiRadioComponent {}
