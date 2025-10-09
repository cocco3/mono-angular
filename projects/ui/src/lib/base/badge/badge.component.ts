import { Component, computed, contentChildren, input } from '@angular/core';
import { UiSlotDirective, useSlots } from '../../layout/slot/slot.directive';

export const UiBadgeKinds = [
  'neutral',
  'negative',
  'warning',
  'positive',
  'info',
] as const;
export type UiBadgeKind = (typeof UiBadgeKinds)[number];

export const UiBadgeCorners = ['sharp', 'rounded', 'pill'] as const;
export type UiBadgeCorner = (typeof UiBadgeCorners)[number];

@Component({
  host: {
    '[class]': 'cssClass()',
  },
  selector: 'ui-badge',
  styleUrl: './badge.css',
  templateUrl: './badge.html',
})
export class UiBadgeComponent {
  /** How rounded the corners should be. */
  corners = input<UiBadgeCorner>('rounded');

  /** Color/hierarchy of the badge. */
  kind = input.required<UiBadgeKind>();

  private slots = contentChildren(UiSlotDirective);
  protected hasSlots = useSlots(this.slots, ['start', 'end']);

  protected cssClass = computed(() => ({
    [`corners-${this.corners()}`]: !!this.corners(),
    [`kind-${this.kind()}`]: !!this.kind(),
  }));
}
