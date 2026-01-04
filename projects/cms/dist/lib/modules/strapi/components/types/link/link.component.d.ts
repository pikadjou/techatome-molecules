import { RichParagraphLink } from "../../../services/dto/types/rich-text";
import * as i0 from "@angular/core";
export declare class LinkComponent {
    link: import("@angular/core").InputSignal<RichParagraphLink>;
    goTo(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LinkComponent, "ta-rich-paragraph-link", never, { "link": { "alias": "link"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
