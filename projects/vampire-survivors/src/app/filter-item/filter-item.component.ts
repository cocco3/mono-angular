import { booleanAttribute, Component, input, output } from '@angular/core';
import { UiTooltipComponent, UiPopoverDirective } from '@cocco3/angular-ui';

@Component({
  imports: [UiTooltipComponent, UiPopoverDirective],
  selector: 'app-filter-item',
  styleUrl: './filter-item.css',
  templateUrl: './filter-item.html',
})
export class FilterItemComponent {
  checked = input(false, { transform: booleanAttribute });
  group = input.required<string>();
  image = input.required<string>();
  name = input.required<string>();
  value = input.required<string>();

  readonly changed = output<{ checked: boolean; value: string }>();

  protected handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.changed.emit({ checked: target.checked, value: target.value });
  }
}
