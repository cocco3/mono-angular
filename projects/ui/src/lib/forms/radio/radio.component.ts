import { Component, ElementRef, inject } from '@angular/core';
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
    },
  ],
  exportAs: 'uiRadio',
  selector: `input[ui-radio]`,
  styleUrl: './radio.css',
  template: '',
})
export class UiRadioComponent {
  public readonly elementRef = inject(ElementRef<HTMLInputElement>);
}
