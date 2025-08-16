export interface CreateTemplatePayloadInput {
  code: string;
  communicationType: number;
  isActive: boolean;
}

export interface UpdateTemplatePayloadInput extends CreateTemplatePayloadInput {
  id: string;
}
