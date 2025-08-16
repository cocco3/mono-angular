import { Injectable, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { type GameId } from '../../data/games';

type ItemFilters = { game: GameId[]; passive: string[] };

@Injectable({
  providedIn: 'root',
})
export class ItemFilterService {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private _games = signal<GameId[]>([]);
  private _passives = signal<string[]>([]);

  public readonly games$ = this._games.asReadonly();
  public readonly passives$ = this._passives.asReadonly();

  constructor() {
    this.route.queryParams.subscribe((params) => {
      const games = this.queryParamToArray(params['game']);
      const passives = this.queryParamToArray(params['passive']);

      this._games.set(games as GameId[]);
      this._passives.set(passives);
    });
  }

  clearFilters() {
    this.updateFilters({ game: [], passive: [] });
  }

  updateFilters(values: Partial<ItemFilters>) {
    if (values.game) {
      this._games.set(values.game);
    }

    if (values.passive) {
      this._passives.set(values.passive);
    }

    this.router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams: {
        game: this.arrayToQueryParam(values.game),
        passive: this.arrayToQueryParam(values.passive),
      },
    });
  }

  private arrayToQueryParam(values: string[] | undefined) {
    return values?.join(',') || null;
  }

  private queryParamToArray(param: string | null | undefined) {
    return param ? param.split(',') : [];
  }
}
