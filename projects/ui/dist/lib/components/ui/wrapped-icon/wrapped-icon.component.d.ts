import { ColorType, TaSizes } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class WrappedIconComponent {
    size: import("@angular/core").InputSignal<TaSizes>;
    type: import("@angular/core").InputSignal<ColorType>;
    icon: import("@angular/core").InputSignal<string>;
    getClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<WrappedIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WrappedIconComponent, "ta-wrapped-icon", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
