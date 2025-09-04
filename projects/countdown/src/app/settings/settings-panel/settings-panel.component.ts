import { Component, input } from '@angular/core';

@Component({
  selector: 'app-settings-panel',
  styleUrls: ['./settings-panel.css'],
  templateUrl: './settings-panel.html',
})
export class SettingsPanelComponent {
  heading = input.required<string>();
}
