import {
  booleanAttribute,
  Component,
  computed,
  ElementRef,
  inject,
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
    {
      directive: UiFormFieldDirective,
    },
  ],
  selector: 'textarea[ui-textarea]',
  styleUrls: ['./textarea.css'],
  template: '<ng-content />',
})
export class UiTextareaComponent {
  public readonly elementRef = inject(ElementRef<HTMLTextAreaElement>);

  /** Allow the textarea to grow/shrink as you type */
  autosize = input(false, { transform: booleanAttribute });

  protected cssClass = computed(() => ({
    autosize: this.autosize(),
  }));
}
