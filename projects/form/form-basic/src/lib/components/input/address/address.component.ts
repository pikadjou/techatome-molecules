declare var google: any;

import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Validators } from '@angular/forms';

import { IAddressValue, InputAddress, InputBase, InputTextBox } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { FormLabelComponent, TaAbstractInputComponent, TextBoxComponent } from '@ta/form-input';
import { TranslatePipe } from '@ta/translation';
import {
  BadgeComponent,
  ButtonComponent,
  CardComponent,
  CardContentComponent,
  LinkComponent,
  TextComponent,
  TitleComponent,
} from '@ta/ui';

import { TaTranslationForm } from '../../../translation.service';

interface AddressSnapshot {
  city: string;
  country: string;
  floor: string;
  latitude: number;
  longitude: number;
  number: string;
  placeId: string;
  street: string;
  zipCode: string;
}

type AddressFormState = 'empty' | 'locked' | 'manual';

@Component({
  imports: [
    BadgeComponent,
    ButtonComponent,
    CardComponent,
    CardContentComponent,
    FontIconComponent,
    FormLabelComponent,
    LinkComponent,
    TextBoxComponent,
    TextComponent,
    TitleComponent,
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

  public cityInput = new InputTextBox({
    key: 'displayCity',
    label: 'form.address.city',
    readonly: true,
    validators: [Validators.required],
  });
  public complementInput = new InputTextBox({
    key: 'displayFloor',
    label: 'form.address.floor',
  });
  public countryInput = new InputTextBox({
    key: 'displayCountry',
    label: 'form.address.country',
    readonly: true,
    validators: [Validators.required],
  });
  public detailsInputs: InputBase<any>[];
  public numberInput = new InputTextBox({
    key: 'displayNumber',
    label: 'form.address.number',
    readonly: true,
  });
  public snapshot = signal<AddressSnapshot | null>(null);
  public state = signal<AddressFormState>('empty');
  public streetInput = new InputTextBox({
    key: 'displayStreet',
    label: 'form.address.street',
    readonly: true,
    validators: [Validators.required],
  });
  public zipCodeInput = new InputTextBox({
    key: 'displayZipCode',
    label: 'form.address.zipCode',
    readonly: true,
    validators: [Validators.required],
  });

  public readonly currentPlaceId = computed(() => this.snapshot()?.placeId ?? '');

  private readonly _injector = inject(Injector);
  private _autocomplete: any;
  private _isApplyingSnapshot = false;
  private _lastBoundInput?: HTMLInputElement;

  constructor() {
    super();
    TaTranslationForm.getInstance();
    this.detailsInputs = [
      this.cityInput,
      this.complementInput,
      this.countryInput,
      this.numberInput,
      this.streetInput,
      this.zipCodeInput,
    ];
    effect(() => {
      const currentState = this.state();
      if (currentState !== 'empty' && currentState !== 'locked' && currentState !== 'manual') {
        return;
      }
      afterNextRender(() => this._rebindAutocompleteIfNeeded(), { injector: this._injector });
    });
  }

  public override ngOnInit() {
    super.ngOnInit();
    if (this.input.value) {
      this._applyValueToFields(this.input.value);
      this.state.set('locked');
    }
  }

  public override ngAfterViewInit() {
    super.ngAfterViewInit();
    this._bindAutocomplete(this.googleSearchInput?.nativeElement);
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
    if (this._isApplyingSnapshot) {
      return;
    }
    this._updateValueFromInputs();
    this.input.formControl?.setErrors(
      this.detailsInputs.some(i => i.formControl?.invalid ?? false) ? { invalid: true } : null
    );
  }

  public revertToOriginal() {
    const snap = this.snapshot();
    if (!snap) {
      return;
    }
    this._applySnapshotToFields(snap);
    this._setDetailsLocked(true);
    this.state.set('locked');
    this._updateValueFromInputs();
  }

  public unlockManual() {
    this._setDetailsLocked(false);
    this.state.set('manual');
  }

  private _applySnapshotToFields(snap: AddressSnapshot) {
    this._isApplyingSnapshot = true;
    this.cityInput.value = snap.city;
    this.complementInput.value = snap.floor;
    this.countryInput.value = snap.country;
    this.numberInput.value = snap.number;
    this.streetInput.value = snap.street;
    this.zipCodeInput.value = snap.zipCode;
    this._isApplyingSnapshot = false;
  }

  private _applyValueToFields(value: Partial<IAddressValue>) {
    const snap: AddressSnapshot = {
      city: value.city ?? '',
      country: value.country ?? '',
      floor: value.floor ?? '',
      latitude: value.latitude ?? 0,
      longitude: value.longitude ?? 0,
      number: value.number ?? '',
      placeId: value.placeId ?? '',
      street: value.street ?? '',
      zipCode: value.zipCode ?? '',
    };
    this.snapshot.set(snap);
    this._applySnapshotToFields(snap);
    this._setDetailsLocked(true);
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
    this._lastBoundInput = el;
  }

  private _parseAddress(place: any) {
    const addressComponents = place.address_components;
    const geometry = place.geometry;
    const getComponent = (type: string, nameType: 'long_name' | 'short_name' = 'long_name') => {
      const component = addressComponents?.find((c: any) => c.types.includes(type));
      return component ? component[nameType] : '';
    };

    const snap: AddressSnapshot = {
      city: getComponent('locality'),
      country: getComponent('country'),
      floor: this.complementInput.value ?? '',
      latitude: geometry?.location?.lat() ?? 0,
      longitude: geometry?.location?.lng() ?? 0,
      number: getComponent('street_number'),
      placeId: place.place_id ?? '',
      street: getComponent('route'),
      zipCode: getComponent('postal_code'),
    };
    this.snapshot.set(snap);
    this._applySnapshotToFields(snap);
    this._setDetailsLocked(true);
    this.state.set('locked');
    this.input.value = {
      city: snap.city || null,
      country: snap.country || null,
      floor: snap.floor || null,
      latitude: snap.latitude,
      longitude: snap.longitude,
      number: snap.number || null,
      placeId: snap.placeId || null,
      street: snap.street || null,
      zipCode: snap.zipCode || null,
    };
  }

  private _rebindAutocompleteIfNeeded() {
    const el = this.googleSearchInput?.nativeElement;
    if (!el || el === this._lastBoundInput) {
      return;
    }
    this._bindAutocomplete(el);
  }

  private _setDetailsLocked(locked: boolean) {
    this.detailsInputs.forEach(i => i.setReadonly(locked));
    this.complementInput.setReadonly(false);
  }

  private _updateValueFromInputs() {
    const snap = this.snapshot();
    this.input.value = {
      city: this.cityInput.value ?? null,
      country: this.countryInput.value ?? null,
      floor: this.complementInput.value ?? null,
      latitude: snap?.latitude ?? null,
      longitude: snap?.longitude ?? null,
      number: this.numberInput.value ?? null,
      placeId: snap?.placeId ?? null,
      street: this.streetInput.value ?? null,
      zipCode: this.zipCodeInput.value ?? null,
    };
  }
}
