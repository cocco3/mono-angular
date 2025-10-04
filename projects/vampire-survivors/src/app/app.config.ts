import {
  type ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnalytics } from '@cocco3/angular-ui';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { type AnalyticsEvents } from './analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideAnalytics<AnalyticsEvents>({
      enabled:
        environment.env === 'prod' || !!environment.rybbitAnalyticsApiKey,
      siteId: environment.rybbitAnalyticsSiteId,
      apiKey: environment.rybbitAnalyticsApiKey,
    }),
  ],
};
