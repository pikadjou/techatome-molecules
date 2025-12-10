import { IInputBase, InputBase } from "./base";
import { InputTextBox } from "./textbox";
export declare enum EAddressValues {
    street = "street",
    number = "number",
    city = "city",
    zipCode = "zipCode",
    country = "country",
    longitude = "longitude",
    latitude = "latitude"
}
export interface IAddressValue {
    street: string | null;
    number: string | null;
    city: string | null;
    zipCode: string | null;
    country: string | null;
    longitude: number | null;
    latitude: number | null;
}
export interface IInputAddress extends IInputBase<Partial<IAddressValue>> {
}
export declare class InputAddress extends InputBase<Partial<IAddressValue>> {
    controlType: string;
    set value(data: Partial<IAddressValue> | null);
    street: InputTextBox<string>;
    number: InputTextBox<string>;
    city: InputTextBox<string>;
    country: InputTextBox<string>;
    zipCode: InputTextBox<string>;
    constructor(options?: IInputAddress);
    updateValue(): void;
}
