import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserSettingsService {
  public query = '#countdown';
  public defaultCalendarId = 'primary';
  public defaultFormat = 'detailed';
}
