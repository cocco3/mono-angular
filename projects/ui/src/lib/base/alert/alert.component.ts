import {
  Component,
  computed,
  input,
  type OnInit,
  Output,
  EventEmitter,
  signal,
  type OnDestroy,
} from '@angular/core';
import { type Milliseconds, asMilliseconds } from '@cocco3/utils';
import { UiButtonComponent } from '../button/button.component';
import { UiIconComponent } from '../icon/icon.component';
import { UiSlotDirective } from '../../layout/slot/slot.directive';

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
export class UiAlertComponent implements OnInit, OnDestroy {
  dismissible = input<boolean>(false);
  heading = input<string>();
  kind = input.required<UiAlertKind>();

  // Show a progress bar countdown for the duration (in ms)
  duration = input<Milliseconds>();

  // eslint-disable-next-line @angular-eslint/prefer-output-emitter-ref
  @Output() readonly dismissClicked = new EventEmitter();

  private intervalId: ReturnType<typeof setInterval> | null = null;
  private remainingTime = signal<Milliseconds>(asMilliseconds(0));

  protected progress = computed(() => {
    const duration = this.duration();
    if (!duration) return 0;
    return (this.remainingTime() / duration) * 100;
  });

  protected handleDismissClick() {
    this.dismissClicked.emit();
  }

  protected cssClass = computed(() => ({
    [`kind-${this.kind()}`]: !!this.kind(),
  }));

  private initProgress() {
    const duration = this.duration();
    if (!duration) return;

    const tick = asMilliseconds(5);

    this.remainingTime.set(duration);

    this.intervalId = setInterval(() => {
      this.remainingTime.update((time) => {
        const updatedTime = time - tick;
        return asMilliseconds(updatedTime);
      });

      if (this.remainingTime() <= 0) {
        this.clearTimer();
      }
    }, tick);
  }

  ngOnInit() {
    this.initProgress();

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

  ngOnDestroy() {
    this.clearTimer();
  }

  private clearTimer() {
    if (this.intervalId != null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
