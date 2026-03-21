import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaTranslationRegistryService } from '@ta/translation';

import { TaTranslationMenu } from './translation.service';

describe('TaTranslationMenu', () => {
  let service: TaTranslationMenu;
  let registry: TaTranslationRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        TaTranslationMenu,
        TaTranslationRegistryService,
      ],
    });
    registry = TestBed.inject(TaTranslationRegistryService);
    service = TestBed.inject(TaTranslationMenu);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have id "menu"', () => {
    expect(service.id).toBe('menu');
  });

  it('should register itself with the translation registry', () => {
    const registered = registry.registered.find((r) => r.id === 'menu');
    expect(registered).toBeTruthy();
  });
});
