import { Component, computed, input } from '@angular/core';
import type { EvoCondition, ItemKind } from '../../data/types';

@Component({
  host: {
    '[class]': 'cssClass()',
  },
  selector: 'app-item',
  styleUrl: './item.css',
  templateUrl: './item.html',
})
export class ItemComponent {
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
    }
    return undefined;
  });

  protected cssClass = computed(() => ({
    [`kind-${this.kind()}`]: !!this.kind(),
  }));
}
