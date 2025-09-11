import { Component, ElementRef, inject, input } from '@angular/core';
import { UiFormFieldDirective } from '../form-field/form-field.directive';

/**
 * Usage: Add `ui-checkbox` to any `<input>` element.
 */
@Component({
  host: {
    type: 'checkbox',
  },
  hostDirectives: [
    {
      directive: UiFormFieldDirective,
      inputs: ['invalid: invalid'],
    },
  ],
  exportAs: 'uiCheckbox',
  selector: `input[ui-checkbox]`,
  styleUrl: './checkbox.css',
  template: '',
})
export class UiCheckboxComponent {
  public readonly elementRef = inject(ElementRef<HTMLInputElement>);

  invalid = input(false);
}
