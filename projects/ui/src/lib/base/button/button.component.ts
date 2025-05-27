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

/**
 * Usage: Add `ui-button` to any `<button>` element.
 */
@Component({
  host: {
    '[class]': 'cssClass()',
    '[attr.type]': 'type',
  },
  selector: 'button[ui-button]',
  standalone: true,
  styleUrls: ['./button.css'],
  templateUrl: './button.html',
})
export class UiButtonComponent {
  kind = input.required<UiButtonKind>();
  size = input.required<UiButtonSize>();
  type = input<'button' | 'submit' | 'reset'>('button');
  loading = input(false);

  private slots = contentChildren(UiSlotDirective);
  protected hasSlots = useSlots(this.slots, ['start', 'end']);

  protected cssClass = computed(() => ({
    [`kind-${this.kind()}`]: !!this.kind(),
    [`size-${this.size()}`]: !!this.size(),
  }));
}
