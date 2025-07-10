import { Component, computed, input, signal } from '@angular/core';
import { getInitials } from '@cocco3/utils';
import { UiIconComponent } from '../icon/icon.component';

export const UiAvatarSizes = ['xsmall', 'small', 'medium', 'large'] as const;
export type UiAvatarSize = (typeof UiAvatarSizes)[number];

export const UiAvatarFallbacks = ['icon', 'initials'] as const;
export type UiAvatarFallback = (typeof UiAvatarFallbacks)[number];

@Component({
  host: {
    '[class]': 'cssClass()',
  },
  imports: [UiIconComponent],
  selector: 'ui-avatar',
  styleUrls: ['./avatar.css'],
  templateUrl: './avatar.html',
})
export class UiAvatarComponent {
  /** Size of the avatar */
  size = input.required<UiAvatarSize>();

  /** Full name used for alt text and fallback initials */
  fullName = input.required<string>();

  /** If there is an error loading the photo, fallback will be shown instead */
  photoUrl = input<string>();

  /** What do display if image fails to load */
  fallback = input<UiAvatarFallback>('initials');

  protected alt = computed(() => `Profile picture for ${this.fullName()}`);
  protected initials = computed(() => getInitials(this.fullName()));
  protected imageHasError = signal(false);

  protected viewMode = computed(() => {
    if (!!this.photoUrl() && !this.imageHasError()) {
      return 'photo';
    } else {
      return this.fallback();
    }
  });

  protected handleImageError() {
    this.imageHasError.set(true);
  }

  protected cssClass = computed(() => ({
    [`size-${this.size()}`]: !!this.size(),
  }));
}
