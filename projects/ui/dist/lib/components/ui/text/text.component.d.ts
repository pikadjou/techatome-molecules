import { TaSizes } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class TextComponent {
    /**
     *
     * Add small class to text
     */
    size: TaSizes;
    /**
     *
     * Add bold class to text
     */
    isBold: boolean;
    /**
     *
     * Add bold class to text
     */
    color: string;
    getColorClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextComponent, "ta-text", never, { "size": { "alias": "size"; "required": false; }; "isBold": { "alias": "isBold"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, {}, never, ["*"], true, never>;
}
