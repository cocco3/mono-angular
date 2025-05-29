import {
  Mini_Crewmate,
  Mini_Engineer,
  Mini_Ghost,
  Mini_Guardian,
  Mini_Impostor,
  Mini_Scientist,
  Mini_Shapeshifter,
} from './passives';
import type { WeaponEvolution, Item } from './types';

const Report: Item = {
  kind: 'weapon',
  gameId: 'emergency-meeting',
  name: 'Report!',
  image: 'Report.png',
  wiki: 'https://vampire.survivors.wiki/w/Report!',
};

const Emergency_Meeting: Item = {
  kind: 'weapon',
  gameId: 'emergency-meeting',
  name: 'Emergency Meeting',
  image: 'Emergency_Meeting.png',
  wiki: 'https://vampire.survivors.wiki/w/Emergency_Meeting_(weapon)',
};

const Lucky_Swipe: Item = {
  kind: 'weapon',
  gameId: 'emergency-meeting',
  name: 'Lucky Swipe',
  image: 'Lucky_Swipe.png',
  wiki: 'https://vampire.survivors.wiki/w/Lucky_Swipe',
};

const Crossed_Wires: Item = {
  kind: 'weapon',
  gameId: 'emergency-meeting',
  name: 'Crossed Wires',
  image: 'Crossed_Wires.png',
  wiki: 'https://vampire.survivors.wiki/w/Crossed_Wires',
};

const Lifesign_Scan: Item = {
  kind: 'weapon',
  gameId: 'emergency-meeting',
  name: 'Lifesign Scan',
  image: 'Lifesign_Scan.png',
  wiki: 'https://vampire.survivors.wiki/w/Lifesign_Scan',
};

const Paranormal_Scan: Item = {
  kind: 'weapon',
  gameId: 'emergency-meeting',
  name: 'Paranormal Scan',
  image: 'Paranormal_Scan.png',
  wiki: 'https://vampire.survivors.wiki/w/Paranormal_Scan',
};

const Just_Vent: Item = {
  kind: 'weapon',
  gameId: 'emergency-meeting',
  name: 'Just Vent',
  image: 'Just_Vent.png',
  wiki: 'https://vampire.survivors.wiki/w/Just_Vent',
};

const Unjust_Ejection: Item = {
  kind: 'weapon',
  gameId: 'emergency-meeting',
  name: 'Unjust Ejection',
  image: 'Unjust_Ejection.png',
  wiki: 'https://vampire.survivors.wiki/w/Unjust_Ejection',
};

const Clear_Debris: Item = {
  kind: 'weapon',
  gameId: 'emergency-meeting',
  name: 'Clear Debris',
  image: 'Clear_Debris.png',
  wiki: 'https://vampire.survivors.wiki/w/Clear_Debris',
};

const Clear_Asteroids: Item = {
  kind: 'weapon',
  gameId: 'emergency-meeting',
  name: 'Clear Asteroids',
  image: 'Clear_Asteroids.png',
  wiki: 'https://vampire.survivors.wiki/w/Clear_Asteroids',
};

const Sharp_Tongue: Item = {
  kind: 'weapon',
  gameId: 'emergency-meeting',
  name: 'Sharp Tongue',
  image: 'Sharp_Tongue.png',
  wiki: 'https://vampire.survivors.wiki/w/Sharp_Tongue',
};

const Impostongue: Item = {
  kind: 'weapon',
  gameId: 'emergency-meeting',
  name: 'Impostongue',
  image: 'Impostongue.png',
  wiki: 'https://vampire.survivors.wiki/w/Impostongue',
};

const Science_Rocks: Item = {
  kind: 'weapon',
  gameId: 'emergency-meeting',
  name: 'Science Rocks',
  image: 'Science_Rocks.png',
  wiki: 'https://vampire.survivors.wiki/w/Science_Rocks',
};

const Rocket_Science: Item = {
  kind: 'weapon',
  gameId: 'emergency-meeting',
  name: 'Rocket Science',
  image: 'Rocket_Science.png',
  wiki: 'https://vampire.survivors.wiki/w/Rocket_Science',
};

export const emergencyMeetingEvolutions: WeaponEvolution[] = [
  {
    items: [
      { item: Report, condition: 'max' },
      { item: Mini_Crewmate, condition: 'max' },
      { item: Emergency_Meeting },
    ],
  },
  {
    items: [
      { item: Lucky_Swipe, condition: 'max' },
      { item: Mini_Engineer, condition: 'max' },
      { item: Crossed_Wires },
    ],
  },
  {
    items: [
      { item: Lifesign_Scan, condition: 'max' },
      { item: Mini_Ghost, condition: 'max' },
      { item: Paranormal_Scan },
    ],
  },
  {
    items: [
      { item: Just_Vent, condition: 'max' },
      { item: Mini_Shapeshifter, condition: 'max' },
      { item: Unjust_Ejection },
    ],
  },
  {
    items: [
      { item: Clear_Debris, condition: 'max' },
      { item: Mini_Guardian, condition: 'max' },
      { item: Clear_Asteroids },
    ],
  },
  {
    items: [
      { item: Sharp_Tongue, condition: 'max' },
      { item: Mini_Impostor, condition: 'max' },
      { item: Impostongue },
    ],
  },
  {
    items: [
      { item: Science_Rocks, condition: 'max' },
      { item: Mini_Scientist, condition: 'max' },
      { item: Rocket_Science },
    ],
  },
];
