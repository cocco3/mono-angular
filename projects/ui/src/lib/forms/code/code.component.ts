import { Component, computed, input } from '@angular/core';

export const UiCodeKinds = ['alphanumeric', 'numeric'] as const;
export type UiCodeKind = (typeof UiCodeKinds)[number];

export const UiCodeTransforms = ['none', 'uppercase', 'lowercase'] as const;
export type UiCodeTransform = (typeof UiCodeTransforms)[number];

/**
 * Usage: Add `ui-code` to any `<input>` element.
 *
 * A single input, accessible verification code field. Adds attributes to assist in auto complete and keyboard input.
 */
@Component({
  host: {
    spellcheck: 'false',
    '[attr.autocomplete]': 'autocomplete()',
    '[attr.inputmode]': 'inputmode()',
    '[attr.maxlength]': 'charCount()',
    '[style.--char-count]': 'charCount()',
    '[style.--text-transform]': 'transform()',
  },
  selector: `input[ui-code]`,
  styleUrls: ['./code.css'],
  template: '',
})
export class UiCodeComponent {
  /** Add the "one-time-code" autocomplete. */
  enableAutocomplete = input(true);

  /** Add an inputmode to assist with virtual keyboards. */
  kind = input<UiCodeKind>('alphanumeric');

  /** How many characters is the code. */
  charCount = input.required<number>();

  /** Display as uppercase or lowercase. */
  transform = input<UiCodeTransform>('none');

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
