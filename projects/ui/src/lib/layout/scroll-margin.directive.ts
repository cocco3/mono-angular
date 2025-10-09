import { Directive, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { type Event, Router, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';

/**
 * Fixes issue where scroll-margin-top is ignored when navigating to an anchor.
 *
 * {@link https://github.com/angular/angular/issues/55383|GitHub Issue}
 */
@Directive({
  selector: '[uiScrollMargin]',
})
export class UiScrollMarginDirective {
  private readonly router = inject(Router);
  private readonly viewportScroller = inject(ViewportScroller);

  constructor() {
    this.router.events
      .pipe(filter((event: Event): event is Scroll => event instanceof Scroll))
      .subscribe((e) => {
        const element = document.querySelector(`#${e.anchor}`);

        if (element) {
          const offset = parseFloat(getComputedStyle(element).scrollMarginTop);
          this.viewportScroller.setOffset([0, offset]);
        }
      });
  }
}
