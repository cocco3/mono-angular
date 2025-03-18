import { booleanAttribute, Component, computed, input } from '@angular/core';
import { UiTextareaAutosizeDirective } from './textarea-autosize.directive';

/**
 * Usage: Add `ui-textarea` to any `<textarea>` element.
 */
@Component({
  exportAs: 'uiTextarea',
  host: {
    '[class]': 'cssClass()',
  },
  hostDirectives: [
    {
      directive: UiTextareaAutosizeDirective,
      inputs: ['uiAutosize: autosize'],
    },
  ],
  selector: 'textarea[ui-textarea]',
  standalone: true,
  styleUrls: ['./textarea.css'],
  template: '<ng-content />',
})
export class UiTextareaComponent {
  /** Allow the textarea to grow/shrink as you type */
  autosize = input(false, { transform: booleanAttribute });

  protected cssClass = computed(() => ({
    autosize: this.autosize(),
  }));
}
