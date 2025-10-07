import { Component, inject } from '@angular/core';
import { UiItemGridComponent } from '@cocco3/angular-ui';
import { ContentService } from '../../content/ContentService';
import { AppExperienceItemComponent } from '../experience-item/experience-item.component';

@Component({
  imports: [UiItemGridComponent, AppExperienceItemComponent],
  selector: 'app-experience-list',
  templateUrl: './experience-list.html',
})
export class AppExperienceList {
  private readonly content = inject(ContentService);
  protected experience = this.content.experience;
}
