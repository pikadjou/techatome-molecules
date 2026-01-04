import { ColorType, TaSizes } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class LabelComponent {
    size: import("@angular/core").InputSignal<TaSizes>;
    type: import("@angular/core").InputSignal<ColorType>;
    getClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelComponent, "ta-label", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
