import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaSizes } from '@ta/styles';
import { TaAbstractComponent } from '@ta/utils';
import { MenuAction } from '../../models/menu/item/action';
import { MenuBase } from '../../models/menu/item/base';
import { Menu, MenuIcon } from '../../models/public-api';
import * as i0 from "@angular/core";
export declare class NavigationComponent extends TaAbstractComponent implements OnInit {
    menu: import("@angular/core").InputSignal<Menu<MenuBase>>;
    container: import("@angular/core").InputSignal<"tags" | "tab" | "submenu">;
    swiper: import("@angular/core").InputSignal<boolean>;
    options: import("@angular/core").InputSignal<{
        spaceElement?: TaSizes | null | undefined;
    }>;
    manuallyChanged$: import("@angular/core").InputSignal<Observable<string> | undefined>;
    readonly hasFontIcon: (item: MenuBase | MenuIcon | Menu<MenuBase>) => boolean;
    readonly getFontIcon: (item: MenuBase | MenuIcon | Menu<MenuBase>) => string;
    readonly typeItem: {
        item: MenuBase | MenuAction | MenuIcon;
    };
    activeKey: string;
    constructor();
    ngOnInit(): void;
    getSpaceClass(): string;
    getLink(item: MenuIcon | MenuAction | MenuBase): string;
    callback(item: MenuBase): void;
    isActive(item: MenuBase): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavigationComponent, "ta-menu-navigation", never, { "menu": { "alias": "menu"; "required": true; "isSignal": true; }; "container": { "alias": "container"; "required": true; "isSignal": true; }; "swiper": { "alias": "swiper"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; "manuallyChanged$": { "alias": "manuallyChanged$"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
