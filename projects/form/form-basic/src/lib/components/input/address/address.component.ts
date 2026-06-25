declare var google: any;

import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
import { Subject, of, switchMap } from 'rxjs';

import {
  IAddressValue,
  InputAddress,
  InputBase,
  InputChoices,
  InputChoicesOption,
  InputTextBox,
} from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import {
  FormLabelComponent,
  InputChoicesComponent,
  TaAbstractInputComponent,
  TextBoxComponent,
} from '@ta/form-input';
import { TranslatePipe } from '@ta/translation';
import { AddressLocality, TaAddressLookupService, getCountryList } from '@ta/utils';

import { TaTranslationForm } from '../../../translation.service';

interface AddressGeo {
  latitude: number | null;
  longitude: number | null;
  placeId: string | null;
}

@Component({
  imports: [
    FontIconComponent,
    FormLabelComponent,
    InputChoicesComponent,
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
  @ViewChild(InputChoicesComponent) private _choicesRef?: InputChoicesComponent;
  @ViewChild('localityItemTpl', { static: true }) private _localityItemTpl!: TemplateRef<any>;
  @ViewChild('countryItemTpl', { static: true }) private _countryItemTpl!: TemplateRef<any>;

  // La recherche Google n'est affichée que si l'API Maps/Places a bien été
  // injectée dans l'application (via provideGoogleMaps()).
  public searchEnabled = false;
  // Le choix code postal / commune remplace les champs libres tant que le pays
  // a des données ; sinon on bascule sur la saisie libre (zipCode + ville).
  public localityAvailable = true;
  public cityInput = new InputTextBox({
    key: 'displayCity',
    label: 'form.address.city',
    validators: [Validators.required],
  });
  public complementInput = new InputTextBox({
    key: 'displayFloor',
    label: 'form.address.floor',
  });
  public countryInput!: InputChoices;
  public detailsInputs: InputBase<any>[];
  public localityInput!: InputChoices;
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

  private readonly _lookup = inject(TaAddressLookupService);
  private readonly _translate = inject(TranslateService);
  private _autocomplete: any;
  private _country$ = new Subject<string>();
  private _currentCountry: string | null = null;
  private _geo: AddressGeo = { latitude: null, longitude: null, placeId: null };
  private _isApplyingValue = false;
  private _localities: AddressLocality[] = [];
  private _localityMap = new Map<string, AddressLocality>();

  constructor() {
    super();
    TaTranslationForm.getInstance();
    this.countryInput = new InputChoices({
      key: 'displayCountry',
      label: 'form.address.country',
      options$: of([]),
      validators: [Validators.required],
      value: ['BE'],
      withSearch: true,
    });
    this.localityInput = new InputChoices({
      // La liste complète du pays est gardée en mémoire ; advancedSearch$ filtre
      // côté client et plafonne l'affichage.
      advancedSearch$: (search?: string) => of(this._searchLocalities(search)),
      key: 'displayLocality',
      label: 'form.address.locality',
      validators: [Validators.required],
      withSearch: true,
    });
    this.detailsInputs = [
      this.cityInput,
      this.complementInput,
      this.countryInput,
      this.localityInput,
      this.numberInput,
      this.streetInput,
      this.zipCodeInput,
    ];
  }

  public override ngOnInit() {
    super.ngOnInit();
    this.searchEnabled = this._isGoogleAvailable();
    // Rendu d'une option (le composant gère la boucle et l'empilement vertical).
    this.localityInput.choiceTemplate = { one: this._localityItemTpl };
    this.countryInput.choiceTemplate = { one: this._countryItemTpl };
    this.countryInput.options$ = of(
      getCountryList(this._translate.currentLang, this.input.priorityCountries).map(c => ({
        data: c,
        id: c.code,
        name: c.name,
      }))
    );
    // Pour chaque pays, on récupère TOUTE la liste des codes postaux / communes ;
    // la recherche se fait ensuite côté client (advancedSearch$).
    this._registerSubscription(
      this._country$
        .pipe(switchMap(country => this._lookup.getCountryPostalCodes(country)))
        .subscribe(localities => {
          this._localities = localities;
          this._rebuildLocalityMap(localities);
          this.localityAvailable = localities.length > 0;
          this._choicesRef?.refresh();
        })
    );
    if (this.input.value) {
      this._applyValueToFields(this.input.value);
    } else {
      // Adresse vide : on sème le pays par défaut (Belgique) dans la valeur.
      this._updateValueFromInputs();
    }
    this._currentCountry = this.countryInput.value?.[0] ?? null;
    this._country$.next(this.countryInput.value?.[0] ?? '');
  }

  public override ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.searchEnabled) {
      this._bindAutocomplete(this.googleSearchInput?.nativeElement);
    }
    this._choicesRef?.refresh();
  }

  public override ngOnDestroy() {
    if (this._autocomplete) {
      google?.maps?.event?.clearInstanceListeners?.(this._autocomplete);
      this._autocomplete.unbindAll?.();
    }
    this.detailsInputs.forEach(i => i.destroy());
    this._country$.complete();
    super.ngOnDestroy();
  }

  public onSubInputChanged() {
    if (this._isApplyingValue) {
      return;
    }
    // Si le pays change, on recharge la liste et on réinitialise le choix.
    const country = this.countryInput.value?.[0] ?? null;
    if (country !== this._currentCountry) {
      this._currentCountry = country;
      this.localityInput.value = [];
      this._country$.next(country ?? '');
    }
    this._updateValueFromInputs();
    this._refreshValidity();
  }

  public onLocalitySelected() {
    const id = this.localityInput.value?.[0];
    const locality = id ? this._localityMap.get(id) : undefined;
    if (!locality) {
      return;
    }
    this._geo = { latitude: locality.latitude, longitude: locality.longitude, placeId: null };
    this._isApplyingValue = true;
    this.zipCodeInput.value = locality.zipCode;
    this.cityInput.value = locality.city;
    this._isApplyingValue = false;
    this._updateValueFromInputs();
    this._refreshValidity();
  }

  private _searchLocalities(search?: string): InputChoicesOption[] {
    const term = (search ?? '').trim().toLowerCase();
    const matched = term
      ? this._localities.filter(locality =>
          `${locality.zipCode} ${locality.city}`.toLowerCase().includes(term)
        )
      : this._localities;
    return matched.map(locality => this._toOption(locality));
  }

  private _toOption(locality: AddressLocality): InputChoicesOption {
    return {
      data: locality,
      id: `${locality.zipCode}__${locality.city}`,
      name: `${locality.zipCode} ${locality.city}`,
    };
  }

  private _rebuildLocalityMap(localities: AddressLocality[]) {
    this._localityMap.clear();
    localities.forEach(locality =>
      this._localityMap.set(`${locality.zipCode}__${locality.city}`, locality)
    );
  }

  private _refreshValidity() {
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
      country: value.country || 'BE',
      floor: value.floor ?? '',
      number: value.number ?? '',
      street: value.street ?? '',
      zipCode: value.zipCode ?? '',
    });
    // Présélection du choix code postal / commune (affiché une fois la liste chargée).
    if (value.zipCode && value.city) {
      this.localityInput.value = [`${value.zipCode}__${value.city}`];
    }
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
    // Recharge la liste du pays et présélectionne la localité trouvée.
    this._currentCountry = this.countryInput.value?.[0] ?? null;
    this._country$.next(this.countryInput.value?.[0] ?? '');
    const zipCode = this.zipCodeInput.value;
    const city = this.cityInput.value;
    if (zipCode && city) {
      this.localityInput.value = [`${zipCode}__${city}`];
    }
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
    this.countryInput.value = [fields.country];
    this.numberInput.value = fields.number;
    this.streetInput.value = fields.street;
    this.zipCodeInput.value = fields.zipCode;
    this._isApplyingValue = false;
  }

  private _updateValueFromInputs() {
    this.input.value = {
      city: this.cityInput.value ?? null,
      country: this.countryInput.value?.[0] ?? null,
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
