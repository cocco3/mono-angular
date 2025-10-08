import { Component, input } from '@angular/core';
import { type UiIconKind, UiIconComponent } from '@cocco3/angular-ui';

@Component({
  imports: [UiIconComponent],
  selector: 'app-label',
  styleUrl: './label.css',
  templateUrl: './label.html',
})
export class AppLabelComponent {
  icon = input.required<UiIconKind>();
  value = input.required<string>();
}
