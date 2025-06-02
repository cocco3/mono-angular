import type { WeaponEvolution, Item } from './types';
import {
  Armor,
  Attractorb,
  Bracer,
  Candelabrador,
  Clover,
  Crown,
  Duplicator,
  Empty,
  EmptyTome,
  HollowHeart,
  KaromasMana,
  ParmAegis,
  Pummarola,
  Skull_O_Maniac,
  Spellbinder,
  Spinach,
  StoneMask,
  Tirajisu,
  Wings,
} from './passives';

const Alchemy_Whip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Alchemy Whip',
  image: 'Alchemy_Whip.png',
  wiki: 'https://vampire.survivors.wiki/w/Alchemy_Whip',
};

const Vampire_Killer: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Vampire Killer',
  image: 'Vampire_Killer.png',
  wiki: 'https://vampire.survivors.wiki/w/Vampire_Killer',
};

const Wind_Whip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Wind Whip',
  image: 'Wind_Whip.png',
  wiki: 'https://vampire.survivors.wiki/w/Wind_Whip',
};

const Spirit_Tornado_Tip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Spirit Tornado Tip',
  image: 'Spirit_Tornado_Tip.png',
  wiki: 'https://vampire.survivors.wiki/w/Spirit_Tornado_Tip',
};

const Platinum_Whip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Platinum Whip',
  image: 'Platinum_Whip.png',
  wiki: 'https://vampire.survivors.wiki/w/Platinum_Whip',
};

const Cross_Crasher_Tip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Cross Crasher Tip',
  image: 'Cross_Crasher_Tip.png',
  wiki: 'https://vampire.survivors.wiki/w/Cross_Crasher_Tip',
};

const Dragon_Water_Whip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Dragon Water Whip',
  image: 'Dragon_Water_Whip.png',
  wiki: 'https://vampire.survivors.wiki/w/Dragon_Water_Whip',
};

const Hydrostormer_Tip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Hydrostormer Tip',
  image: 'Hydrostormer_Tip.png',
  wiki: 'https://vampire.survivors.wiki/w/Hydrostormer_Tip',
};

const Sonic_Whip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Sonic Whip',
  image: 'Sonic_Whip.png',
  wiki: 'https://vampire.survivors.wiki/w/Sonic_Whip',
};

const Crissaegrim_Tip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Crissaegrim Tip',
  image: 'Crissaegrim_Tip.png',
  wiki: 'https://vampire.survivors.wiki/w/Crissaegrim_Tip',
};

const Jet_Black_Whip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Jet Black Whip',
  image: 'Jet_Black_Whip.png',
  wiki: 'https://vampire.survivors.wiki/w/Jet_Black_Whip',
};

const Mormegil_Tip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Mormegil Tip',
  image: 'Mormegil_Tip.png',
  wiki: 'https://vampire.survivors.wiki/w/Mormegil_Tip',
};

const Vibhuti_Whip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Vibhuti Whip',
  image: 'Vibhuti_Whip.png',
  wiki: 'https://vampire.survivors.wiki/w/Vibhuti_Whip',
};

const Daybreaker_Tip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Daybreaker Tip',
  image: 'Daybreaker_Tip.png',
  wiki: 'https://vampire.survivors.wiki/w/Daybreaker_Tip',
};

const Vanitas_Whip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Vanitas Whip',
  image: 'Vanitas_Whip.png',
  wiki: 'https://vampire.survivors.wiki/w/Vanitas_Whip',
};

const Aurablaster_Tip: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Aurablaster Tip',
  image: 'Aurablaster_Tip.png',
  wiki: 'https://vampire.survivors.wiki/w/Aurablaster_Tip',
};

const Shuriken: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Shuriken',
  image: 'Shuriken.png',
  wiki: 'https://vampire.survivors.wiki/w/Shuriken',
};

const Yagyu_Shuriken: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Yagyu Shuriken',
  image: 'Yagyu_Shuriken.png',
  wiki: 'https://vampire.survivors.wiki/w/Yagyu_Shuriken',
};

const Curved_Knife: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Curved Knife',
  image: 'Curved_Knife.png',
  wiki: 'https://vampire.survivors.wiki/w/Curved_Knife',
};

const Bwaka_Knife: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Bwaka Knife',
  image: 'Bwaka_Knife.png',
  wiki: 'https://vampire.survivors.wiki/w/Bwaka_Knife',
};

const Javelin: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Javelin',
  image: 'Javelin.png',
  wiki: 'https://vampire.survivors.wiki/w/Javelin',
};

const Long_Inus: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Long Inus',
  image: 'Long_Inus.png',
  wiki: 'https://vampire.survivors.wiki/w/Long_Inus',
};

const Discus: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Discus',
  image: 'Discus.png',
  wiki: 'https://vampire.survivors.wiki/w/Discus',
};

const Stellar_Blade: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Stellar Blade',
  image: 'Stellar_Blade.png',
  wiki: 'https://vampire.survivors.wiki/w/Stellar_Blade',
};

const Iron_Ball: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Iron Ball',
  image: 'Iron_Ball.png',
  wiki: 'https://vampire.survivors.wiki/w/Iron_Ball',
};

const Wrecking_Ball: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Wrecking Ball',
  image: 'Wrecking_Ball.png',
  wiki: 'https://vampire.survivors.wiki/w/Wrecking_Ball',
};

const Silver_Revolver: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Silver Revolver',
  image: 'Silver_Revolver.png',
  wiki: 'https://vampire.survivors.wiki/w/Silver_Revolver',
};

const Jewel_Gun: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Jewel Gun',
  image: 'Jewel_Gun.png',
  wiki: 'https://vampire.survivors.wiki/w/Jewel_Gun',
};

const Hand_Grenade: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Hand Grenade',
  image: 'Hand_Grenade.png',
  wiki: 'https://vampire.survivors.wiki/w/Hand_Grenade',
};

const The_RPG: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'The RPG',
  image: 'The_RPG.png',
  wiki: 'https://vampire.survivors.wiki/w/The_RPG',
};

const Wine_Glass: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Wine Glass',
  image: 'Wine_Glass.png',
  wiki: 'https://vampire.survivors.wiki/w/Wine_Glass',
};

const Meal_Ticket: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Meal Ticket',
  image: 'Meal_Ticket.png',
  wiki: 'https://vampire.survivors.wiki/w/Meal_Ticket',
};

const Raging_Fire: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Raging Fire',
  image: 'Raging_Fire.png',
  wiki: 'https://vampire.survivors.wiki/w/Raging_Fire',
};

const Salamender: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Salamender',
  image: 'Salamender.png',
  wiki: 'https://vampire.survivors.wiki/w/Salamender',
};

const Ice_Fang: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Ice Fang',
  image: 'Ice_Fang.png',
  wiki: 'https://vampire.survivors.wiki/w/Ice_Fang',
};

const Cocytus: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Cocytus',
  image: 'Cocytus.png',
  wiki: 'https://vampire.survivors.wiki/w/Cocytus',
};

const Gale_Force: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Gale Force',
  image: 'Gale_Force.png',
  wiki: 'https://vampire.survivors.wiki/w/Gale_Force',
};

const Pneuma_Tempestas: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Pneuma Tempestas',
  image: 'Pneuma_Tempestas.png',
  wiki: 'https://vampire.survivors.wiki/w/Pneuma_Tempestas',
};

const Rock_Riot: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Rock Riot',
  image: 'Rock_Riot.png',
  wiki: 'https://vampire.survivors.wiki/w/Rock_Riot',
};

const Gemma_Torpor: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Gemma Torpor',
  image: 'Gemma_Torpor.png',
  wiki: 'https://vampire.survivors.wiki/w/Gemma_Torpor',
};

const Fulgur: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Fulgur',
  image: 'Fulgur.png',
  wiki: 'https://vampire.survivors.wiki/w/Fulgur',
};

const Tenebris_Tonitrus: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Tenebris Tonitrus',
  image: 'Tenebris_Tonitrus.png',
  wiki: 'https://vampire.survivors.wiki/w/Tenebris_Tonitrus',
};

const Keremet_Bubbles: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Keremet Bubbles',
  image: 'Keremet_Bubbles.png',
  wiki: 'https://vampire.survivors.wiki/w/Keremet_Bubbles',
};

const Keremet_Morbus: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Keremet Morbus',
  image: 'Keremet_Morbus.png',
  wiki: 'https://vampire.survivors.wiki/w/Keremet_Morbus',
};

const Hex: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Hex',
  image: 'Hex.png',
  wiki: 'https://vampire.survivors.wiki/w/Hex',
};

const Nightmare: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Nightmare',
  image: 'Nightmare.png',
  wiki: 'https://vampire.survivors.wiki/w/Nightmare',
};

const Refectio: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Refectio',
  image: 'Refectio.png',
  wiki: 'https://vampire.survivors.wiki/w/Refectio',
};

const Sanctuary: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Sanctuary',
  image: 'Sanctuary.png',
  wiki: 'https://vampire.survivors.wiki/w/Sanctuary',
};

const Mace: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Mace',
  image: 'Mace.png',
  wiki: 'https://vampire.survivors.wiki/w/Mace',
};

const Stamazza: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Stamazza',
  image: 'Stamazza.png',
  wiki: 'https://vampire.survivors.wiki/w/Stamazza',
};

const Star_Flail: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Star Flail',
  image: 'Star_Flail.png',
  wiki: 'https://vampire.survivors.wiki/w/Star_Flail',
};

const Moon_Rod: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Moon Rod',
  image: 'Moon_Rod.png',
  wiki: 'https://vampire.survivors.wiki/w/Moon_Rod',
};

const Alucard_Spear: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Alucard Spear',
  image: 'Alucard_Spear.png',
  wiki: 'https://vampire.survivors.wiki/w/Alucard_Spear',
};

const Thunderbolt_Spear: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Thunderbolt Spear',
  image: 'Thunderbolt_Spear.png',
  wiki: 'https://vampire.survivors.wiki/w/Thunderbolt_Spear',
};

const Trident: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Trident',
  image: 'Trident.png',
  wiki: 'https://vampire.survivors.wiki/w/Trident',
};

const Gungnir_Souris: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Gungnir-Souris',
  image: 'Gungnir-Souris.png',
  wiki: 'https://vampire.survivors.wiki/w/Gungnir-Souris',
};

const Iron_Shield: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Iron Shield',
  image: 'Iron_Shield.png',
  wiki: 'https://vampire.survivors.wiki/w/Iron_Shield',
};

const Dark_Iron_Shield: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Dark Iron Shield',
  image: 'Dark_Iron_Shield.png',
  wiki: 'https://vampire.survivors.wiki/w/Dark_Iron_Shield',
};

const Guardians_Targe: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: `Guardian's Targe`,
  image: 'Guardians_Targe.png',
  wiki: 'https://vampire.survivors.wiki/w/Guardian%27s_Targe',
};

const Sacred_Beasts_Tower_Shield: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Sacred Beasts Tower Shield',
  image: 'Sacred_Beasts_Tower_Shield.png',
  wiki: 'https://vampire.survivors.wiki/w/Sacred_Beasts_Tower_Shield',
};

const Tyrfing: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Tyrfing',
  image: 'Tyrfing.png',
  wiki: 'https://vampire.survivors.wiki/w/Tyrfing',
};

const Rune_Sword: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Rune Sword',
  image: 'Rune_Sword.png',
  wiki: 'https://vampire.survivors.wiki/w/Rune_Sword',
};

const Alucart_Sworb: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Alucart Sworb',
  image: 'Alucart_Sworb.png',
  wiki: 'https://vampire.survivors.wiki/w/Alucart_Sworb',
};

const Alucard_Swords: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Alucard Swords',
  image: 'Alucard_Swords.png',
  wiki: 'https://vampire.survivors.wiki/w/Alucard_Swords',
};

const Alucard_Shield: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Alucard Shield',
  image: 'Alucard_Shield.png',
  wiki: 'https://vampire.survivors.wiki/w/Alucard_Shield',
};

const Confodere: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Confodere',
  image: 'Confodere.png',
  wiki: 'https://vampire.survivors.wiki/w/Confodere',
};

const Vol_Confodere: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Vol Confodere',
  image: 'Vol_Confodere.png',
  wiki: 'https://vampire.survivors.wiki/w/Vol_Confodere',
};

const Melio_Confodere: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Melio Confodere',
  image: 'Melio_Confodere.png',
  wiki: 'https://vampire.survivors.wiki/w/Melio_Confodere',
};

const Globus: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Globus',
  image: 'Globus.png',
  wiki: 'https://vampire.survivors.wiki/w/Globus',
};

const Nitesco: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Nitesco',
  image: 'Nitesco.png',
  wiki: 'https://vampire.survivors.wiki/w/Nitesco',
};

const Optical_Shot: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Optical Shot',
  image: 'Optical_Shot.png',
  wiki: 'https://vampire.survivors.wiki/w/Optical_Shot',
};

const Acerbatus: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Acerbatus',
  image: 'Acerbatus.png',
  wiki: 'https://vampire.survivors.wiki/w/Acerbatus',
};

const Dextro_Custos: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Dextro Custos',
  image: 'Dextro_Custos.png',
  wiki: 'https://vampire.survivors.wiki/w/Dextro_Custos',
};

const Sinestro_Custos: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Sinestro Custos',
  image: 'Sinestro_Custos.png',
  wiki: 'https://vampire.survivors.wiki/w/Sinestro_Custos',
};

const Centralis_Custos: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Centralis Custos',
  image: 'Centralis_Custos.png',
  wiki: 'https://vampire.survivors.wiki/w/Centralis_Custos',
};

const Trinum_Custodem: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Trinum Custodem',
  image: 'Trinum_Custodem.png',
  wiki: 'https://vampire.survivors.wiki/w/Trinum_Custodem',
};

const Dominus_Anger: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Dominus Anger',
  image: 'Dominus_Anger.png',
  wiki: 'https://vampire.survivors.wiki/w/Dominus_Anger',
};

const Dominus_Hatred: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Dominus Hatred',
  image: 'Dominus_Hatred.png',
  wiki: 'https://vampire.survivors.wiki/w/Dominus_Hatred',
};

const Dominus_Agony: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Dominus Agony',
  image: 'Dominus_Agony.png',
  wiki: 'https://vampire.survivors.wiki/w/Dominus_Agony',
};

const Power_of_Sire: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Power of Sire',
  image: 'Power_of_Sire.png',
  wiki: 'https://vampire.survivors.wiki/w/Power_of_Sire',
};

const Sonic_Dash: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Sonic Dash',
  image: 'Sonic_Dash.png',
  wiki: 'https://vampire.survivors.wiki/w/Sonic_Dash',
};

const Rapidus_Fio: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Rapidus Fio',
  image: 'Rapidus_Fio.png',
  wiki: 'https://vampire.survivors.wiki/w/Rapidus_Fio',
};

const Luminatio: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Luminatio',
  image: 'Luminatio.png',
  wiki: 'https://vampire.survivors.wiki/w/Luminatio',
};

const Vol_Luminatio: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Vol Luminatio',
  image: 'Vol_Luminatio.png',
  wiki: 'https://vampire.survivors.wiki/w/Vol_Luminatio',
};

const Umbra: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Umbra',
  image: 'Umbra.png',
  wiki: 'https://vampire.survivors.wiki/w/Umbra',
};

const Vol_Umbra: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Vol Umbra',
  image: 'Vol_Umbra.png',
  wiki: 'https://vampire.survivors.wiki/w/Vol_Umbra',
};

const Universitas: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Universitas',
  image: 'Universitas.png',
  wiki: 'https://vampire.survivors.wiki/w/Universitas',
};

const Endo_Gears: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Endo Gears',
  image: 'Endo_Gears.png',
  wiki: 'https://vampire.survivors.wiki/w/Endo_Gears',
};

const Peri_Pendulum: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Peri Pendulum',
  image: 'Peri_Pendulum.png',
  wiki: 'https://vampire.survivors.wiki/w/Peri_Pendulum',
};

const Myo_Lift: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Myo Lift',
  image: 'Myo_Lift.png',
  wiki: 'https://vampire.survivors.wiki/w/Myo_Lift',
};

const Epi_Head: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Epi Head',
  image: 'Epi_Head.png',
  wiki: 'https://vampire.survivors.wiki/w/Epi_Head',
};

const Clock_Tower: Item = {
  kind: 'weapon',
  gameId: 'castlevania',
  name: 'Clock Tower',
  image: 'Clock_Tower.png',
  wiki: 'https://vampire.survivors.wiki/w/Clock_Tower',
};

export const odeToCastlevaniaEvolutions: WeaponEvolution[] = [
  {
    items: [
      { item: Alchemy_Whip, condition: 'max' },
      { item: Tirajisu },
      { item: Vampire_Killer },
    ],
  },
  {
    items: [
      { item: Wind_Whip, condition: 'max' },
      { item: Crown },
      { item: Spirit_Tornado_Tip },
    ],
  },
  {
    items: [
      { item: Platinum_Whip, condition: 'max' },
      { item: Clover },
      { item: Cross_Crasher_Tip },
    ],
  },
  {
    items: [
      { item: Dragon_Water_Whip, condition: 'max' },
      { item: Attractorb },
      { item: Hydrostormer_Tip },
    ],
  },
  {
    items: [
      { item: Sonic_Whip, condition: 'max' },
      { item: Skull_O_Maniac },
      { item: Crissaegrim_Tip },
    ],
  },
  {
    items: [
      { item: Jet_Black_Whip, condition: 'max' },
      { item: StoneMask },
      { item: Mormegil_Tip },
    ],
  },
  {
    items: [
      { item: Vibhuti_Whip, condition: 'max' },
      { item: Candelabrador },
      { item: Daybreaker_Tip },
    ],
  },
  {
    items: [
      { item: Vanitas_Whip, condition: 'max' },
      { item: HollowHeart },
      { item: Aurablaster_Tip },
    ],
  },
  {
    items: [
      { item: Shuriken, condition: 'max' },
      { item: EmptyTome },
      { item: Yagyu_Shuriken },
    ],
  },
  {
    items: [
      { item: Curved_Knife, condition: 'max' },
      { item: Bracer },
      { item: Bwaka_Knife },
    ],
  },
  {
    items: [
      { item: Javelin, condition: 'max' },
      { item: Spellbinder },
      { item: Long_Inus },
    ],
  },
  {
    items: [
      { item: Discus, condition: 'max' },
      { item: ParmAegis },
      { item: Stellar_Blade },
    ],
  },
  {
    items: [
      { item: Iron_Ball, condition: 'max' },
      { item: Armor },
      { item: Wrecking_Ball },
    ],
  },
  {
    items: [
      { item: Silver_Revolver, condition: 'max' },
      { item: KaromasMana },
      { item: Jewel_Gun },
    ],
  },
  {
    items: [
      { item: Hand_Grenade, condition: 'max' },
      { item: Candelabrador, condition: 'max' },
      { item: The_RPG },
    ],
  },
  {
    items: [
      { item: Wine_Glass, condition: 'max' },
      { item: Tirajisu, condition: 'max' },
      { item: Meal_Ticket },
    ],
  },
  {
    items: [
      { item: Raging_Fire, condition: 'max' },
      { item: Spinach, condition: 'max' },
      { item: Salamender },
    ],
  },
  {
    items: [
      { item: Ice_Fang, condition: 'max' },
      { item: Spellbinder, condition: 'max' },
      { item: Cocytus },
    ],
  },
  {
    items: [
      { item: Gale_Force, condition: 'max' },
      { item: Bracer, condition: 'max' },
      { item: Pneuma_Tempestas },
    ],
  },
  {
    items: [
      { item: Rock_Riot, condition: 'max' },
      { item: StoneMask, condition: 'max' },
      { item: Gemma_Torpor },
    ],
  },
  {
    items: [
      { item: Fulgur, condition: 'max' },
      { item: Duplicator, condition: 'max' },
      { item: Tenebris_Tonitrus },
    ],
  },
  {
    items: [
      { item: Keremet_Bubbles, condition: 'max' },
      { item: Armor, condition: 'max' },
      { item: Keremet_Morbus },
    ],
  },
  {
    items: [
      { item: Hex, condition: 'max' },
      { item: Skull_O_Maniac, condition: 'max' },
      { item: Nightmare },
    ],
  },
  {
    items: [
      { item: Refectio, condition: 'max' },
      { item: Clover, condition: 'max' },
      { item: Sanctuary },
    ],
  },
  {
    items: [
      { item: Mace, condition: 'max' },
      { item: HollowHeart, condition: 'max' },
      { item: Stamazza },
    ],
  },
  {
    items: [
      { item: Star_Flail, condition: 'max' },
      { item: Pummarola, condition: 'max' },
      { item: Moon_Rod },
    ],
  },
  {
    items: [
      { item: Trident, condition: 'max' },
      { item: Duplicator, condition: 'max' },
      { item: Gungnir_Souris },
    ],
  },
  {
    items: [
      { item: Alucard_Spear, condition: 'max' },
      { item: Wings },
      { item: Thunderbolt_Spear },
    ],
  },
  {
    items: [
      { item: Iron_Shield, condition: 'max' },
      { item: ParmAegis },
      { item: Dark_Iron_Shield },
    ],
  },
  {
    items: [
      { item: Guardians_Targe, condition: 'max' },
      { item: Pummarola },
      { item: Sacred_Beasts_Tower_Shield },
    ],
  },
  {
    items: [
      { item: Tyrfing, condition: 'max' },
      { item: Spinach },
      { item: Rune_Sword },
    ],
  },
  {
    items: [
      { item: Alucart_Sworb, condition: 'max', operator: 'arrow' },
      { item: Alucard_Swords },
    ],
  },
  {
    items: [
      { item: Alucard_Swords, condition: 'max' },
      { item: Empty, condition: '6-full-evos' },
      { item: Empty, condition: 'max6passives' },
      { item: Alucard_Shield },
    ],
  },
  {
    items: [
      { item: Confodere, condition: 'max' },
      { item: Vol_Confodere, condition: 'max' },
      { item: Melio_Confodere },
    ],
  },
  {
    items: [
      { item: Globus, condition: 'max' },
      { item: EmptyTome, condition: 'max' },
      { item: Nitesco },
    ],
  },
  {
    items: [
      { item: Optical_Shot, condition: 'max' },
      { item: KaromasMana, condition: 'max' },
      { item: Acerbatus },
    ],
  },
  {
    items: [
      { item: Dextro_Custos, condition: 'max' },
      { item: Sinestro_Custos, condition: 'max' },
      { item: Centralis_Custos, condition: 'max' },
      { item: Trinum_Custodem },
    ],
  },
  {
    items: [
      { item: Dominus_Anger, condition: 'max' },
      { item: Dominus_Hatred, condition: 'max' },
      { item: Dominus_Agony, condition: 'max' },
      { item: Power_of_Sire },
    ],
  },
  {
    items: [
      { item: Sonic_Dash, condition: 'max' },
      { item: Wings, condition: 'max' },
      { item: Rapidus_Fio },
    ],
  },
  {
    items: [
      { item: Luminatio, condition: 'max' },
      { item: Crown, condition: 'max' },
      { item: Vol_Luminatio },
    ],
  },
  {
    items: [
      { item: Umbra, condition: 'max' },
      { item: Attractorb, condition: 'max' },
      { item: Vol_Umbra },
    ],
  },
  {
    items: [
      { item: Vol_Luminatio, condition: 'max' },
      { item: Vol_Umbra, condition: 'max' },
      { item: Universitas },
    ],
  },
  {
    items: [
      { item: Endo_Gears },
      { item: Peri_Pendulum },
      { item: Myo_Lift },
      { item: Epi_Head },
      { item: Clock_Tower },
    ],
  },
];
