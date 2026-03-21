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
    addressInput = new InputAddress({
      key: 'address',
      label: 'Address',
      value: {
        street: 'Main St',
        number: '42',
        floor: '2',
        city: 'Brussels',
        zipCode: '1000',
        country: 'Belgium',
      },
    });

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

  it('should have sub-inputs for address fields', () => {
    expect(component.input.street).toBeTruthy();
    expect(component.input.number).toBeTruthy();
    expect(component.input.floor).toBeTruthy();
    expect(component.input.city).toBeTruthy();
    expect(component.input.zipCode).toBeTruthy();
    expect(component.input.country).toBeTruthy();
  });

  describe('parseAddress', () => {
    it('should parse Google Places address components', () => {
      const place = {
        address_components: [
          { types: ['street_number'], long_name: '10' },
          { types: ['route'], long_name: 'Rue de la Loi' },
          { types: ['locality'], long_name: 'Brussels' },
          { types: ['postal_code'], long_name: '1000' },
          { types: ['country'], long_name: 'Belgium' },
        ],
      };

      component.parseAddress(place);

      expect(component.input.value).toEqual({
        streetNumber: '10',
        street: 'Rue de la Loi',
        locality: 'Brussels',
        postalCode: '1000',
        country: 'Belgium',
      });
    });

    it('should handle missing address components gracefully', () => {
      const place = {
        address_components: [
          { types: ['locality'], long_name: 'Brussels' },
        ],
      };

      component.parseAddress(place);

      expect(component.input.value).toEqual({
        streetNumber: null,
        street: null,
        locality: 'Brussels',
        postalCode: null,
        country: null,
      });
    });

    it('should handle empty address components', () => {
      const place = {
        address_components: [],
      };

      component.parseAddress(place);

      expect(component.input.value).toEqual({
        streetNumber: null,
        street: null,
        locality: null,
        postalCode: null,
        country: null,
      });
    });
  });

  describe('dispatchNewValue', () => {
    it('should call updateValue on the input', () => {
      spyOn(component.input, 'updateValue');
      component.dispatchNewValue();
      expect(component.input.updateValue).toHaveBeenCalled();
    });
  });
});
