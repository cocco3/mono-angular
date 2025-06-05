import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../data/DataService';
import { EvolutionListComponent } from './evo-list/evo-list.component';
import { ItemFilterComponent } from './item-filter/item-filter.component';
import { AppFooterComponent } from './app-footer/app-footer';
import { ItemFilterService } from './item-filter/item-filter.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    EvolutionListComponent,
    ItemFilterComponent,
    AppFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vampire-survivors';

  private readonly data = inject(DataService);
  private readonly itemFilter = inject(ItemFilterService);

  protected filteredGames = computed(() => {
    const selectedGameId = this.itemFilter.gameId$();

    return selectedGameId
      ? this.data.getAllEvolutions().filter((x) => x.game.id === selectedGameId)
      : this.data.getAllEvolutions();
  });
}
