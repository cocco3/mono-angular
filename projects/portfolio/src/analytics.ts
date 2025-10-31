import { inject } from '@angular/core';
import { Analytics } from '@cocco3/angular-ui';

export type AnalyticsEvents =
  | { name: 'resume_viewed' }
  | { name: 'video_viewed'; data: { id: string; name: string } };

export function injectAnalytics(): Analytics<AnalyticsEvents> {
  return inject(Analytics<AnalyticsEvents>);
}
