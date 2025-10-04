import { inject } from '@angular/core';
import { Analytics } from '@cocco3/angular-ui';

export type AnalyticsEvents =
  | { name: 'wiki_clicked'; data: { item: string } }
  | { name: 'issues_clicked' }
  | { name: 'guide_clicked' }
  | { name: 'planner_clicked' };

export function injectAnalytics(): Analytics<AnalyticsEvents> {
  return inject(Analytics<AnalyticsEvents>);
}
