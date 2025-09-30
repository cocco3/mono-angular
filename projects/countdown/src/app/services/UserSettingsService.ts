import { inject, Injectable, signal } from '@angular/core';
import { sleep } from '@cocco3/utils';
import {
  type AppLocalStorage,
  LocalStorageService,
} from './LocalStorageService';

export const UserSettingThemes = ['auto', 'light', 'dark'] as const;
export type UserSettingTheme = (typeof UserSettingThemes)[number];

export const UserSettingFormats = ['detailed', 'days'] as const;
export type UserSettingFormat = (typeof UserSettingFormats)[number];

type UserSettings = AppLocalStorage['settings'];

const DEFAULT_SETTINGS: UserSettings = {
  query: '#countdown',
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  defaultCalendarId: 'primary',
  defaultFormat: 'detailed',
  theme: 'auto',
};

@Injectable({
  providedIn: 'root',
})
export class UserSettingsService {
  private readonly localStorage = inject(LocalStorageService);

  private readonly settingsSignal = signal<UserSettings>(DEFAULT_SETTINGS);
  public readonly settings = this.settingsSignal.asReadonly();

  constructor() {
    const stored = this.get();
    this.settingsSignal.set(stored);
  }

  get() {
    const stored = this.localStorage.get('settings');
    return { ...DEFAULT_SETTINGS, ...(stored ?? {}) };
  }

  async save(value: UserSettings) {
    await sleep(250); /* make it look like something is happening */
    this.localStorage.set('settings', value);
    this.settingsSignal.set(value);
  }
}
