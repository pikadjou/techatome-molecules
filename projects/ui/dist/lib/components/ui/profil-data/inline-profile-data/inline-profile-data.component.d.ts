import { TaSizes } from "@ta/styles";
import { UserLogoData } from "../../user-logo/user-logo.component";
import { IProfileData } from "../IProfileData";
import * as i0 from "@angular/core";
export declare class InlineProfileDataComponent {
    profile: IProfileData;
    userLogo?: {
        user: UserLogoData;
        size?: TaSizes;
    } | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<InlineProfileDataComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InlineProfileDataComponent, "ta-inline-profile-data", never, { "profile": { "alias": "profile"; "required": false; }; "userLogo": { "alias": "userLogo"; "required": false; }; }, {}, never, never, true, never>;
}
