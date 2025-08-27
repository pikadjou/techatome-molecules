import { InputRadio } from '@ta/form-model';
import { TaSizes } from '@ta/styles';
import { CamAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class RadioComponent extends CamAbstractInputComponent<InputRadio<any>> {
    constructor();
    iconSize(option: {
        name?: string;
    }): TaSizes;
    hasLabel(option: {
        name?: string;
    }): boolean;
    onOptionClicked(optionId: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioComponent, "ta-input-radio", never, {}, {}, never, never, true, never>;
}
