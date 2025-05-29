import { Component } from '@angular/core';

@Component({
  exportAs: 'uiTooltip',
  selector: 'ui-tooltip',
  styleUrl: './tooltip.css',
  template: `<ng-content />`,
})
export class UiTooltipComponent {}
