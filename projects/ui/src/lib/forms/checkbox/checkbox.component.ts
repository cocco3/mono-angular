import { Component, forwardRef } from '@angular/core';
import { UiFormFieldDirective } from '../form-field/form-field.directive';

/**
 * Usage: Add `ui-checkbox` to any `<input>` element.
 */
@Component({
  host: {
    type: 'checkbox',
  },
  exportAs: 'uiCheckbox',
  providers: [
    {
      provide: UiFormFieldDirective,
      useExisting: forwardRef(() => UiCheckboxComponent),
    },
  ],
  selector: `input[ui-checkbox]`,
  standalone: true,
  styleUrls: ['./checkbox.css'],
  template: '',
})
export class UiCheckboxComponent extends UiFormFieldDirective<HTMLInputElement> {
  constructor() {
    super({ inline: true });
  }
}
