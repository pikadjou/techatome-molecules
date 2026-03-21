import { IInputBase, InputBase } from "./base";
import { InputLabel } from "./label";
type classAvailable = "with-separator" | "no-title-space" | "highlight-title" | string;
export interface IInputPanel extends IInputBase<null> {
    children?: (InputBase<any> | InputLabel)[];
    containerClass?: classAvailable[];
    contentClass?: string;
    icon?: string;
    required?: boolean;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}
export declare class InputPanel extends InputBase<any> {
    containerClass: classAvailable[];
    contentClass: string;
    icon?: string;
    required?: boolean;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    constructor(options: IInputPanel);
}
export {};
