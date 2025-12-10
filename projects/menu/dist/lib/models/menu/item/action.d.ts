import { IMenuBaseOption, MenuBase } from "./base";
export declare class MenuAction extends MenuBase {
    action: Function;
    constructor(options: IMenuIconOption);
}
export interface IMenuIconOption extends IMenuBaseOption {
    action: Function;
}
