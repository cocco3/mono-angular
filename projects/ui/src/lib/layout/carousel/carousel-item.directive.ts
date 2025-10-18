import { computed, Directive, inject } from '@angular/core';
import { UiCarouselContext } from './carousel-context';

@Directive({
  host: {
    '[style.scroll-snap-align]': '"center"',
    '[style.container-type]': '"scroll-state"',
    '[style.scroll-snap-stop]': 'scrollSnapStop()',
  },
  selector: '[uiCarouselItem]',
})
export class UiCarouselItemDirective {
  private readonly context = inject(UiCarouselContext);

  scrollSnapStop = computed(() => {
    return this.context.forceStop() ? 'always' : undefined;
  });
}
