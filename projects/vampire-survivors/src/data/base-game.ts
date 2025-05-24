import type { Evo, Item } from './types';

import {
  Armor,
  Attractorb,
  Bracer,
  Candelabrador,
  Crown,
  Duplicator,
  EmptyTome,
  HollowHeart,
  Pummarola,
  Skull_O_Maniac,
  Spellbinder,
  Spinach,
  StoneMask,
  Wings,
} from './passives';

const Whip: Item = {
  name: 'Whip',
  image: 'whip.webp',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Whip',
};

const BloodyTear: Item = {
  name: 'Bloody Tear',
  image: 'bloody-tear.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Bloody_Tear',
};

const MagicWand: Item = {
  name: 'Magic Wand',
  image: 'magic-wand.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Magic_Wand',
};

const HolyWand: Item = {
  name: 'Holy Wand',
  image: 'holy-wand.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Holy_Wand',
};

const Knife: Item = {
  name: 'Knife',
  image: 'knife.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Knife',
};

const ThousandEdge: Item = {
  name: 'Thousand Edge',
  image: 'thousand-edge.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Thousand_Edge',
};

const Axe: Item = {
  name: 'Axe',
  image: 'axe.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Axe',
};

const DeathSpiral: Item = {
  name: 'Death Spiral',
  image: 'death-spiral.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Death_Spiral',
};

const KingBible: Item = {
  name: 'King Bible',
  image: 'king-bible.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/King_Bible',
};

const UnholyVespers: Item = {
  name: 'Unholy Vespers',
  image: 'unholy-vespers.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Unholy_Vespers',
};

const FireWand: Item = {
  name: 'Fire Wand',
  image: 'fire-wand.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Fire_Wand',
};

const Hellfire: Item = {
  name: 'Hellfire',
  image: 'hellfire.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Hellfire',
};

const Garlic: Item = {
  name: 'Garlic',
  image: 'garlic.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Garlic',
};

const SoulEater: Item = {
  name: 'Soul Eater',
  image: 'soul-eater.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Soul_Eater',
};

const SantaWater: Item = {
  name: 'Santa Water',
  image: 'santa-water.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Santa_Water',
};

const LaBorra: Item = {
  name: 'La Borra',
  image: 'la-borra.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/La_Borra',
};

const Runetracer: Item = {
  name: 'Runetracer',
  image: 'runetracer.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Runetracer',
};

const NoFuture: Item = {
  name: 'NO FUTURE',
  image: 'no-future.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/NO_FUTURE',
};

const LightningRing: Item = {
  name: 'Lightning Ring',
  image: 'lightning-ring.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Lightning_Ring',
};

const ThunderLoop: Item = {
  name: 'Thunder Loop',
  image: 'thunder-loop.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Thunder_Loop',
};

const Pentagram: Item = {
  name: 'Pentagram',
  image: 'pentagram.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Pentagram',
};

const GorgeousMoon: Item = {
  name: 'Gorgeous Moon',
  image: 'gorgeous-moon.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Gorgeous_Moon',
};

const GattiAmari: Item = {
  name: 'Gatti Amari',
  image: 'gatti-amari.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Gatti_Amari',
};

const ViciousHunger: Item = {
  name: 'Vicious Hunger',
  image: 'vicious-hunger.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Vicious_Hunger',
};

const SongOfMana: Item = {
  name: 'Song of Mana',
  image: 'song-of-mana.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Song_of_Mana',
};

const Mannajja: Item = {
  name: 'Mannajja',
  image: 'mannajja.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Mannajja',
};

const ShadowPinion: Item = {
  name: 'Shadow Pinion',
  image: 'shadow-pinion.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Shadow_Pinion',
};

const ValkyrieTurner: Item = {
  name: 'Valkyrie Turner',
  image: 'valkyrie-turner.png',
  wiki: 'https://vampire-survivors.fandom.com/wiki/Valkyrie_Turner',
};

export const baseGameEvolutions: Evo[] = [
  {
    items: [{ item: Whip, max: true }, { item: HollowHeart }],
    evo: BloodyTear,
  },
  {
    items: [{ item: MagicWand, max: true }, { item: EmptyTome }],
    evo: HolyWand,
  },
  {
    items: [{ item: Knife, max: true }, { item: Bracer }],
    evo: ThousandEdge,
  },
  {
    items: [{ item: Axe, max: true }, { item: Candelabrador }],
    evo: DeathSpiral,
  },
  {
    items: [{ item: KingBible, max: true }, { item: Spellbinder }],
    evo: UnholyVespers,
  },
  {
    items: [{ item: FireWand, max: true }, { item: Spinach }],
    evo: Hellfire,
  },
  {
    items: [{ item: Garlic, max: true }, { item: Pummarola }],
    evo: SoulEater,
  },
  {
    items: [{ item: SantaWater, max: true }, { item: Attractorb }],
    evo: LaBorra,
  },
  {
    items: [{ item: Runetracer, max: true }, { item: Armor }],
    evo: NoFuture,
  },
  {
    items: [{ item: LightningRing, max: true }, { item: Duplicator }],
    evo: ThunderLoop,
  },
  {
    items: [{ item: Pentagram, max: true }, { item: Crown }],
    evo: GorgeousMoon,
  },
  {
    items: [{ item: GattiAmari, max: true }, { item: StoneMask }],
    evo: ViciousHunger,
  },
  {
    items: [{ item: SongOfMana, max: true }, { item: Skull_O_Maniac }],
    evo: Mannajja,
  },
  {
    items: [{ item: ShadowPinion, max: true }, { item: Wings }],
    evo: ValkyrieTurner,
  },
];
