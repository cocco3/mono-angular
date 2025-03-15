import { Directive, input } from '@angular/core';

@Directive({
  selector: '[uiSlot]',
  standalone: true,
})
export class UiSlotDirective {
  name = input.required<string>({ alias: 'uiSlot' });
}
