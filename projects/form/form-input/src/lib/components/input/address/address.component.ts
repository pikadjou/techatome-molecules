import { Component, ViewChild } from '@angular/core';

import { InputAddress } from '@ta/form-model';

import { CamAbstractInputComponent } from '../../abstract.component';

@Component({
selector: 'ta-input-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],,
  standalone: true,
})
export class InputAddressComponent extends CamAbstractInputComponent<InputAddress> {
  @ViewChild('addresstext') addresstext: any;

  addressDetails = {
    street: null,
    streetNumber: null,
    locality: null,
    postalCode: null,
    country: null,
    longitude: null,
    latitude: null,
  };

  constructor() {
    super();
  }

  public parseAddress(place: any) {
    const addressComponents = place.address_components;
    const geometry = place.geometry;

    const getComponent = (type: string) => {
      const component = addressComponents.find((comp: any) => comp.types.includes(type));
      return component ? component.long_name : null;
    };

    this.input.value = {
      streetNumber: getComponent('street_number'),
      street: getComponent('route'),
      locality: getComponent('locality'),
      postalCode: getComponent('postal_code'),
      country: getComponent('country'),
      longitude: geometry?.location?.lng() || null,
      latitude: geometry?.location?.lat() || null,
    };
  }
}
