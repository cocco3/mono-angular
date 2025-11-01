import { DOCUMENT, inject, Injectable, RendererFactory2 } from '@angular/core';
import { Location } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { startsWithAny } from '@cocco3/utils';

type MetaData = {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
};

/**
 * SEO metadata service for managing title, description, canonical URLs,
 * and {@link https://ogp.me/ Open Graph} tags.
 */
@Injectable({
  providedIn: 'root',
})
export class UiMetaService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(RendererFactory2).createRenderer(
    null,
    null
  );
  private readonly location = inject(Location);

  updateTags(data: MetaData) {
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
      const resolvedImageUrl = this.resolveImageUrl(ogImage);
      this.metaService.updateTag({
        property: 'og:image',
        content: resolvedImageUrl,
      });
    }
  }

  private getCurrentAbsoluteUrl() {
    const baseUrl = this.document.location.origin;
    const path = this.location.path();
    return `${baseUrl}${path}`;
  }

  private resolveImageUrl(image: string) {
    const isAbsolute = startsWithAny(image, ['http://', 'https://']);

    if (isAbsolute) {
      return image;
    }

    const removeLeadingForwardSlashes = (str: string) => {
      return str.replace(/^\/+/, '');
    };

    const origin = this.document.location.origin;
    const cleanedPath = removeLeadingForwardSlashes(image);
    return `${origin}/${cleanedPath}`;
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
