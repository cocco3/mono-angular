import { Component, computed, input, output } from '@angular/core';
import { UiTooltipDirective, UiTooltipComponent } from '@cocco3/angular-ui';
import { formatIsoDate, formatDays, formatComplex } from '@cocco3/utils';

export type CountdownFormat = 'days' | 'detailed';

@Component({
  imports: [UiTooltipComponent, UiTooltipDirective],
  selector: 'app-countdown',
  styleUrl: './countdown.css',
  templateUrl: './countdown.html',
})
export class CountdownComponent {
  date = input.required<string>();
  name = input.required<string>();
  format = input.required<CountdownFormat>();

  protected readonly clicked = output<void>();

  protected handleClick() {
    this.clicked.emit();
  }

  protected formattedDate = computed(() => {
    return formatIsoDate(this.date(), { date: 'long', time: 'short' });
  });

  protected displayName = computed(() => {
    return this.name() || 'Event';
  });

  protected displayDate = computed(() => {
    return this.format() === 'days'
      ? formatDays(this.date())
      : formatComplex(this.date());
  });
}
