import { GameType } from './enums/game-type.enum';
import { ChallengeType } from '../challenge/enums/challenge-type.enum';

export class GameCategory {
  name: string;
}

export class GameTypeInfo {
  name: string;
  games: string[];
}

export class Game {
  id: string;
  type: GameType;
  status?: string;
  category?: string;
  name?: string;
  description?: string;
  gdevelopProjectUrl?: string;
}

export class Gift {
  id: string;
  name: string;
  description?: string;
}

export class ChallengeResult {
  userId: string;
  timeMs: number;
}

export class Challenge {
  id: string;
  type: ChallengeType;
  game: Game | null;
  participants: string[]; // user IDs
  results: ChallengeResult[];
  winnerId?: string;
  gift: Gift;
}

export const GAME_CATEGORIES = [
  'knowledge', 'gossip', 'music', 'sport', 'history', // quiz
  'frozen bubble', 'sudoko', 'xpuzzle', 'tetris',      // puzzle
  'rhythm', 'name that tune',                         // music
  'flappy bird', 'catch the logo', 'bomber bunny', 'platform' // reaction
];

export const GAME_TYPES = [
  { name: 'quiz', games: ['knowledge', 'gossip', 'music', 'sport', 'history'] },
  { name: 'puzzle', games: ['frozen bubble', 'sudoko', 'xpuzzle', 'tetris'] },
  { name: 'music', games: ['rhythm', 'name that tune'] },
  { name: 'reaction', games: ['flappy bird', 'catch the logo', 'bomber bunny', 'platform'] }
];
