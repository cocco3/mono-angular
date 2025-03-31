import { Component, input } from '@angular/core';
import { UiWrapperComponent } from '../../layout/ui-wrapper/ui-wrapper.component';

@Component({
  selector: 'ui-app-header',
  imports: [UiWrapperComponent],
  styleUrl: './app-header.css',
  templateUrl: './app-header.html',
})
export class UiAppHeaderComponent {
  title = input.required<string>();
}
