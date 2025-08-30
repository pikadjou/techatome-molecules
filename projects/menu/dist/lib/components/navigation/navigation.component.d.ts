import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaAbstractComponent } from '@ta/utils';
import { MenuAction } from '../../models/menu/item/action';
import { MenuBase } from '../../models/menu/item/base';
import { Menu, MenuIcon } from '../../models/public-api';
import * as i0 from "@angular/core";
type TaSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'big';
export declare class NavigationComponent extends TaAbstractComponent implements OnInit {
    menu: Menu;
    container: 'tags' | 'tab';
    swiper: boolean;
    options: {
        spaceElement?: TaSizes | null;
    };
    manuallyChanged$?: Observable<string>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<NavigationComponent, "ta-menu-navigation", never, { "menu": { "alias": "menu"; "required": false; }; "container": { "alias": "container"; "required": false; }; "swiper": { "alias": "swiper"; "required": false; }; "options": { "alias": "options"; "required": false; }; "manuallyChanged$": { "alias": "manuallyChanged$"; "required": false; }; }, {}, never, never, true, never>;
}
export {};
