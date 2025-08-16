import { compare } from '@camelot/utils';

import { TranslatedEnumeration } from '../common/dto/translated-enumeration';

export const sortByTranslatedValue = (translated: TranslatedEnumeration[]) => {
  return translated.sort((a, b) =>
    compare(a.translatedValue || '', b.translatedValue || '', true)
  );
};
