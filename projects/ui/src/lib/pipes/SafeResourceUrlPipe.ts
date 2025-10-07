import { inject, Pipe, type PipeTransform } from '@angular/core';
import { DomSanitizer, type SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeResourceUrl',
})
export class SafeResourceUrlPipe implements PipeTransform {
  private readonly sanitizer = inject(DomSanitizer);

  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
