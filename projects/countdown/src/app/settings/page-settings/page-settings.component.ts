import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {
  UiButtonComponent,
  UiFormFieldComponent,
  UiIconComponent,
  UiInputComponent,
} from '@cocco3/angular-ui';
import { GoogleAuthService } from '../../services/GoogleAuthService';
import { UserSettingsService } from '../../services/UserSettingsService';
import { UnlinkGoogleDialogComponent } from '../unlink-google-dialog/unlink-google-dialog.component';

@Component({
  imports: [
    UnlinkGoogleDialogComponent,
    UiButtonComponent,
    UiFormFieldComponent,
    UiInputComponent,
    UiIconComponent,
  ],
  selector: 'app-page-settings',
  styleUrl: './page-settings.css',
  templateUrl: './page-settings.html',
})
export class PageSettingsComponent {
  private _settings = inject(UserSettingsService);
  private auth = inject(GoogleAuthService);
  private router = inject(Router);
  private title = inject(Title);

  constructor() {
    this.title.setTitle('Settings - CountdownApp');
  }

  protected settings = computed(() => {
    return this._settings;
  });

  protected logOut() {
    this.auth.clearAccessToken();
    this.router.navigate(['/login']);
  }
}
