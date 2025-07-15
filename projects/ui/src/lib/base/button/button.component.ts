import { Component, computed, contentChildren, input } from '@angular/core';
import { UiSlotDirective, useSlots } from '../../layout/slot.directive';

export const UiButtonKinds = [
  'primary',
  'secondary',
  'tertiary',
  'destructive',
] as const;
export type UiButtonKind = (typeof UiButtonKinds)[number];

export const UiButtonSizes = ['small', 'medium', 'large'] as const;
export type UiButtonSize = (typeof UiButtonSizes)[number];

export const UiButtonTypes = ['button', 'submit', 'reset'] as const;
export type UiButtonType = (typeof UiButtonTypes)[number];

export const UiButtonShapes = ['normal', 'pill', 'circle', 'square'] as const;
export type UiButtonShape = (typeof UiButtonShapes)[number];

/**
 * Usage: Add `ui-button` to any `<button>` element.
 */
@Component({
  host: {
    '[class]': 'cssClass()',
    '[attr.type]': 'type',
  },
  selector: 'button[ui-button]',
  styleUrls: ['./button.css'],
  templateUrl: './button.html',
})
export class UiButtonComponent {
  kind = input.required<UiButtonKind>();
  /**
   * Use `shape = 'circle' | 'square'` for an icon only button.
   */
  shape = input<UiButtonShape>('normal');
  size = input.required<UiButtonSize>();
  type = input<UiButtonType>('button');
  loading = input(false);

  private slots = contentChildren(UiSlotDirective);
  protected hasSlots = useSlots(this.slots, ['start', 'end']);

  protected cssClass = computed(() => ({
    [`kind-${this.kind()}`]: !!this.kind(),
    ['icon-only']: ['circle', 'square'].includes(this.shape()),
    [`shape-${this.shape()}`]: !!this.shape(),
    [`size-${this.size()}`]: !!this.size(),
  }));
}
