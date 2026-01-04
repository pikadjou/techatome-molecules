import { ColorType, TaSizes } from '@ta/styles';
import * as i0 from "@angular/core";
export declare class TextComponent {
    /**
     *
     * Add small class to text
     */
    size: import("@angular/core").InputSignal<TaSizes>;
    /**
     *
     * Add bold class to text
     */
    isBold: import("@angular/core").InputSignal<boolean>;
    /**
     *
     * Add bold class to text
     */
    color: import("@angular/core").InputSignal<ColorType>;
    getColorClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextComponent, "ta-text", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "isBold": { "alias": "isBold"; "required": false; "isSignal": true; }; "color": { "alias": "color"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
