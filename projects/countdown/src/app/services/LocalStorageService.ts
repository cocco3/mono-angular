import { Injectable } from '@angular/core';
import { LocalStorage } from '@cocco3/utils';

export const UserSettingThemes = ['auto', 'light', 'dark'] as const;
export type UserSettingTheme = (typeof UserSettingThemes)[number];

export const UserSettingFormats = ['detailed', 'days'] as const;
export type UserSettingFormat = (typeof UserSettingFormats)[number];

export type AppLocalStorage = {
  settings: {
    query: string;
    theme: UserSettingTheme;
    timeZone: string;
    defaultCalendarId: string;
    defaultFormat: UserSettingFormat;
  };
};

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly localStorage = new LocalStorage<AppLocalStorage>();

  get = this.localStorage.get.bind(this.localStorage);
  set = this.localStorage.set.bind(this.localStorage);
  remove = this.localStorage.remove.bind(this.localStorage);
}
