import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
} from '@angular/core';
import '@justinribeiro/lite-youtube';
import { uniqueId } from '@cocco3/utils';

/**
 * A lightweight YouTube embed component using the `lite-youtube` web component.
 *
 * Displays a thumbnail that loads the YouTube video on click,
 * reducing page load compared to iframes.
 *
 * @link https://github.com/justinribeiro/lite-youtube?tab=readme-ov-file
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
  videoId = input.required<string>();
  videoTitle = input.required<string>();

  protected headingId = uniqueId();

  protected videoUrl = computed(
    () => `https://www.youtube.com/embed/${this.videoId()}`
  );
  protected showTitle = true;

  protected handleClick() {
    this.showTitle = false;
  }
}
