declare var google: any;

import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { IAddressValue, InputAddress, InputBase, InputDropdown, InputTextBox } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { DropdownComponent, FormLabelComponent, TaAbstractInputComponent, TextBoxComponent } from '@ta/form-input';
import { TranslatePipe } from '@ta/translation';
import { getCountryList } from '@ta/utils';

import { TaTranslationForm } from '../../../translation.service';

interface AddressGeo {
  latitude: number | null;
  longitude: number | null;
  placeId: string | null;
}

@Component({
  imports: [
    DropdownComponent,
    FontIconComponent,
    FormLabelComponent,
    TextBoxComponent,
    TranslatePipe,
  ],
  selector: 'ta-input-address',
  standalone: true,
  styleUrls: ['./address.component.scss'],
  templateUrl: './address.component.html',
})
export class InputAddressComponent
  extends TaAbstractInputComponent<InputAddress>
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('googleSearchInput') googleSearchInput?: ElementRef<HTMLInputElement>;

  // La recherche Google n'est affichée que si l'API Maps/Places a bien été
  // injectée dans l'application (via provideGoogleMaps()).
  public searchEnabled = false;
  public cityInput = new InputTextBox({
    key: 'displayCity',
    label: 'form.address.city',
    validators: [Validators.required],
  });
  public complementInput = new InputTextBox({
    key: 'displayFloor',
    label: 'form.address.floor',
  });
  public countryInput!: InputDropdown<string>;
  public detailsInputs: InputBase<any>[];
  public numberInput = new InputTextBox({
    key: 'displayNumber',
    label: 'form.address.number',
  });
  public streetInput = new InputTextBox({
    key: 'displayStreet',
    label: 'form.address.street',
    validators: [Validators.required],
  });
  public zipCodeInput = new InputTextBox({
    key: 'displayZipCode',
    label: 'form.address.zipCode',
    validators: [Validators.required],
  });

  private readonly _translate = inject(TranslateService);
  private _autocomplete: any;
  private _geo: AddressGeo = { latitude: null, longitude: null, placeId: null };
  private _isApplyingValue = false;

  constructor() {
    super();
    TaTranslationForm.getInstance();
    this.countryInput = new InputDropdown<string>({
      key: 'displayCountry',
      label: 'form.address.country',
      options$: of([]),
      validators: [Validators.required],
      withSearch: true,
    });
    this.detailsInputs = [
      this.cityInput,
      this.complementInput,
      this.countryInput,
      this.numberInput,
      this.streetInput,
      this.zipCodeInput,
    ];
  }

  public override ngOnInit() {
    super.ngOnInit();
    this.searchEnabled = this._isGoogleAvailable();
    this.countryInput.options$ = of(
      getCountryList(this._translate.currentLang, this.input.priorityCountries).map(c => ({
        id: c.code,
        name: c.name,
      }))
    );
    if (this.input.value) {
      this._applyValueToFields(this.input.value);
    }
  }

  public override ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.searchEnabled) {
      this._bindAutocomplete(this.googleSearchInput?.nativeElement);
    }
  }

  public override ngOnDestroy() {
    if (this._autocomplete) {
      google?.maps?.event?.clearInstanceListeners?.(this._autocomplete);
      this._autocomplete.unbindAll?.();
    }
    this.detailsInputs.forEach(i => i.destroy());
    super.ngOnDestroy();
  }

  public onSubInputChanged() {
    if (this._isApplyingValue) {
      return;
    }
    this._updateValueFromInputs();
    this.input.formControl?.setErrors(
      this.detailsInputs.some(i => i.formControl?.invalid ?? false) ? { invalid: true } : null
    );
  }

  private _applyValueToFields(value: Partial<IAddressValue>) {
    this._geo = {
      latitude: value.latitude ?? null,
      longitude: value.longitude ?? null,
      placeId: value.placeId ?? null,
    };
    this._setFields({
      city: value.city ?? '',
      country: value.country ?? '',
      floor: value.floor ?? '',
      number: value.number ?? '',
      street: value.street ?? '',
      zipCode: value.zipCode ?? '',
    });
  }

  private _isGoogleAvailable(): boolean {
    return typeof google !== 'undefined' && !!google?.maps?.places?.Autocomplete;
  }

  private _bindAutocomplete(el: HTMLInputElement | undefined) {
    if (!el) {
      return;
    }
    if (this._autocomplete) {
      google?.maps?.event?.clearInstanceListeners?.(this._autocomplete);
    }
    if (!google?.maps?.places?.Autocomplete) {
      return;
    }
    this._autocomplete = new google.maps.places.Autocomplete(el, {
      fields: ['address_components', 'geometry', 'place_id'],
    });
    this._autocomplete.addListener('place_changed', () => {
      const place = this._autocomplete?.getPlace();
      if (place?.geometry) {
        this._parseAddress(place);
      }
    });
  }

  private _parseAddress(place: any) {
    const addressComponents = place.address_components;
    const geometry = place.geometry;
    const getComponent = (type: string, nameType: 'long_name' | 'short_name' = 'long_name') => {
      const component = addressComponents?.find((c: any) => c.types.includes(type));
      return component ? component[nameType] : '';
    };

    this._geo = {
      latitude: geometry?.location?.lat() ?? null,
      longitude: geometry?.location?.lng() ?? null,
      placeId: place.place_id ?? null,
    };
    // La recherche est une aide : elle préremplit les champs sans les figer,
    // et on conserve le complément (étage/appartement) déjà saisi.
    this._setFields({
      city: getComponent('locality'),
      country: getComponent('country', 'short_name'),
      floor: this.complementInput.value ?? '',
      number: getComponent('street_number'),
      street: getComponent('route'),
      zipCode: getComponent('postal_code'),
    });
    this._updateValueFromInputs();
    if (this.googleSearchInput?.nativeElement) {
      this.googleSearchInput.nativeElement.value = '';
    }
  }

  private _setFields(fields: {
    city: string;
    country: string;
    floor: string;
    number: string;
    street: string;
    zipCode: string;
  }) {
    this._isApplyingValue = true;
    this.cityInput.value = fields.city;
    this.complementInput.value = fields.floor;
    this.countryInput.value = fields.country;
    this.numberInput.value = fields.number;
    this.streetInput.value = fields.street;
    this.zipCodeInput.value = fields.zipCode;
    this._isApplyingValue = false;
  }

  private _updateValueFromInputs() {
    this.input.value = {
      city: this.cityInput.value ?? null,
      country: this.countryInput.value ?? null,
      floor: this.complementInput.value ?? null,
      latitude: this._geo.latitude,
      longitude: this._geo.longitude,
      number: this.numberInput.value ?? null,
      placeId: this._geo.placeId,
      street: this.streetInput.value ?? null,
      zipCode: this.zipCodeInput.value ?? null,
    };
  }
}
