declare var google: any;

import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { TouchedChangeEvent, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, filter, of } from 'rxjs';

import { IAddressValue, InputAddress, InputBase, InputChoices, InputLocality, InputTextBox } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import {
  FormLabelComponent,
  InputChoicesComponent,
  TaAbstractInputComponent,
  TextBoxComponent,
} from '@ta/form-input';
import { TranslatePipe } from '@ta/translation';
import { AddressLocality, getCountryList, isNonNullable, toArray } from '@ta/utils';

import { TaTranslationForm } from '../../../translation.service';
import { InputLocalityComponent } from '../locality/locality.component';

interface AddressGeo {
  latitude: number | null;
  longitude: number | null;
  placeId: string | null;
}

const DEFAULT_COUNTRY = 'BE';

@Component({
  imports: [
    FontIconComponent,
    FormLabelComponent,
    InputChoicesComponent,
    InputLocalityComponent,
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
  @ViewChild('countryItemTpl', { static: true }) private _countryItemTpl!: TemplateRef<any>;

  // La recherche Google n'est affichée que si l'API Maps/Places a bien été
  // injectée dans l'application (via provideGoogleMaps()).
  public searchEnabled = false;
  public complementInput = new InputTextBox({
    key: 'displayFloor',
    label: 'form.address.floor',
  });
  public countryInput!: InputChoices;
  public detailsInputs: InputBase<any>[];
  // Code postal + commune : la brique localité porte la liste du pays et son éventuel repli.
  public localityInput!: InputLocality;
  public numberInput = new InputTextBox({
    key: 'displayNumber',
    label: 'form.address.number',
  });
  public streetInput = new InputTextBox({
    key: 'displayStreet',
    label: 'form.address.street',
    validators: [Validators.required],
  });

  private readonly _translate = inject(TranslateService);
  private _autocomplete: any;
  private _country$ = new BehaviorSubject<string>(DEFAULT_COUNTRY);
  private _currentCountry: string | null = null;
  private _geo: AddressGeo = { latitude: null, longitude: null, placeId: null };
  private _isApplyingValue = false;
  private _locality: AddressLocality | null = null;

  constructor() {
    super();
    TaTranslationForm.getInstance();
    this.countryInput = new InputChoices({
      key: 'displayCountry',
      label: 'form.address.country',
      options$: of([]),
      validators: [Validators.required],
      value: [DEFAULT_COUNTRY],
      withSearch: true,
    });
    this.localityInput = new InputLocality({
      country$: this._country$,
      key: 'displayLocality',
      label: 'form.address.locality',
      validators: [Validators.required],
    });
    this.detailsInputs = [
      this.complementInput,
      this.countryInput,
      this.localityInput,
      this.numberInput,
      this.streetInput,
    ];
  }

  public override ngOnInit() {
    super.ngOnInit();
    // Les sous-champs naissent ici : sans ça, une adresse désactivée restait éditable.
    if (this.input.disabled) {
      this.detailsInputs.forEach(i => (i.disabled = true));
    }
    this.searchEnabled = this._isGoogleAvailable() && !this.input.disabled;
    // Rendu d'une option (le composant gère la boucle et l'empilement vertical).
    this.countryInput.choiceTemplate = { one: this._countryItemTpl };
    this.countryInput.options$ = of(
      getCountryList(this._translate.currentLang, this.input.priorityCountries).map(c => ({
        data: c,
        id: c.code,
        name: c.name,
      }))
    );
    if (this.input.value) {
      this._applyValueToFields(this.input.value);
    } else {
      // Adresse vide : on sème le pays par défaut (Belgique) dans la valeur.
      this._updateValueFromInputs();
    }
    this._currentCountry = this.countryInput.value?.[0] ?? null;
    this._country$.next(this._currentCountry ?? DEFAULT_COUNTRY);
  }

  public override ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.searchEnabled) {
      this._bindAutocomplete(this.googleSearchInput?.nativeElement);
    }
    // Les contrôles des sous-champs n'existent qu'une fois la vue construite : sans ce calcul,
    // une adresse vide passait pour valide jusqu'à la première saisie. Hors du cycle courant
    // pour ne pas modifier une valeur déjà vérifiée.
    queueMicrotask(() => this._refreshValidity());
    // Une soumission invalide marque le contrôle d'adresse touché : on le répercute aux
    // sous-champs, sinon leurs messages d'erreur restent invisibles.
    const control = this.input.formControl;
    if (control) {
      this._registerSubscription(
        control.events
          .pipe(filter(event => event instanceof TouchedChangeEvent && event.touched))
          .subscribe(() => this.detailsInputs.forEach(i => i.formControl?.markAsTouched()))
      );
    }
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
    // Si le pays change, la brique localité recharge sa liste et vide son choix.
    const country = this.countryInput.value?.[0] ?? null;
    if (country !== this._currentCountry) {
      this._currentCountry = country;
      this._country$.next(country ?? '');
    }
    this._updateValueFromInputs();
    this._refreshValidity();
  }

  public onLocalityChanged(value: AddressLocality | AddressLocality[] | null) {
    if (this._isApplyingValue) {
      return;
    }
    this._locality = toArray(value).filter(isNonNullable)[0] ?? null;
    // Une localité choisie à la main remplace le repère Google : ses coordonnées font foi.
    this._geo = {
      latitude: this._locality?.latitude ?? null,
      longitude: this._locality?.longitude ?? null,
      placeId: null,
    };
    this._updateValueFromInputs();
    this._refreshValidity();
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
      country: value.country || DEFAULT_COUNTRY,
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

  /**
   * Pose les champs sans déclencher leurs `valueChanged`.
   *
   * Le pays part avant la localité : la brique localité vide son choix à chaque
   * changement de pays, et écraserait sinon la localité qu'on vient de poser.
   */
  private _setFields(fields: {
    city: string;
    country: string;
    floor: string;
    number: string;
    street: string;
    zipCode: string;
  }) {
    this._isApplyingValue = true;
    this.complementInput.value = fields.floor;
    this.numberInput.value = fields.number;
    this.streetInput.value = fields.street;
    this.countryInput.value = [fields.country];
    this._currentCountry = fields.country;
    this._country$.next(fields.country);
    this._locality =
      fields.zipCode || fields.city
        ? { city: fields.city, country: fields.country, latitude: null, longitude: null, zipCode: fields.zipCode }
        : null;
    this.localityInput.value = this._locality;
    this._isApplyingValue = false;
  }

  private _updateValueFromInputs() {
    this.input.value = {
      city: this._locality?.city ?? null,
      country: this.countryInput.value?.[0] ?? null,
      floor: this.complementInput.value ?? null,
      latitude: this._geo.latitude,
      longitude: this._geo.longitude,
      number: this.numberInput.value ?? null,
      placeId: this._geo.placeId,
      street: this.streetInput.value ?? null,
      zipCode: this._locality?.zipCode ?? null,
    };
  }
}
