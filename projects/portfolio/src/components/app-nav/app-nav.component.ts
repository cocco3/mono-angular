import { Component, input } from '@angular/core';

@Component({
  host: {
    '[class.active]': 'active()',
  },
  selector: 'a[app-nav]',
  styleUrl: './app-nav.css',
  template: '<ng-content />',
})
export class AppNavComponent {
  active = input<boolean>(false);
}
