import {
  Directive,
  ElementRef,
  type OnDestroy,
  inject,
  effect,
  type EffectRef,
  linkedSignal,
  input,
} from '@angular/core';
import { WindowScrollSpyService } from './window-scroll-spy.service';
import { SectionScrollSpyService } from './section-scroll-spy.service';

/**
 * Calculate if the section meets criteria to be marked as active.
 */
@Directive({
  selector: '[appSectionScrollSpy]',
})
export class SectionScrollSpyDirective implements OnDestroy {
  private readonly el: ElementRef<HTMLElement> = inject(
    ElementRef<HTMLElement>
  );
  private readonly scrollSpy = inject(WindowScrollSpyService);
  private readonly header = inject(SectionScrollSpyService);
  private cleanupEffect: EffectRef;

  sectionId = input.required<string>({ alias: 'appSectionScrollSpy' });

  protected scrollY = linkedSignal(() => {
    return this.scrollSpy.scrollY();
  });

  constructor() {
    this.cleanupEffect = effect(() => {
      const scrollY = this.scrollSpy.scrollY();
      const section = this.el.nativeElement;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.pageYOffset;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const visibleTop = Math.max(sectionTop, scrollY);
      const visibleBottom = Math.min(
        sectionTop + sectionHeight,
        scrollY + viewportHeight
      );
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visibilityRatio = visibleHeight / sectionHeight;

      const isLastSection = sectionTop + sectionHeight >= documentHeight - 5;
      const sectionTopInView =
        rect.top >= 0 && rect.top <= viewportHeight * 0.5;
      const isTallSection = sectionHeight > viewportHeight;
      const isVisibleEnough = visibilityRatio > (isTallSection ? 0.25 : 0.5);

      const isNearTop = scrollY <= 200;
      const sectionInTopBuffer = sectionTop >= 0 && sectionTop <= 200;

      const isActive = isNearTop
        ? sectionInTopBuffer
        : sectionTopInView ||
          isVisibleEnough ||
          (isLastSection && scrollY + viewportHeight >= documentHeight - 5);

      if (isActive) {
        this.header.activeId.set(this.sectionId());
      }
    });
  }

  ngOnDestroy() {
    this.cleanupEffect.destroy();
  }
}
