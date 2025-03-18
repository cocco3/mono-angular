import { Component, forwardRef } from '@angular/core';
import { UiFormFieldDirective } from '../form-field/form-field.directive';

export const UiInputTypes = ['text', 'password', 'email', 'date'] as const;
export type UiInputType = (typeof UiInputTypes)[number];

/**
 * Usage: Add `ui-input` to any `<input>` element.
 */
@Component({
  exportAs: 'uiInput',
  providers: [
    {
      provide: UiFormFieldDirective,
      useExisting: forwardRef(() => UiInputComponent),
    },
  ],
  selector: `input[ui-input]`,
  standalone: true,
  styleUrls: ['./input.css'],
  template: '',
})
export class UiInputComponent extends UiFormFieldDirective<HTMLInputElement> {
  constructor() {
    super({ inline: false });
  }
}
