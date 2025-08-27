import { CamIconType } from '@ta/icons';
import { Observable } from 'rxjs';
import { IInputBase, InputBase } from './base';
export interface IInputRadio<T> extends IInputBase<T> {
    options?: Observable<{
        id: T;
        name?: string;
        icon?: CamIconType;
    }[]>;
}
export declare class InputRadio<T> extends InputBase<T> {
    controlType: string;
    options: Observable<{
        id: T;
        name?: string;
        icon?: CamIconType;
    }[]>;
    constructor(options?: IInputRadio<T>);
}
