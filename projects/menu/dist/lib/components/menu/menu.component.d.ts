import { TaBaseComponent } from "@ta/utils";
import { Menu } from "../../models/menu/menu";
import * as i0 from "@angular/core";
export declare class MenuComponent extends TaBaseComponent {
    menu: import("@angular/core").InputSignal<Menu<import("@ta/menu").MenuBase>>;
    container: import("@angular/core").InputSignal<"second" | "overflow" | "main" | "panel">;
    get containerCss(): string;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuComponent, "ta-menu", never, { "menu": { "alias": "menu"; "required": true; "isSignal": true; }; "container": { "alias": "container"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
