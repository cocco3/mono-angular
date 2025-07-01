import { Component, computed, input } from '@angular/core';

export const UiOneTimeCodeKinds = ['alphanumeric', 'numeric'] as const;
export type UiOneTimeCodeKind = (typeof UiOneTimeCodeKinds)[number];

export const UiOneTimeCodeTransforms = [
  'none',
  'uppercase',
  'lowercase',
] as const;
export type UiOneTimeCodeTransform = (typeof UiOneTimeCodeTransforms)[number];

/**
 * Usage: Add `ui-code` to any `<input>` element.
 *
 * A one-time-code field built with a single input for accessibility. Adds attributes to assist in auto complete and keyboard input.
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
  styleUrls: ['./one-time-code.css'],
  template: '',
})
export class UiOneTimeCodeComponent {
  /** Add the "one-time-code" autocomplete. */
  enableAutocomplete = input(true);

  /** Add an inputmode to assist with virtual keyboards. */
  kind = input<UiOneTimeCodeKind>('alphanumeric');

  /** How many characters is the code. */
  charCount = input.required<number>();

  /** Display as uppercase or lowercase. */
  transform = input<UiOneTimeCodeTransform>('none');

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
