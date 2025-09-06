import { Component, effect, inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserSettingsService } from './services/UserSettingsService';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly renderer = inject(Renderer2);
  private readonly userSettingsService = inject(UserSettingsService);
  protected title = 'CountdownApp';

  private getColorSchemeCss = (value: string) =>
    ({
      light: 'light',
      dark: 'dark',
      auto: 'light dark',
    })[value];

  constructor() {
    effect(() => {
      this.renderer.setStyle(
        document.documentElement,
        'color-scheme',
        this.getColorSchemeCss(this.userSettingsService.settings().theme)
      );
    });
  }
}
