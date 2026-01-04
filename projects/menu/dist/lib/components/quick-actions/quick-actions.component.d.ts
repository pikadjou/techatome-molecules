import { EventEmitter } from "@angular/core";
import { MenuIcon } from "../../models/menu/item/icon";
import { Menu } from "../../models/menu/menu";
import * as i0 from "@angular/core";
export declare class QuickActionsComponent {
    tabSelection: import("@angular/core").InputSignal<string | null>;
    menu: import("@angular/core").InputSignal<Menu<import("@ta/menu").MenuBase>>;
    elementPerPage: import("@angular/core").InputSignal<number>;
    canDeselect: import("@angular/core").InputSignal<boolean>;
    tabSelected: EventEmitter<string | null>;
    typeToken: {
        element: MenuIcon;
    };
    constructor();
    onQuickActionSelected(menuIcon: MenuIcon): void;
    private _selectedValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuickActionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuickActionsComponent, "ta-quick-actions", never, { "tabSelection": { "alias": "tabSelection"; "required": false; "isSignal": true; }; "menu": { "alias": "menu"; "required": true; "isSignal": true; }; "elementPerPage": { "alias": "elementPerPage"; "required": false; "isSignal": true; }; "canDeselect": { "alias": "canDeselect"; "required": false; "isSignal": true; }; }, { "tabSelected": "tabSelected"; }, never, never, true, never>;
}
