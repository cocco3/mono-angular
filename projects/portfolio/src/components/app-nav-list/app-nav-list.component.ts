import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppNavComponent } from '../app-nav/app-nav.component';
import { SectionObserverService } from './SectionObserverService';

type AppNavItem = {
  id: string;
  label: string;
};

@Component({
  imports: [AppNavComponent, RouterLink],
  selector: 'app-nav-list',
  templateUrl: 'app-nav-list.html',
  styleUrl: './app-nav-list.css',
})
export class AppNavListComponent {
  private readonly sectionObserver = inject(SectionObserverService);
  items = input.required<AppNavItem[]>();

  protected activeId = computed(() => this.sectionObserver.activeSection());
}
