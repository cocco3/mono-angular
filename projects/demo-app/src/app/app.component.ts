import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-app';
}
