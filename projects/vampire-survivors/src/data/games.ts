export type GameId =
  | 'base'
  | 'moonspell'
  | 'foscari'
  | 'emergency-meeting'
  | 'operation-guns'
  | 'emerald-diorama'
  | 'castlevania';

export type Game = { id: GameId; name: string; image: string };

const BaseGame: Game = {
  id: 'base',
  name: 'Base Game',
  image: 'games/game-vampire-survivors.png',
};

const Moonspell: Game = {
  id: 'moonspell',
  name: 'Legacy of the Moonspell DLC',
  image: 'games/game-moonspell.png',
};

const Foscari: Game = {
  id: 'foscari',
  name: 'Tides of the Foscari DLC',
  image: 'games/game-foscari.png',
};

const EmergencyMeeting: Game = {
  id: 'emergency-meeting',
  name: 'Emergency Meeting DLC',
  image: 'games/game-emergency-meeting.png',
};

const OperationGuns: Game = {
  id: 'operation-guns',
  name: 'Operation Guns DLC',
  image: 'games/game-operation-guns.png',
};

const EmeraldDiorama: Game = {
  id: 'emerald-diorama',
  name: 'Emerald Diorama DLC',
  image: 'games/game-emerald-diorama.png',
};

const OdeToCastleVania: Game = {
  id: 'castlevania',
  name: 'Ode to CastleVania DLC',
  image: 'games/game-castlevania.png',
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
