import { EventEmitter } from '@angular/core';
import { MenuIcon } from '../../models/menu/item/icon';
import { Menu } from '../../models/menu/menu';
import * as i0 from "@angular/core";
export declare class QuickActionsComponent {
    tabSelection: string | null;
    menu: Menu;
    elementPerPage: number;
    canDeselect: boolean;
    tabSelected: EventEmitter<string | null>;
    typeToken: {
        element: MenuIcon;
    };
    constructor();
    onQuickActionSelected(menuIcon: MenuIcon): void;
    private _selectedValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuickActionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuickActionsComponent, "ta-quick-actions", never, { "tabSelection": { "alias": "tabSelection"; "required": false; }; "menu": { "alias": "menu"; "required": false; }; "elementPerPage": { "alias": "elementPerPage"; "required": false; }; "canDeselect": { "alias": "canDeselect"; "required": false; }; }, { "tabSelected": "tabSelected"; }, never, never, true, never>;
}
