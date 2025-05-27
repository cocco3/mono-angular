import { type Routes } from '@angular/router';
import { AuthGuardService } from './services/AuthGuardService';
import { PageLoginComponent } from './page-login/page-login.component';
import { AppMainComponent } from './app-main/app-main.component';
import { PageEventsComponent } from './events/page-events/page-events.component';
import { PageSettingsComponent } from './settings/page-settings/page-settings.component';

export const routes: Routes = [
  { path: 'login', component: PageLoginComponent },
  {
    path: '',
    component: AppMainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'events', component: PageEventsComponent },
      { path: 'settings', component: PageSettingsComponent },
      { path: '', redirectTo: 'events', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' },
];
