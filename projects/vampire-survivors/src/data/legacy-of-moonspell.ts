import type { WeaponEvolution, Item } from './types';
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
  image: 'legacy-of-moonspell/silver-wind.png',
  wiki: 'https://vampire.survivors.wiki/w/Silver_Wind',
};

const FestiveWinds: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Festive Winds',
  image: 'legacy-of-moonspell/festive-winds.png',
  wiki: 'https://vampire.survivors.wiki/w/Festive_Winds',
};

const SummonNight: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Summon Night',
  image: 'legacy-of-moonspell/summon-night.png',
  wiki: 'https://vampire.survivors.wiki/w/Summon_Night',
};

const EchoNight: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Echo Night',
  image: 'legacy-of-moonspell/echo-night.png',
  wiki: 'https://vampire.survivors.wiki/w/Echo_Night',
};

const MirageRobe: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Mirage Robe',
  image: 'legacy-of-moonspell/mirage-robe.png',
  wiki: 'https://vampire.survivors.wiki/w/Mirage_Robe',
};

const JOdore: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: `J'Odore`,
  image: 'legacy-of-moonspell/j-odore.png',
  wiki: 'https://vampire.survivors.wiki/w/J%27Odore',
};

const MilleBolleBlu: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Mille Bolle Blu',
  image: 'legacy-of-moonspell/mille-bolle-blu.png',
  wiki: 'https://vampire.survivors.wiki/w/Mille_Bolle_Blu',
};

const BooRooBoolle: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Boo Roo Boolle',
  image: 'legacy-of-moonspell/boo-roo-boolle.png',
  wiki: 'https://vampire.survivors.wiki/w/Boo_Roo_Boolle',
};

const NightSword: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Night Sword',
  image: 'legacy-of-moonspell/night-sword.png',
  wiki: 'https://vampire.survivors.wiki/w/Night_Sword',
};

const Muramasa: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Muramasa',
  image: 'legacy-of-moonspell/muramasa.png',
  wiki: 'https://vampire.survivors.wiki/w/Muramasa',
};

const FourSeasons: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Four Seasons',
  image: 'legacy-of-moonspell/four-seasons.png',
  wiki: 'https://vampire.survivors.wiki/w/Four_Seasons',
};

const GodaiShuffle: Item = {
  kind: 'weapon',
  gameId: 'moonspell',
  name: 'Godai Shuffle',
  image: 'legacy-of-moonspell/godai-shuffle.png',
  wiki: 'https://vampire.survivors.wiki/w/Godai_Shuffle',
};

export const legacyOfMoonspellEvolutions: WeaponEvolution[] = [
  {
    items: [
      { item: SilverWind, condition: 'max' },
      { item: Pummarola, condition: 'max' },
      { item: FestiveWinds },
    ],
  },
  {
    items: [
      { item: SummonNight, condition: 'max' },
      { item: Duplicator, condition: 'max' },
      { item: EchoNight },
    ],
  },
  {
    items: [
      { item: MirageRobe, condition: 'max' },
      { item: Attractorb, condition: 'max' },
      { item: JOdore },
    ],
  },
  {
    items: [
      { item: MilleBolleBlu, condition: 'max' },
      { item: Spellbinder, condition: 'max' },
      { item: BooRooBoolle },
    ],
  },
  {
    items: [
      { item: NightSword, condition: 'max' },
      { item: StoneMask, condition: 'max' },
      { item: Muramasa },
    ],
  },
  {
    items: [
      { item: FourSeasons, condition: 'max' },
      { item: Candelabrador, condition: 'max' },
      { item: GodaiShuffle },
    ],
  },
];
