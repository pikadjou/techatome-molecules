import { TemplateRef } from '@angular/core';
import { TaSharedMenuService } from '@ta/services';
import { TaBaseComponent } from '@ta/utils';
import { Menu } from '../../models/menu/menu';
import * as i0 from "@angular/core";
export declare class MainMenuComponent extends TaBaseComponent {
    menuMain: import("@angular/core").InputSignal<Menu<import("@ta/menu").MenuBase>>;
    menuUser: import("@angular/core").InputSignal<Menu<import("@ta/menu").MenuBase> | undefined>;
    userMenuTemplate: import("@angular/core").InputSignal<TemplateRef<any> | undefined>;
    direction: import("@angular/core").InputSignal<"horizontal" | "vertical">;
    sharedMenu: TaSharedMenuService;
    isPanelOpen: boolean;
    navigateToHome(): void;
    toggleView(): void;
    toggleMobilePanel(): void;
    closeMobilePanel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MainMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MainMenuComponent, "ta-main-menu", never, { "menuMain": { "alias": "menuMain"; "required": true; "isSignal": true; }; "menuUser": { "alias": "menuUser"; "required": false; "isSignal": true; }; "userMenuTemplate": { "alias": "userMenuTemplate"; "required": false; "isSignal": true; }; "direction": { "alias": "direction"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
