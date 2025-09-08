import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  type ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastConfig } from '@cocco3/angular-ui';

import { routes } from './app.routes';
import { authInterceptor } from './services/AuthInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),

    provideToastConfig({
      dismissible: true,
      duration: 5000,
    }),
  ],
};
