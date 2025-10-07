import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppNavComponent } from '../app-nav/app-nav.component';

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
  items = input.required<AppNavItem[]>();
}
