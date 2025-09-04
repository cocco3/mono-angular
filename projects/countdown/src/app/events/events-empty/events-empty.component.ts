import { Component, computed, inject, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  UiButtonComponent,
  UiEmptyComponent,
  UiIconComponent,
  UiSlotDirective,
} from '@cocco3/angular-ui';
import { UserSettingsService } from '../../services/UserSettingsService';

@Component({
  imports: [
    RouterLink,
    UiButtonComponent,
    UiEmptyComponent,
    UiIconComponent,
    UiSlotDirective,
  ],
  selector: 'app-events-empty',
  templateUrl: './events-empty.html',
})
export class EventsEmptyComponent {
  private readonly userSettingsService = inject(UserSettingsService);
  protected query = computed(() => this.userSettingsService.settings().query);

  readonly createClicked = output();

  protected handleClick() {
    this.createClicked.emit();
  }
}
