import { UserLogoNaming } from '../public-api';
import * as i0 from "@angular/core";
export declare class UiProfileDisplayComponent {
    label: string;
    userLogo?: {
        userInfo: {
            profilePictureUrl?: string;
            naming: UserLogoNaming;
        };
        size?: number;
    };
    ctas?: {
        icon?: string;
        label?: string;
        callback: () => void;
    }[] | null;
    sideIcon?: {
        icon: string;
        callback: () => void;
    };
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<UiProfileDisplayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UiProfileDisplayComponent, "ta-ui-profile-display", never, { "label": { "alias": "label"; "required": false; }; "userLogo": { "alias": "userLogo"; "required": false; }; "ctas": { "alias": "ctas"; "required": false; }; "sideIcon": { "alias": "sideIcon"; "required": false; }; }, {}, never, ["*"], true, never>;
}
