import { TaSizes } from '@ta/styles';
import { UserLogoNaming } from '../user-logo/user-logo.component';
import * as i0 from "@angular/core";
export declare class HelloUserComponent {
    title?: string;
    userInfo?: {
        profilePictureUrl?: string;
        naming: UserLogoNaming | null;
    };
    bulletSize: TaSizes;
    footer?: string;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HelloUserComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HelloUserComponent, "ta-hello-user", never, { "title": { "alias": "title"; "required": false; }; "userInfo": { "alias": "userInfo"; "required": false; }; "bulletSize": { "alias": "bulletSize"; "required": false; }; "footer": { "alias": "footer"; "required": false; }; }, {}, never, never, true, never>;
}
