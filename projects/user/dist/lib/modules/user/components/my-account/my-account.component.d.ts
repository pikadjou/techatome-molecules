import { EventEmitter, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Menu, MenuIcon } from "@ta/menu";
import { TaSizes } from "@ta/styles";
import { UserLogoData } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class MyAccountComponent extends TaBaseComponent implements OnInit {
    profileMenu: Menu | null;
    appVersion: string | null;
    isEditable: boolean;
    navigateEvent: EventEmitter<any>;
    navigateEditEvent: EventEmitter<any>;
    private _userService;
    private _authService;
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
    ngOnInit(): void;
    navigateToProfile(): void;
    disconnect(): void;
    getDisconnectionMenu(): Menu<MenuIcon>;
    navigateToEditProfile(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyAccountComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyAccountComponent, "ta-my-account", never, { "profileMenu": { "alias": "profileMenu"; "required": false; }; "appVersion": { "alias": "appVersion"; "required": false; }; "isEditable": { "alias": "isEditable"; "required": false; }; }, { "navigateEvent": "navigateEvent"; "navigateEditEvent": "navigateEditEvent"; }, never, never, true, never>;
}
