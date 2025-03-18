import { Component } from '@angular/core';

/**
 * Usage: Add `ui-select` to any `<select>` element.
 */
@Component({
  exportAs: 'uiSelect',
  selector: `select[ui-select]`,
  standalone: true,
  styleUrls: ['./select.css'],
  template: '<ng-content />',
})
export class UiSelectComponent {}
