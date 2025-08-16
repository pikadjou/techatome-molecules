import { Culture } from '@ta/utils';

export interface CreateTemplateVariantPayloadInput {
  templateId?: string;
  title: string;
  body: string;
  jsonBody: string;
  culture: Culture;
  documentIds: number[];
}

export interface UpdateTemplateVariantPayloadInput extends CreateTemplateVariantPayloadInput {
  id: string;
}
