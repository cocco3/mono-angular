import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UiButtonComponent, UiIconComponent } from '@cocco3/angular-ui';
import { GoogleAuthService } from '../../services/GoogleAuthService';
import { UnlinkGoogleDialogComponent } from '../unlink-google-dialog/unlink-google-dialog.component';
import { SettingsPanelComponent } from '../settings-panel/settings-panel.component';
import { UserSettingsPanelComponent } from '../user-settings-panel/user-settings-panel.component';

@Component({
  imports: [
    UnlinkGoogleDialogComponent,
    UiButtonComponent,
    UiIconComponent,
    SettingsPanelComponent,
    UserSettingsPanelComponent,
  ],
  selector: 'app-page-settings',
  styleUrl: './page-settings.css',
  templateUrl: './page-settings.html',
})
export class PageSettingsComponent {
  private auth = inject(GoogleAuthService);
  private router = inject(Router);
  private title = inject(Title);

  constructor() {
    this.title.setTitle('Settings - CountdownApp');
  }

  protected logOut() {
    this.auth.clearAccessToken();
    this.router.navigate(['/login']);
  }
}
