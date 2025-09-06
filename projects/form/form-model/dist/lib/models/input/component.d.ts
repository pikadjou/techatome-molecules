import { TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { TaIconType } from '@ta/icons';
import { IInputBase, InputBase } from './base';
export type TypeComponentInputToken = {
    selectedValue$: Subject<string>;
};
export interface IInputComponent<T> extends IInputBase<T> {
    icon?: TaIconType;
    template?: TemplateRef<TypeComponentInputToken>;
}
export declare class InputComponent extends InputBase<string> {
    controlType: string;
    icon?: TaIconType | null;
    template?: TemplateRef<TypeComponentInputToken>;
    readonly selectedValue$: Subject<string>;
    constructor(options?: IInputComponent<string>);
}
