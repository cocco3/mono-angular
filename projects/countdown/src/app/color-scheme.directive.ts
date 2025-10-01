import { Directive, effect, inject, Renderer2 } from '@angular/core';
import {
  UserSettingsService,
  type UserSettingTheme,
} from './services/UserSettingsService';

@Directive({
  selector: '[appColorScheme]',
})
export class ColorSchemeDirective {
  private readonly renderer = inject(Renderer2);
  private readonly userSettingsService = inject(UserSettingsService);

  private getColorSchemeCss = (colorScheme: UserSettingTheme) => {
    const map = {
      light: 'light',
      dark: 'dark',
      auto: 'light dark',
    } as const satisfies Record<UserSettingTheme, string>;

    return map[colorScheme];
  };

  constructor() {
    effect(() => {
      const colorScheme = this.userSettingsService.settings().theme;

      this.renderer.setStyle(
        document.documentElement,
        'color-scheme',
        this.getColorSchemeCss(colorScheme)
      );
    });
  }
}
