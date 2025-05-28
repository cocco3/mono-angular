import type { Evo, Item } from './types';
import {
  Attractorb,
  Candelabrador,
  Duplicator,
  Pummarola,
  Spellbinder,
  StoneMask,
} from './passives';

const SilverWind: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Silver Wind',
  image: 'silver-wind.png',
  wiki: 'https://vampire.survivors.wiki/w/Silver_Wind',
};

const FestiveWinds: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Festive Winds',
  image: 'festive-winds.png',
  wiki: 'https://vampire.survivors.wiki/w/Festive_Winds',
};

const SummonNight: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Summon Night',
  image: 'summon-night.png',
  wiki: 'https://vampire.survivors.wiki/w/Summon_Night',
};

const EchoNight: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Echo Night',
  image: 'echo-night.png',
  wiki: 'https://vampire.survivors.wiki/w/Echo_Night',
};

const MirageRobe: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Mirage Robe',
  image: 'mirage-robe.png',
  wiki: 'https://vampire.survivors.wiki/w/Mirage_Robe',
};

const JOdore: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: `J'Odore`,
  image: 'j-odore.png',
  wiki: 'https://vampire.survivors.wiki/w/J%27Odore',
};

const MilleBolleBlu: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Mille Bolle Blu',
  image: 'mille-bolle-blu.png',
  wiki: 'https://vampire.survivors.wiki/w/Mille_Bolle_Blu',
};

const BooRooBoolle: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Boo Roo Boolle',
  image: 'boo-roo-boolle.png',
  wiki: 'https://vampire.survivors.wiki/w/Boo_Roo_Boolle',
};

const NightSword: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Night Sword',
  image: 'night-sword.png',
  wiki: 'https://vampire.survivors.wiki/w/Night_Sword',
};

const Muramasa: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Muramasa',
  image: 'muramasa.png',
  wiki: 'https://vampire.survivors.wiki/w/Muramasa',
};

const FourSeasons: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Four Seasons',
  image: 'four-seasons.png',
  wiki: 'https://vampire.survivors.wiki/w/Four_Seasons',
};

const GodaiShuffle: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Godai Shuffle',
  image: 'godai-shuffle.png',
  wiki: 'https://vampire.survivors.wiki/w/Godai_Shuffle',
};

export const legacyOfMoonspellEvolutions: Evo[] = [
  {
    items: [
      { item: SilverWind, condition: 'max' },
      { item: Pummarola, condition: 'max' },
    ],
    evo: FestiveWinds,
  },
  {
    items: [
      { item: SummonNight, condition: 'max' },
      { item: Duplicator, condition: 'max' },
    ],
    evo: EchoNight,
  },
  {
    items: [
      { item: MirageRobe, condition: 'max' },
      { item: Attractorb, condition: 'max' },
    ],
    evo: JOdore,
  },
  {
    items: [
      { item: MilleBolleBlu, condition: 'max' },
      { item: Spellbinder, condition: 'max' },
    ],
    evo: BooRooBoolle,
  },
  {
    items: [
      { item: NightSword, condition: 'max' },
      { item: StoneMask, condition: 'max' },
    ],
    evo: Muramasa,
  },
  {
    items: [
      { item: FourSeasons, condition: 'max' },
      { item: Candelabrador, condition: 'max' },
    ],
    evo: GodaiShuffle,
  },
];
