import { GameType } from '../enums/game-type.enum';

export class GameTemplate {
  id: string;
  name: string;
  description?: string;
  type: GameType;
  category?: string;
  difficulty?: string;
  structure: string;
  isActive: boolean;
  gdevelopProjectUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}
