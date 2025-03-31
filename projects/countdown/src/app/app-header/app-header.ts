import { Component, computed, inject } from '@angular/core';
import {
  UiAppHeaderComponent,
  UiAvatarComponent,
  UiSlotDirective,
  UiAppHeaderButtonComponent,
  UiIconComponent,
} from '@cocco3/angular-ui';
import { UserService } from '../services/user.service';
import { GoogleAuthService } from '../services/GoogleAuthService';

@Component({
  imports: [
    UiAppHeaderComponent,
    UiSlotDirective,
    UiAvatarComponent,
    UiAppHeaderButtonComponent,
    UiIconComponent,
  ],
  selector: 'app-header',
  styleUrls: ['./app-header.css'],
  templateUrl: './app-header.html',
})
export class AppHeaderComponent {
  private auth = inject(GoogleAuthService);
  private _user = inject(UserService);
  protected user = computed(() => this._user);

  protected logOut() {
    this.auth.clearAccessToken();
  }
}
