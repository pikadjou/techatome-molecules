import { MessageLevel } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class TypedMessageComponent {
    text: import("@angular/core").InputSignal<string>;
    type: import("@angular/core").InputSignal<MessageLevel>;
    get icon(): "" | "error_outline" | "check_circle_outline" | "help_outline" | "warning_amber";
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TypedMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TypedMessageComponent, "ta-typed-message", never, { "text": { "alias": "text"; "required": true; "isSignal": true; }; "type": { "alias": "type"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
