import { Component } from '@angular/core';

/**
 * Use with [uiPopover](../../utils/popover.directive.ts) directive.
 */
@Component({
  selector: 'ui-tooltip',
  styleUrl: './tooltip.css',
  template: `
    <div class="content">
      <ng-content />
    </div>
  `,
})
export class UiTooltipComponent {}
