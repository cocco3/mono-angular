import { Component, computed, input, output } from '@angular/core';
import { formatDays, formatComplex } from '@cocco3/utils';

export type CountdownFormat = 'days' | 'detailed';

@Component({
  selector: 'app-countdown',
  styleUrl: './app-countdown.css',
  templateUrl: './app-countdown.html',
})
export class AppCountdownComponent {
  date = input.required<string>();
  name = input.required<string>();
  format = input.required<CountdownFormat>();

  protected readonly clicked = output<void>();

  protected handleClick() {
    this.clicked.emit();
  }

  protected displayName = computed(() => {
    return this.name() || 'Event';
  });

  protected displayDate = computed(() => {
    return this.format() === 'days'
      ? formatDays(this.date())
      : formatComplex(this.date());
  });
}
