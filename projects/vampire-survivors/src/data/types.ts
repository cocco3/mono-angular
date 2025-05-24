export type ItemKind = 'passive' | 'weapon' | 'relic' | 'character';
export type EvoCondition = 'max' | 'lvl80';

export type Item = {
  kind: ItemKind;
  name: string;
  image: string;
  wiki: string;
};

export type Evo = {
  items: { item: Item; condition?: EvoCondition }[];
  evo: Item;
};
