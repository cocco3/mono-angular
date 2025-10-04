import { makeEnvironmentProviders } from '@angular/core';
import {
  Analytics,
  type AnalyticsConfig,
  type BaseTrackEvent,
} from './Analytics';

export function provideAnalytics<
  TTrackEvent extends BaseTrackEvent = BaseTrackEvent,
>(config: AnalyticsConfig) {
  return makeEnvironmentProviders([
    {
      provide: Analytics,
      useFactory: () => new Analytics<TTrackEvent>(config),
    },
  ]);
}
