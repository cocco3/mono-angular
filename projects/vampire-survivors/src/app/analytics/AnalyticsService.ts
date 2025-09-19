import { Injectable } from '@angular/core';

type TrackEvent =
  | { name: 'wiki_clicked'; data: { item: string } }
  | { name: 'issues_clicked' }
  | { name: 'guide_clicked' }
  | { name: 'planner_clicked' };

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  public trackEvent(event: TrackEvent) {
    if (window.rybbit && typeof window.rybbit.event === 'function') {
      const data = 'data' in event ? event.data : undefined;
      window.rybbit.event(event.name, data);
    }
  }
}
