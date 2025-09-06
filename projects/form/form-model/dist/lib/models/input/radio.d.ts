import { Observable } from 'rxjs';
import { TaIconType } from '@ta/icons';
import { IInputBase, InputBase } from './base';
export interface IInputRadio<T> extends IInputBase<T> {
    options?: Observable<{
        id: T;
        name?: string;
        icon?: TaIconType;
    }[]>;
}
export declare class InputRadio<T> extends InputBase<T> {
    controlType: string;
    options: Observable<{
        id: T;
        name?: string;
        icon?: TaIconType;
    }[]>;
    constructor(options?: IInputRadio<T>);
}
