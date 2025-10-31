import { DOCUMENT, inject, Injectable, RendererFactory2 } from '@angular/core';
import { Location } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

type MetaData = {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
};

@Injectable({
  providedIn: 'root',
})
export class UIMetaUpdaterService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(RendererFactory2).createRenderer(
    null,
    null
  );
  private readonly location = inject(Location);

  updateMeta(data: MetaData) {
    const {
      title,
      description,
      canonicalUrl,
      ogImage,
      ogType = 'website',
    } = data;

    this.titleService.setTitle(title);
    this.metaService.updateTag({ property: 'og:title', content: title });

    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({
      property: 'og:description',
      content: description,
    });

    this.metaService.updateTag({ property: 'og:type', content: ogType });

    const resolvedUrl = canonicalUrl || this.getCurrentAbsoluteUrl();
    this.metaService.updateTag({ property: 'og:url', content: resolvedUrl });
    this.setCanonicalTag(resolvedUrl);

    if (ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: ogImage });
    }
  }

  private getCurrentAbsoluteUrl() {
    const baseUrl = this.document.location.origin;
    const path = this.location.path();
    return `${baseUrl}${path}`;
  }

  private setCanonicalTag(url: string) {
    const head = this.document.head;
    const existingTag = head.querySelector("link[rel='canonical']");

    if (existingTag) {
      this.renderer.setAttribute(existingTag, 'href', url);
    } else {
      const link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'canonical');
      this.renderer.setAttribute(link, 'href', url);
      this.renderer.appendChild(head, link);
    }
  }
}
