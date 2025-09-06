import { TaIconType } from './services/icons.service';

export const isFontIcon = (icon: string | TaIconType): boolean => {
  return typeof icon === 'string';
};

export const getFontIcon = (icon: string | TaIconType): string => {
  if (isFontIcon(icon)) {
    return icon.toString();
  }
  return '';
};

export const isLocalIcon = (icon: string | TaIconType): boolean => {
  return Object.values(TaIconType).includes(icon as TaIconType);
};
