import {
  Component,
  computed,
  Inject,
  type OnInit,
  signal,
} from '@angular/core';
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

type EventItem = {
  id: string;
  date: string;
  name: string;
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
  protected format: CountdownFormat = 'days';

  protected items = signal<EventItem[] | null>(null);
  protected hasItems = computed(() => {
    const itemsCount = this.items()?.length || 0;
    return itemsCount > 0;
  });

  protected handleCountdownClick() {
    if (this.format === 'days') {
      this.format = 'details';
    } else {
      this.format = 'days';
    }
  }

  constructor(
    @Inject(GoogleCalendarService)
    private calendarService: GoogleCalendarService
  ) {}

  ngOnInit() {
    this.calendarService.getCountdownEvents().subscribe({
      next: (events) => {
        const transformedEvents = events
          .filter((x) => !!x.start?.dateTime || !!x.start?.date)
          .map((x) => ({
            id: x.id,
            date: x.start?.dateTime || x.start?.date || '',
            name: x.summary || 'Event',
          }));
        this.items.set(transformedEvents);
      },
      error: (error) => {
        console.error('Error loading countdown events:', error);
      },
    });
  }
}
