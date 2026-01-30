import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
  output,
} from '@angular/core';
import { uniqueId } from '@cocco3/utils';
import { injectIsBrowser } from '../../injectIsBrowser';

/**
 * A lightweight YouTube embed component using the
 * [lite-youtube web component](https://github.com/justinribeiro/lite-youtube?tab=readme-ov-file).
 *
 * Displays a thumbnail that loads the YouTube video on click,
 * reducing page load compared to iframes.
 */
@Component({
  host: {
    '[attr.aria-labelledby]': 'headingId',
  },
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'article[ui-youtube-video]',
  styleUrl: './youtube-video.css',
  templateUrl: './youtube-video.html',
})
export class UiYouTubeVideoComponent {
  private readonly isBrowser = injectIsBrowser();

  constructor() {
    if (!this.isBrowser) return;

    import('@justinribeiro/lite-youtube');
  }

  videoId = input.required<string>();
  videoTitle = input.required<string>();
  readonly afterLoad = output<{ id: string; name: string }>();

  protected headingId = uniqueId();

  protected videoUrl = computed(
    () => `https://www.youtube.com/embed/${this.videoId()}`
  );
  protected showTitle = true;

  protected handleClick() {
    this.showTitle = false;
  }

  protected handleIframeLoaded() {
    this.afterLoad.emit({ id: this.videoId(), name: this.videoTitle() });
  }
}
