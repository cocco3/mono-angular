import { Component, inject } from '@angular/core';
import { type UiIconKind } from '@cocco3/angular-ui';
import { ContentService } from '../../content/ContentService';
import { AppLabelComponent } from '../label/label.component';
import { AppSocialLinkComponent } from '../social-link/social-link.component';
import { SectionScrollSpyDirective } from '../../scroll-spy/section-scroll-spy.directive';

type SocialLink = {
  label: string;
  href: string;
  icon: UiIconKind;
};

@Component({
  imports: [
    AppLabelComponent,
    AppSocialLinkComponent,
    SectionScrollSpyDirective,
  ],
  selector: 'app-about-section',
  styleUrl: './about-section.css',
  templateUrl: './about-section.html',
})
export class AppAboutSection {
  private readonly content = inject(ContentService);
  protected info = this.content.info;

  protected sectionId = 'about';
  protected headingId = `heading-${this.sectionId}`;

  protected socialLinks: SocialLink[] = [
    { label: 'GitHub', href: this.info.github, icon: 'github' },
    // { label: 'CodePen', href: this.info.codePen, icon: 'codepen' },
    { label: 'LinkedIn', href: this.info.linkedIn, icon: 'linked-in' },
    { label: 'Email', href: `mailto:${this.info.email}`, icon: 'mail' },
  ];
}
