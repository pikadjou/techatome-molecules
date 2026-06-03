import { IInputBase, InputBase } from './base';
export declare enum EAddressValues {
    city = "city",
    country = "country",
    floor = "floor",
    latitude = "latitude",
    longitude = "longitude",
    number = "number",
    placeId = "placeId",
    street = "street",
    zipCode = "zipCode"
}
export interface IAddressValue {
    city: string | null;
    country: string | null;
    floor: string | null;
    latitude: number | null;
    longitude: number | null;
    number: string | null;
    placeId: string | null;
    street: string | null;
    zipCode: string | null;
}
export interface IInputAddress extends IInputBase<Partial<IAddressValue>> {
}
export declare class InputAddress extends InputBase<Partial<IAddressValue>> {
    controlType: string;
    constructor(options?: IInputAddress);
    static formatAddressForm(data: any): {
        city: any;
        country: any;
        floor: any;
        number: any;
        placeId: any;
        street: any;
        zipCode: any;
    } | null;
}
