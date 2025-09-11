import { Component, computed, contentChildren, input } from '@angular/core';
import { UiSlotDirective, useSlots } from '../../layout/slot.directive';

export const UiButtonKinds = ['primary', 'secondary', 'destructive'] as const;
export type UiButtonKind = (typeof UiButtonKinds)[number];

export const UiButtonSizes = ['small', 'medium', 'large'] as const;
export type UiButtonSize = (typeof UiButtonSizes)[number];

export const UiButtonTypes = ['button', 'submit', 'reset'] as const;
export type UiButtonType = (typeof UiButtonTypes)[number];

export const UiButtonShapes = ['normal', 'pill', 'circle', 'square'] as const;
export type UiButtonShape = (typeof UiButtonShapes)[number];

export const UiButtonWeights = ['solid', 'outline', 'ghost'] as const;
export type UiButtonWeight = (typeof UiButtonWeights)[number];

/**
 * Usage: Add `ui-button` to any `<button>` element.
 */
@Component({
  host: {
    '[class]': 'cssClass()',
    '[attr.type]': 'type()',
  },
  selector: 'button[ui-button]',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class UiButtonComponent {
  kind = input.required<UiButtonKind>();
  /** Use `shape = 'circle' | 'square'` for an icon only button. */
  shape = input<UiButtonShape>('normal');
  size = input.required<UiButtonSize>();
  weight = input<UiButtonWeight>('solid');
  type = input<UiButtonType>('button');
  loading = input<boolean>(false);

  private slots = contentChildren(UiSlotDirective);
  protected hasSlots = useSlots(this.slots, ['start', 'end']);

  protected cssClass = computed(() => ({
    [`kind-${this.kind()}`]: !!this.kind(),
    ['icon-only']: ['circle', 'square'].includes(this.shape()),
    [`shape-${this.shape()}`]: !!this.shape(),
    [`size-${this.size()}`]: !!this.size(),
    [`weight-${this.weight()}`]: !!this.weight(),
  }));
}
