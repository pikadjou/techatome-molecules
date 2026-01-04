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
    size: import("@angular/core").InputSignal<TaSizes>;
    forcedSize: import("@angular/core").InputSignal<number | undefined>;
    defaultType: import("@angular/core").InputSignal<"font" | "trigram">;
    get sizeValue(): number | undefined;
    getTrigram(): string;
    private _trigram;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserLogoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserLogoComponent, "ta-user-logo", never, { "user": { "alias": "user"; "required": true; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "forcedSize": { "alias": "forcedSize"; "required": false; "isSignal": true; }; "defaultType": { "alias": "defaultType"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
