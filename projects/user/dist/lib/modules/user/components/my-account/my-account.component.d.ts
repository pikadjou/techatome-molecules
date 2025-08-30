import { EventEmitter, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu, MenuIcon } from '@ta/menu';
import { TaSizes } from '@ta/styles';
import { UserLogoNaming } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
import { TaUsersService } from '../../services/users.service';
import * as i0 from "@angular/core";
export declare class MyAccountComponent extends TaBaseComponent {
    private _usersService;
    infosMenu: Menu | null;
    appVersion: string | null;
    isEditable: boolean;
    navigateEvent: EventEmitter<any>;
    navigateEditEvent: EventEmitter<any>;
    languageTemplate: TemplateRef<any>;
    infosTemplate: TemplateRef<any>;
    private _authService;
    profileMenu: Menu | null;
    disconnectionMenu: Menu | null;
    get currentUser$(): Observable<import("@ta/user").User | null>;
    constructor(_usersService: TaUsersService);
    get profile$(): Observable<{
        title: {
            second: string | undefined;
        };
        email: string | undefined;
    }>;
    get userLogo$(): Observable<{
        userInfo: {
            profilePictureUrl?: string;
            naming: UserLogoNaming;
        };
        size?: TaSizes;
    } | null>;
    ngAfterViewChecked(): void;
    navigateToProfile(): void;
    disconnect(): void;
    getProfileMenu(languageTemplate: TemplateRef<any>, infosTemplate: TemplateRef<any>): Menu<MenuIcon>;
    getDisconnectionMenu(): Menu<MenuIcon>;
    navigateToEditProfile(): void;
    private _fetch;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyAccountComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyAccountComponent, "ta-my-account", never, { "infosMenu": { "alias": "infosMenu"; "required": false; }; "appVersion": { "alias": "appVersion"; "required": false; }; "isEditable": { "alias": "isEditable"; "required": false; }; }, { "navigateEvent": "navigateEvent"; "navigateEditEvent": "navigateEditEvent"; }, never, never, true, never>;
}
