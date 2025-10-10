import { inject, Injectable, NgZone, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SectionObserverService {
  private readonly ngZone = inject(NgZone);

  private readonly observer: IntersectionObserver;
  private readonly entries = new Map<string, Element>();

  activeSection = signal<string | null>(null);

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        this.ngZone.run(() => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visible.length > 0) {
            const id = [...this.entries.entries()].find(
              ([_, el]) => el === visible[0].target
            )?.[0];
            if (id) this.activeSection.set(id);
          }
        });
      },
      { threshold: 0.5 }
    );
  }

  observe(id: string, el: Element) {
    this.entries.set(id, el);
    this.observer.observe(el);
  }

  unobserve(id: string) {
    const el = this.entries.get(id);
    if (el) this.observer.unobserve(el);
    this.entries.delete(id);
  }
}
