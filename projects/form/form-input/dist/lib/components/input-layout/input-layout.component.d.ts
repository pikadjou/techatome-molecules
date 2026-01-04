import { InputBase } from "@ta/form-model";
import * as i0 from "@angular/core";
export declare class InputLayoutComponent {
    inputModel: import("@angular/core").InputSignal<InputBase<any>>;
    width: import("@angular/core").InputSignal<string>;
    height: import("@angular/core").InputSignal<string>;
    get containerStyles(): {
        [key: string]: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<InputLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputLayoutComponent, "ta-input-layout", never, { "inputModel": { "alias": "input"; "required": true; "isSignal": true; }; "width": { "alias": "width"; "required": false; "isSignal": true; }; "height": { "alias": "height"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
