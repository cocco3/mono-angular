import type { Evo, Item } from './types';

import {
  Armor,
  Attractorb,
  Bracer,
  Candelabrador,
  Clover,
  Crown,
  Duplicator,
  EmptyTome,
  GoldRing,
  HollowHeart,
  MetaglioLeft,
  MetaglioRight,
  ParmAegis,
  Pummarola,
  SilverRing,
  Skull_O_Maniac,
  Spellbinder,
  Spinach,
  StoneMask,
  Tirajisu,
  TorronasBox,
  Wings,
} from './passives';
import { ChaosAltemanna, ChaosMalachite, ChaosRosalia } from './relics';
import { Cavallo, Mortaccio, OSole } from './characters';

const Whip: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Whip',
  image: 'whip.webp',
  wiki: 'https://vampire.survivors.wiki/w/Whip',
};

const BloodyTear: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Bloody Tear',
  image: 'bloody-tear.png',
  wiki: 'https://vampire.survivors.wiki/w/Bloody_Tear',
};

const MagicWand: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Magic Wand',
  image: 'magic-wand.png',
  wiki: 'https://vampire.survivors.wiki/w/Magic_Wand',
};

const HolyWand: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Holy Wand',
  image: 'holy-wand.png',
  wiki: 'https://vampire.survivors.wiki/w/Holy_Wand',
};

const Knife: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Knife',
  image: 'knife.png',
  wiki: 'https://vampire.survivors.wiki/w/Knife',
};

const ThousandEdge: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Thousand Edge',
  image: 'thousand-edge.png',
  wiki: 'https://vampire.survivors.wiki/w/Thousand_Edge',
};

const Axe: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Axe',
  image: 'axe.png',
  wiki: 'https://vampire.survivors.wiki/w/Axe',
};

const DeathSpiral: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Death Spiral',
  image: 'death-spiral.png',
  wiki: 'https://vampire.survivors.wiki/w/Death_Spiral',
};

const Cross: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Cross',
  image: 'cross.png',
  wiki: 'https://vampire.survivors.wiki/w/Cross',
};

const HeavenSword: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Heaven Sword',
  image: 'heaven-sword.png',
  wiki: 'https://vampire.survivors.wiki/w/Heaven_Sword',
};

const KingBible: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'King Bible',
  image: 'king-bible.png',
  wiki: 'https://vampire.survivors.wiki/w/King_Bible',
};

const UnholyVespers: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Unholy Vespers',
  image: 'unholy-vespers.png',
  wiki: 'https://vampire.survivors.wiki/w/Unholy_Vespers',
};

const FireWand: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Fire Wand',
  image: 'fire-wand.png',
  wiki: 'https://vampire.survivors.wiki/w/Fire_Wand',
};

const Hellfire: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Hellfire',
  image: 'hellfire.png',
  wiki: 'https://vampire.survivors.wiki/w/Hellfire',
};

const Garlic: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Garlic',
  image: 'garlic.png',
  wiki: 'https://vampire.survivors.wiki/w/Garlic',
};

const SoulEater: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Soul Eater',
  image: 'soul-eater.png',
  wiki: 'https://vampire.survivors.wiki/w/Soul_Eater',
};

const SantaWater: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Santa Water',
  image: 'santa-water.png',
  wiki: 'https://vampire.survivors.wiki/w/Santa_Water',
};

const LaBorra: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'La Borra',
  image: 'la-borra.png',
  wiki: 'https://vampire.survivors.wiki/w/La_Borra',
};

const Runetracer: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Runetracer',
  image: 'runetracer.png',
  wiki: 'https://vampire.survivors.wiki/w/Runetracer',
};

const NoFuture: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'NO FUTURE',
  image: 'no-future.png',
  wiki: 'https://vampire.survivors.wiki/w/NO_FUTURE',
};

const LightningRing: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Lightning Ring',
  image: 'lightning-ring.png',
  wiki: 'https://vampire.survivors.wiki/w/Lightning_Ring',
};

const ThunderLoop: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Thunder Loop',
  image: 'thunder-loop.png',
  wiki: 'https://vampire.survivors.wiki/w/Thunder_Loop',
};

const Pentagram: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Pentagram',
  image: 'pentagram.png',
  wiki: 'https://vampire.survivors.wiki/w/Pentagram',
};

const GorgeousMoon: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Gorgeous Moon',
  image: 'gorgeous-moon.png',
  wiki: 'https://vampire.survivors.wiki/w/Gorgeous_Moon',
};

const GattiAmari: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Gatti Amari',
  image: 'gatti-amari.png',
  wiki: 'https://vampire.survivors.wiki/w/Gatti_Amari',
};

const ViciousHunger: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Vicious Hunger',
  image: 'vicious-hunger.png',
  wiki: 'https://vampire.survivors.wiki/w/Vicious_Hunger',
};

const SongOfMana: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Song of Mana',
  image: 'song-of-mana.png',
  wiki: 'https://vampire.survivors.wiki/w/Song_of_Mana',
};

const Mannajja: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Mannajja',
  image: 'mannajja.png',
  wiki: 'https://vampire.survivors.wiki/w/Mannajja',
};

const ShadowPinion: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Shadow Pinion',
  image: 'shadow-pinion.png',
  wiki: 'https://vampire.survivors.wiki/w/Shadow_Pinion',
};

const ValkyrieTurner: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Valkyrie Turner',
  image: 'valkyrie-turner.png',
  wiki: 'https://vampire.survivors.wiki/w/Valkyrie_Turner',
};

const Peachone: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Peachone',
  image: 'peachone.png',
  wiki: 'https://vampire.survivors.wiki/w/Peachone',
};

const EbonyWings: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Ebony Wings',
  image: 'ebony-wings.png',
  wiki: 'https://vampire.survivors.wiki/w/Ebony_Wings',
};

const Vandalier: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Vandalier',
  image: 'vandalier.png',
  wiki: 'https://vampire.survivors.wiki/w/Vandalier',
};

const VentoSacro: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Vento Sacro',
  image: 'vento-sacro.png',
  wiki: 'https://vampire.survivors.wiki/w/Vento_Sacro',
};

const Fuwalafuwaloo: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Fuwalafuwaloo',
  image: 'fuwalafuwaloo.png',
  wiki: 'https://vampire.survivors.wiki/w/Fuwalafuwaloo',
};

const GlassFandango: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Glass Fandango',
  image: 'glass-fandango.png',
  wiki: 'https://vampire.survivors.wiki/w/Glass_Fandango',
};

const CelestialVoulge: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Celestial Voulge',
  image: 'celestial-voulge.png',
  wiki: 'https://vampire.survivors.wiki/w/Celestial_Voulge',
};

const Phas3r: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Phas3r',
  image: 'phas3r.png',
  wiki: 'https://vampire.survivors.wiki/w/Phas3r',
};

const Photonstorm: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Photonstorm',
  image: 'photonstorm.png',
  wiki: 'https://vampire.survivors.wiki/w/Photonstorm',
};

const PakoBattiliar: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Pako Battiliar',
  image: 'pako-battiliar.webp',
  wiki: 'https://vampire.survivors.wiki/w/Pako_Battiliar',
};

const MazoFamiliar: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Mazo Familiar',
  image: 'mazo-familiar.png',
  wiki: 'https://vampire.survivors.wiki/w/Mazo_Familiar',
};

const SantaJavelin: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Santa Javelin',
  image: 'santa-javelin.png',
  wiki: 'https://vampire.survivors.wiki/w/Santa_Javelin',
};

const SeraphicCry: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Seraphic Cry',
  image: 'seraphic-cry.png',
  wiki: 'https://vampire.survivors.wiki/w/Seraphic_Cry',
};

const Bracelet: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Bracelet',
  image: 'bracelet.png',
  wiki: 'https://vampire.survivors.wiki/w/Bracelet',
};

const BiBracelet: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Bi-Bracelet',
  image: 'bi-bracelet.png',
  wiki: 'https://vampire.survivors.wiki/w/Bi-Bracelet',
};

const TriBracelet: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Tri-Bracelet',
  image: 'tri-bracelet.png',
  wiki: 'https://vampire.survivors.wiki/w/Tri-Bracelet',
};

const VictorySword: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Victory Sword',
  image: 'victory-sword.png',
  wiki: 'https://vampire.survivors.wiki/w/Victory_Sword',
};

const SoleSolution: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Sole Solution',
  image: 'sole-solution.png',
  wiki: 'https://vampire.survivors.wiki/w/Sole_Solution',
};

const FlamesOfMisspell: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Flames of Misspell',
  image: 'flames-of-misspell.png',
  wiki: 'https://vampire.survivors.wiki/w/Flames_of_Misspell',
};

const AshesOfMuspell: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Ashes of Muspell',
  image: 'ashes-of-muspell.png',
  wiki: 'https://vampire.survivors.wiki/w/Ashes_of_Muspell',
};

const PhieraDerTuphello: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Phiera Der Tuphello',
  image: 'phiera-der-tuphello.png',
  wiki: 'https://vampire.survivors.wiki/w/Phiera_Der_Tuphello',
};

const EightTheSparrow: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Eight The Sparrow',
  image: 'eight-the-sparrow.png',
  wiki: 'https://vampire.survivors.wiki/w/Eight_The_Sparrow',
};

const Phieraggi: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Phieraggi',
  image: 'phieraggi.png',
  wiki: 'https://vampire.survivors.wiki/w/Phieraggi',
};

const ClockLancet: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Clock Lancet',
  image: 'clock-lancet.png',
  wiki: 'https://vampire.survivors.wiki/w/Clock_Lancet',
};

const InfiniteCorridor: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Infinite Corridor',
  image: 'infinite-corridor.png',
  wiki: 'https://vampire.survivors.wiki/w/Infinite_Corridor',
};

const Laurel: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Laurel',
  image: 'laurel.png',
  wiki: 'https://vampire.survivors.wiki/w/Laurel',
};

const CrimsonShroud: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Crimson Shroud',
  image: 'crimson-shroud.png',
  wiki: 'https://vampire.survivors.wiki/w/Crimson_Shroud',
};

const Bone: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Bone',
  image: 'bone.png',
  wiki: 'https://vampire.survivors.wiki/w/Bone',
};

const AnimaOfMortaccio: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Anima of Mortaccio',
  image: 'anima-of-mortaccio.png',
  wiki: 'https://vampire.survivors.wiki/w/Anima_of_Mortaccio',
};

const CherryBomb: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Cherry Bomb',
  image: 'cherry-bomb.png',
  wiki: 'https://vampire.survivors.wiki/w/Cherry_Bomb',
};

const YattaDaikarin: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Yatta Daikarin',
  image: 'yatta-daikarin.png',
  wiki: 'https://vampire.survivors.wiki/w/Yatta_Daikarin',
};

const CelestialDusting: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Celestial Dusting',
  image: 'celestial-dusting.png',
  wiki: 'https://vampire.survivors.wiki/w/Celestial_Dusting',
};

const ProfusioneDAmore: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: `Profusione D'Amore`,
  image: 'profusione-d-amore.png',
  wiki: `https://vampire.survivors.wiki/w/Profusione_D'Amore`,
};

const GazeOfGaea: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Gaze of Gaea',
  image: 'gaze-of-gaea.png',
  wiki: 'https://vampire.survivors.wiki/w/Gaze_of_Gaea',
};

const EmbraceOfGaea: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Embrace of Gaea',
  image: 'embrace-of-gaea.png',
  wiki: 'https://vampire.survivors.wiki/w/Embrace_of_Gaea',
};

export const baseGameEvolutions: Evo[] = [
  {
    items: [{ item: Whip, condition: 'max' }, { item: HollowHeart }],
    evo: BloodyTear,
  },
  {
    items: [{ item: MagicWand, condition: 'max' }, { item: EmptyTome }],
    evo: HolyWand,
  },
  {
    items: [{ item: Knife, condition: 'max' }, { item: Bracer }],
    evo: ThousandEdge,
  },
  {
    items: [{ item: Axe, condition: 'max' }, { item: Candelabrador }],
    evo: DeathSpiral,
  },
  {
    items: [{ item: Cross, condition: 'max' }, { item: Clover }],
    evo: HeavenSword,
  },
  {
    items: [{ item: KingBible, condition: 'max' }, { item: Spellbinder }],
    evo: UnholyVespers,
  },
  {
    items: [{ item: FireWand, condition: 'max' }, { item: Spinach }],
    evo: Hellfire,
  },
  {
    items: [{ item: Garlic, condition: 'max' }, { item: Pummarola }],
    evo: SoulEater,
  },
  {
    items: [{ item: SantaWater, condition: 'max' }, { item: Attractorb }],
    evo: LaBorra,
  },
  {
    items: [{ item: Runetracer, condition: 'max' }, { item: Armor }],
    evo: NoFuture,
  },
  {
    items: [{ item: LightningRing, condition: 'max' }, { item: Duplicator }],
    evo: ThunderLoop,
  },
  {
    items: [{ item: Pentagram, condition: 'max' }, { item: Crown }],
    evo: GorgeousMoon,
  },
  {
    items: [{ item: GattiAmari, condition: 'max' }, { item: StoneMask }],
    evo: ViciousHunger,
  },
  {
    items: [{ item: SongOfMana, condition: 'max' }, { item: Skull_O_Maniac }],
    evo: Mannajja,
  },
  {
    items: [{ item: ShadowPinion, condition: 'max' }, { item: Wings }],
    evo: ValkyrieTurner,
  },
  {
    items: [
      { item: Peachone, condition: 'max' },
      { item: EbonyWings, condition: 'max' },
    ],
    evo: Vandalier,
  },
  {
    items: [{ item: VentoSacro, condition: 'max' }, { item: BloodyTear }],
    evo: Fuwalafuwaloo,
  },
  {
    items: [
      { item: GlassFandango, condition: 'max' },
      { item: Wings, condition: 'max' },
    ],
    evo: CelestialVoulge,
  },
  {
    items: [
      { item: Phas3r, condition: 'max' },
      { item: EmptyTome, condition: 'max' },
    ],
    evo: Photonstorm,
  },
  {
    items: [
      { item: PakoBattiliar, condition: 'max' },
      { item: HollowHeart, condition: 'max' },
    ],
    evo: MazoFamiliar,
  },
  {
    items: [
      { item: SantaJavelin, condition: 'max' },
      { item: Clover, condition: 'max' },
    ],
    evo: SeraphicCry,
  },
  {
    items: [
      { item: Bracelet, condition: 'max' },
      { item: BiBracelet, condition: 'max' },
    ],
    evo: TriBracelet,
  },
  {
    items: [
      { item: VictorySword, condition: 'max' },
      { item: TorronasBox, condition: 'max' },
    ],
    evo: SoleSolution,
  },
  {
    items: [
      { item: FlamesOfMisspell, condition: 'max' },
      { item: TorronasBox, condition: 'max' },
    ],
    evo: AshesOfMuspell,
  },
  {
    items: [
      { item: PhieraDerTuphello, condition: 'max' },
      { item: EightTheSparrow, condition: 'max' },
      { item: Tirajisu },
    ],
    evo: Phieraggi,
  },
  {
    items: [
      { item: ClockLancet, condition: 'max' },
      { item: GoldRing, condition: 'max' },
      { item: SilverRing, condition: 'max' },
    ],
    evo: InfiniteCorridor,
  },
  {
    items: [
      { item: Laurel, condition: 'max' },
      { item: MetaglioLeft, condition: 'max' },
      { item: MetaglioRight, condition: 'max' },
    ],
    evo: CrimsonShroud,
  },

  {
    items: [
      { item: Bone, condition: 'max' },
      { item: ChaosMalachite },
      { item: Mortaccio, condition: 'lvl80' },
    ],
    evo: AnimaOfMortaccio,
  },
  {
    items: [
      { item: CherryBomb, condition: 'max' },
      { item: ChaosRosalia },
      { item: Cavallo, condition: 'lvl80' },
    ],
    evo: YattaDaikarin,
  },
  {
    items: [
      { item: CelestialDusting, condition: 'max' },
      { item: ChaosAltemanna },
      { item: OSole, condition: 'lvl80' },
    ],
    evo: ProfusioneDAmore,
  },
  {
    items: [{ item: GazeOfGaea, condition: 'max' }, { item: ParmAegis }],
    evo: EmbraceOfGaea,
  },
];
