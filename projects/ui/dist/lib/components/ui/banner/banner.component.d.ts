import { ColorType } from "@ta/styles";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class BannerComponent extends TaBaseComponent {
    inline: import("@angular/core").InputSignal<boolean>;
    message: import("@angular/core").InputSignal<string>;
    type: import("@angular/core").InputSignal<ColorType>;
    constructor();
    getClasses(): Record<string, boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BannerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BannerComponent, "ta-banner", never, { "inline": { "alias": "inline"; "required": false; "isSignal": true; }; "message": { "alias": "message"; "required": true; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
