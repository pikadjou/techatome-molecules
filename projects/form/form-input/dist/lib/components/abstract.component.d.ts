import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Observable } from "rxjs";
import { InputBase } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare abstract class TaAbstractInputComponent<C extends InputBase<any>, V = unknown> extends TaBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    input: C;
    matcher: ErrorStateMatcher;
    standalone: boolean;
    onFocus: Observable<void>;
    valueChanged: EventEmitter<V>;
    focusedElement: ElementRef;
    readonly validators: typeof Validators;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onChange(value: V): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaAbstractInputComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaAbstractInputComponent<any, any>, "ng-component", never, { "input": { "alias": "input"; "required": false; }; "matcher": { "alias": "matcher"; "required": false; }; "standalone": { "alias": "standalone"; "required": false; }; "onFocus": { "alias": "onFocus"; "required": false; }; }, { "valueChanged": "valueChanged"; }, never, never, false, never>;
}
