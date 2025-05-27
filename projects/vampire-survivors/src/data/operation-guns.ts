import {
  Armor,
  Attractorb,
  Bracer,
  Candelabrador,
  Clover,
  Duplicator,
  EmptyTome,
  HollowHeart,
  Tirajisu,
  Wings,
} from './passives';
import type { Evo, Item } from './types';

export const Weapon_PowerUp: Item = {
  kind: 'passive',
  game: 'operation-guns',
  name: 'Weapon Power-Up',
  image: 'Weapon_Power-Up.png',
  wiki: 'https://vampire.survivors.wiki/w/Weapon_Power-Up',
};

export const Long_Gun: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Long Gun',
  image: 'Long_Gun.png',
  wiki: 'https://vampire.survivors.wiki/w/Long_Gun',
};

export const Prototype_A: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Prototype A',
  image: 'Prototype_A.png',
  wiki: 'https://vampire.survivors.wiki/w/Prototype_A',
};

export const Short_Gun: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Short Gun',
  image: 'Short_Gun.png',
  wiki: 'https://vampire.survivors.wiki/w/Short_Gun',
};

export const Prototype_B: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Prototype B',
  image: 'Prototype_B.png',
  wiki: 'https://vampire.survivors.wiki/w/Prototype_B',
};

export const Spread_Shot: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Spread Shot',
  image: 'Spread_Shot.png',
  wiki: 'https://vampire.survivors.wiki/w/Spread_Shot',
};

export const Prototype_C: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Prototype C',
  image: 'Prototype_C.png',
  wiki: 'https://vampire.survivors.wiki/w/Prototype_C',
};

export const C_U_Laser: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'C-U-Laser',
  image: 'C-U-Laser.png',
  wiki: 'https://vampire.survivors.wiki/w/C-U-Laser',
};

export const Pronto_Beam: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Pronto Beam',
  image: 'Pronto_Beam.png',
  wiki: 'https://vampire.survivors.wiki/w/Pronto_Beam',
};

export const Firearm: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Firearm',
  image: 'Firearm.png',
  wiki: 'https://vampire.survivors.wiki/w/Firearm',
};

export const Fire_L3GS: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Fire-L3GS',
  image: 'Fire-L3GS.png',
  wiki: 'https://vampire.survivors.wiki/w/Fire-L3GS',
};

export const Sonic_Bloom: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Sonic Bloom',
  image: 'Sonic_Bloom.png',
  wiki: 'https://vampire.survivors.wiki/w/Sonic_Bloom',
};

export const Wave_Beam: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Wave Beam',
  image: 'Wave_Beam.png',
  wiki: 'https://vampire.survivors.wiki/w/Wave_Beam',
};

export const Blade_Crossbow: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Blade Crossbow',
  image: 'Blade_Crossbow.png',
  wiki: 'https://vampire.survivors.wiki/w/Blade_Crossbow',
};

export const BFC2000_AD: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'BFC2000-AD',
  image: 'BFC2000-AD.png',
  wiki: 'https://vampire.survivors.wiki/w/BFC2000-AD',
};

export const Homing_Miss: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Homing Miss',
  image: 'Homing_Miss.png',
  wiki: 'https://vampire.survivors.wiki/w/Homing_Miss',
};

export const Multistage_Missiles: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Multistage Missiles',
  image: 'Multistage_Missiles.png',
  wiki: 'https://vampire.survivors.wiki/w/Multistage_Missiles',
};

export const Diver_Mines: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Diver Mines',
  image: 'Diver_Mines.png',
  wiki: 'https://vampire.survivors.wiki/w/Diver_Mines',
};

export const Atmo_Torpedo: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Atmo-Torpedo',
  image: 'Atmo-Torpedo.png',
  wiki: 'https://vampire.survivors.wiki/w/Atmo-Torpedo',
};

export const Prism_Lass: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Prism Lass',
  image: 'Prism_Lass.png',
  wiki: 'https://vampire.survivors.wiki/w/Prism_Lass',
};

export const Time_Warp: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Time Warp',
  image: 'Time_Warp.png',
  wiki: 'https://vampire.survivors.wiki/w/Time_Warp',
};

export const Metal_Claw: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Metal Claw',
  image: 'Metal_Claw.png',
  wiki: 'https://vampire.survivors.wiki/w/Metal_Claw',
};

export const Big_Fuzzy_Fist: Item = {
  kind: 'weapon',
  game: 'operation-guns',
  name: 'Big Fuzzy Fist',
  image: 'Big_Fuzzy_Fist.png',
  wiki: 'https://vampire.survivors.wiki/w/Big_Fuzzy_Fist',
};

export const operationGunsEvolutions: Evo[] = [
  {
    items: [{ item: Long_Gun, condition: 'max' }, { item: Weapon_PowerUp }],
    evo: Prototype_A,
  },
  {
    items: [
      { item: Short_Gun, condition: 'max' },
      { item: Weapon_PowerUp },
      { item: Bracer },
    ],
    evo: Prototype_B,
  },
  {
    items: [
      { item: Spread_Shot, condition: 'max' },
      { item: Weapon_PowerUp },
      { item: EmptyTome },
    ],
    evo: Prototype_C,
  },
  {
    items: [
      { item: C_U_Laser, condition: 'max' },
      { item: Weapon_PowerUp },
      { item: Tirajisu },
    ],
    evo: Pronto_Beam,
  },
  {
    items: [
      { item: Firearm, condition: 'max' },
      { item: Weapon_PowerUp },
      { item: Candelabrador },
    ],
    evo: Fire_L3GS,
  },
  {
    items: [
      { item: Sonic_Bloom, condition: 'max' },
      { item: Weapon_PowerUp },
      { item: Armor },
    ],
    evo: Wave_Beam,
  },
  {
    items: [
      { item: Blade_Crossbow, condition: 'max' },
      { item: Weapon_PowerUp },
      { item: Clover },
    ],
    evo: BFC2000_AD,
  },
  {
    items: [
      { item: Homing_Miss, condition: 'max' },
      { item: Weapon_PowerUp },
      { item: Duplicator },
    ],
    evo: Multistage_Missiles,
  },
  {
    items: [
      { item: Diver_Mines, condition: 'max' },
      { item: Weapon_PowerUp },
      { item: Attractorb },
    ],
    evo: Atmo_Torpedo,
  },
  {
    items: [
      { item: Prism_Lass, condition: 'max' },
      { item: Weapon_PowerUp },
      { item: Wings },
    ],
    evo: Time_Warp,
  },
  {
    items: [
      { item: Metal_Claw, condition: 'max' },
      { item: Weapon_PowerUp },
      { item: HollowHeart },
    ],
    evo: Big_Fuzzy_Fist,
  },
];
