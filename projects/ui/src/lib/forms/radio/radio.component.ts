import { Component, forwardRef } from '@angular/core';
import { UiFormFieldDirective } from '../form-field/form-field.directive';

/**
 * Usage: Add `ui-radio` to any `<input>` element.
 */
@Component({
  host: {
    type: 'radio',
  },
  exportAs: 'uiRadio',
  providers: [
    {
      provide: UiFormFieldDirective,
      useExisting: forwardRef(() => UiRadioComponent),
    },
  ],
  selector: `input[ui-radio]`,
  styleUrls: ['./radio.css'],
  template: '',
})
export class UiRadioComponent extends UiFormFieldDirective<HTMLInputElement> {}
