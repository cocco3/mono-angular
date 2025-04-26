import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  UiAppHeaderComponent,
  UiAvatarComponent,
  UiSlotDirective,
  UiAppHeaderAnchorComponent,
  UiIconComponent,
} from '@cocco3/angular-ui';
import { UserService } from '../services/UserService';

@Component({
  imports: [
    RouterLink,
    UiAppHeaderComponent,
    UiSlotDirective,
    UiAvatarComponent,
    UiAppHeaderAnchorComponent,
    UiIconComponent,
  ],
  selector: 'app-header',
  styleUrls: ['./app-header.css'],
  templateUrl: './app-header.html',
})
export class AppHeaderComponent {
  private _user = inject(UserService);
  protected user = computed(() => this._user);
}
