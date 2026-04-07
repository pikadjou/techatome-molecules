import { DomSanitizer } from "@angular/platform-browser";
import { TaSizes } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class FlagIconComponent {
    private _sanitizer;
    code: import("@angular/core").InputSignal<string>;
    size: import("@angular/core").InputSignal<TaSizes>;
    constructor(_sanitizer: DomSanitizer);
    svgContent: import("@angular/core").Signal<import("@angular/platform-browser").SafeHtml | null>;
    getWidth(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlagIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlagIconComponent, "ta-flag-icon", never, { "code": { "alias": "code"; "required": true; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
