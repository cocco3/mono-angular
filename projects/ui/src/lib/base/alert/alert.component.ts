import {
  Component,
  computed,
  input,
  type OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { UiButtonComponent } from '../button/button.component';
import { UiIconComponent } from '../icon/icon.component';
import { UiSlotDirective } from '../../layout/slot.directive';

export const UiAlertKinds = [
  'neutral',
  'negative',
  'warning',
  'positive',
  'info',
] as const;
export type UiAlertKind = (typeof UiAlertKinds)[number];

@Component({
  host: {
    '[class]': 'cssClass()',
  },
  imports: [UiButtonComponent, UiIconComponent, UiSlotDirective],
  selector: 'ui-alert',
  styleUrl: './alert.css',
  templateUrl: './alert.html',
})
export class UiAlertComponent implements OnInit {
  dismissible = input(false);
  heading = input<string>();
  kind = input.required<UiAlertKind>();

  // eslint-disable-next-line @angular-eslint/prefer-output-emitter-ref
  @Output() readonly dismissClicked = new EventEmitter();

  protected handleDismissClick() {
    this.dismissClicked.emit();
  }

  protected cssClass = computed(() => ({
    [`kind-${this.kind()}`]: !!this.kind(),
  }));

  ngOnInit() {
    const isDismissible = this.dismissible() === true;
    const isDismissObserved = this.dismissClicked.observed;

    if (isDismissible && !isDismissObserved) {
      console.warn(
        '"dismissible" is true, but no (dismissClicked) detected. Clicking the X will do nothing until (dismissClicked) is provided.'
      );
    } else if (!isDismissible && isDismissObserved) {
      console.warn(
        '"dismissible" is false, so (dismissClicked) will be ignored. Set dismissible="true" so (dismissClicked) works.'
      );
    }
  }
}
