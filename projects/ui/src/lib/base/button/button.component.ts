import { CommonModule } from '@angular/common';
import { Component, computed, contentChildren, input } from '@angular/core';
import { UiSlotDirective } from '../../layout/slot.directive';

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
    '[type]': `type || 'button'`,
  },
  imports: [CommonModule],
  selector: 'button[ui-button]',
  templateUrl: './button.html',
  styleUrls: ['./button.css'],
})
export class UiButtonComponent {
  kind = input.required<UiButtonKind>();
  size = input.required<UiButtonSize>();

  private slots = contentChildren(UiSlotDirective, { descendants: true });

  protected cssClass = computed(() => ({
    [`kind-${this.kind()}`]: !!this.kind(),
    [`size-${this.size()}`]: !!this.size(),
  }));

  protected hasStartSlot = computed(() => this.hasSlot('start'));
  protected hasEndSlot = computed(() => this.hasSlot('end'));

  private hasSlot(name: 'start' | 'end') {
    return this.slots().some((slot) => slot.name() === name) || false;
  }
}
