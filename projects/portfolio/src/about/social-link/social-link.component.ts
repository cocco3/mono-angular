import { Component, input } from '@angular/core';
import { UiIconComponent, type UiIconKind } from '@cocco3/angular-ui';

@Component({
  imports: [UiIconComponent],
  selector: 'a[app-social-link]',
  styleUrl: './social-link.css',
  templateUrl: './social-link.html',
})
export class AppSocialLinkComponent {
  icon = input.required<UiIconKind>();
}
