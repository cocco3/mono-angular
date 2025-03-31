import { Component, computed, input } from '@angular/core';
import { formatDays, formatComplex } from '@cocco3/utils';

@Component({
  selector: 'app-countdown',
  styleUrl: './app-countdown.css',
  templateUrl: './app-countdown.html',
})
export class AppCountdownComponent {
  date = input.required<string>();
  name = input.required<string>();
  format = input.required<'days' | 'detailed'>();

  protected formattedDate = computed(() => {
    return this.format() === 'days'
      ? formatDays(this.date())
      : formatComplex(this.date());
  });
}
