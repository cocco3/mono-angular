import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  UiAppHeaderComponent,
  UiAvatarComponent,
  UiSlotDirective,
  UiAppHeaderAnchorComponent,
  UiIconComponent,
} from '@cocco3/angular-ui';
import { GoogleUserInfoService } from '../services/GoogleUserInfoService';

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
  styleUrl: './app-header.css',
  templateUrl: './app-header.html',
})
export class AppHeaderComponent {
  private userService = inject(GoogleUserInfoService);
  protected user = computed(() => this.userService.data());
}
