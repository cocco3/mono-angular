import { Component, inject, input, type OnInit } from '@angular/core';
import { UiCarouselContext } from './carousel-context';

@Component({
  host: {
    '[style.--grid-gap]': 'gap()',
    '[style.--min-item-width]': 'minItemWidth()',
  },
  providers: [UiCarouselContext],
  selector: 'ui-carousel',
  styleUrl: './carousel.css',
  template: '<ng-content />',
})
export class UiCarouselComponent implements OnInit {
  private readonly context = inject(UiCarouselContext);

  /** Any valid CSS size value. */
  gap = input.required<string>();

  /** Any valid CSS size value. */
  minItemWidth = input.required<string>();

  /** One at a time */
  forceStop = input<boolean>(false);

  ngOnInit() {
    this.context.forceStop.set(this.forceStop());
  }
}
