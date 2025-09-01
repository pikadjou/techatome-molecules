import { TaSizes } from '@ta/styles';
import * as i0 from "@angular/core";
export interface UserLogoNaming {
    name: string;
    firstName: string | null;
    trigram: string;
}
export interface UserLogoData {
    firstname: string;
    lastname: string;
    picture?: string;
}
export declare class UserLogoComponent {
    user?: UserLogoData;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<UserLogoComponent, "ta-user-logo", never, { "user": { "alias": "user"; "required": false; }; "size": { "alias": "size"; "required": false; }; "forcedSize": { "alias": "forcedSize"; "required": false; }; "defaultType": { "alias": "defaultType"; "required": false; }; }, {}, never, never, true, never>;
}
