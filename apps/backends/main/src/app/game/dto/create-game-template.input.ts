import { GameType } from '../enums/game-type.enum';

export class CreateGameTemplateInput {
  name: string;
  type: GameType;
  category?: string;
  description?: string;
  difficulty?: string;
  structure: string;
  gdevelopProjectUrl?: string;
}
