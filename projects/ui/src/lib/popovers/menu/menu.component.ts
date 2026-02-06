import { Component } from '@angular/core';

/**
 * Use with [uiPopover](../../utils/popover.directive.ts) directive.
 */
@Component({
  host: { role: 'menu' },
  selector: 'ui-menu',
  styleUrl: './menu.css',
  template: `
    <div class="content">
      <ng-content />
    </div>
  `,
})
export class UiMenuComponent {}

@Component({
  host: { role: 'group' },
  selector: 'ui-menusection',
  styles: `
    :host {
      box-sizing: border-box;
      display: block;
      padding-block: 4px;
      padding-inline: 4px;
    }
  `,
  template: `<ng-content />`,
})
export class UiMenuSectionComponent {}
