import { IInputTextBox, InputTextBox } from "./textbox";
export interface IInputNumber extends IInputTextBox<number> {
    decimals?: number;
}
export declare class InputNumber extends InputTextBox<number> {
    decimals: number;
    get value(): number;
    set value(value: number);
    constructor(options?: IInputNumber);
}
