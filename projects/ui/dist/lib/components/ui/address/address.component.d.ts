import * as i0 from "@angular/core";
export interface Address {
    id: string;
    street: string;
    number: string;
    city: string;
    zipCode: string;
    contry?: string;
    floor: string;
}
export declare class AddressComponent {
    address: import("@angular/core").InputSignal<Address>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddressComponent, "ta-address", never, { "address": { "alias": "address"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
