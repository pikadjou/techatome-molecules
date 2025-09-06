import { TaIconType } from '@ta/icons';
import { IMenuBaseOption, MenuBase } from './base';
export declare class MenuIcon extends MenuBase {
    icon: string | TaIconType;
    constructor(options: IMenuIconOption);
}
export interface IMenuIconOption extends IMenuBaseOption {
    icon?: string | TaIconType;
}
