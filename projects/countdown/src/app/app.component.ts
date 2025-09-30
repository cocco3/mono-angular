import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiToastsComponent, UiToastService } from '@cocco3/angular-ui';
import { RouterEventsService } from './services/RouterEventsService';
import { ColorSchemeDirective } from './color-scheme.directive';

@Component({
  hostDirectives: [ColorSchemeDirective],
  imports: [RouterOutlet, UiToastsComponent],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly routerEvents = inject(RouterEventsService);
  private readonly toastService = inject(UiToastService);
  protected title = 'CountdownApp';

  private subscribeToRouteChanges() {
    this.routerEvents.registerRouteChange(() => {
      this.toastService.clearAll();
    });
  }

  constructor() {
    this.subscribeToRouteChanges();
  }
}
