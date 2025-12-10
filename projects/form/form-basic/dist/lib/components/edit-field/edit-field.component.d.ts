import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { InputBase } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";
import { BehaviorSubject, Observable } from "rxjs";
import * as i0 from "@angular/core";
export type Layout = "row" | "column";
export declare class EditFieldComponent extends TaBaseComponent implements OnInit, OnChanges {
    private elementRef;
    getInput: () => InputBase<any>;
    changeEditMode$: Observable<boolean> | null;
    isLoading: boolean;
    withBorder: boolean;
    disabled: boolean;
    newValue: EventEmitter<unknown>;
    readonly onFocus: BehaviorSubject<void>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<EditFieldComponent, "ta-edit-field", never, { "getInput": { "alias": "getInput"; "required": false; }; "changeEditMode$": { "alias": "changeEditMode$"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "withBorder": { "alias": "withBorder"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "newValue": "newValue"; }, never, ["*"], true, never>;
}
