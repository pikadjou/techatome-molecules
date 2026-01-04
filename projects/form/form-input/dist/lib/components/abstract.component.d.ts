import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Observable } from "rxjs";
import { InputBase } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare abstract class TaAbstractInputComponent<C extends InputBase<any>, V = unknown> extends TaBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    inputModel: import("@angular/core").InputSignal<C>;
    matcher: import("@angular/core").InputSignal<ErrorStateMatcher>;
    standaloneMode: import("@angular/core").InputSignal<boolean>;
    onFocusObs: import("@angular/core").InputSignal<Observable<void> | undefined>;
    valueChanged: EventEmitter<V>;
    get input(): C;
    get standalone(): boolean;
    get onFocus(): Observable<void> | undefined;
    focusedElement: ElementRef;
    readonly validators: typeof Validators;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onChange(value: V): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaAbstractInputComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaAbstractInputComponent<any, any>, "ng-component", never, { "inputModel": { "alias": "input"; "required": true; "isSignal": true; }; "matcher": { "alias": "matcher"; "required": false; "isSignal": true; }; "standaloneMode": { "alias": "standalone"; "required": false; "isSignal": true; }; "onFocusObs": { "alias": "onFocus"; "required": false; "isSignal": true; }; }, { "valueChanged": "valueChanged"; }, never, never, false, never>;
}
