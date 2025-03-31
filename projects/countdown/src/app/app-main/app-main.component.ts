import { Component } from '@angular/core';
import { UiWrapperComponent } from '@cocco3/angular-ui';
import { AppEventListComponent } from '../app-event-list/app-event-list.component';

@Component({
  imports: [UiWrapperComponent, AppEventListComponent],
  selector: 'app-main',
  styleUrl: './app-main.css',
  templateUrl: './app-main.html',
})
export class AppMainComponent {}
