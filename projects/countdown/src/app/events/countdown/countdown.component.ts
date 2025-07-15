import { Component, computed, input, output } from '@angular/core';
import { UiPopoverDirective, UiTooltipComponent } from '@cocco3/angular-ui';
import { formatIsoDate, formatDays, formatComplex } from '@cocco3/utils';

export const CountdownFormats = ['days', 'detailed'] as const;
export type CountdownFormat = (typeof CountdownFormats)[number];

@Component({
  imports: [UiTooltipComponent, UiPopoverDirective],
  selector: 'app-countdown',
  styleUrl: './countdown.css',
  templateUrl: './countdown.html',
})
export class CountdownComponent {
  date = input.required<string>();
  name = input.required<string>();
  format = input.required<CountdownFormat>();

  readonly clicked = output<void>();

  protected handleClick() {
    this.clicked.emit();
  }

  protected formattedDate = computed(() => {
    return formatIsoDate(this.date(), { date: 'long', time: 'short' });
  });

  protected displayName = computed(() => {
    return this.name().trim() || 'Event';
  });

  protected displayDate = computed(() => {
    return this.format() === 'days'
      ? formatDays(this.date())
      : formatComplex(this.date());
  });
}
