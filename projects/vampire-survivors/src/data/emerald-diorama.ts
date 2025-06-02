import {
  Crown,
  Empty,
  KaromasMana,
  ParmAegis,
  Pummarola,
  Skull_O_Maniac,
  Spellbinder,
  Spinach,
  StoneMask,
} from './passives';
import type { WeaponEvolution, Item } from './types';

const Fleuret: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Fleuret',
  image: 'Fleuret.png',
  wiki: 'https://vampire.survivors.wiki/w/Fleuret',
};

const Dress_Sword: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Dress Sword',
  image: 'Dress_Sword.png',
  wiki: 'https://vampire.survivors.wiki/w/Dress_Sword',
};

const Espada_Ropera: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Espada Ropera',
  image: 'Espada_Ropera.png',
  wiki: 'https://vampire.survivors.wiki/w/Espada_Ropera',
};

const Super_Missile: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Super Missile',
  image: 'Super_Missile.png',
  wiki: 'https://vampire.survivors.wiki/w/Super_Missile',
};

const Hydra_Cannon: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Hydra Cannon',
  image: 'Hydra_Cannon.png',
  wiki: 'https://vampire.survivors.wiki/w/Hydra_Cannon',
};

const Hyperion_Bazooka: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Hyperion Bazooka',
  image: 'Hyperion_Bazooka.png',
  wiki: 'https://vampire.survivors.wiki/w/Hyperion_Bazooka',
};

const Punch: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Punch',
  image: 'Punch.png',
  wiki: 'https://vampire.survivors.wiki/w/Punch',
};

const Pressure_Point: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Pressure Point',
  image: 'Pressure_Point.png',
  wiki: 'https://vampire.survivors.wiki/w/Pressure_Point',
};

const Gilded_Hand: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Gilded Hand',
  image: 'Gilded_Hand.png',
  wiki: 'https://vampire.survivors.wiki/w/Gilded_Hand',
};

const Saber_Machine_Gun: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Saber Machine Gun',
  image: 'Saber_Machine_Gun.png',
  wiki: 'https://vampire.survivors.wiki/w/Saber_Machine_Gun',
};

const Hecaton_Machine_Gun: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Hecaton Machine Gun',
  image: 'Hecaton_Machine_Gun.png',
  wiki: 'https://vampire.survivors.wiki/w/Hecaton_Machine_Gun',
};

const Divergence: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Divergence',
  image: 'Divergence.png',
  wiki: 'https://vampire.survivors.wiki/w/Divergence',
};

const Town_Sword: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Town Sword',
  image: 'Town_Sword.png',
  wiki: 'https://vampire.survivors.wiki/w/Town_Sword',
};

const Lordstar: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Lordstar',
  image: 'Lordstar.png',
  wiki: 'https://vampire.survivors.wiki/w/Lordstar',
};

const Dayblade: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Dayblade',
  image: 'Dayblade.png',
  wiki: 'https://vampire.survivors.wiki/w/Dayblade',
};

const Glaive: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Glaive',
  image: 'Glaive.png',
  wiki: 'https://vampire.survivors.wiki/w/Glaive',
};

const Feather_Spear: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Feather Spear',
  image: 'Feather_Spear.png',
  wiki: 'https://vampire.survivors.wiki/w/Feather_Spear',
};

const Lohengrin: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Lohengrin',
  image: 'Lohengrin.png',
  wiki: 'https://vampire.survivors.wiki/w/Lohengrin',
};

const Flamberge: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Flamberge',
  image: 'Flamberge.png',
  wiki: 'https://vampire.survivors.wiki/w/Flamberge',
};

const Zweihander: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Zweihander',
  image: 'Zweihander.png',
  wiki: 'https://vampire.survivors.wiki/w/Zweihander',
};

const Galatyn: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Galatyn',
  image: 'Galatyn.png',
  wiki: 'https://vampire.survivors.wiki/w/Galatyn',
};

const Splashers: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Splashers',
  image: 'Splashers.png',
  wiki: 'https://vampire.survivors.wiki/w/Splashers',
};

const Pursuant_Blades: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Pursuant Blades',
  image: 'Pursuant_Blades.png',
  wiki: 'https://vampire.survivors.wiki/w/Pursuant_Blades',
};

const Twin_Dragon: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Twin Dragon',
  image: 'Twin_Dragon.png',
  wiki: 'https://vampire.survivors.wiki/w/Twin_Dragon',
};

const Gekkabijin: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Gekkabijin',
  image: 'Gekkabijin.png',
  wiki: 'https://vampire.survivors.wiki/w/Gekkabijin',
};

const Kick: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Kick',
  image: 'Kick.png',
  wiki: 'https://vampire.survivors.wiki/w/Kick',
};

const Triangle_Kick: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Triangle Kick',
  image: 'Triangle_Kick.png',
  wiki: 'https://vampire.survivors.wiki/w/Triangle_Kick',
};

const Eagle_Gun: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Eagle Gun',
  image: 'Eagle_Gun.png',
  wiki: 'https://vampire.survivors.wiki/w/Eagle_Gun',
};

const Pendragon: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Pendragon',
  image: 'Pendragon.png',
  wiki: 'https://vampire.survivors.wiki/w/Pendragon',
};

const Sanguine_Star: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Sanguine Star',
  image: 'Sanguine_Star.png',
  wiki: 'https://vampire.survivors.wiki/w/Sanguine_Star',
};

const Blood_Chalice: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Blood Chalice',
  image: 'Blood_Chalice.png',
  wiki: 'https://vampire.survivors.wiki/w/Blood_Chalice',
};

const Khukuri: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Khukuri Chalice',
  image: 'Khukuri.png',
  wiki: 'https://vampire.survivors.wiki/w/Khukuri',
};

const Jetstream: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Jetstream',
  image: 'Jetstream.png',
  wiki: 'https://vampire.survivors.wiki/w/Jetstream',
};

const Bullova: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Bullova',
  image: 'Bullova.png',
  wiki: 'https://vampire.survivors.wiki/w/Bullova',
};

const Falconwind: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Falconwind',
  image: 'Falconwind.png',
  wiki: 'https://vampire.survivors.wiki/w/Falconwind',
};

const Emerald_Rapture: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Emerald Rapture',
  image: 'Emerald_Rapture.png',
  wiki: 'https://vampire.survivors.wiki/w/Emerald_Rapture',
};

const Emerald_Wave: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Emerald Wave',
  image: 'Emerald_Wave.png',
  wiki: 'https://vampire.survivors.wiki/w/Emerald_Wave',
};

const Spirit_Rings: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Spirit Rings',
  image: 'Spirit_Rings.png',
  wiki: 'https://vampire.survivors.wiki/w/Spirit_Rings',
};

const Rings_of_Calamity: Item = {
  kind: 'weapon',
  gameId: 'emerald-diorama',
  name: 'Rings of Calamity',
  image: 'Rings_of_Calamity.png',
  wiki: 'https://vampire.survivors.wiki/w/Rings_of_Calamity',
};

export const emeraldDioramaEvolutions: WeaponEvolution[] = [
  {
    items: [
      { item: Fleuret, operator: 'tech' },
      { item: Dress_Sword, operator: 'tech' },
      { item: Espada_Ropera },
    ],
  },
  {
    items: [
      { item: Super_Missile, operator: 'tech' },
      { item: Hydra_Cannon, operator: 'tech' },
      { item: Hyperion_Bazooka },
    ],
  },
  {
    items: [
      { item: Punch, operator: 'tech' },
      { item: Pressure_Point, operator: 'tech' },
      { item: Gilded_Hand },
    ],
  },
  {
    items: [
      { item: Saber_Machine_Gun, operator: 'tech' },
      { item: Hecaton_Machine_Gun, operator: 'tech' },
      { item: Divergence },
    ],
  },
  {
    items: [
      { item: Town_Sword, operator: 'tech' },
      { item: Lordstar, operator: 'tech' },
      { item: Dayblade },
    ],
  },
  {
    items: [
      { item: Glaive, operator: 'tech' },
      { item: Feather_Spear, operator: 'tech' },
      { item: Lohengrin },
    ],
  },
  {
    items: [
      { item: Flamberge, operator: 'tech' },
      { item: Zweihander, operator: 'tech' },
      { item: Galatyn },
    ],
  },
  {
    items: [
      { item: Splashers, operator: 'plus' },
      { item: Spellbinder, operator: 'tech' },
      { item: Pursuant_Blades },
    ],
  },
  {
    items: [
      { item: Twin_Dragon, operator: 'plus' },
      { item: KaromasMana, operator: 'tech' },
      { item: Gekkabijin },
    ],
  },
  {
    items: [
      { item: Kick, operator: 'plus' },
      { item: Pummarola, operator: 'tech' },
      { item: Triangle_Kick },
    ],
  },
  {
    items: [
      { item: Eagle_Gun, operator: 'plus' },
      { item: Spinach, operator: 'tech' },
      { item: Pendragon },
    ],
  },
  {
    items: [
      { item: Sanguine_Star, operator: 'plus' },
      { item: StoneMask, operator: 'tech' },
      { item: Blood_Chalice },
    ],
  },
  {
    items: [
      { item: Khukuri, operator: 'plus' },
      { item: ParmAegis, operator: 'tech' },
      { item: Jetstream },
    ],
  },
  {
    items: [
      { item: Bullova, operator: 'plus' },
      { item: Skull_O_Maniac, operator: 'tech' },
      { item: Falconwind },
    ],
  },
  {
    items: [
      { item: Spirit_Rings, operator: 'plus' },
      { item: Empty, condition: 'max5passives', operator: 'equals' },
      { item: Rings_of_Calamity },
    ],
  },
  {
    items: [
      { item: Emerald_Rapture, operator: 'plus' },
      { item: Crown, operator: 'equals' },
      { item: Emerald_Wave },
    ],
  },
];
