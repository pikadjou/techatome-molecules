import { CamIconType } from '@ta/icons';
import { IInputBase, InputBase } from './base';
export interface IInputTextBox<T> extends IInputBase<T> {
    type?: string;
    icon?: CamIconType;
    iconClicked?: () => void;
}
export declare class InputTextBox<T = string> extends InputBase<T> {
    controlType: string;
    icon?: CamIconType | null;
    iconClicked?: () => void;
    constructor(options?: IInputTextBox<string>);
}
