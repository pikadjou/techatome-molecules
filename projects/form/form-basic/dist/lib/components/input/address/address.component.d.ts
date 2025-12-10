import { InputAddress } from "@ta/form-model";
import { TaAbstractInputComponent } from "@ta/form-input";
import * as i0 from "@angular/core";
export declare class InputAddressComponent extends TaAbstractInputComponent<InputAddress> {
    constructor();
    parseAddress(place: any): void;
    dispatchNewValue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputAddressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputAddressComponent, "ta-input-address", never, {}, {}, never, never, true, never>;
}
