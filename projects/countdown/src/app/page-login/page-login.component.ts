import { Component, computed, inject, type OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  UiButtonComponent,
  UiWrapperComponent,
  UiIconComponent,
} from '@cocco3/angular-ui';
import { GoogleAuthService } from '../services/GoogleAuthService';
import { EnvironmentService } from '../services/EnvironmentService';
import { UiAlertComponent } from '../../../../ui/src/lib/base/alert/alert.component';

@Component({
  imports: [
    UiButtonComponent,
    UiWrapperComponent,
    UiIconComponent,
    UiAlertComponent,
  ],
  selector: 'app-page-login',
  styleUrl: './page-login.css',
  templateUrl: './page-login.html',
})
export class PageLoginComponent implements OnInit {
  private env = inject(EnvironmentService);
  private auth = inject(GoogleAuthService);
  private title = inject(Title);

  protected error = computed(() => this.auth.loginError());

  login() {
    this.auth.requestAccessToken();
  }

  ngOnInit() {
    this.auth.initialize({
      clientId: this.env.config.googleClientId,
      scopes: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/calendar.events',
      ],
    });
  }

  constructor() {
    this.title.setTitle('Login - CountdownApp');
  }
}
