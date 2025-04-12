import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { type Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GoogleAuthService } from '../services/GoogleAuthService';

type ApiResponse = {
  items: {
    id: string;
    summary?: string;
    description?: string;
    start?: {
      dateTime?: string;
      date?: string;
    };
    end?: {
      dateTime?: string;
      date?: string;
    };
  }[];
};

type EventsData = {
  id: string;
  summary?: string;
  start?: {
    dateTime?: string;
    date?: string;
  };
};

/**
 * docs: https://developers.google.com/workspace/calendar/api/v3/reference/events/list
 */
@Injectable({
  providedIn: 'root',
})
export class GoogleCalendarService {
  private readonly apiUrl =
    'https://www.googleapis.com/calendar/v3/calendars/primary/events';

  private http = inject(HttpClient);
  private auth = inject(GoogleAuthService);

  getCountdownEvents(): Observable<EventsData[]> {
    const accessToken = this.auth.accessToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });

    const now = new Date().toISOString();
    const params = new HttpParams().set('timeMin', now).set('q', '#countdown');

    return this.http.get<ApiResponse>(this.apiUrl, { headers, params }).pipe(
      map((response) => response.items),
      catchError((error) => {
        console.error('Error fetching events:', error);
        throw error;
      })
    );
  }
}
