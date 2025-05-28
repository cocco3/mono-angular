export type GameId =
  | 'base'
  | 'moonspell'
  | 'foscari'
  | 'emergency-meeting'
  | 'operation-guns'
  | 'emerald-diorama';
// |'castlevania'

export type Game = { id: GameId; name: string; color: string };

const BaseGame: Game = {
  id: 'base',
  name: 'Base Game',
  color: '#0c0e23',
};

const Moonspell: Game = {
  id: 'moonspell',
  name: 'Legacy of the Moonspell DLC',
  color: '#2f0972',
};

const Foscari: Game = {
  id: 'foscari',
  name: 'Tides of the Foscari DLC',
  color: '#032e05',
};

const EmergencyMeeting: Game = {
  id: 'emergency-meeting',
  name: 'Emergency Meeting DLC',
  color: '#3e0404',
};

const OperationGuns: Game = {
  id: 'operation-guns',
  name: 'Operation Guns DLC',
  color: '#303030',
};

const EmeraldDiorama: Game = {
  id: 'emerald-diorama',
  name: 'Emerald Diorama DLC',
  color: '#47725d',
};

export const allGames = [
  BaseGame,
  Moonspell,
  Foscari,
  EmergencyMeeting,
  OperationGuns,
  EmeraldDiorama,
];
