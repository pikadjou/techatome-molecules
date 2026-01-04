import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Observable } from 'rxjs';
import { InputBase } from '@ta/form-model';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}
export declare class InputsComponent extends TaBaseComponent {
    inputModel: import("@angular/core").InputSignal<InputBase<any>>;
    standaloneMode: import("@angular/core").InputSignal<boolean>;
    onFocusObs: import("@angular/core").InputSignal<Observable<void> | undefined>;
    space: import("@angular/core").InputSignal<boolean>;
    matcher: MyErrorStateMatcher;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputsComponent, "ta-inputs", never, { "inputModel": { "alias": "input"; "required": true; "isSignal": true; }; "standaloneMode": { "alias": "standalone"; "required": false; "isSignal": true; }; "onFocusObs": { "alias": "onFocus"; "required": false; "isSignal": true; }; "space": { "alias": "space"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
