import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  styleUrl: './app-iframe.css',
  templateUrl: './app-iframe.html',
})
export class AppIframeComponent {
  private sanitizer = inject(DomSanitizer);

  public src = input.required<string>();

  protected safeUrl = computed(() => {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.src());
  });
}
