import { IInputDropdown, InputDropdown } from "./dropdown";
export interface IInputCulture extends Omit<IInputDropdown<string>, "options"> {
}
export declare class InputCulture extends InputDropdown<string> {
    controlType: string;
    constructor(options?: IInputCulture);
}
