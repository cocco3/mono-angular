import { Component, input } from '@angular/core';
import { AppCountdownComponent } from '../app-countdown/app-countdown.component';
import { type EventItem } from '../google/getCalendarEvents';

@Component({
  imports: [AppCountdownComponent],
  selector: 'app-event-list',
  styleUrl: './app-event-list.css',
  templateUrl: './app-event-list.html',
})
export class AppEventListComponent {
  items = input<EventItem[]>();
}
