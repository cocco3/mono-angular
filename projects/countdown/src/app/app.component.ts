import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  host: { class: 'theme-dark' },
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected title = 'countdown';
}
