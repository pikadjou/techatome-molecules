import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { InputBase } from '@ta/form-model';
import { TaBaseComponent } from '@ta/utils';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class CamAbstractInputComponent<C extends InputBase<any>, V = unknown> extends TaBaseComponent implements OnInit, AfterViewInit, OnDestroy {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<CamAbstractInputComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CamAbstractInputComponent<any, any>, "ng-component", never, { "input": { "alias": "input"; "required": false; }; "matcher": { "alias": "matcher"; "required": false; }; "standalone": { "alias": "standalone"; "required": false; }; "onFocus": { "alias": "onFocus"; "required": false; }; }, { "valueChanged": "valueChanged"; }, never, never, false, never>;
}
