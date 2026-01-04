import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { IInputsError, InputBase } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class FormComponent extends TaBaseComponent implements OnInit, OnChanges, OnDestroy {
    inputs: import("@angular/core").InputSignal<InputBase<any>[]>;
    askValidation$: import("@angular/core").InputSignal<Observable<null> | undefined>;
    askOnDestroy: import("@angular/core").InputSignal<boolean | undefined>;
    loader: import("@angular/core").InputSignal<boolean>;
    error: import("@angular/core").InputSignal<IInputsError>;
    border: import("@angular/core").InputSignal<boolean>;
    canDisplayButton: import("@angular/core").InputSignal<boolean>;
    buttonTitle: import("@angular/core").InputSignal<string>;
    onLive: import("@angular/core").InputSignal<boolean>;
    valid: EventEmitter<{}>;
    isFormValid: EventEmitter<boolean>;
    form: FormGroup;
    constructor();
    ngOnInit(): void;
    ngOnChanges(simpleChanges: SimpleChanges): void;
    ngOnDestroy(): void;
    onSubmit(): void;
    isValid(): boolean;
    toFormGroup(inputs: InputBase<any>[]): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormComponent, "ta-form", never, { "inputs": { "alias": "inputs"; "required": true; "isSignal": true; }; "askValidation$": { "alias": "askValidation$"; "required": false; "isSignal": true; }; "askOnDestroy": { "alias": "askOnDestroy"; "required": false; "isSignal": true; }; "loader": { "alias": "loader"; "required": false; "isSignal": true; }; "error": { "alias": "error"; "required": false; "isSignal": true; }; "border": { "alias": "border"; "required": false; "isSignal": true; }; "canDisplayButton": { "alias": "canDisplayButton"; "required": false; "isSignal": true; }; "buttonTitle": { "alias": "buttonTitle"; "required": false; "isSignal": true; }; "onLive": { "alias": "onLive"; "required": false; "isSignal": true; }; }, { "valid": "valid"; "isFormValid": "isFormValid"; }, never, never, true, never>;
}
