import { Component, computed, input } from '@angular/core';
import type { GameId, EvoCondition, ItemKind } from '../../data/types';
import { UiCardTitleAnchorComponent } from '@cocco3/angular-ui';

@Component({
  host: {
    '[class]': 'cssClass()',
  },
  imports: [UiCardTitleAnchorComponent],
  selector: 'app-item',
  styleUrl: './item.css',
  templateUrl: './item.html',
})
export class ItemComponent {
  gameId = input.required<GameId>();
  kind = input.required<ItemKind>();
  name = input.required<string>();
  wiki = input.required<string>();
  image = input.required<string>();
  condition = input<EvoCondition>();

  protected info = computed(() => {
    if (this.kind() === 'relic') {
      return 'RELIC';
    } else if (this.condition() === 'max') {
      return 'MAX';
    } else if (this.condition() === 'lvl80') {
      return 'LVL80';
    } else if (this.condition() === 'max5passives') {
      return '5 MAX PASSIVES';
    } else if (this.condition() === 'max6passives') {
      return '6 MAX PASSIVES';
    } else if (this.condition() === '6-full-evos') {
      return '6 FULL EVOS';
    }
    return undefined;
  });

  protected cssClass = computed(() => ({
    [`kind-${this.kind()}`]: !!this.kind(),
    [`game-${this.gameId()}`]: !!this.gameId(),
  }));
}
