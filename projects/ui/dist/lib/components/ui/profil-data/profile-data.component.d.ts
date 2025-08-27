import { EventEmitter } from '@angular/core';
import { UserLogoNaming } from '../user-logo/user-logo.component';
import { IProfileData } from './IProfileData';
import * as i0 from "@angular/core";
export declare class ProfileDataComponent {
    profile: IProfileData;
    userLogo?: {
        userInfo: {
            profilePictureUrl?: string;
            naming: UserLogoNaming;
        };
        size?: number;
    };
    sideIcon?: string;
    callAction: EventEmitter<any>;
    action: EventEmitter<any>;
    constructor();
    tel(): void;
    mail(): void;
    launchAction(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileDataComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProfileDataComponent, "ta-profile-data", never, { "profile": { "alias": "profile"; "required": false; }; "userLogo": { "alias": "userLogo"; "required": false; }; "sideIcon": { "alias": "sideIcon"; "required": false; }; }, { "callAction": "callAction"; "action": "action"; }, never, never, true, never>;
}
