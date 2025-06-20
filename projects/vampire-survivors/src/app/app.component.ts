import { Component, computed, inject, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnvironmentService } from './EnvironmentService';
import { DataService } from '../data/DataService';
import { injectAnalyticsScript } from './analytics/injectAnalyticsScript';
import { AppFooterComponent } from './app-footer/app-footer';
import { EvolutionListComponent } from './evo-list/evo-list.component';
import { FiltersComponent } from './filters/filters.component';
import { ItemFilterService } from './filters/filters.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    EvolutionListComponent,
    FiltersComponent,
    AppFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'vampire-survivors';

  private readonly env = inject(EnvironmentService);
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

  ngOnInit() {
    injectAnalyticsScript(
      this.env.config.env === 'prod',
      this.env.config.analyticsApiKey
    );
  }
}
