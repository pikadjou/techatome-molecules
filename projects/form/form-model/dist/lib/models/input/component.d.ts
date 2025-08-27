import { TemplateRef } from '@angular/core';
import { CamIconType } from '@ta/icons';
import { Subject } from 'rxjs';
import { IInputBase, InputBase } from './base';
export type TypeComponentInputToken = {
    selectedValue$: Subject<string>;
};
export interface IInputComponent<T> extends IInputBase<T> {
    icon?: CamIconType;
    template?: TemplateRef<TypeComponentInputToken>;
}
export declare class InputComponent extends InputBase<string> {
    controlType: string;
    icon?: CamIconType | null;
    template?: TemplateRef<TypeComponentInputToken>;
    readonly selectedValue$: Subject<string>;
    constructor(options?: IInputComponent<string>);
}
