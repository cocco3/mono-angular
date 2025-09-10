import { Component, input, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { svgIconStore } from '../../icons';
import { UiIconService } from './icon.service';

export const UiIconKinds = Object.keys(svgIconStore);
export type UiIconKind = keyof typeof svgIconStore;

/**
 * Single path and single color line icons.
 */
@Component({
  exportAs: 'uiIcon',
  host: {
    'aria-hidden': 'true',
    focusable: 'false',
    '[innerHTML]': 'svg()',
    '[style.width]': 'size()',
    '[style.color]': 'color()',
  },
  selector: 'ui-icon',
  styleUrl: './icon.css',
  template: '',
})
export class UiIconComponent {
  private sanitizer = inject(DomSanitizer);
  private iconService = inject(UiIconService);

  /** Any valid icon */
  kind = input.required<UiIconKind>();

  /** Any valid CSS color value. */
  color = input<string>();

  /** Any valid CSS size value. */
  size = input<string>();

  protected svg = computed(() => {
    const svgContent = this.iconService.getSvgForName(this.kind());
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  });
}
