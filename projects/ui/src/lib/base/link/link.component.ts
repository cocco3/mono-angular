import { Component, contentChildren } from '@angular/core';
import { UiSlotDirective, useSlots } from '../../layout/slot/slot.directive';

@Component({
  selector: 'a[ui-link]',
  styleUrl: './link.css',
  templateUrl: './link.html',
})
export class UiLinkComponent {
  private slots = contentChildren(UiSlotDirective);
  protected hasSlots = useSlots(this.slots, ['start', 'end']);
}
