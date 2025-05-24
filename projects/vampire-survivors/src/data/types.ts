export type Item = { name: string; image: string; wiki: string };

export type Evo = {
  items: { item: Item; max?: boolean }[];
  evo: Item;
};
