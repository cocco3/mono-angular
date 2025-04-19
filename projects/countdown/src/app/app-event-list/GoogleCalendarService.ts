import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { type Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { parseDateTime } from '@cocco3/utils';
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

export type EventsData = {
  id: string;
  name: string;
  date: string;
};

/**
 * docs: https://developers.google.com/workspace/calendar/api/v3/reference/events/list
 */
@Injectable({
  providedIn: 'root',
})
export class GoogleCalendarService {
  private readonly apiUrl = 'https://www.googleapis.com/calendar/v3/calendars';

  private http = inject(HttpClient);
  private auth = inject(GoogleAuthService);

  createEvent({
    calendarId,
    query,
    summary,
    startDate,
    startTime,
    endDate,
    endTime,
  }: {
    calendarId: string;
    query: string;
    summary: string;
    startDate: string;
    startTime?: string;
    endDate: string;
    endTime?: string;
  }) {
    const accessToken = this.auth.accessToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    });

    const startDateTime = parseDateTime(startDate, startTime);
    const endDateTime = parseDateTime(endDate, endTime);

    const params = {
      summary,
      description: query,
      start: {
        dateTime: startDateTime,
        timeZone: 'America/Los_Angeles',
      },
      end: {
        dateTime: endDateTime,
        timeZone: 'America/Los_Angeles',
      },
    };

    return this.http.post<unknown>(
      `${this.apiUrl}/${calendarId}/events`,
      params,
      { headers }
    );
  }

  getEvents({
    calendarId,
    query,
  }: {
    calendarId: string;
    query: string;
  }): Observable<EventsData[]> {
    const accessToken = this.auth.accessToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });

    const now = new Date().toISOString();
    const params = new HttpParams().set('timeMin', now).set('q', query);

    return this.http
      .get<ApiResponse>(`${this.apiUrl}/${calendarId}/events`, {
        headers,
        params,
      })
      .pipe(
        map((response) =>
          response.items
            .filter((x) => !!x.start?.dateTime || !!x.start?.date)
            .map((item) => ({
              id: item.id,
              name: item.summary || '',
              date: item.start?.dateTime || item.start?.date || '',
            }))
        ),
        catchError((error) => {
          console.error('Error fetching events:', error);
          throw error;
        })
      );
  }
}
