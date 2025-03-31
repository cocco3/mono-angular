import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMainComponent } from './app-main/app-main.component';
import { GoogleAuthService } from './services/GoogleAuthService';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppHeaderComponent } from './app-header/app-header';

@Component({
  host: { class: 'theme-dark' },
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AppLoginComponent,
    AppMainComponent,
    AppHeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected title = 'countdown';

  private auth = inject(GoogleAuthService);
  protected isAuthenticated = computed(() => !!this.auth.accessToken());
}
