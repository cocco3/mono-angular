import { inject, InjectionToken, type Provider } from '@angular/core';

export const UiToastConfigToken = new InjectionToken<UiToastConfig>(
  'UI_TOAST_CONFIG'
);

export type UiToastConfig = {
  /** Default duration in milliseconds (ms) how long toast will be visible. */
  duration: number;

  /** Show a dismiss button. */
  dismissible: boolean;
};

export const defaultToastConfig: UiToastConfig = {
  dismissible: true,
  duration: 5000,
};

export function provideToastConfig(config: Partial<UiToastConfig>): Provider[] {
  return [
    {
      provide: UiToastConfigToken,
      useValue: { ...defaultToastConfig, ...config },
    },
  ];
}

export function injectToastConfig(): UiToastConfig {
  return inject(UiToastConfigToken, { optional: true }) ?? defaultToastConfig;
}
