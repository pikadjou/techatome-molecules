import { TestBed } from '@angular/core/testing';
import { LOCALE_ID } from '@angular/core';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { TaCmsService } from './cms.service';

describe('TaCmsService', () => {
  let service: TaCmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        TaCmsService,
        { provide: LOCALE_ID, useValue: 'fr' },
      ],
    });
    service = TestBed.inject(TaCmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have cmsContents HandleComplexRequest', () => {
    expect(service.cmsContents).toBeDefined();
  });

  it('should have locale set', () => {
    expect(service.local).toBe('fr');
  });

  it('should have fetchCmsContents$ method', () => {
    expect(service.fetchCmsContents$).toBeDefined();
    expect(typeof service.fetchCmsContents$).toBe('function');
  });
});
