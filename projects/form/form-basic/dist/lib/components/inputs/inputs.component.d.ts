import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { InputBase } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}
export declare class InputsComponent extends TaBaseComponent {
    input: InputBase<any>;
    standalone: boolean;
    onFocus: Observable<void>;
    space: boolean;
    matcher: MyErrorStateMatcher;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputsComponent, "ta-inputs", never, { "input": { "alias": "input"; "required": false; }; "standalone": { "alias": "standalone"; "required": false; }; "onFocus": { "alias": "onFocus"; "required": false; }; "space": { "alias": "space"; "required": false; }; }, {}, never, never, true, never>;
}
