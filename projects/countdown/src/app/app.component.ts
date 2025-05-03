import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  host: { class: 'theme-dark' },
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected title = 'CountdownApp';
}
