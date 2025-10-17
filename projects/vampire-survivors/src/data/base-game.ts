import type { WeaponEvolution, Item } from './types';

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
  image: 'base-game/whip.webp',
  wiki: 'https://vampire.survivors.wiki/w/Whip',
};

const BloodyTear: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Bloody Tear',
  image: 'base-game/bloody-tear.png',
  wiki: 'https://vampire.survivors.wiki/w/Bloody_Tear',
};

const MagicWand: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Magic Wand',
  image: 'base-game/magic-wand.png',
  wiki: 'https://vampire.survivors.wiki/w/Magic_Wand',
};

const HolyWand: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Holy Wand',
  image: 'base-game/holy-wand.png',
  wiki: 'https://vampire.survivors.wiki/w/Holy_Wand',
};

const Knife: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Knife',
  image: 'base-game/knife.png',
  wiki: 'https://vampire.survivors.wiki/w/Knife',
};

const ThousandEdge: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Thousand Edge',
  image: 'base-game/thousand-edge.png',
  wiki: 'https://vampire.survivors.wiki/w/Thousand_Edge',
};

const Axe: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Axe',
  image: 'base-game/axe.png',
  wiki: 'https://vampire.survivors.wiki/w/Axe',
};

const DeathSpiral: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Death Spiral',
  image: 'base-game/death-spiral.png',
  wiki: 'https://vampire.survivors.wiki/w/Death_Spiral',
};

const Cross: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Cross',
  image: 'base-game/cross.png',
  wiki: 'https://vampire.survivors.wiki/w/Cross',
};

const HeavenSword: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Heaven Sword',
  image: 'base-game/heaven-sword.png',
  wiki: 'https://vampire.survivors.wiki/w/Heaven_Sword',
};

const KingBible: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'King Bible',
  image: 'base-game/king-bible.png',
  wiki: 'https://vampire.survivors.wiki/w/King_Bible',
};

const UnholyVespers: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Unholy Vespers',
  image: 'base-game/unholy-vespers.png',
  wiki: 'https://vampire.survivors.wiki/w/Unholy_Vespers',
};

const FireWand: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Fire Wand',
  image: 'base-game/fire-wand.png',
  wiki: 'https://vampire.survivors.wiki/w/Fire_Wand',
};

const Hellfire: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Hellfire',
  image: 'base-game/hellfire.png',
  wiki: 'https://vampire.survivors.wiki/w/Hellfire',
};

const Garlic: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Garlic',
  image: 'base-game/garlic.png',
  wiki: 'https://vampire.survivors.wiki/w/Garlic',
};

const SoulEater: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Soul Eater',
  image: 'base-game/soul-eater.png',
  wiki: 'https://vampire.survivors.wiki/w/Soul_Eater',
};

const SantaWater: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Santa Water',
  image: 'base-game/santa-water.png',
  wiki: 'https://vampire.survivors.wiki/w/Santa_Water',
};

const LaBorra: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'La Borra',
  image: 'base-game/la-borra.png',
  wiki: 'https://vampire.survivors.wiki/w/La_Borra',
};

const Runetracer: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Runetracer',
  image: 'base-game/runetracer.png',
  wiki: 'https://vampire.survivors.wiki/w/Runetracer',
};

const NoFuture: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'NO FUTURE',
  image: 'base-game/no-future.png',
  wiki: 'https://vampire.survivors.wiki/w/NO_FUTURE',
};

const LightningRing: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Lightning Ring',
  image: 'base-game/lightning-ring.png',
  wiki: 'https://vampire.survivors.wiki/w/Lightning_Ring',
};

const ThunderLoop: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Thunder Loop',
  image: 'base-game/thunder-loop.png',
  wiki: 'https://vampire.survivors.wiki/w/Thunder_Loop',
};

const Pentagram: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Pentagram',
  image: 'base-game/pentagram.png',
  wiki: 'https://vampire.survivors.wiki/w/Pentagram',
};

const GorgeousMoon: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Gorgeous Moon',
  image: 'base-game/gorgeous-moon.png',
  wiki: 'https://vampire.survivors.wiki/w/Gorgeous_Moon',
};

const GattiAmari: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Gatti Amari',
  image: 'base-game/gatti-amari.png',
  wiki: 'https://vampire.survivors.wiki/w/Gatti_Amari',
};

const ViciousHunger: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Vicious Hunger',
  image: 'base-game/vicious-hunger.png',
  wiki: 'https://vampire.survivors.wiki/w/Vicious_Hunger',
};

const SongOfMana: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Song of Mana',
  image: 'base-game/song-of-mana.png',
  wiki: 'https://vampire.survivors.wiki/w/Song_of_Mana',
};

const Mannajja: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Mannajja',
  image: 'base-game/mannajja.png',
  wiki: 'https://vampire.survivors.wiki/w/Mannajja',
};

const ShadowPinion: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Shadow Pinion',
  image: 'base-game/shadow-pinion.png',
  wiki: 'https://vampire.survivors.wiki/w/Shadow_Pinion',
};

const ValkyrieTurner: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Valkyrie Turner',
  image: 'base-game/valkyrie-turner.png',
  wiki: 'https://vampire.survivors.wiki/w/Valkyrie_Turner',
};

const Peachone: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Peachone',
  image: 'base-game/peachone.png',
  wiki: 'https://vampire.survivors.wiki/w/Peachone',
};

const EbonyWings: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Ebony Wings',
  image: 'base-game/ebony-wings.png',
  wiki: 'https://vampire.survivors.wiki/w/Ebony_Wings',
};

const Vandalier: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Vandalier',
  image: 'base-game/vandalier.png',
  wiki: 'https://vampire.survivors.wiki/w/Vandalier',
};

const VentoSacro: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Vento Sacro',
  image: 'base-game/vento-sacro.png',
  wiki: 'https://vampire.survivors.wiki/w/Vento_Sacro',
};

const Fuwalafuwaloo: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Fuwalafuwaloo',
  image: 'base-game/fuwalafuwaloo.png',
  wiki: 'https://vampire.survivors.wiki/w/Fuwalafuwaloo',
};

const GlassFandango: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Glass Fandango',
  image: 'base-game/glass-fandango.png',
  wiki: 'https://vampire.survivors.wiki/w/Glass_Fandango',
};

const CelestialVoulge: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Celestial Voulge',
  image: 'base-game/celestial-voulge.png',
  wiki: 'https://vampire.survivors.wiki/w/Celestial_Voulge',
};

const Phas3r: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Phas3r',
  image: 'base-game/phas3r.png',
  wiki: 'https://vampire.survivors.wiki/w/Phas3r',
};

const Photonstorm: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Photonstorm',
  image: 'base-game/photonstorm.png',
  wiki: 'https://vampire.survivors.wiki/w/Photonstorm',
};

const PakoBattiliar: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Pako Battiliar',
  image: 'base-game/pako-battiliar.webp',
  wiki: 'https://vampire.survivors.wiki/w/Pako_Battiliar',
};

const MazoFamiliar: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Mazo Familiar',
  image: 'base-game/mazo-familiar.png',
  wiki: 'https://vampire.survivors.wiki/w/Mazo_Familiar',
};

const SantaJavelin: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Santa Javelin',
  image: 'base-game/santa-javelin.png',
  wiki: 'https://vampire.survivors.wiki/w/Santa_Javelin',
};

const SeraphicCry: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Seraphic Cry',
  image: 'base-game/seraphic-cry.png',
  wiki: 'https://vampire.survivors.wiki/w/Seraphic_Cry',
};

const Bracelet: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Bracelet',
  image: 'base-game/bracelet.png',
  wiki: 'https://vampire.survivors.wiki/w/Bracelet',
};

const BiBracelet: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Bi-Bracelet',
  image: 'base-game/bi-bracelet.png',
  wiki: 'https://vampire.survivors.wiki/w/Bi-Bracelet',
};

const TriBracelet: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Tri-Bracelet',
  image: 'base-game/tri-bracelet.png',
  wiki: 'https://vampire.survivors.wiki/w/Tri-Bracelet',
};

const VictorySword: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Victory Sword',
  image: 'base-game/victory-sword.png',
  wiki: 'https://vampire.survivors.wiki/w/Victory_Sword',
};

const SoleSolution: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Sole Solution',
  image: 'base-game/sole-solution.png',
  wiki: 'https://vampire.survivors.wiki/w/Sole_Solution',
};

const FlamesOfMisspell: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Flames of Misspell',
  image: 'base-game/flames-of-misspell.png',
  wiki: 'https://vampire.survivors.wiki/w/Flames_of_Misspell',
};

const AshesOfMuspell: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Ashes of Muspell',
  image: 'base-game/ashes-of-muspell.png',
  wiki: 'https://vampire.survivors.wiki/w/Ashes_of_Muspell',
};

const PhieraDerTuphello: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Phiera Der Tuphello',
  image: 'base-game/phiera-der-tuphello.png',
  wiki: 'https://vampire.survivors.wiki/w/Phiera_Der_Tuphello',
};

const EightTheSparrow: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Eight The Sparrow',
  image: 'base-game/eight-the-sparrow.png',
  wiki: 'https://vampire.survivors.wiki/w/Eight_The_Sparrow',
};

const Phieraggi: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Phieraggi',
  image: 'base-game/phieraggi.png',
  wiki: 'https://vampire.survivors.wiki/w/Phieraggi',
};

const ClockLancet: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Clock Lancet',
  image: 'base-game/clock-lancet.png',
  wiki: 'https://vampire.survivors.wiki/w/Clock_Lancet',
};

const InfiniteCorridor: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Infinite Corridor',
  image: 'base-game/infinite-corridor.png',
  wiki: 'https://vampire.survivors.wiki/w/Infinite_Corridor',
};

const Laurel: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Laurel',
  image: 'base-game/laurel.png',
  wiki: 'https://vampire.survivors.wiki/w/Laurel',
};

const CrimsonShroud: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Crimson Shroud',
  image: 'base-game/crimson-shroud.png',
  wiki: 'https://vampire.survivors.wiki/w/Crimson_Shroud',
};

const Bone: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Bone',
  image: 'base-game/bone.png',
  wiki: 'https://vampire.survivors.wiki/w/Bone',
};

const AnimaOfMortaccio: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Anima of Mortaccio',
  image: 'base-game/anima-of-mortaccio.png',
  wiki: 'https://vampire.survivors.wiki/w/Anima_of_Mortaccio',
};

const CherryBomb: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Cherry Bomb',
  image: 'base-game/cherry-bomb.png',
  wiki: 'https://vampire.survivors.wiki/w/Cherry_Bomb',
};

const YattaDaikarin: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Yatta Daikarin',
  image: 'base-game/yatta-daikarin.png',
  wiki: 'https://vampire.survivors.wiki/w/Yatta_Daikarin',
};

const CelestialDusting: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Celestial Dusting',
  image: 'base-game/celestial-dusting.png',
  wiki: 'https://vampire.survivors.wiki/w/Celestial_Dusting',
};

const ProfusioneDAmore: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: `Profusione D'Amore`,
  image: 'base-game/profusione-d-amore.png',
  wiki: `https://vampire.survivors.wiki/w/Profusione_D'Amore`,
};

const GazeOfGaea: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Gaze of Gaea',
  image: 'base-game/gaze-of-gaea.png',
  wiki: 'https://vampire.survivors.wiki/w/Gaze_of_Gaea',
};

const EmbraceOfGaea: Item = {
  kind: 'weapon',
  gameId: 'base',
  name: 'Embrace of Gaea',
  image: 'base-game/embrace-of-gaea.png',
  wiki: 'https://vampire.survivors.wiki/w/Embrace_of_Gaea',
};

export const baseGameEvolutions: WeaponEvolution[] = [
  {
    items: [
      { item: Whip, condition: 'max' },
      { item: HollowHeart },
      { item: BloodyTear },
    ],
  },
  {
    items: [
      { item: MagicWand, condition: 'max' },
      { item: EmptyTome },
      { item: HolyWand },
    ],
  },
  {
    items: [
      { item: Knife, condition: 'max' },
      { item: Bracer },
      { item: ThousandEdge },
    ],
  },
  {
    items: [
      { item: Axe, condition: 'max' },
      { item: Candelabrador },
      { item: DeathSpiral },
    ],
  },
  {
    items: [
      { item: Cross, condition: 'max' },
      { item: Clover },
      { item: HeavenSword },
    ],
  },
  {
    items: [
      { item: KingBible, condition: 'max' },
      { item: Spellbinder },
      { item: UnholyVespers },
    ],
  },
  {
    items: [
      { item: FireWand, condition: 'max' },
      { item: Spinach },
      { item: Hellfire },
    ],
  },
  {
    items: [
      { item: Garlic, condition: 'max' },
      { item: Pummarola },
      { item: SoulEater },
    ],
  },
  {
    items: [
      { item: SantaWater, condition: 'max' },
      { item: Attractorb },
      { item: LaBorra },
    ],
  },
  {
    items: [
      { item: Runetracer, condition: 'max' },
      { item: Armor },
      { item: NoFuture },
    ],
  },
  {
    items: [
      { item: LightningRing, condition: 'max' },
      { item: Duplicator },
      { item: ThunderLoop },
    ],
  },
  {
    items: [
      { item: Pentagram, condition: 'max' },
      { item: Crown },
      { item: GorgeousMoon },
    ],
  },
  {
    items: [
      { item: GattiAmari, condition: 'max' },
      { item: StoneMask },
      { item: ViciousHunger },
    ],
  },
  {
    items: [
      { item: SongOfMana, condition: 'max' },
      { item: Skull_O_Maniac },
      { item: Mannajja },
    ],
  },
  {
    items: [
      { item: ShadowPinion, condition: 'max' },
      { item: Wings },
      { item: ValkyrieTurner },
    ],
  },
  {
    items: [
      { item: Peachone, condition: 'max' },
      { item: EbonyWings, condition: 'max' },
      { item: Vandalier },
    ],
  },
  {
    items: [
      { item: VentoSacro, condition: 'max' },
      { item: BloodyTear },
      { item: Fuwalafuwaloo },
    ],
  },
  {
    items: [
      { item: GlassFandango, condition: 'max' },
      { item: Wings, condition: 'max' },
      { item: CelestialVoulge },
    ],
  },
  {
    items: [
      { item: Phas3r, condition: 'max' },
      { item: EmptyTome, condition: 'max' },
      { item: Photonstorm },
    ],
  },
  {
    items: [
      { item: PakoBattiliar, condition: 'max' },
      { item: HollowHeart, condition: 'max' },
      { item: MazoFamiliar },
    ],
  },
  {
    items: [
      { item: SantaJavelin, condition: 'max' },
      { item: Clover, condition: 'max' },
      { item: SeraphicCry },
    ],
  },
  {
    items: [
      { item: Bracelet, condition: 'max', operator: 'arrow' },
      { item: BiBracelet, condition: 'max', operator: 'arrow' },
      { item: TriBracelet },
    ],
  },
  {
    items: [
      { item: VictorySword, condition: 'max' },
      { item: TorronasBox, condition: 'max' },
      { item: SoleSolution },
    ],
  },
  {
    items: [
      { item: FlamesOfMisspell, condition: 'max' },
      { item: TorronasBox, condition: 'max' },
      { item: AshesOfMuspell },
    ],
  },
  {
    items: [
      { item: PhieraDerTuphello, condition: 'max' },
      { item: EightTheSparrow, condition: 'max' },
      { item: Tirajisu },
      { item: Phieraggi },
    ],
  },
  {
    items: [
      { item: ClockLancet, condition: 'max' },
      { item: GoldRing, condition: 'max' },
      { item: SilverRing, condition: 'max' },
      { item: InfiniteCorridor },
    ],
  },
  {
    items: [
      { item: Laurel, condition: 'max' },
      { item: MetaglioLeft, condition: 'max' },
      { item: MetaglioRight, condition: 'max' },
      { item: CrimsonShroud },
    ],
  },

  {
    items: [
      { item: Bone, condition: 'max' },
      { item: ChaosMalachite },
      { item: Mortaccio, condition: 'lvl80' },
      { item: AnimaOfMortaccio },
    ],
  },
  {
    items: [
      { item: CherryBomb, condition: 'max' },
      { item: ChaosRosalia },
      { item: Cavallo, condition: 'lvl80' },
      { item: YattaDaikarin },
    ],
  },
  {
    items: [
      { item: CelestialDusting, condition: 'max' },
      { item: ChaosAltemanna },
      { item: OSole, condition: 'lvl80' },
      { item: ProfusioneDAmore },
    ],
  },
  {
    items: [
      { item: GazeOfGaea, condition: 'max' },
      { item: ParmAegis },
      { item: EmbraceOfGaea },
    ],
  },
];
