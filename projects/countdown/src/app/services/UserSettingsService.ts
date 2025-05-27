import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserSettingsService {
  public query = '#countdown';
  public timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  public defaultCalendarId = 'primary';
  public defaultFormat = 'detailed';
}
