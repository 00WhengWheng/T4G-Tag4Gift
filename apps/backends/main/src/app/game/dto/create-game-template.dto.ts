export class CreateGameTemplateDto {
  name: string;
  description?: string;
  type: string;
  category?: string;
  isActive?: boolean;
  difficulty?: string;
  structure?: any;
  gdevelopProjectUrl?: string;
}
