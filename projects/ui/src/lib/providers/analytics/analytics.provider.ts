import {
  EnvironmentInjector,
  inject,
  makeEnvironmentProviders,
  provideEnvironmentInitializer,
} from '@angular/core';

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

    /**
     * Ensures instantiation of a service that performs side effects.
     * Necessary if the service is not injected elsewhere in the app.
     */
    provideEnvironmentInitializer(() => {
      const injector = inject(EnvironmentInjector);
      injector.get(Analytics);
    }),
  ]);
}
