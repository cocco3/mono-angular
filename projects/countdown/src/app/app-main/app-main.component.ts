import { Component, inject, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiWrapperComponent } from '@cocco3/angular-ui';
import { AppHeaderComponent } from '../app-header/app-header';
import { GoogleUserInfoService } from '../services/GoogleUserInfoService';

@Component({
  imports: [RouterOutlet, AppHeaderComponent, UiWrapperComponent],
  selector: 'app-main',
  styleUrl: './app-main.css',
  templateUrl: './app-main.html',
})
export class AppMainComponent implements OnInit {
  private userService = inject(GoogleUserInfoService);

  ngOnInit() {
    this.userService.fetchUserInfo();
  }
}
