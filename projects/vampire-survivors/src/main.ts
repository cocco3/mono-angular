import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.env === 'prod') {
  const script = document.createElement('script');
  script.src = 'https://app.rybbit.io/api/script.js';
  script.defer = true;
  script.setAttribute('data-site-id', '851');
  document.head.appendChild(script);
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
