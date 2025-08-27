import { InputAddress } from '@ta/form-model';
import { CamAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class InputAddressComponent extends CamAbstractInputComponent<InputAddress> {
    addresstext: any;
    addressDetails: {
        street: null;
        streetNumber: null;
        locality: null;
        postalCode: null;
        country: null;
        longitude: null;
        latitude: null;
    };
    constructor();
    parseAddress(place: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputAddressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputAddressComponent, "ta-input-address", never, {}, {}, never, never, true, never>;
}
