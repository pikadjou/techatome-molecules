import { TemplateRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TaBaseComponent } from "@ta/utils";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
interface UserLogoNaming {
    name: string;
    firstName: string | null;
    trigram: string;
}
export declare class LayoutHeaderLogoComponent extends TaBaseComponent {
    private _modal;
    profile: import("@angular/core").InputSignal<{
        template: TemplateRef<any>;
        user: {
            profilePictureUrl?: string;
            naming: UserLogoNaming | null;
        };
    } | null>;
    notificationTemplate: import("@angular/core").InputSignal<TemplateRef<any> | null>;
    askClosing$: import("@angular/core").InputSignal<Observable<null> | undefined>;
    constructor(_modal: MatDialog);
    userInfo(): {
        profilePictureUrl?: string;
        naming: UserLogoNaming | null;
    };
    goToHome(): void;
    openProfile(): void;
    openNotification(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutHeaderLogoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutHeaderLogoComponent, "ta-layout-header-logo", never, { "profile": { "alias": "profile"; "required": false; "isSignal": true; }; "notificationTemplate": { "alias": "notificationTemplate"; "required": false; "isSignal": true; }; "askClosing$": { "alias": "askClosing$"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
export {};
