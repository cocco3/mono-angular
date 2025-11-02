import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiMetaService } from '@cocco3/angular-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly metaService = inject(UiMetaService);

  constructor() {
    this.metaService.updateTags({
      title: 'Vampire Survivors Evolutions',
      description: 'Vampire survivors evolution chart.',
      ogImage: 'og_image.png',
    });
  }
}
