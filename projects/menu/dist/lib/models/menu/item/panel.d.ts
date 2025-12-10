import { TemplateRef } from "@angular/core";
import { IMenuIconOption, MenuIcon } from "./icon";
export declare class MenuPanel extends MenuIcon {
    template: TemplateRef<any>;
    get isMenuPanel(): boolean;
    constructor(options: IMenuPanelOption);
}
export interface IMenuPanelOption extends IMenuIconOption {
    template: TemplateRef<any>;
}
