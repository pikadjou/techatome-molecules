import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { InputAddress } from '@ta/form-model';
import { TaGraphService, TaStrapiService, TaServerSevice } from '@ta/server';
import { TaTranslationRegistryService } from '@ta/translation';

import { InputAddressComponent } from './address.component';

describe('InputAddressComponent', () => {
  let component: InputAddressComponent;
  let fixture: ComponentFixture<InputAddressComponent>;
  let addressInput: InputAddress;

  beforeEach(async () => {
    addressInput = new InputAddress({ key: 'address', label: 'Address' });

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NoopAnimationsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputAddressComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({}), queryParams: of({}) },
        },
        {
          provide: Router,
          useValue: { url: '/test' },
        },
        {
          provide: Location,
          useValue: {},
        },
        {
          provide: TaTranslationRegistryService,
          useValue: { register: jasmine.createSpy('register') },
        },
        {
          provide: TaGraphService,
          useValue: { registerGraphEndpoint: jasmine.createSpy('registerGraphEndpoint') },
        },
        {
          provide: TaStrapiService,
          useValue: { fetchQueryList$: jasmine.createSpy('fetchQueryList$') },
        },
        {
          provide: TaServerSevice,
          useValue: { registerRoutes: jasmine.createSpy('registerRoutes') },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputAddressComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', addressInput);
    fixture.detectChanges();
  });

  afterEach(() => {
    addressInput.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose address input', () => {
    expect(component.input).toBe(addressInput);
    expect(component.input.key).toBe('address');
  });

  it('should initialize with empty state when no value provided', () => {
    expect(component.state()).toBe('empty');
    expect(component.snapshot()).toBeNull();
  });

  it('should initialize with locked state when value is provided', () => {
    addressInput.destroy();
    addressInput = new InputAddress({
      key: 'address',
      label: 'Address',
      value: { city: 'Brussels', country: 'Belgium', street: 'Main St', zipCode: '1000' },
    });
    fixture.componentRef.setInput('input', addressInput);
    fixture.detectChanges();

    expect(component.state()).toBe('locked');
  });

  it('should have sub-inputs for each address field', () => {
    expect(component.streetInput).toBeTruthy();
    expect(component.numberInput).toBeTruthy();
    expect(component.cityInput).toBeTruthy();
    expect(component.zipCodeInput).toBeTruthy();
    expect(component.countryInput).toBeTruthy();
    expect(component.complementInput).toBeTruthy();
  });

  describe('unlockManual', () => {
    beforeEach(() => {
      component.state.set('locked');
    });

    it('should set state to manual', () => {
      component.unlockManual();
      expect(component.state()).toBe('manual');
    });

    it('should make sub-inputs editable', () => {
      component.unlockManual();
      expect(component.streetInput.readonly).toBeFalse();
      expect(component.cityInput.readonly).toBeFalse();
    });
  });

  describe('revertToOriginal', () => {
    it('should do nothing when no snapshot', () => {
      component.state.set('manual');
      component.revertToOriginal();
      expect(component.state()).toBe('manual');
    });

    it('should restore snapshot and lock fields', () => {
      component.snapshot.set({
        city: 'Brussels',
        country: 'Belgium',
        floor: '',
        latitude: 50.8,
        longitude: 4.3,
        number: '10',
        placeId: 'abc123',
        street: 'Rue de la Loi',
        zipCode: '1000',
      });
      component.state.set('manual');

      component.revertToOriginal();

      expect(component.state()).toBe('locked');
      expect(component.streetInput.value).toBe('Rue de la Loi');
      expect(component.cityInput.value).toBe('Brussels');
    });
  });
});
