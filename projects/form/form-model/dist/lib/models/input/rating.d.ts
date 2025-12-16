import { IInputBase, InputBase } from "./base";
export interface IInputRating<T> extends IInputBase<T> {
    max?: number;
    icon?: string;
    iconFilled?: string;
    allowHalf?: boolean;
    readonly?: boolean;
}
export declare class InputRating<T = number> extends InputBase<T> {
    controlType: string;
    max: number;
    icon?: string;
    iconFilled?: string;
    allowHalf: boolean;
    readonly: boolean;
    constructor(options?: IInputRating<T>);
}
