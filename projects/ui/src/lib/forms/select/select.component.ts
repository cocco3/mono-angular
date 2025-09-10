import { Component, ElementRef, inject } from '@angular/core';
import { UiFormFieldDirective } from '../form-field/form-field.directive';

/**
 * Usage: Add `ui-select` to any `<select>` element.
 */
@Component({
  exportAs: 'uiSelect',
  hostDirectives: [
    {
      directive: UiFormFieldDirective,
    },
  ],
  selector: `select[ui-select]`,
  styleUrl: './select.css',
  template: '<ng-content />',
})
export class UiSelectComponent {
  public readonly elementRef = inject(ElementRef<HTMLSelectElement>);
}
