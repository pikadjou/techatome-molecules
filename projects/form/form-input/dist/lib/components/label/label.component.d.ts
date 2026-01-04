import { ValidatorFn, Validators } from "@angular/forms";
import * as i0 from "@angular/core";
export declare class FormLabelComponent {
    inputModel: import("@angular/core").InputSignal<{
        label: string;
        validators: ValidatorFn[];
    }>;
    withMarginBottom: import("@angular/core").InputSignal<boolean>;
    readonly validators: typeof Validators;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormLabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormLabelComponent, "ta-form-label", never, { "inputModel": { "alias": "input"; "required": true; "isSignal": true; }; "withMarginBottom": { "alias": "withMarginBottom"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
