import { Observable } from 'rxjs';
import { IInputBase, InputBase } from './base';
import { IInputDropdown } from './dropdown';
export interface IFormSwitch extends IInputBase<unknown> {
    match: Observable<{
        type: 'textbox' | 'checkbox' | 'number' | 'datePicker';
        prop: unknown;
    } | {
        type: 'dropdown';
        prop: IInputDropdown<string>;
    }>;
}
export declare class InputSwitch extends InputBase<unknown> {
    matchtype: import("@angular/core").WritableSignal<string>;
    constructor(options: IFormSwitch);
}
