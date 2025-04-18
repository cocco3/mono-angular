import { type Routes } from '@angular/router';
import { AuthGuardService } from './services/AuthGuardService';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppEventListComponent } from './app-event-list/app-event-list.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';

export const routes: Routes = [
  { path: 'login', component: AppLoginComponent },
  {
    path: '',
    component: AppMainComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'events', component: AppEventListComponent },
      { path: 'settings', component: AppSettingsComponent },
      { path: '', redirectTo: 'events', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' },
];
