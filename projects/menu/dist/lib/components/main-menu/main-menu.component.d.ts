import { TemplateRef } from "@angular/core";
import { TaSharedMenuService } from "@ta/services";
import { TaBaseComponent } from "@ta/utils";
import { Menu } from "../../models/menu/menu";
import * as i0 from "@angular/core";
export declare class MainMenuComponent extends TaBaseComponent {
    menuMain: Menu;
    menuUser: Menu;
    userMenuTemplate?: TemplateRef<any>;
    direction: "horizontal" | "vertical";
    sharedMenu: TaSharedMenuService;
    toggleView(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MainMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MainMenuComponent, "ta-main-menu", never, { "menuMain": { "alias": "menuMain"; "required": false; }; "menuUser": { "alias": "menuUser"; "required": false; }; "userMenuTemplate": { "alias": "userMenuTemplate"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; }, {}, never, never, true, never>;
}
