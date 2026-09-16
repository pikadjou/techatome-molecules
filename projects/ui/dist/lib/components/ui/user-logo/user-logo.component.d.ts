import { TaSizes } from "@ta/styles";
import { TrigramTone } from "../trigram/trigram.component";
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
    /**
     * Repli quand l'utilisateur n'a pas de photo.
     * `initials` : les initiales prénom + nom, la forme la plus lisible dès que
     * l'on affiche plusieurs personnes côte à côte.
     */
    defaultType: import("@angular/core").InputSignal<"font" | "trigram" | "initials">;
    /** Forme et teinte du repli textuel. */
    shape: import("@angular/core").InputSignal<"circle" | "squircle">;
    tone: import("@angular/core").InputSignal<TrigramTone>;
    get sizeValue(): number | undefined;
    getTrigram(): string;
    getInitials(): string;
    private _trigram;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserLogoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserLogoComponent, "ta-user-logo", never, { "user": { "alias": "user"; "required": true; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "forcedSize": { "alias": "forcedSize"; "required": false; "isSignal": true; }; "defaultType": { "alias": "defaultType"; "required": false; "isSignal": true; }; "shape": { "alias": "shape"; "required": false; "isSignal": true; }; "tone": { "alias": "tone"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
