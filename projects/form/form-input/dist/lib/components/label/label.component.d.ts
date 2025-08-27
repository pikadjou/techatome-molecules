import { ValidatorFn, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class FormLabelComponent {
    input: {
        label: string;
        validators: ValidatorFn[];
    };
    withMarginBottom: boolean;
    readonly validators: typeof Validators;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormLabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormLabelComponent, "ta-form-label", never, { "input": { "alias": "input"; "required": false; }; "withMarginBottom": { "alias": "withMarginBottom"; "required": false; }; }, {}, never, never, true, never>;
}
