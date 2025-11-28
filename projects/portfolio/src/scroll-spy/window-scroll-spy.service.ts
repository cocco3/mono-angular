import {
  inject,
  Injectable,
  NgZone,
  type OnDestroy,
  signal,
} from '@angular/core';
import { injectIsBrowser } from '@cocco3/angular-ui';

/**
 * Keep track of the window scroll Y offset as the page scrolls.
 */
@Injectable({
  providedIn: 'root',
})
export class WindowScrollSpyService implements OnDestroy {
  private readonly isBrowser = injectIsBrowser();
  private readonly zone = inject(NgZone);

  private _scrollY = signal(0);

  private animationFrameId: number | null = null;

  disabled = signal(false);

  public get scrollY() {
    return this._scrollY.asReadonly();
  }

  private trackScroll = () => {
    if (!this.disabled()) {
      const currentY = window.pageYOffset;
      if (this._scrollY() !== currentY) {
        this.zone.run(() => this._scrollY.set(currentY));
      }
    }

    this.animationFrameId = requestAnimationFrame(this.trackScroll);
  };

  constructor() {
    if (!this.isBrowser) return;

    this._scrollY.set(window.pageYOffset);

    this.zone.runOutsideAngular(() => {
      this.animationFrameId = requestAnimationFrame(this.trackScroll);
    });
  }

  ngOnDestroy() {
    if (!this.isBrowser) return;

    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
