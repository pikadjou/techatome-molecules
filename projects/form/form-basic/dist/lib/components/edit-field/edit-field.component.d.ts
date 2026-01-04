import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { InputBase } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";
import { BehaviorSubject, Observable } from "rxjs";
import * as i0 from "@angular/core";
export type Layout = "row" | "column";
export declare class EditFieldComponent extends TaBaseComponent implements OnInit, OnChanges {
    private elementRef;
    getInput: import("@angular/core").InputSignal<() => InputBase<any>>;
    changeEditMode$: import("@angular/core").InputSignal<Observable<boolean> | null>;
    isLoading: import("@angular/core").InputSignal<boolean>;
    withBorder: import("@angular/core").InputSignal<boolean>;
    disabled: import("@angular/core").InputSignal<boolean>;
    newValue: EventEmitter<unknown>;
    readonly onFocusBehavior: BehaviorSubject<void>;
    readonly renderInput: import("@angular/core").WritableSignal<InputBase<null> | null>;
    editMode: import("@angular/core").WritableSignal<boolean>;
    onDocumentClick(targetElement: HTMLElement): void;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    toggleEditMode(): void;
    validation(): void;
    private _setInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditFieldComponent, "ta-edit-field", never, { "getInput": { "alias": "getInput"; "required": true; "isSignal": true; }; "changeEditMode$": { "alias": "changeEditMode$"; "required": false; "isSignal": true; }; "isLoading": { "alias": "isLoading"; "required": false; "isSignal": true; }; "withBorder": { "alias": "withBorder"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, { "newValue": "newValue"; }, never, ["*"], true, never>;
}
