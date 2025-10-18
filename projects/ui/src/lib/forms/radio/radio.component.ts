import { Component, ElementRef, inject, input } from '@angular/core';
import { UiFormFieldDirective } from '../form-field/form-field.directive';

/**
 * Usage: Add `ui-radio` to any `<input>` element.
 */
@Component({
  host: {
    type: 'radio',
  },
  hostDirectives: [
    {
      directive: UiFormFieldDirective,
      inputs: ['invalid: invalid'],
    },
  ],
  exportAs: 'uiRadio',
  selector: `input[ui-radio]`,
  styleUrl: './radio.css',
  template: '',
})
export class UiRadioComponent {
  public readonly el: ElementRef<HTMLInputElement> = inject(
    ElementRef<HTMLInputElement>
  );

  invalid = input<boolean>(false);
}
