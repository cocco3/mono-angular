import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { UiIconComponent } from '../icon/icon.component';
import { getInitials } from '../../utils/utils';

export const UiAvatarSizes = ['small', 'medium', 'large'] as const;
export type UiAvatarSize = (typeof UiAvatarSizes)[number];

export const UiAvatarFallbacks = ['icon', 'initials'] as const;
export type UiAvatarFallback = (typeof UiAvatarFallbacks)[number];

@Component({
  host: {
    '[class]': 'cssClass()',
  },
  imports: [CommonModule, UiIconComponent],
  selector: 'ui-avatar',
  standalone: true,
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

  protected imageHasError = false;

  protected handleImageError() {
    this.imageHasError = true;
  }

  protected cssClass = computed(() => ({
    [`size-${this.size()}`]: !!this.size(),
  }));
}
