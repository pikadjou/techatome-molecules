import { IInputTextBox, InputTextBox } from './textbox';
export declare class InputNumber extends InputTextBox<number> {
    get value(): number;
    set value(value: number);
    constructor(options?: IInputTextBox<string>);
}
