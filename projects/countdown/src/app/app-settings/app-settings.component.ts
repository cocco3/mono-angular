import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  UiButtonComponent,
  UiFormFieldComponent,
  UiInputComponent,
} from '@cocco3/angular-ui';
import { GoogleAuthService } from '../services/GoogleAuthService';
import { UserSettingsService } from '../services/UserSettingsService';

@Component({
  imports: [UiButtonComponent, UiFormFieldComponent, UiInputComponent],
  selector: 'app-settings',
  styleUrl: './app-settings.css',
  templateUrl: './app-settings.html',
})
export class AppSettingsComponent {
  private _settings = inject(UserSettingsService);
  private auth = inject(GoogleAuthService);
  private router = inject(Router);

  protected settings = computed(() => {
    return this._settings;
  });

  protected logOut() {
    this.auth.clearAccessToken();
    this.router.navigate(['/login']);
  }
}
