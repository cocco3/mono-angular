import { Component, type OnInit, signal } from '@angular/core';
import { UiWrapperComponent } from '@cocco3/angular-ui';
import { AppEventListComponent } from '../app-event-list/app-event-list.component';
import { type EventItem, getCalendarEvents } from '../google/getCalendarEvents';

@Component({
  imports: [UiWrapperComponent, AppEventListComponent],
  selector: 'app-main',
  styleUrl: './app-main.css',
  templateUrl: './app-main.html',
})
export class AppMainComponent implements OnInit {
  protected items = signal<EventItem[]>([]);

  ngOnInit() {
    this.items.set(getCalendarEvents());
  }
}
