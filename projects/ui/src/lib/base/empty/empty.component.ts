import { Component, contentChildren, input } from '@angular/core';
import { UiSlotDirective, useSlots } from '../../layout/slot.directive';

@Component({
  selector: 'ui-empty',
  styleUrls: ['./empty.css'],
  templateUrl: './empty.html',
})
export class UiEmptyComponent {
  heading = input<string>();
  description = input<string>();

  private slots = contentChildren(UiSlotDirective);
  protected hasSlots = useSlots(this.slots, ['image', 'content']);
}
