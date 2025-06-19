import { Component } from '@angular/core';
import { formatIsoDate } from '@cocco3/utils';

@Component({
  host: {
    class: 'theme-dark',
  },
  selector: 'app-footer',
  styleUrl: './app-footer.css',
  templateUrl: './app-footer.html',
})
export class AppFooterComponent {
  protected issuesUrl =
    'https://github.com/cocco3/mono-angular/issues/new?labels=vampire-survivors';

  protected lastUpdatedDate = `Last updated: ${formatIsoDate('2025-06-19')}`;
}
