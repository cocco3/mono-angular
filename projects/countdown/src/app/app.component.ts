import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorSchemeDirective, type UiColorScheme } from '@cocco3/angular-ui';
import { UserSettingsService } from './services/UserSettingsService';

@Component({
  hostDirectives: [
    {
      directive: ColorSchemeDirective,
      inputs: ['uiColorScheme: colorScheme'],
    },
  ],
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected title = 'CountdownApp';
  private readonly userSettingsService = inject(UserSettingsService);
  protected colorScheme: UiColorScheme;

  constructor() {
    this.colorScheme = this.userSettingsService.settings().theme;

    effect(() => {
      this.colorScheme = this.userSettingsService.settings().theme;
    });
  }
}
