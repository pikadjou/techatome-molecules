import { CamIconType } from '@ta/icons';
import { IMenuBaseOption, MenuBase } from './base';
export declare class MenuIcon extends MenuBase {
    icon: string | CamIconType;
    constructor(options: IMenuIconOption);
}
export interface IMenuIconOption extends IMenuBaseOption {
    icon?: string | CamIconType;
}
