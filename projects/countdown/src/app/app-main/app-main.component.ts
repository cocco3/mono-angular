import { RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { UiWrapperComponent } from '@cocco3/angular-ui';
import { GoogleAuthService } from '../services/GoogleAuthService';
import { AppHeaderComponent } from '../app-header/app-header';

@Component({
  imports: [RouterOutlet, AppHeaderComponent, UiWrapperComponent],
  selector: 'app-main',
  styleUrl: './app-main.css',
  templateUrl: './app-main.html',
})
export class AppMainComponent {
  private auth = inject(GoogleAuthService);

  protected logOut() {
    this.auth.clearAccessToken();
  }
}
