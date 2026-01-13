import { IInputBase, InputBase } from './base';
import { InputTextBox } from './textbox';

export enum EAddressValues {
  street = 'street',
  number = 'number',
  floor = 'floor',
  city = 'city',
  zipCode = 'zipCode',
  country = 'country',
  longitude = 'longitude',
  latitude = 'latitude',
}

export interface IAddressValue {
  street: string | null;
  number: string | null;
  floor: string | null;
  city: string | null;
  zipCode: string | null;
  country: string | null;
  longitude: number | null;
  latitude: number | null;
}
export interface IInputAddress extends IInputBase<Partial<IAddressValue>> {}

export class InputAddress extends InputBase<Partial<IAddressValue>> {
  override controlType = 'address';

  override set value(data: Partial<IAddressValue> | null) {
    super.value = data;
    this.street.value = data?.street ?? null;
    this.number.value = data?.number ?? null;
    this.floor.value = data?.floor ?? null;
    this.country.value = data?.country ?? null;
    this.city.value = data?.city ?? null;
    this.zipCode.value = data?.zipCode ?? null;
  }

  public street = new InputTextBox({
    key: EAddressValues.street,
    label: 'street',
  });

  public number = new InputTextBox({
    key: EAddressValues.number,
    label: 'number',
  });

  public floor = new InputTextBox({
    key: EAddressValues.floor,
    label: 'floor',
  });

  public city = new InputTextBox({
    key: EAddressValues.city,
    label: 'city',
  });

  public country = new InputTextBox({
    key: EAddressValues.country,
    label: 'country',
  });

  public zipCode = new InputTextBox({
    key: EAddressValues.zipCode,
    label: 'zipCode',
  });

  constructor(options: IInputAddress = {}) {
    super(options);
    this.type = 'address';

    this.value = this._value();
  }

  public updateValue() {
    const data = {
      street: this.street.value,
      number: this.number.value,
      floor: this.floor.value,
      city: this.city.value,
      zipCode: this.zipCode.value,
      country: this.country.value,
      longitude: null,
      latitude: null,
    };

    this.value = data;
  }

  public static formatAddressForm(data: any) {
    return {
      street: data[EAddressValues.street],
      number: data[EAddressValues.number],
      floor: data[EAddressValues.floor],
      city: data[EAddressValues.city],
      zipCode: data[EAddressValues.zipCode],
      country: data[EAddressValues.country],
    };
  }
}
