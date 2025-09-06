import { Component, effect, inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiToastsComponent, UiToastService } from '@cocco3/angular-ui';
import { UserSettingsService } from './services/UserSettingsService';
import { RouterEventsService } from './services/RouterEventsService';

@Component({
  imports: [RouterOutlet, UiToastsComponent],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly renderer = inject(Renderer2);
  private readonly routerEvents = inject(RouterEventsService);
  private readonly toastService = inject(UiToastService);

  private readonly userSettingsService = inject(UserSettingsService);
  protected title = 'CountdownApp';

  private getColorSchemeCss = (value: string) =>
    ({
      light: 'light',
      dark: 'dark',
      auto: 'light dark',
    })[value];

  private setColorScheme() {
    this.renderer.setStyle(
      document.documentElement,
      'color-scheme',
      this.getColorSchemeCss(this.userSettingsService.settings().theme)
    );
  }

  private subscribeToRouteChanges() {
    this.routerEvents.registerRouteChange(() => {
      this.toastService.clearAll();
    });
  }

  constructor() {
    this.subscribeToRouteChanges();

    effect(() => {
      this.setColorScheme();
    });
  }
}
