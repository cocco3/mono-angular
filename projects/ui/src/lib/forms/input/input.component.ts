import { Component } from '@angular/core';

export const UiInputTypes = ['text', 'password', 'email', 'date'] as const;
export type UiInputType = (typeof UiInputTypes)[number];

/**
 * Usage: Add `ui-input` to any `<input>` element.
 */
@Component({
  exportAs: 'uiInput',
  selector: `input[ui-input]`,
  standalone: true,
  styleUrls: ['./input.css'],
  template: '',
})
export class UiInputComponent {}
