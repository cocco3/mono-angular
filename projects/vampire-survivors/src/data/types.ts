export type ItemKind = 'passive' | 'weapon' | 'relic' | 'character';
export type Game =
  | 'base'
  | 'moonspell'
  | 'foscari'
  | 'emergency-meeting'
  | 'operation-guns';
export type EvoCondition = 'max' | 'lvl80';
export type EvoOperator = 'plus' | 'tech';

export type Item = {
  kind: ItemKind;
  game: Game;
  name: string;
  image: string;
  wiki: string;
};

export type Evo = {
  items: { item: Item; operator?: EvoOperator; condition?: EvoCondition }[];
  evo: Item;
};
