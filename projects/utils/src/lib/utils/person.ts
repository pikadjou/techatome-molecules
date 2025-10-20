import { TaIconType } from '@ta/icons';

import { Civility } from '../types/public-api';

export const getCivilityIcon = (civility: Civility | null): TaIconType | null => {
  if (!civility) {
    return null;
  }
  switch (civility) {
    case Civility.Dear:
      return TaIconType.Profile;
    case Civility.Madame:
      return TaIconType.Women;
    case Civility.Sir:
      return TaIconType.Men;
    default:
      return null;
  }
};

export const getCivility = (person: { naming: any }): Civility | null => {
  return person.naming && person.naming.hasOwnProperty('civility') ? (person.naming as any).civility : null;
};

export const fullName = (naming?: { firstname: string | null; lastname: string }) => {
  return `${naming?.firstname} ${naming?.lastname}`;
};
