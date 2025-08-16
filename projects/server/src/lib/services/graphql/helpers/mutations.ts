import { ObjectKeys } from '@camelot/utils';

export const graphQlUpdateFields = (object: any): { updatedFields: string[] } => {
  return { updatedFields: <string[]>ObjectKeys(object) };
};
