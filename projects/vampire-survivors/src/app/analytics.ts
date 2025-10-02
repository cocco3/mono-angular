import { inject } from '@angular/core';
import { AnalyticsService } from '@cocco3/angular-ui';

export type AnalyticsEvents =
  | { name: 'wiki_clicked'; data: { item: string } }
  | { name: 'issues_clicked' }
  | { name: 'guide_clicked' }
  | { name: 'planner_clicked' };

export function injectAnalytics(): AnalyticsService<AnalyticsEvents> {
  return inject(AnalyticsService<AnalyticsEvents>);
}
