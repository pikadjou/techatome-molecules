import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { InputAddress } from '@ta/form-model';
import { TaGraphService, TaStrapiService, TaServerSevice } from '@ta/server';
import { TaTranslationRegistryService } from '@ta/translation';
import { AddressLocality, TaAddressLookupService } from '@ta/utils';

import { InputAddressComponent } from '@lib/form-basic/components/input/address/address.component';

const IXELLES: AddressLocality = { city: 'Ixelles', country: 'BE', latitude: 50.83, longitude: 4.37, zipCode: '1050' };
const LIEGE: AddressLocality = { city: 'Liège', country: 'BE', latitude: 50.63, longitude: 5.57, zipCode: '4000' };

describe('InputAddressComponent', () => {
  let component: InputAddressComponent;
  let fixture: ComponentFixture<InputAddressComponent>;
  let addressInput: InputAddress;
  let lookup: jasmine.SpyObj<TaAddressLookupService>;

  const create = async (input: InputAddress) => {
    addressInput = input;
    fixture = TestBed.createComponent(InputAddressComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', input);
    fixture.componentRef.setInput('standalone', true);
    fixture.detectChanges();
    await fixture.whenStable();
  };

  beforeEach(async () => {
    lookup = jasmine.createSpyObj<TaAddressLookupService>('TaAddressLookupService', ['getCountryPostalCodes']);
    lookup.getCountryPostalCodes.and.callFake((country: string | null | undefined) =>
      of(country === 'BE' ? [IXELLES, LIEGE] : [])
    );

    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputAddressComponent,
      ],
      providers: [
        { provide: TaAddressLookupService, useValue: lookup },
        { provide: ActivatedRoute, useValue: { params: of({}), queryParams: of({}) } },
        { provide: Router, useValue: { url: '/test' } },
        { provide: Location, useValue: {} },
        { provide: TaTranslationRegistryService, useValue: { register: jasmine.createSpy('register') } },
        { provide: TaGraphService, useValue: { registerGraphEndpoint: jasmine.createSpy('registerGraphEndpoint') } },
        { provide: TaStrapiService, useValue: { fetchQueryList$: jasmine.createSpy('fetchQueryList$') } },
        { provide: TaServerSevice, useValue: { registerRoutes: jasmine.createSpy('registerRoutes') } },
      ],
    }).compileComponents();
  });

  afterEach(() => {
    addressInput?.destroy();
  });

  it('should create', async () => {
    await create(new InputAddress({ key: 'address', label: 'Address' }));
    expect(component).toBeTruthy();
    expect(component.input.key).toBe('address');
  });

  it('should have a sub-input for each address part', async () => {
    await create(new InputAddress({ key: 'address' }));
    expect(component.streetInput).toBeTruthy();
    expect(component.numberInput).toBeTruthy();
    expect(component.complementInput).toBeTruthy();
    expect(component.localityInput).toBeTruthy();
    expect(component.countryInput).toBeTruthy();
  });

  // Une adresse vide n'est pas « rien » : elle porte déjà le pays par défaut.
  it('should seed the default country in an empty address', async () => {
    const input = new InputAddress({ key: 'address' });
    await create(input);
    expect(input.value?.country).toBe('BE');
    expect(component.countryInput.value).toEqual(['BE']);
    expect(lookup.getCountryPostalCodes).toHaveBeenCalledWith('BE');
  });

  it('should spread a given value over the sub-inputs', async () => {
    await create(
      new InputAddress({
        key: 'address',
        value: { city: 'Ixelles', country: 'BE', floor: '2', number: '12', street: 'Rue du Test', zipCode: '1050' },
      })
    );
    expect(component.streetInput.value).toBe('Rue du Test');
    expect(component.numberInput.value).toBe('12');
    expect(component.complementInput.value).toBe('2');
    expect(component.countryInput.value).toEqual(['BE']);
    expect(component.localityInput.value).toEqual({
      city: 'Ixelles',
      country: 'BE',
      latitude: null,
      longitude: null,
      zipCode: '1050',
    });
  });

  // Les anciennes adresses portent le pays en toutes lettres : la liste des pays et celle des
  // localités ne connaissent que le code.
  it('should normalize a legacy country name to its ISO code', async () => {
    await create(
      new InputAddress({
        key: 'address',
        value: { city: 'Brussels', country: 'Belgium', number: '240', street: 'Avenue Louise', zipCode: '1050' },
      })
    );
    expect(component.countryInput.value).toEqual(['BE']);
    expect(component.localityInput.value).toEqual(jasmine.objectContaining({ country: 'BE', zipCode: '1050' }));
    expect(lookup.getCountryPostalCodes).toHaveBeenCalledWith('BE');
  });

  it('should write the chosen locality into the address value', async () => {
    const input = new InputAddress({ key: 'address' });
    await create(input);
    component.onLocalityChanged(LIEGE);
    expect(input.value).toEqual(
      jasmine.objectContaining({ city: 'Liège', country: 'BE', latitude: 50.63, longitude: 5.57, zipCode: '4000' })
    );
  });

  it('should reload the locality list when the country changes', async () => {
    await create(new InputAddress({ key: 'address' }));
    component.countryInput.value = ['FR'];
    component.onSubInputChanged();
    expect(lookup.getCountryPostalCodes).toHaveBeenCalledWith('FR');
    expect(component.localityInput.value).toBeNull();
  });
});
