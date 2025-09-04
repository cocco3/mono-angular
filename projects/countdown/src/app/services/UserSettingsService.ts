import { inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from './LocalStorageService';

export type UserSettings = {
  query: string;
  timezone: string;
  defaultCalendarId: string;
  defaultFormat: 'detailed' | 'days';
  theme: 'light' | 'dark' | 'system';
};

const DEFAULT_SETTINGS: UserSettings = {
  query: '#countdown',
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  defaultCalendarId: 'primary',
  defaultFormat: 'detailed',
  theme: 'system',
};

const SETTINGS_KEY = 'user-settings';

@Injectable({
  providedIn: 'root',
})
export class UserSettingsService {
  private readonly store = inject(LocalStorageService);
  private readonly settingsSignal = signal<UserSettings>(DEFAULT_SETTINGS);

  get(): UserSettings {
    const stored = this.store.getItem<UserSettings>(SETTINGS_KEY);
    return { ...DEFAULT_SETTINGS, ...(stored ?? {}) };
  }

  set(settings: UserSettings): void {
    this.store.setItem<UserSettings>(SETTINGS_KEY, settings);
  }

  update(partial: Partial<UserSettings>) {
    const updated = { ...this.get(), ...partial };
    this.set(updated);
  }

  clear(): void {
    this.store.removeItem(SETTINGS_KEY);
  }

  has(): boolean {
    return this.store.hasKey(SETTINGS_KEY);
  }
}
