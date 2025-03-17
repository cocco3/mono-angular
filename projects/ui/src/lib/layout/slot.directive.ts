import { computed, Directive, input, type Signal } from '@angular/core';

@Directive({
  selector: '[uiSlot]',
  standalone: true,
})
export class UiSlotDirective {
  name = input.required<string>({ alias: 'uiSlot' });
}

export function useSlots<T extends string>(
  slots: Signal<readonly UiSlotDirective[]>,
  slotNames: T[]
) {
  return computed(() =>
    slotNames.reduce(
      (acc, name) => {
        acc[name] = slots().some((slot) => slot.name() === name);
        return acc;
      },
      {} as Record<T, boolean>
    )
  );
}
