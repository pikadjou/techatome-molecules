import { Culture } from '@camelot/utils';

export interface CreateTemplateVariantPayloadInput {
  templateId?: string;
  title: string;
  body: string;
  jsonBody: string;
  culture: Culture;
  documentIds: number[];
}

export interface UpdateTemplateVariantPayloadInput
  extends CreateTemplateVariantPayloadInput {
  id: string;
}
