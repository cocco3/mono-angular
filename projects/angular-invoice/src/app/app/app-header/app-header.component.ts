import { Component } from '@angular/core';
import { UiAvatarComponent, UiWrapperComponent } from '@cocco3/angular-ui';

@Component({
  selector: 'app-header',
  imports: [UiAvatarComponent, UiWrapperComponent],
  styleUrl: './app-header.css',
  templateUrl: './app-header.html',
})
export class AppHeaderComponent {}
