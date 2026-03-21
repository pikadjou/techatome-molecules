import { TestBed } from '@angular/core/testing';
import { LOCALE_ID } from '@angular/core';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { TaSaleService } from './sale.service';

describe('TaSaleService', () => {
  let service: TaSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        TaSaleService,
        { provide: LOCALE_ID, useValue: 'fr' },
      ],
    });
    service = TestBed.inject(TaSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have saleContents HandleComplexRequest', () => {
    expect(service.saleContents).toBeDefined();
  });

  it('should have locale set', () => {
    expect(service.local).toBe('fr');
  });

  it('should have fetchSaleContents$ method', () => {
    expect(service.fetchSaleContents$).toBeDefined();
    expect(typeof service.fetchSaleContents$).toBe('function');
  });
});
