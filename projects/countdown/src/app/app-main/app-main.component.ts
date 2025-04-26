import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { UiWrapperComponent } from '@cocco3/angular-ui';
import { AppHeaderComponent } from '../app-header/app-header';

@Component({
  imports: [RouterOutlet, AppHeaderComponent, UiWrapperComponent],
  selector: 'app-main',
  styleUrl: './app-main.css',
  templateUrl: './app-main.html',
})
export class AppMainComponent {}
