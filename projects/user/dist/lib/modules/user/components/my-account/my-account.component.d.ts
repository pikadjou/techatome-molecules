import { AfterViewInit, EventEmitter, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu, MenuIcon } from '@ta/menu';
import { TaSizes } from '@ta/styles';
import { UserLogoData } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class MyAccountComponent extends TaBaseComponent implements AfterViewInit {
    infosMenu: Menu | null;
    appVersion: string | null;
    isEditable: boolean;
    navigateEvent: EventEmitter<any>;
    navigateEditEvent: EventEmitter<any>;
    languageTemplate: TemplateRef<any>;
    infosTemplate: TemplateRef<any>;
    private _userService;
    private _authService;
    profileMenu: import("@angular/core").WritableSignal<Menu<import("@ta/menu").MenuBase> | null>;
    disconnectionMenu: import("@angular/core").WritableSignal<Menu<import("@ta/menu").MenuBase> | null>;
    userLogo$: import("@angular/core").WritableSignal<Observable<{
        user: UserLogoData;
        size?: TaSizes | undefined;
    } | null>>;
    constructor();
    get profile$(): Observable<{
        title: {
            second: string | undefined;
        };
        email: string;
    }>;
    ngAfterViewInit(): void;
    navigateToProfile(): void;
    disconnect(): void;
    getProfileMenu(languageTemplate: TemplateRef<any>, infosTemplate: TemplateRef<any>): Menu<MenuIcon>;
    getDisconnectionMenu(): Menu<MenuIcon>;
    navigateToEditProfile(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyAccountComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyAccountComponent, "ta-my-account", never, { "infosMenu": { "alias": "infosMenu"; "required": false; }; "appVersion": { "alias": "appVersion"; "required": false; }; "isEditable": { "alias": "isEditable"; "required": false; }; }, { "navigateEvent": "navigateEvent"; "navigateEditEvent": "navigateEditEvent"; }, never, never, true, never>;
}
