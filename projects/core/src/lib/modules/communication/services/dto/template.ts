import { GraphSchema } from '@camelot/server';
import { Culture } from '@camelot/utils';
import { WysiswgBlockData } from '@camelot/wysiswyg';

import { CommunicationType } from './communication';

export interface Template {
  id: string;
  code: string;
  communicationType: CommunicationType;
  isActive: boolean;
  variants: TemplateVariant[];
  availableCultures: Culture[];
}

export const templateProps = new GraphSchema<Template>([
  'id',
  'code',
  'communicationType',
  'isActive',
  'variants',
  'availableCultures',
]);

export interface TemplateVariant {
  id: string;
  title: string;
  body: string;
  jsonBody: string;
  culture: Culture;
  documentIds: string[];

  /* add By service */
  jsonBodyParsed: WysiswgBlockData[] | null;
}

export const templateVariantProps = new GraphSchema<TemplateVariant>([
  'id',
  'title',
  'body',
  'jsonBody',
  'culture',
  'documentIds',
]);
