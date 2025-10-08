import { Injectable } from '@angular/core';
import contentExperience from './experience';
import contentInfo from './info';
import contentProjects from './projects';
import contentVideos from './videos';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  public experience = contentExperience;
  public info = contentInfo;
  public projects = contentProjects;
  public videos = contentVideos;
}
