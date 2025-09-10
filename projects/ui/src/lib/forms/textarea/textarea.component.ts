import {
  booleanAttribute,
  Component,
  computed,
  forwardRef,
  input,
} from '@angular/core';
import { UiTextareaAutosizeDirective } from './textarea-autosize.directive';
import { UiFormFieldDirective } from '../form-field/form-field.directive';

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
  providers: [
    {
      provide: UiFormFieldDirective,
      useExisting: forwardRef(() => UiTextareaComponent),
    },
  ],
  selector: 'textarea[ui-textarea]',
  styleUrl: './textarea.css',
  template: '<ng-content />',
})
export class UiTextareaComponent extends UiFormFieldDirective<HTMLTextAreaElement> {
  /** Allow the textarea to grow/shrink as you type */
  autosize = input(false, { transform: booleanAttribute });

  protected cssClass = computed(() => ({
    autosize: this.autosize(),
  }));
}
