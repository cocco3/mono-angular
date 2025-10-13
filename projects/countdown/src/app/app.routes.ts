import { type Routes } from '@angular/router';
import { AuthGuardService } from './services/AuthGuardService';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./page-login/page-login.component').then(
        (m) => m.PageLoginComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./app-main/app-main.component').then((m) => m.AppMainComponent),
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'events',
        loadComponent: () =>
          import('./events/page-events/page-events.component').then(
            (m) => m.PageEventsComponent
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./settings/page-settings/page-settings.component').then(
            (m) => m.PageSettingsComponent
          ),
      },
      { path: '', redirectTo: 'events', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' },
];
