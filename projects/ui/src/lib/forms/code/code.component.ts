import { Component, computed, input } from '@angular/core';

export const UiCodeKinds = ['numeric', 'alphanumeric'] as const;
export type UiCodeKind = (typeof UiCodeKinds)[number];

/**
 * Usage: Add `ui-code` to any `<input>` element.
 *
 * A single input, accessible verification code field. Adds attributes to assist in auto complete and keyboard input.
 */
@Component({
  host: {
    '[attr.autocomplete]': 'autocomplete()',
    '[attr.inputmode]': 'inputmode()',
    '[attr.maxlength]': 'maxChars()',
    '[style.--char-count]': 'maxChars()',
  },
  selector: `input[ui-code]`,
  styleUrls: ['./code.css'],
  template: '',
})
export class UiCodeComponent {
  /** Adds the "one-time-code" autocomplete. */
  enableAutocomplete = input(true);

  /** Adds an inputmode to assist with virtual keyboards. */
  kind = input.required<UiCodeKind>();

  /** How many characters is the code. */
  maxChars = input.required<number>();

  protected autocomplete = computed(() => {
    return this.enableAutocomplete() ? 'one-time-code' : 'off';
  });

  protected inputmode = computed(() => {
    return {
      numeric: 'numeric',
      alphanumeric: 'text',
    }[this.kind()];
  });
}
