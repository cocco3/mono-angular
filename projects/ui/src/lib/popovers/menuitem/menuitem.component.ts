import { Component, contentChildren, input } from '@angular/core';
import { UiSlotDirective, useSlots } from '../../layout/slot.directive';

/**
 * Add `[ui-menuitem]` attribute on any anchor element.
 */
@Component({
  host: {
    role: 'menuitem',
  },
  selector: 'a[ui-menuitem]',
  styleUrls: ['./menuitem.css'],
  templateUrl: './menuitem.html',
})
export class UiMenuItemAnchorComponent {
  description = input<string>();

  private slots = contentChildren(UiSlotDirective);
  protected hasSlots = useSlots(this.slots, ['start', 'end']);
}

/**
 * Add `[ui-menuitem]` attribute on any button element.
 */
@Component({
  host: {
    role: 'menuitem',
    type: 'button',
  },
  selector: 'button[ui-menuitem]',
  styleUrls: ['./menuitem.css'],
  templateUrl: './menuitem.html',
})
export class UiMenuItemButtonComponent {
  description = input<string>();

  private slots = contentChildren(UiSlotDirective);
  protected hasSlots = useSlots(this.slots, ['start', 'end']);
}
