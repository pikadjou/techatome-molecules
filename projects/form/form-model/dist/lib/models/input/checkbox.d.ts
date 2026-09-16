import { IInputBase, InputBase } from './base';
export interface IInputCheckBox extends IInputBase<boolean> {
    toggle?: boolean;
    /** Clés de traduction des deux états d'un interrupteur. */
    onLabel?: string;
    offLabel?: string;
}
export declare class InputCheckBox extends InputBase<boolean> {
    controlType: string;
    onLabel?: string;
    offLabel?: string;
    constructor(options?: IInputCheckBox);
}
