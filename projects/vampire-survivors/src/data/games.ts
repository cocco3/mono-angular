export type GameId =
  | 'base'
  | 'moonspell'
  | 'foscari'
  | 'emergency-meeting'
  | 'operation-guns'
  | 'emerald-diorama'
  | 'castlevania';

export type Game = { id: GameId; name: string; color: string; image: string };

const BaseGame: Game = {
  id: 'base',
  name: 'Base Game',
  color: '#0c0e23',
  image: 'game-vampire-survivors.png',
};

const Moonspell: Game = {
  id: 'moonspell',
  name: 'Legacy of the Moonspell DLC',
  color: '#2f0972',
  image: 'game-moonspell.png',
};

const Foscari: Game = {
  id: 'foscari',
  name: 'Tides of the Foscari DLC',
  color: '#032e05',
  image: 'game-foscari.png',
};

const EmergencyMeeting: Game = {
  id: 'emergency-meeting',
  name: 'Emergency Meeting DLC',
  color: '#3e0404',
  image: 'game-emergency-meeting.png',
};

const OperationGuns: Game = {
  id: 'operation-guns',
  name: 'Operation Guns DLC',
  color: '#303030',
  image: 'game-operation-guns.png',
};

const EmeraldDiorama: Game = {
  id: 'emerald-diorama',
  name: 'Emerald Diorama DLC',
  color: '#47725d',
  image: 'game-emerald-diorama.png',
};

const OdeToCastleVania: Game = {
  id: 'castlevania',
  name: 'Ode to CastleVania DLC',
  color: '#554326',
  image: 'game-castlevania.png',
};

export const allGames = [
  BaseGame,
  Moonspell,
  Foscari,
  EmergencyMeeting,
  OperationGuns,
  EmeraldDiorama,
  OdeToCastleVania,
];
