import { Component, input } from '@angular/core';

@Component({
  selector: 'app-settings-panel',
  styleUrl: './settings-panel.css',
  templateUrl: './settings-panel.html',
})
export class SettingsPanelComponent {
  heading = input.required<string>();
}
