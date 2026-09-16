import { ColorType, TaSizes } from '@ta/styles';
import * as i0 from "@angular/core";
export type LabelType = ColorType | 'neutral';
export declare class LabelComponent {
    size: import("@angular/core").InputSignal<TaSizes>;
    type: import("@angular/core").InputSignal<LabelType>;
    /** Icône affichée devant le contenu. */
    icon: import("@angular/core").InputSignal<string | undefined>;
    /** `pill` force la capsule, `theme` suit le rayon du thème. */
    shape: import("@angular/core").InputSignal<"theme" | "pill">;
    getClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelComponent, "ta-label", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "shape": { "alias": "shape"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
