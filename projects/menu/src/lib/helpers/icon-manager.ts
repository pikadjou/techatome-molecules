import { MenuBase } from '../models/menu/item/base';
import { MenuIcon } from '../models/menu/item/icon';
import { Menu } from '../models/menu/menu';

export const hasFontIcon = (item: Menu | MenuIcon | MenuBase) => {
  if (item.hasOwnProperty('icon')) {
    return typeof (<MenuIcon>item).icon === 'string';
  }
  return false;
};

export const hasIconImage = (item: Menu | MenuIcon | MenuBase) => {
  if (item.hasOwnProperty('icon')) {
    return typeof (<MenuIcon>item).icon === 'number';
  }
  return false;
};

export const getIcon = (item: Menu | MenuIcon | MenuBase) => {
  if (hasFontIcon(item) || hasIconImage(item)) {
    return (<MenuIcon>item).icon;
  }
  return '';
};

export const getFontIcon = (item: Menu | MenuIcon | MenuBase) => {
  if (hasFontIcon(item)) {
    return <string>(<MenuIcon>item).icon;
  }
  return '';
};
