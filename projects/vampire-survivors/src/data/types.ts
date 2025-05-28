import { type GameId } from './games';

export { type GameId } from './games';
export type ItemKind = 'passive' | 'weapon' | 'relic' | 'character';
export type EvoCondition = 'max' | 'lvl80';
export type EvoOperator = 'plus' | 'tech';

export type Item = {
  kind: ItemKind;
  gameId: GameId;
  name: string;
  image: string;
  wiki: string;
};

export type Evo = {
  items: { item: Item; operator?: EvoOperator; condition?: EvoCondition }[];
  evo: Item;
};
