import { GameType } from '../enums/game-type.enum';

export class CreateGameInput {
  name: string;
  type: GameType;
  category?: string;
  description?: string;
  gdevelopProjectUrl?: string;
}
