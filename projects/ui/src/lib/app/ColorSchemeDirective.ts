import { Directive, effect, inject, input, Renderer2 } from '@angular/core';

export const UiColorSchemes = ['system', 'light', 'dark'] as const;
export type UiColorScheme = (typeof UiColorSchemes)[number];

const colorSchemeCssMap = {
  system: 'light dark',
  light: 'light',
  dark: 'dark',
} satisfies Record<UiColorScheme, string>;

@Directive({
  exportAs: 'uiColorScheme',
  selector: '[uiColorScheme]',
})
export class ColorSchemeDirective {
  private readonly renderer = inject(Renderer2);

  scheme = input<UiColorScheme>('system', { alias: 'uiColorScheme' });

  constructor() {
    effect(() => {
      const colorScheme = colorSchemeCssMap[this.scheme()];
      console.log({ colorScheme });
      this.renderer.setStyle(
        document.documentElement,
        'color-scheme',
        colorScheme
      );
    });
  }
}
