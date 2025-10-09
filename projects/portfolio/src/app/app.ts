import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Analytics, UiScrollMarginDirective } from '@cocco3/angular-ui';

@Component({
  hostDirectives: [UiScrollMarginDirective],
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Joe Cocco | Front-end Web Engineer');

  // Analytics needs to be injected at least once to initialize the service
  private readonly _analytics = inject(Analytics);
}
