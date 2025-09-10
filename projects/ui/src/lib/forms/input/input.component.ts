import { Component, ElementRef, inject } from '@angular/core';
import { UiFormFieldDirective } from '../form-field/form-field.directive';

export const UiInputTypes = [
  'text',
  'password',
  'email',
  'date',
  'time',
] as const;
export type UiInputType = (typeof UiInputTypes)[number];

/**
 * Usage: Add `ui-input` to any `<input>` element.
 */
@Component({
  exportAs: 'uiInput',
  hostDirectives: [
    {
      directive: UiFormFieldDirective,
    },
  ],
  selector: `input[ui-input]`,
  styleUrl: './input.css',
  template: '',
})
export class UiInputComponent {
  public readonly elementRef = inject(ElementRef<HTMLInputElement>);
}
