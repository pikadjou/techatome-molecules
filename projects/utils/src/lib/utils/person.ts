import { CamIconType } from '@ta/icons';

import { Civility } from '../types/public-api';

export const getCivilityIcon = (civility: Civility | null): CamIconType | null => {
  if (!civility) {
    return null;
  }
  switch (civility) {
    case Civility.Dear:
      return CamIconType.Profile;
    case Civility.Madame:
      return CamIconType.Women;
    case Civility.Sir:
      return CamIconType.Men;
    default:
      return null;
  }
};

export const getCivility = (person: { naming: any }): Civility | null => {
  return person.naming && person.naming.hasOwnProperty('civility') ? (person.naming as any).civility : null;
};

export const fullName = (
  naming: { firstName: string | null; name: string } | { firstName: string | null; lastName: string }
) => {
  const name = 'name' in naming ? naming.name : naming.lastName;
  return `${naming.firstName || ''} ${name}`;
};
