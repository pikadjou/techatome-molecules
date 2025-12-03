import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { InputAddress } from '@ta/form-model';
import { TaAbstractInputComponent, TextBoxComponent } from '@ta/form-input';
import { FormLabelComponent } from '@ta/form-input';

@Component({
  selector: 'ta-input-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    MatGoogleMapsAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TextBoxComponent,
    FormLabelComponent,
  ],
})
export class InputAddressComponent extends TaAbstractInputComponent<InputAddress> {
  constructor() {
    super();
  }

  public parseAddress(place: any) {
    const addressComponents = place.address_components;

    const getComponent = (type: string) => {
      const component = addressComponents.find((comp: any) => comp.types.includes(type));
      return component ? component.long_name : null;
    };

    const addressData = {
      streetNumber: getComponent('street_number'),
      street: getComponent('route'),
      locality: getComponent('locality'),
      postalCode: getComponent('postal_code'),
      country: getComponent('country'),
    };
    this.input.value = addressData;
  }

  public dispatchNewValue() {
    this.input.updateValue();
  }
}
