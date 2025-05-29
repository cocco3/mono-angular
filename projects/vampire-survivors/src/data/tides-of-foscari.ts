import type { WeaponEvolution, Item } from './types';
import { Armor, Bracer, Crown, Skull_O_Maniac } from './passives';

const Eskizzibur: Item = {
  kind: 'weapon',
  gameId: 'foscari',
  name: 'Eskizzibur',
  image: 'eskizzibur.png',
  wiki: 'https://vampire.survivors.wiki/w/Eskizzibur',
};

const Legionnaire: Item = {
  kind: 'weapon',
  gameId: 'foscari',
  name: 'Legionnaire',
  image: 'legionnaire.png',
  wiki: 'https://vampire.survivors.wiki/w/Legionnaire',
};

const PrismaticMissile: Item = {
  kind: 'weapon',
  gameId: 'foscari',
  name: 'Prismatic Missile',
  image: 'prismatic-missile.png',
  wiki: 'https://vampire.survivors.wiki/w/Prismatic_Missile',
};

const Luminaire: Item = {
  kind: 'weapon',
  gameId: 'foscari',
  name: 'Luminaire',
  image: 'luminaire.png',
  wiki: 'https://vampire.survivors.wiki/w/Luminaire',
};

const ShadowServant: Item = {
  kind: 'weapon',
  gameId: 'foscari',
  name: 'Shadow Servant',
  image: 'shadow-servant.png',
  wiki: 'https://vampire.survivors.wiki/w/Shadow_Servant',
};

const Ophion: Item = {
  kind: 'weapon',
  gameId: 'foscari',
  name: 'Ophion',
  image: 'ophion.png',
  wiki: 'https://vampire.survivors.wiki/w/Ophion',
};

const FlashArrow: Item = {
  kind: 'weapon',
  gameId: 'foscari',
  name: 'Flash Arrow',
  image: 'flash-arrow.png',
  wiki: 'https://vampire.survivors.wiki/w/Flash_Arrow',
};

const Millionaire: Item = {
  kind: 'weapon',
  gameId: 'foscari',
  name: 'Millionaire',
  image: 'millionaire.png',
  wiki: 'https://vampire.survivors.wiki/w/Millionaire',
};

const SpellString: Item = {
  kind: 'weapon',
  gameId: 'foscari',
  name: 'SpellString',
  image: 'spellstring.png',
  wiki: 'https://vampire.survivors.wiki/w/SpellString',
};

const SpellStream: Item = {
  kind: 'weapon',
  gameId: 'foscari',
  name: 'SpellStream',
  image: 'spellstream.png',
  wiki: 'https://vampire.survivors.wiki/w/SpellStream',
};

const SpellStrike: Item = {
  kind: 'weapon',
  gameId: 'foscari',
  name: 'SpellStrike',
  image: 'spellstrike.png',
  wiki: 'https://vampire.survivors.wiki/w/SpellStrike',
};

const SpellStrom: Item = {
  kind: 'weapon',
  gameId: 'foscari',
  name: 'SpellStrom',
  image: 'spellstrom.png',
  wiki: 'https://vampire.survivors.wiki/w/SpellStrom',
};

export const tidesOfFoscariEvolutions: WeaponEvolution[] = [
  {
    items: [
      { item: Eskizzibur, condition: 'max' },
      { item: Armor, condition: 'max' },
      { item: Legionnaire },
    ],
  },
  {
    items: [
      { item: PrismaticMissile, condition: 'max' },
      { item: Crown, condition: 'max' },
      { item: Luminaire },
    ],
  },
  {
    items: [
      { item: ShadowServant, condition: 'max' },
      { item: Skull_O_Maniac, condition: 'max' },
      { item: Ophion },
    ],
  },
  {
    items: [
      { item: FlashArrow, condition: 'max' },
      { item: Bracer, condition: 'max' },
      { item: Millionaire },
    ],
  },
  {
    items: [
      { item: SpellString, condition: 'max' },
      { item: SpellStream, condition: 'max' },
      { item: SpellStrike, condition: 'max' },
      { item: SpellStrom },
    ],
  },
];
