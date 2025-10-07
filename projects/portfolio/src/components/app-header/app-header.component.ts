import { Component } from '@angular/core';
import { AppNavListComponent } from '../app-nav-list/app-nav-list.component';

@Component({
  selector: 'app-header',
  imports: [AppNavListComponent],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class AppHeaderComponent {
  protected items = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'videos', label: 'Videos' },
  ];
}
