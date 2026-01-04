import { TaSizes } from "@ta/styles";
import { UserLogoData } from "../../user-logo/user-logo.component";
import { IProfileData } from "../IProfileData";
import * as i0 from "@angular/core";
export declare class InlineProfileDataComponent {
    profile: import("@angular/core").InputSignal<IProfileData>;
    userLogo: import("@angular/core").InputSignal<{
        user: UserLogoData;
        size?: TaSizes | undefined;
    } | null | undefined>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InlineProfileDataComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InlineProfileDataComponent, "ta-inline-profile-data", never, { "profile": { "alias": "profile"; "required": true; "isSignal": true; }; "userLogo": { "alias": "userLogo"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
