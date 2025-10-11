import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppNavComponent } from '../app-nav-link/app-nav-link.component';
import { SectionScrollSpyService } from '../../scroll-spy/section-scroll-spy.service';
import { NavScrollSpyDirective } from '../../scroll-spy/nav-scroll-spy.directive';

type AppNavItem = {
  id: string;
  label: string;
};

@Component({
  host: {
    'aria-label': 'Main navigation',
  },
  imports: [AppNavComponent, RouterLink, NavScrollSpyDirective],
  selector: 'nav[app-nav]',
  templateUrl: 'app-nav.html',
  styleUrl: './app-nav.css',
})
export class AppNavListComponent {
  protected readonly sectionScrollSpy = inject(SectionScrollSpyService);

  items = input.required<AppNavItem[]>();
  protected activeId = this.sectionScrollSpy.activeId;
}
