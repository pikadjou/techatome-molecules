import { TaBaseComponent } from '@ta/utils';
import { Menu } from '../../models/menu/menu';
import * as i0 from "@angular/core";
export declare class MenuComponent extends TaBaseComponent {
    menu: Menu;
    container: 'second' | 'overflow' | 'main' | 'panel';
    get containerCss(): "" | "second" | "overflow" | "main-nav responsive";
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuComponent, "ta-menu", never, { "menu": { "alias": "menu"; "required": false; }; "container": { "alias": "container"; "required": false; }; }, {}, never, never, true, never>;
}
