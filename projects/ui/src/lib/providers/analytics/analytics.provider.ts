import { makeEnvironmentProviders } from '@angular/core';
import {
  AnalyticsService,
  type AnalyticsConfig,
  type BaseTrackEvent,
} from './AnalyticsService';

export function provideAnalytics<
  TTrackEvent extends BaseTrackEvent = BaseTrackEvent,
>(config: AnalyticsConfig) {
  return makeEnvironmentProviders([
    {
      provide: AnalyticsService,
      useFactory: () => new AnalyticsService<TTrackEvent>(config),
    },
  ]);
}
