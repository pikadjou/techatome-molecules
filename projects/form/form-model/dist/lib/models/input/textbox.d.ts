import { TaIconType } from '@ta/icons';
import { IInputBase, InputBase } from './base';
export interface IInputTextBox<T> extends IInputBase<T> {
    type?: string;
    icon?: TaIconType;
    iconClicked?: () => void;
}
export declare class InputTextBox<T = string> extends InputBase<T> {
    controlType: string;
    icon?: TaIconType | null;
    iconClicked?: () => void;
    constructor(options?: IInputTextBox<T>);
}
