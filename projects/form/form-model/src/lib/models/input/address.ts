import { IInputBase, InputBase } from './base';

export enum EAddressValues {
  city = 'city',
  country = 'country',
  floor = 'floor',
  latitude = 'latitude',
  longitude = 'longitude',
  number = 'number',
  placeId = 'placeId',
  street = 'street',
  zipCode = 'zipCode',
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
  /** Codes pays ISO alpha-2 à mettre en évidence en tête de liste (ex. ['BE', 'FR']). */
  priorityCountries?: string[];
}

export class InputAddress extends InputBase<Partial<IAddressValue>> {
  override controlType = 'address';
  priorityCountries: string[];

  constructor(options: IInputAddress = {}) {
    super(options);
    this.type = 'address';
    this.priorityCountries = options.priorityCountries ?? ['BE', 'FR', 'DE', 'NL'];
  }

  public static formatAddressForm(data: any) {
    if (!data) {
      return null;
    }
    return {
      city: data[EAddressValues.city],
      country: data[EAddressValues.country],
      floor: data[EAddressValues.floor],
      number: data[EAddressValues.number],
      placeId: data[EAddressValues.placeId],
      street: data[EAddressValues.street],
      zipCode: data[EAddressValues.zipCode],
    };
  }
}
