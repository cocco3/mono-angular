import { Component, inject } from '@angular/core';
import {
  UiItemGridComponent,
  UiYouTubeVideoComponent,
} from '@cocco3/angular-ui';
import { ContentService } from '../../content/ContentService';
import { injectAnalytics } from '../../analytics';

@Component({
  imports: [UiItemGridComponent, UiYouTubeVideoComponent],
  selector: 'app-videos-grid',
  templateUrl: './videos-grid.html',
})
export class AppVideosGrid {
  private readonly analytics = injectAnalytics();
  private readonly content = inject(ContentService);
  protected videos = this.content.videos;

  protected handleLoaded(id: string, name: string) {
    this.analytics.trackEvent({ name: 'video_viewed', data: { id, name } });
  }
}
