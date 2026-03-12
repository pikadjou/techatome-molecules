import { FormGroup } from "@angular/forms";
import { IInputBase, InputBase } from "./base";
export interface IInputLabel extends IInputBase<null> {
    icon?: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}
export declare class InputLabel extends InputBase<null> implements IInputLabel {
    icon?: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    constructor(options?: IInputLabel);
    createFormControl(group?: FormGroup): void;
}
