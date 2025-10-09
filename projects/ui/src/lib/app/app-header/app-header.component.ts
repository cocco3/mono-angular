import { Component, contentChildren, input } from '@angular/core';
import { UiWrapperComponent } from '../../layout/ui-wrapper/ui-wrapper.component';
import { UiSlotDirective, useSlots } from '../../layout/slot/slot.directive';

@Component({
  selector: 'ui-app-header',
  imports: [UiWrapperComponent],
  styleUrl: './app-header.css',
  templateUrl: './app-header.html',
})
export class UiAppHeaderComponent {
  title = input.required<string>();

  private slots = contentChildren(UiSlotDirective);
  protected hasSlots = useSlots(this.slots, ['user']);
}
