import { type GameId } from './games';

export { type GameId } from './games';
export type ItemKind = 'passive' | 'weapon' | 'relic' | 'character';
export type EvoCondition =
  | 'max'
  | 'lvl80'
  | 'max5passives'
  | 'max6passives'
  | '6-full-evos';
export type EvoNextOperator = 'plus' | 'equals' | 'arrow' | 'tech';

export type Item = {
  kind: ItemKind;
  gameId: GameId;
  name: string;
  image: string;
  wiki: string;
};

export type WeaponEvolutionItem = {
  item: Item;
  operator?: EvoNextOperator;
  condition?: EvoCondition;
};

export type WeaponEvolution = {
  items: WeaponEvolutionItem[];
};
