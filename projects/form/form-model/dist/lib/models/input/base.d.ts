import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ENotificationCode } from '@ta/notification';
import { SubscriberHandler } from '@ta/utils';
import { InputLabel } from './label';
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
    visible$: Observable<boolean>;
    changeValue$: Subject<T | null>;
    private _value;
    private _isVisible;
    protected _subscriberHandler: SubscriberHandler;
    get value(): T | null;
    set value(value: T | null);
    constructor(options?: IInputBase<any>);
    createFormControl(group?: FormGroup): void;
    launchChangeValue(): void;
    disable(): void;
    enable(): void;
    destroy(): void;
}
