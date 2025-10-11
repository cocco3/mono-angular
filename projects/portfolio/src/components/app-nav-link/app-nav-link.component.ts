import { Component, input } from '@angular/core';

@Component({
  host: {
    '[class.active]': 'active()',
  },
  selector: 'a[app-nav-link]',
  styleUrl: './app-nav-link.css',
  template: '<ng-content />',
})
export class AppNavComponent {
  active = input<boolean>(false);
}
