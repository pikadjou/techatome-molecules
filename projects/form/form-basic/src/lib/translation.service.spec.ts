import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TaGraphService, TaServerSevice, TaStrapiService } from '@ta/server';
import { TaTranslationRegistryService } from '@ta/translation';

import { TaTranslationForm } from './translation.service';

describe('TaTranslationForm', () => {
  let service: TaTranslationForm;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TaTranslationForm,
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
    });

    service = TestBed.inject(TaTranslationForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have id "form"', () => {
    expect(service.id).toBe('form');
  });

  it('should be a singleton (providedIn root)', () => {
    const service2 = TestBed.inject(TaTranslationForm);
    expect(service).toBe(service2);
  });
});
