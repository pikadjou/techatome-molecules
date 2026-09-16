import { InputCheckBox } from "@ta/form-model";
import { TaAbstractInputComponent } from "../../abstract.component";
import * as i0 from "@angular/core";
export declare class ToggleComponent extends TaAbstractInputComponent<InputCheckBox, boolean> {
    /** Le nom de l'état courant, si l'appelant a nommé les deux. */
    stateLabel(): string | null;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleComponent, "ta-input-toggle", never, {}, {}, never, never, true, never>;
}
