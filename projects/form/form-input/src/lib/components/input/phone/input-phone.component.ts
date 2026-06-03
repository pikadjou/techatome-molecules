import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { ValidatorFn } from '@angular/forms';

import intlTelInput from 'intl-tel-input';

import { InputPhone, phoneValidator } from '@ta/form-model';
import { LoaderComponent } from '@ta/ui';
import { loadStylesheet } from '@ta/utils';

import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

intlTelInput.attachUtils(() => import('intl-tel-input/utils') as any);

@Component({
  selector: 'ta-input-phone',
  templateUrl: './input-phone.component.html',
  styleUrls: ['./input-phone.component.scss'],
  standalone: true,
  imports: [InputLayoutComponent, LoaderComponent],
})
export class InputPhoneComponent extends TaAbstractInputComponent<InputPhone> {
  @ViewChild('phoneInput', { static: false }) phoneInput!: ElementRef;

  public readonly isReady = signal(false);
  private _iti?: ReturnType<typeof intlTelInput>;
  private _stylesheetReady$?: Promise<void>;
  private _syncingFromControl = false;
  private _validator?: ValidatorFn;

  override ngOnInit() {
    super.ngOnInit();
    this._stylesheetReady$ = loadStylesheet(
      'intl-tel-input-css',
      'https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/css/intlTelInput.min.css'
    );
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    (this._stylesheetReady$ ?? Promise.resolve()).catch(() => undefined).then(() => this._initPhoneInput());
  }

  private _initPhoneInput() {
    this._iti = intlTelInput(this.phoneInput.nativeElement, {
      initialCountry: 'be',
      countryOrder: this.input.preferredCountries as any,
      separateDialCode: true,
    });

    const control = this.input.formControl;
    if (!control) {
      return;
    }

    this._iti.promise.then(() => {
      if (control.value) {
        this._writeFromControl(control.value);
      }
      control.updateValueAndValidity({ emitEvent: false });
      this.isReady.set(true);
    });

    this._validator = phoneValidator(() => this._iti);
    control.addValidators(this._validator);
    control.updateValueAndValidity({ emitEvent: false });

    this._registerSubscription(
      control.valueChanges.subscribe(value => {
        if (this._syncingFromControl) {
          return;
        }
        this._writeFromControl(value);
      })
    );

    this._iti.setDisabled(control.disabled);
    this._registerSubscription(
      control.statusChanges.subscribe(() => {
        this._iti?.setDisabled(control.disabled);
      })
    );
  }

  override ngOnDestroy() {
    if (this._validator) {
      this.input.formControl?.removeValidators(this._validator);
    }
    this._iti?.destroy();
    super.ngOnDestroy();
  }

  public onBlur() {
    if (!this.isReady()) {
      return;
    }
    this._dispatch();
  }

  public onCountryChange() {
    if (!this.isReady()) {
      return;
    }
    this._dispatch();
    this.input.formControl?.updateValueAndValidity();
  }

  private _dispatch() {
    const control = this.input.formControl;
    if (!control) {
      return;
    }
    const fullValue = this._iti?.getNumber() ?? '';
    if (control.value !== fullValue) {
      this._syncingFromControl = true;
      control.setValue(fullValue);
      this._syncingFromControl = false;
    }
  }

  private _writeFromControl(value: unknown) {
    this._syncingFromControl = true;
    this._iti?.setNumber(typeof value === 'string' ? value : '');
    this._syncingFromControl = false;
  }
}
