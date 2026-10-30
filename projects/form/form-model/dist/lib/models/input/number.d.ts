import { IInputTextBox, InputTextBox } from "./textbox";
export interface IInputNumber extends IInputTextBox<number> {
    decimals?: number;
}
export declare class InputNumber extends InputTextBox<number> {
    decimals: number;
    get value(): number;
    set value(value: number);
    /** Le contrôle reçoit un nombre, sans réécrire le champ en cours de frappe. */
    protected syncFromControl(value: number | null): void;
    constructor(options?: IInputNumber);
}
