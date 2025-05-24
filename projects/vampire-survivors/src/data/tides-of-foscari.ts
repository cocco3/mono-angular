import type { Evo, Item } from './types';
import { Armor, Bracer, Crown, Skull_O_Maniac } from './passives';

const Eskizzibur: Item = {
  name: 'Eskizzibur',
  image: 'eskizzibur.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Eskizzibur',
};

const Legionnaire: Item = {
  name: 'Legionnaire',
  image: 'legionnaire.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Legionnaire',
};

const PrismaticMissile: Item = {
  name: 'Prismatic Missile',
  image: 'prismatic-missile.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Prismatic_Missile',
};

const Luminaire: Item = {
  name: 'Luminaire',
  image: 'luminaire.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Luminaire',
};

const ShadowServant: Item = {
  name: 'Shadow Servant',
  image: 'shadow-servant.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Shadow_Servant',
};

const Ophion: Item = {
  name: 'Ophion',
  image: 'ophion.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Ophion',
};

const FlashArrow: Item = {
  name: 'Flash Arrow',
  image: 'flash-arrow.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Flash_Arrow',
};

const Millionaire: Item = {
  name: 'Millionaire',
  image: 'millionaire.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Millionaire',
};

const SpellString: Item = {
  name: 'SpellString',
  image: 'spellstring.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/SpellString',
};

const SpellStream: Item = {
  name: 'SpellStream',
  image: 'spellstream.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/SpellStream',
};

const SpellStrike: Item = {
  name: 'SpellStrike',
  image: 'spellstrike.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/SpellStrike',
};

const SpellStrom: Item = {
  name: 'SpellStrom',
  image: 'spellstrom.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/SpellStrom',
};

export const tidesOfFoscariEvolutions: Evo[] = [
  {
    items: [
      { item: Eskizzibur, max: true },
      { item: Armor, max: true },
    ],
    evo: Legionnaire,
  },
  {
    items: [
      { item: PrismaticMissile, max: true },
      { item: Crown, max: true },
    ],
    evo: Luminaire,
  },
  {
    items: [
      { item: ShadowServant, max: true },
      { item: Skull_O_Maniac, max: true },
    ],
    evo: Ophion,
  },
  {
    items: [
      { item: FlashArrow, max: true },
      { item: Bracer, max: true },
    ],
    evo: Millionaire,
  },
  {
    items: [
      { item: SpellString, max: true },
      { item: SpellStream, max: true },
      { item: SpellStrike, max: true },
    ],
    evo: SpellStrom,
  },
];
