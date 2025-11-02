import { Component, computed, inject } from '@angular/core';
import { DataService } from '../../data/DataService';
import { AppFooterComponent } from '../app-footer/app-footer';
import { EvolutionListComponent } from '../evo-list/evo-list.component';
import { FiltersComponent } from '../filters/filters.component';
import { ItemFilterService } from '../filters/filters.service';

@Component({
  selector: 'app-page-home',
  imports: [EvolutionListComponent, FiltersComponent, AppFooterComponent],
  styleUrl: './page-home.css',
  templateUrl: './page-home.html',
})
export class PageHomeComponent {
  private readonly data = inject(DataService);
  private readonly itemFilter = inject(ItemFilterService);

  protected filteredGames = computed(() => {
    const allGames = this.data.getAllEvolutions();
    const selectedGames = this.itemFilter.games$();
    const selectedPassives = this.itemFilter.passives$();

    if (selectedGames.length) {
      return allGames.filter((x) => selectedGames.includes(x.game.id));
    }

    if (selectedPassives.length) {
      return allGames.filter((x) =>
        x.evos.some((y) =>
          y.items.some((z) => selectedPassives.includes(z.item.name))
        )
      );
    }

    return allGames;
  });
}
