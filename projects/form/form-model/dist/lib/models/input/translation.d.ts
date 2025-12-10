import { FormGroup } from "@angular/forms";
import { Culture } from "@ta/utils";
import { IInputDynamic, InputDynamic } from "./dynamic";
export interface IInputTranslation extends IInputDynamic {
    mainCulture?: Culture;
}
export declare class InputTranslation extends InputDynamic {
    mainCulture: Culture | null;
    constructor(options: IInputTranslation);
    add(culture: string): void;
    createFormControl(group: FormGroup): void;
    private _fill;
}
