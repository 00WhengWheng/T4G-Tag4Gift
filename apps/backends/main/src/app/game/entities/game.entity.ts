import { GameType } from '../enums/game-type.enum';

export class Game {
  id: string;
  type: GameType;
  status?: string;
  category?: string;
  name?: string;
  description?: string;
  gdevelopProjectUrl?: string;
}
