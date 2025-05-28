import { Component, computed, input } from '@angular/core';
import type { EvoNextOperator } from '../../data/types';

@Component({
  selector: 'app-evo-operator',
  styleUrl: './evo-operator.css',
  templateUrl: './evo-operator.html',
})
export class EvoOperatorComponent {
  operator = input.required<EvoNextOperator | undefined>();
  index = input.required<number>();
  count = input.required<number>();

  private operatorMap(operator: EvoNextOperator | undefined) {
    switch (operator) {
      case 'equals':
        return '=';
      case 'plus':
        return '+';
      case 'tech':
        return '→';
      default:
        return undefined;
    }
  }

  protected formattedOperator = computed(() => {
    const isSecondToLast = this.index() === this.count() - 2;
    const isNotLast = this.index() < this.count();

    if (isSecondToLast) {
      return this.operatorMap(this.operator()) || '=';
    } else if (isNotLast) {
      return this.operatorMap(this.operator()) || '+';
    }
    return undefined;
  });
}
