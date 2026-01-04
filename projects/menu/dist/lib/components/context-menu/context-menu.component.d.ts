import { TaBaseComponent } from "@ta/utils";
import { MenuAction } from "../../models/menu/item/action";
import { MenuBase } from "../../models/menu/item/base";
import { MenuIcon } from "../../models/menu/item/icon";
import { Menu } from "../../models/menu/menu";
import * as i0 from "@angular/core";
export declare class ContextMenuComponent extends TaBaseComponent {
    menu: import("@angular/core").InputSignal<Menu<MenuBase>>;
    constructor();
    hasFontIcon(item: MenuIcon | MenuAction | MenuBase): boolean;
    hasIconImage(item: MenuIcon | MenuAction | MenuBase): boolean;
    getIcon(item: MenuIcon | MenuAction | MenuBase): string | import("@ta/icons").TaIconType;
    getFontIcon(item: Menu | MenuIcon | MenuBase): string;
    getLink(item: MenuIcon | MenuAction | MenuBase): string;
    getRoute(item: MenuIcon | MenuAction | MenuBase): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContextMenuComponent, "ta-context-menu", never, { "menu": { "alias": "menu"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
