import { MenuBase } from '../models/menu/item/base';
import { MenuIcon } from '../models/menu/item/icon';
import { Menu } from '../models/menu/menu';
export declare const hasFontIcon: (item: Menu | MenuIcon | MenuBase) => boolean;
export declare const hasIconImage: (item: Menu | MenuIcon | MenuBase) => boolean;
export declare const getIcon: (item: Menu | MenuIcon | MenuBase) => string | import("@ta/icons").CamIconType;
export declare const getFontIcon: (item: Menu | MenuIcon | MenuBase) => string;
