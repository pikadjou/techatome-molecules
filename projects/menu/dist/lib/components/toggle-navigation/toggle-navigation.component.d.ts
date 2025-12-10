import { OnInit } from "@angular/core";
import { MenuAction } from "../../models/menu/item/action";
import { MenuBase } from "../../models/menu/item/base";
import { MenuIcon } from "../../models/menu/item/icon";
import { Menu } from "../../models/menu/menu";
import * as i0 from "@angular/core";
export declare class ToggleNavigationComponent implements OnInit {
    menu: Menu;
    container: "tab" | "switch";
    activeKey: string;
    readonly typeItem: {
        item: MenuBase | MenuAction | MenuIcon;
    };
    notifEnabled: boolean;
    constructor();
    get containerCss(): "tab" | "switch";
    ngOnInit(): void;
    hasFontIcon(item: MenuIcon | MenuAction | MenuBase): boolean;
    hasIconImage(item: MenuIcon | MenuAction | MenuBase): boolean;
    getIcon(item: MenuIcon | MenuAction | MenuBase): string | import("@ta/icons").TaIconType;
    getFontIcon(item: MenuIcon | MenuAction | MenuBase): string;
    getLink(item: MenuIcon | MenuAction | MenuBase): string;
    callback(item: MenuBase): void;
    isActive(item: MenuBase): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleNavigationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleNavigationComponent, "ta-toggle-navigation", never, { "menu": { "alias": "menu"; "required": false; }; "container": { "alias": "container"; "required": false; }; }, {}, never, never, true, never>;
}
