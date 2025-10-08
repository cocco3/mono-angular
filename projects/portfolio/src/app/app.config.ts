import {
  type ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnalytics } from '@cocco3/angular-ui';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),

    provideAnalytics({
      enabled:
        environment.env === 'prod' || !!environment.rybbitAnalyticsApiKey,
      siteId: environment.rybbitAnalyticsSiteId,
      apiKey: environment.rybbitAnalyticsApiKey,
    }),
  ],
};
