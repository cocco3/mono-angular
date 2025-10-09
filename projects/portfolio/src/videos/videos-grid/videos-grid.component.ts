import { Component, inject } from '@angular/core';
import {
  UiItemGridComponent,
  UiYouTubeVideoComponent,
} from '@cocco3/angular-ui';
import { ContentService } from '../../content/ContentService';

@Component({
  imports: [UiItemGridComponent, UiYouTubeVideoComponent],
  selector: 'app-videos-grid',
  templateUrl: './videos-grid.html',
})
export class AppVideosGrid {
  private readonly content = inject(ContentService);
  protected videos = this.content.videos;
}
