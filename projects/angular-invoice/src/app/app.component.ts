import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiAppHeaderComponent } from '@cocco3/angular-ui';
import { AppMainComponent } from './app-main/app-main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiAppHeaderComponent, AppMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-invoice';
}
