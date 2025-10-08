import { Component, inject } from '@angular/core';
import { UiItemGridComponent, SafeResourceUrlPipe } from '@cocco3/angular-ui';
import { ContentService } from '../../content/ContentService';

@Component({
  imports: [UiItemGridComponent, SafeResourceUrlPipe],
  selector: 'app-videos-grid',
  styleUrl: './videos-grid.css',
  templateUrl: './videos-grid.html',
})
export class AppVideosGrid {
  private readonly content = inject(ContentService);
  protected videos = this.content.videos;
}
