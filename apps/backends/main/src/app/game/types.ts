import { GameType } from './enums/game-type.enum';
import { ChallengeType } from './enums/challenge-type.enum';

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
