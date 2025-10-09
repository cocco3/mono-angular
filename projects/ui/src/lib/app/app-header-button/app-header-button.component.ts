import { Component, contentChildren } from '@angular/core';
import { UiSlotDirective, useSlots } from '../../layout/slot/slot.directive';

/**
 * Usage: Add `ui-app-header-button` to any `<a>` element.
 */
@Component({
  selector: 'a[ui-app-header-button]',
  styleUrl: './app-header-button.css',
  templateUrl: './app-header-button.html',
})
export class UiAppHeaderAnchorComponent {
  private slots = contentChildren(UiSlotDirective);
  protected hasSlots = useSlots(this.slots, ['start', 'end']);
}

/**
 * Usage: Add `ui-app-header-button` to any `<button>` element.
 */
@Component({
  host: {
    type: 'button',
  },
  selector: 'button[ui-app-header-button]',
  styleUrl: './app-header-button.css',
  templateUrl: './app-header-button.html',
})
export class UiAppHeaderButtonComponent {
  private slots = contentChildren(UiSlotDirective);
  protected hasSlots = useSlots(this.slots, ['start', 'end']);
}
