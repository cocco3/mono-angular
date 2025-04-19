import { Component, inject, type OnInit } from '@angular/core';
import {
  UiButtonComponent,
  UiWrapperComponent,
  UiIconComponent,
} from '@cocco3/angular-ui';
import { GoogleAuthService } from '../services/GoogleAuthService';
import { EnvironmentService } from '../services/EnvironmentService';

@Component({
  imports: [UiButtonComponent, UiWrapperComponent, UiIconComponent],
  selector: 'app-login',
  styleUrl: './app-login.css',
  templateUrl: './app-login.html',
})
export class AppLoginComponent implements OnInit {
  private env = inject(EnvironmentService);
  private auth = inject(GoogleAuthService);

  login() {
    this.auth.authorize();
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
}
