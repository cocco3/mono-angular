import { Component, input } from '@angular/core';
import { UiIconComponent } from '../../base/icon/icon.component';

@Component({
  host: {
    '[class.invalid]': 'invalid()',
  },
  imports: [UiIconComponent],
  selector: 'ui-field-description',
  styleUrl: './field-description.css',
  templateUrl: './field-description.html',
})
export class UiFieldDescriptionComponent {
  invalid = input<boolean>(false);
}
