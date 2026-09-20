import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';

import { InputLocality } from '@ta/form-model';
import { TaGraphService, TaStrapiService, TaServerSevice } from '@ta/server';
import { TaTranslationRegistryService } from '@ta/translation';
import { AddressLocality, TaAddressLookupService } from '@ta/utils';

import { InputLocalityComponent } from '@lib/form-basic/components/input/locality/locality.component';

const IXELLES: AddressLocality = { city: 'Ixelles', country: 'BE', latitude: 50.83, longitude: 4.37, zipCode: '1050' };
const LIEGE: AddressLocality = { city: 'Liège', country: 'BE', latitude: 50.63, longitude: 5.57, zipCode: '4000' };
const PARIS: AddressLocality = { city: 'Paris', country: 'FR', latitude: 48.85, longitude: 2.35, zipCode: '75001' };

// Le générique par défaut du modèle : une valeur seule le ferait rétrécir à `AddressLocality`.
type LocalityValue = AddressLocality | AddressLocality[];

describe('InputLocalityComponent', () => {
  let fixture: ComponentFixture<InputLocalityComponent>;
  let component: InputLocalityComponent;
  let lookup: jasmine.SpyObj<TaAddressLookupService>;

  const create = async (input: InputLocality) => {
    fixture = TestBed.createComponent(InputLocalityComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', input);
    fixture.componentRef.setInput('standalone', true);
    fixture.detectChanges();
    await fixture.whenStable();
  };

  beforeEach(async () => {
    lookup = jasmine.createSpyObj<TaAddressLookupService>('TaAddressLookupService', ['getCountryPostalCodes']);
    lookup.getCountryPostalCodes.and.callFake((country: string | null | undefined) => {
      if (country === 'BE') {
        return of([IXELLES, LIEGE]);
      }
      if (country === 'FR') {
        return of([PARIS]);
      }
      return of([]);
    });

    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputLocalityComponent,
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

  it('should load the default country list', async () => {
    await create(new InputLocality({ key: 'zone' }));
    expect(lookup.getCountryPostalCodes).toHaveBeenCalledWith('BE');
    expect(component.available()).toBeTrue();
  });

  // Le cas qui justifie le repli : un pays sans données ouvre la saisie libre.
  it('should fall back to free input when the country has no list', async () => {
    await create(new InputLocality({ country$: of('XX'), key: 'zone' }));
    expect(component.available()).toBeFalse();
  });

  it('should carry the chosen locality as value', async () => {
    const input = new InputLocality({ key: 'zone' });
    await create(input);
    component.choicesInput.value = [InputLocality.localityId(IXELLES)];
    component.onChoicesChanged();
    expect(input.value).toEqual(IXELLES);
  });

  it('should carry several localities when multiple', async () => {
    const input = new InputLocality({ key: 'zones', multiple: true });
    await create(input);
    component.choicesInput.value = [InputLocality.localityId(IXELLES), InputLocality.localityId(LIEGE)];
    component.onChoicesChanged();
    expect(input.value).toEqual([IXELLES, LIEGE]);
  });

  // Préremplissage : la valeur posée de l'extérieur se retrouve cochée dans la liste.
  it('should reflect an external value in the choices', async () => {
    const input = new InputLocality<LocalityValue>({ key: 'zone', value: LIEGE });
    await create(input);
    expect(component.choicesInput.value).toEqual([InputLocality.localityId(LIEGE)]);
  });

  it('should clear the value when the country changes', async () => {
    const country$ = new BehaviorSubject('BE');
    const input = new InputLocality<LocalityValue>({ country$, key: 'zone', value: IXELLES });
    await create(input);
    expect(input.value).toEqual(IXELLES);

    country$.next('FR');
    expect(input.value).toBeNull();
    expect(lookup.getCountryPostalCodes).toHaveBeenCalledWith('FR');
  });

  it('should build a locality from free input', async () => {
    const input = new InputLocality({ country$: of('XX'), key: 'zone' });
    await create(input);
    component.zipCodeInput.value = ' 9999 ';
    component.cityInput.value = 'Nulle-Part';
    component.onFreeInputChanged();
    expect(input.value).toEqual({
      city: 'Nulle-Part',
      country: 'XX',
      latitude: null,
      longitude: null,
      zipCode: '9999',
    });
  });
});
