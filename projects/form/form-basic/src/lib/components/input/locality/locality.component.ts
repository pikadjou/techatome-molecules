import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, inject, signal } from '@angular/core';
import { TouchedChangeEvent } from '@angular/forms';

import { distinctUntilChanged, filter, of, switchMap, tap } from 'rxjs';

import { InputChoices, InputChoicesOption, InputLocality, InputTextBox } from '@ta/form-model';
import { InputChoicesComponent, TaAbstractInputComponent, TextBoxComponent } from '@ta/form-input';
import { AddressLocality, TaAddressLookupService, isNonNullable, toArray } from '@ta/utils';

import { TaTranslationForm } from '../../../translation.service';

const DEFAULT_COUNTRY = 'BE';

type LocalityValue = AddressLocality | AddressLocality[] | null;

/**
 * Choix d'une localité (code postal + commune) dans la liste officielle du pays.
 *
 * La liste complète du pays est gardée en mémoire ; la recherche filtre côté
 * client. Seul un pays sans données ouvre la saisie libre (code postal + ville).
 * Le composant porte la valeur métier (`AddressLocality`) : les champs internes
 * ne manipulent que des identifiants ou du texte.
 */
@Component({
  imports: [InputChoicesComponent, TextBoxComponent],
  selector: 'ta-input-locality',
  standalone: true,
  styleUrls: ['./locality.component.scss'],
  templateUrl: './locality.component.html',
})
export class InputLocalityComponent
  extends TaAbstractInputComponent<InputLocality, LocalityValue>
  implements OnInit, OnDestroy
{
  @ViewChild(InputChoicesComponent) private _choicesRef?: InputChoicesComponent;
  @ViewChild('localityItemTpl', { static: true })
  private _localityItemTpl!: TemplateRef<any>;

  /** `false` tant que le pays courant n'a pas de liste : on bascule en saisie libre. */
  public readonly available = signal(true);

  public choicesInput!: InputChoices;
  public cityInput!: InputTextBox;
  public zipCodeInput!: InputTextBox;

  private readonly _lookup = inject(TaAddressLookupService);
  private _currentCountry: string | null = null;
  private _isApplyingValue = false;
  private _localities: AddressLocality[] = [];
  private _localityMap = new Map<string, AddressLocality>();

  constructor() {
    super();
    TaTranslationForm.getInstance();
  }

  public override ngOnInit() {
    super.ngOnInit();
    this.choicesInput = new InputChoices({
      advancedSearch$: (search?: string) => of(this._searchLocalities(search)),
      disabled: this.input.disabled,
      key: `${this.input.key}_choices`,
      label: this.input.label || 'form.address.locality',
      message: this.input.message,
      multiple: this.input.multiple,
      validators: this.input.validators,
      withSearch: true,
    });
    this.choicesInput.choiceTemplate = { one: this._localityItemTpl };
    this.zipCodeInput = new InputTextBox({
      disabled: this.input.disabled,
      key: `${this.input.key}_zipCode`,
      label: 'form.address.zipCode',
      validators: this.input.validators,
    });
    this.cityInput = new InputTextBox({
      disabled: this.input.disabled,
      key: `${this.input.key}_city`,
      label: 'form.address.city',
      validators: this.input.validators,
    });

    // Une valeur posée de l'extérieur (préremplissage, recherche Google) se reflète dans les champs.
    this._registerSubscription(this.input.changeValue$.subscribe(() => this._applyValueToFields()));
    // Une soumission invalide marque le contrôle touché : on le répercute aux champs,
    // sinon leurs messages d'erreur restent invisibles.
    const control = this.input.formControl;
    if (control) {
      this._registerSubscription(
        control.events
          .pipe(filter(event => event instanceof TouchedChangeEvent && event.touched))
          .subscribe(() => this._fields().forEach(field => field.formControl?.markAsTouched()))
      );
    }
    this._registerSubscription(
      (this.input.country$ ?? of(DEFAULT_COUNTRY))
        .pipe(
          distinctUntilChanged(),
          // Le choix est vidé dès que le pays change, avant même que la nouvelle liste
          // n'arrive : une valeur posée entre-temps n'est ainsi jamais écrasée.
          tap(country => {
            if (isNonNullable(this._currentCountry) && country !== this._currentCountry) {
              this._setValue(null);
            }
            this._currentCountry = country;
          }),
          switchMap(country => this._lookup.getCountryPostalCodes(country))
        )
        .subscribe(localities => {
          this._localities = localities;
          this._localityMap = new Map(localities.map(locality => [InputLocality.localityId(locality), locality]));
          this.available.set(localities.length > 0);
          this._applyValueToFields();
          this._choicesRef?.refresh();
        })
    );
  }

  public override ngOnDestroy() {
    this._fields().forEach(field => field.destroy());
    super.ngOnDestroy();
  }

  public onChoicesChanged() {
    if (this._isApplyingValue) {
      return;
    }
    const localities = (this.choicesInput.value ?? []).map(id => this._localityMap.get(id)).filter(isNonNullable);
    this._setValue(this._pack(localities));
  }

  public onFreeInputChanged() {
    if (this._isApplyingValue) {
      return;
    }
    const zipCode = this.zipCodeInput.value?.trim() ?? '';
    const city = this.cityInput.value?.trim() ?? '';
    if (!zipCode && !city) {
      this._setValue(null);
      return;
    }
    this._setValue(
      this._pack([
        {
          city,
          country: this._currentCountry ?? DEFAULT_COUNTRY,
          latitude: null,
          longitude: null,
          zipCode,
        },
      ])
    );
  }

  private _fields() {
    return [this.choicesInput, this.cityInput, this.zipCodeInput];
  }

  private _pack(localities: AddressLocality[]): LocalityValue {
    return this.input.multiple ? localities : (localities[0] ?? null);
  }

  private _setValue(value: LocalityValue) {
    this.input.value = value;
  }

  /** Reflète `input.value` dans les champs — sans repasser par leurs `valueChanged`. */
  private _applyValueToFields() {
    const localities = toArray(this.input.value).filter(isNonNullable);
    this._isApplyingValue = true;
    const ids = localities.map(locality => InputLocality.localityId(locality));
    const current = this.choicesInput.value ?? [];
    if (ids.length !== current.length || ids.some(id => !current.includes(id))) {
      this.choicesInput.value = ids;
    }
    const first = localities[0];
    this.zipCodeInput.value = first?.zipCode ?? '';
    this.cityInput.value = first?.city ?? '';
    this._isApplyingValue = false;
  }

  private _searchLocalities(search?: string): InputChoicesOption[] {
    const term = (search ?? '').trim().toLowerCase();
    const matched = term
      ? this._localities.filter(locality => `${locality.zipCode} ${locality.city}`.toLowerCase().includes(term))
      : this._localities;
    return matched.map(locality => ({
      data: locality,
      id: InputLocality.localityId(locality),
      name: `${locality.zipCode} ${locality.city}`,
    }));
  }
}
