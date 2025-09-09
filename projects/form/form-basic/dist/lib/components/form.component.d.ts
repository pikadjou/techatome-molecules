import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IInputsError, InputBase } from '@ta/form-model';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class FormComponent extends TaBaseComponent implements OnInit, OnChanges, OnDestroy {
    inputs: InputBase<any>[];
    askValidation$: Observable<null>;
    askOnDestroy: boolean;
    loader: boolean;
    error: IInputsError;
    border: boolean;
    canDisplayButton: boolean;
    buttonTitle: string;
    onLive: boolean;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<FormComponent, "ta-form", never, { "inputs": { "alias": "inputs"; "required": false; }; "askValidation$": { "alias": "askValidation$"; "required": false; }; "askOnDestroy": { "alias": "askOnDestroy"; "required": false; }; "loader": { "alias": "loader"; "required": false; }; "error": { "alias": "error"; "required": false; }; "border": { "alias": "border"; "required": false; }; "canDisplayButton": { "alias": "canDisplayButton"; "required": false; }; "buttonTitle": { "alias": "buttonTitle"; "required": false; }; "onLive": { "alias": "onLive"; "required": false; }; }, { "valid": "valid"; "isFormValid": "isFormValid"; }, never, never, true, never>;
}
