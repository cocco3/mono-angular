import {
  Component,
  computed,
  inject,
  type OnInit,
  signal,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { compareAsc } from 'date-fns';
import { UiButtonComponent } from '@cocco3/angular-ui';
import { GoogleCalendarService } from '../../services/GoogleCalendarService';
import { UserSettingsService } from '../../services/UserSettingsService';
import {
  CountdownComponent,
  type CountdownFormat,
} from '../countdown/countdown.component';
import { EventsEmptyComponent } from '../events-empty/events-empty.component';
import { CreateEventDialogComponent } from '../create-event-dialog/create-event-dialog.component';

type EventItem = {
  id: string;
  name: string;
  date: string;
};

@Component({
  imports: [
    CountdownComponent,
    CreateEventDialogComponent,
    EventsEmptyComponent,
    UiButtonComponent,
  ],
  selector: 'app-page-events',
  styleUrl: './page-events.css',
  templateUrl: './page-events.html',
})
export class PageEventsComponent implements OnInit {
  private readonly calendarService = inject(GoogleCalendarService);
  private readonly title = inject(Title);

  private readonly userSettingsService = inject(UserSettingsService);
  private readonly userSettings = computed(() =>
    this.userSettingsService.settings()
  );

  protected format = signal<CountdownFormat>(this.userSettings().defaultFormat);

  protected items = signal<EventItem[] | null>(null);
  protected hasItems = computed(() => {
    const itemsCount = this.items()?.length || 0;
    return itemsCount > 0;
  });

  protected handleCountdownClick() {
    if (this.format() === 'days') {
      this.format.set('detailed');
    } else {
      this.format.set('days');
    }
  }

  protected fetchItems() {
    this.calendarService
      .getEvents({
        calendarId: this.userSettings().defaultCalendarId,
        query: this.userSettings().query,
      })
      .subscribe({
        next: (events) => {
          const transformedEvents = events.sort((a, b) =>
            compareAsc(a.date, b.date)
          );
          this.items.set(transformedEvents);
        },
        error: (error) => {
          console.error('Error loading countdown events:', error);
        },
      });
  }

  ngOnInit() {
    this.fetchItems();
  }

  constructor() {
    this.title.setTitle('Events - CountdownApp');
  }
}
