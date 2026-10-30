import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { ENotificationCode } from "@ta/notification";
import { SubscriberHandler } from "@ta/utils";
import { InputLabel } from "./label";
export interface IInputsError {
    status: ENotificationCode;
    message: string;
}
export interface IInputBase<T> {
    value$?: Observable<T>;
    value?: T | null;
    key?: string;
    label?: string;
    type?: string;
    message?: string;
    controlType?: string;
    validators?: ValidatorFn[];
    class?: string;
    children?: (InputBase<any> | InputLabel)[];
    disabled?: boolean;
    readonly?: boolean;
    visible$?: Observable<boolean>;
    bindStatusToVisible?: boolean;
}
export declare class InputBase<T> implements IInputBase<T> {
    key: string;
    label: string;
    type: string;
    message: string;
    controlType: string;
    validators: ValidatorFn[];
    formControl?: AbstractControl;
    class: string;
    children: (InputBase<any> | InputLabel)[];
    disabled: boolean;
    readonly: boolean;
    visible$: Observable<boolean>;
    changeValue$: Subject<T | null>;
    protected _value: import("@angular/core").WritableSignal<T | null>;
    private _isVisible;
    protected _subscriberHandler: SubscriberHandler;
    get value(): T | null;
    set value(value: T | null);
    constructor(options?: IInputBase<any>);
    createFormControl(group?: FormGroup): void;
    /**
     * Valeur venue de la vue : le contrôle la porte déjà, on ne la lui renvoie pas.
     * Passer par le setter réécrivait le champ pendant la frappe (curseur replacé,
     * saisie intermédiaire comme « 1. » écrasée).
     */
    protected syncFromControl(value: T | null): void;
    launchChangeValue(): void;
    disable(): void;
    setReadonly(value: boolean): void;
    enable(): void;
    destroy(): void;
}
