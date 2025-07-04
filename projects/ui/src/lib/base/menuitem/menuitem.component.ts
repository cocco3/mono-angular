import { Component, input } from '@angular/core';

/**
 * Add `[ui-menuitem]` attribute on any anchor element.
 */
@Component({
  selector: 'a[ui-menuitem]',
  styleUrls: ['./menuitem.css'],
  templateUrl: './menuitem.html',
})
export class UiMenuItemAnchorComponent {
  description = input<string>();
}

/**
 * Add `[ui-menuitem]` attribute on any button element.
 */
@Component({
  host: {
    type: 'button',
  },
  selector: 'button[ui-menuitem]',
  styleUrls: ['./menuitem.css'],
  templateUrl: './menuitem.html',
})
export class UiMenuItemButtonComponent {
  description = input<string>();
}
