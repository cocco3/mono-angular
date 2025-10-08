import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Analytics } from '@cocco3/angular-ui';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Joe Cocco | Front-end Web Engineer');
  private readonly _analytics = inject(Analytics);
}
