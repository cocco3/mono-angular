import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppNavComponent } from '../app-nav/app-nav.component';
import { SectionScrollSpyService } from '../../scroll-spy/section-scroll-spy.service';
import { NavScrollSpyDirective } from '../../scroll-spy/nav-scroll-spy.directive';

type AppNavItem = {
  id: string;
  label: string;
};

@Component({
  imports: [AppNavComponent, RouterLink, NavScrollSpyDirective],
  selector: 'app-nav-list',
  templateUrl: 'app-nav-list.html',
  styleUrl: './app-nav-list.css',
})
export class AppNavListComponent {
  protected readonly sectionScrollSpy = inject(SectionScrollSpyService);

  items = input.required<AppNavItem[]>();
  protected activeId = this.sectionScrollSpy.activeId;
}
