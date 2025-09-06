import { inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, NavigationEnd, type Event } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterEventsService {
  private readonly router = inject(Router);

  private routeChangeHandlers: ((url: string) => void)[] = [];

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.routeChangeHandlers.forEach((fn) => fn(event.urlAfterRedirects));
      }
    });
  }

  public registerRouteChange(callback: (url: string) => void) {
    this.routeChangeHandlers.push(callback);
  }
}
