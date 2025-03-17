import { Component } from '@angular/core';
import { UiButtonComponent } from 'ui';

@Component({
  imports: [UiButtonComponent],
  selector: 'app-header',
  standalone: true,
  template: `<button ui-button>Hello</button>`,
})
export class AppHeaderComponent {}
