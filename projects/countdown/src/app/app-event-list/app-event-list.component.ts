import {
  Component,
  computed,
  inject,
  Inject,
  type OnInit,
  signal,
} from '@angular/core';
import { compareAsc } from 'date-fns';
import {
  UiEmptyComponent,
  UiIconComponent,
  UiSlotDirective,
} from '@cocco3/angular-ui';
import {
  AppCountdownComponent,
  type CountdownFormat,
} from '../app-countdown/app-countdown.component';
import { GoogleCalendarService } from './GoogleCalendarService';
import { UserSettingsService } from '../services/UserSettingsService';

type EventItem = {
  id: string;
  name: string;
  date: string;
};

@Component({
  imports: [
    AppCountdownComponent,
    UiEmptyComponent,
    UiSlotDirective,
    UiIconComponent,
  ],
  selector: 'app-event-list',
  styleUrl: './app-event-list.css',
  templateUrl: './app-event-list.html',
})
export class AppEventListComponent implements OnInit {
  private settings = inject(UserSettingsService);
  protected format: CountdownFormat = 'detailed';

  protected items = signal<EventItem[] | null>(null);
  protected hasItems = computed(() => {
    const itemsCount = this.items()?.length || 0;
    return itemsCount > 0;
  });

  protected handleCountdownClick() {
    if (this.format === 'days') {
      this.format = 'detailed';
    } else {
      this.format = 'days';
    }
  }

  constructor(
    @Inject(GoogleCalendarService)
    private calendarService: GoogleCalendarService
  ) {}

  ngOnInit() {
    this.calendarService
      .getCountdownEvents({
        calendarId: this.settings.defaultCalendarId,
        query: this.settings.query,
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
}
