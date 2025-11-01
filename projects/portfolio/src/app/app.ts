import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiScrollMarginDirective, UiMetaService } from '@cocco3/angular-ui';

@Component({
  hostDirectives: [UiScrollMarginDirective],
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  private readonly metaService = inject(UiMetaService);

  constructor() {
    this.metaService.updateTags({
      title: 'Joe Cocco | Front-end Web Engineer',
      description:
        'Joe Cocco is a front-end developer based out of San Francisco.',
      ogImage: 'og_image.png',
    });
  }
}
