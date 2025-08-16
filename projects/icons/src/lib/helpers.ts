import { CamIconType } from './services/icons.service';

export const isFontIcon = (icon: string | CamIconType): boolean => {
  return typeof icon === 'string';
};

export const getFontIcon = (icon: string | CamIconType): string => {
  if (isFontIcon(icon)) {
    return icon.toString();
  }
  return '';
};

export const isLocalIcon = (icon: string | CamIconType): boolean => {
  return Object.values(CamIconType).includes(icon as CamIconType);
};
