import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../data/DataService';
import { EvolutionListComponent } from './evo-list/evo-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EvolutionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vampire-survivors';
  data = inject(DataService);

  protected baseGame = computed(() => {
    return this.data.getEvolutions('base');
  });

  protected legacyOfMoonspell = computed(() => {
    return this.data.getEvolutions('moonspell');
  });

  protected tidesOfFoscari = computed(() => {
    return this.data.getEvolutions('foscari');
  });

  protected emergencyMeeting = computed(() => {
    return this.data.getEvolutions('emergency-meeting');
  });

  protected operationGuns = computed(() => {
    return this.data.getEvolutions('operation-guns');
  });
}
