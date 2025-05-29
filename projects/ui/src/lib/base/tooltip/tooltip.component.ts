import { Component } from '@angular/core';

/**
 * Use with uiPopover to show/hide/toggle and placement.
 */
@Component({
  exportAs: 'uiTooltip',
  selector: 'ui-tooltip',
  styleUrl: './tooltip.css',
  template: `
    <div class="content">
      <ng-content />
    </div>
  `,
})
export class UiTooltipComponent {}
