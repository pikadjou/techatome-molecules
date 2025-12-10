import { AddressType } from "./addessType";

export interface Address {
  addressType: AddressType[];
  street: string | null;
  locality: string | null;
  postalCode: string | null;
  country: string | null;
  longitude: number | null;
  latitude: number | null;
}
