import { RichText, RichTextChildren } from "../../../services/dto/types/rich-text";
import * as i0 from "@angular/core";
export declare class RichTextComponent {
    richText: RichText;
    readonly typeToken: {
        childrenText: RichTextChildren[];
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<RichTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RichTextComponent, "ta-rich-text", never, { "richText": { "alias": "richText"; "required": false; }; }, {}, never, never, true, never>;
}
