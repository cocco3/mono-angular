import {
  inject,
  Injectable,
  NgZone,
  type OnDestroy,
  signal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowScrollSpyService implements OnDestroy {
  private readonly zone = inject(NgZone);
  private _scrollY = signal(window.pageYOffset);
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
    this.zone.runOutsideAngular(() => {
      this.animationFrameId = requestAnimationFrame(this.trackScroll);
    });
  }

  ngOnDestroy() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
