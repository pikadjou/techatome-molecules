import { TaSizes } from '@ta/styles';
import * as i0 from "@angular/core";
export interface UserLogoData {
    firstname: string;
    lastname: string;
    picture?: string;
}
export declare class UserLogoComponent {
    user: import("@angular/core").InputSignal<UserLogoData>;
    /**
     * Size of user logo desired
     */
    size?: TaSizes;
    forcedSize?: number;
    defaultType: 'font' | 'trigram';
    get sizeValue(): number;
    getTrigram(): string;
    private _trigram;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserLogoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserLogoComponent, "ta-user-logo", never, { "user": { "alias": "user"; "required": true; "isSignal": true; }; "size": { "alias": "size"; "required": false; }; "forcedSize": { "alias": "forcedSize"; "required": false; }; "defaultType": { "alias": "defaultType"; "required": false; }; }, {}, never, never, true, never>;
}
