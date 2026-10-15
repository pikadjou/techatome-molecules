import { TaSizes } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class FlagIconComponent {
    code: import("@angular/core").InputSignal<string>;
    size: import("@angular/core").InputSignal<TaSizes>;
    private readonly _sanitizer;
    svgContent: import("@angular/core").Signal<import("@angular/platform-browser").SafeHtml | null>;
    getWidth(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlagIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlagIconComponent, "ta-flag-icon", never, { "code": { "alias": "code"; "required": true; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
