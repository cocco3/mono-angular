import { Component, forwardRef } from '@angular/core';
import { UiFormFieldDirective } from '../form-field/form-field.directive';

/**
 * Usage: Add `ui-select` to any `<select>` element.
 */
@Component({
  exportAs: 'uiSelect',
  providers: [
    {
      provide: UiFormFieldDirective,
      useExisting: forwardRef(() => UiSelectComponent),
    },
  ],
  selector: `select[ui-select]`,
  standalone: true,
  styleUrls: ['./select.css'],
  template: '<ng-content />',
})
export class UiSelectComponent extends UiFormFieldDirective<HTMLSelectElement> {
  constructor() {
    super({ inline: false });
  }
}
