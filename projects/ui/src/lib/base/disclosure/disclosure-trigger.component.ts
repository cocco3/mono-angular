import { Component } from '@angular/core';
import { UiIconComponent } from '../icon/icon.component';

/**
 * Usage: Add `ui-disclosure-trigger` to any `<summary>` element.
 *
 * This is an opinionated toggle for the `disclosure` component.
 *
 * If this doesn't suit your needs, you can provide your own `summary` element.
 */
@Component({
  imports: [UiIconComponent],
  selector: 'summary[ui-disclosure-trigger]',
  styleUrl: './disclosure-trigger.css',
  template: `
    <ui-icon kind="chevron-right" class="icon" />
    <ng-content />
  `,
})
export class UiDisclosureTriggerComponent {}
