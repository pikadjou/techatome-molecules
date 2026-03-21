import { TestBed } from '@angular/core/testing';

import { TranslateService, TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { of } from 'rxjs';

import { TaTranslationRegistryService } from './translation-registry.service';
import { TRANSLATION_CONFIG, TaTranslationService } from './translation.service';

describe('TaTranslationService', () => {
  let service: TaTranslationService;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        TaTranslationService,
        TaTranslationRegistryService,
        {
          provide: TRANSLATION_CONFIG,
          useValue: {
            default: 'en',
            supportedLanguages: ['en', 'fr'],
          },
        },
      ],
    });
    translateService = TestBed.inject(TranslateService);
    service = TestBed.inject(TaTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('init', () => {
    it('should be callable without error', () => {
      expect(() => service.init()).not.toThrow();
    });
  });

  describe('getLanguage', () => {
    it('should return the current language', () => {
      const lang = service.getLanguage();
      expect(lang).toBeTruthy();
    });
  });

  describe('get', () => {
    it('should delegate to translateService.get for single key', (done) => {
      service.get('test.key').subscribe((result) => {
        expect(result).toBeDefined();
        done();
      });
    });

    it('should delegate to translateService.get for array of keys', (done) => {
      service.get(['key1', 'key2']).subscribe((result) => {
        expect(result).toBeDefined();
        done();
      });
    });
  });

  describe('use', () => {
    it('should delegate to translateService.use', (done) => {
      service.use('fr').subscribe(() => {
        expect(translateService.currentLang).toBe('fr');
        done();
      });
    });
  });

  describe('translateService property', () => {
    it('should expose the TranslateService instance', () => {
      expect(service.translateService).toBeTruthy();
      expect(service.translateService).toBe(translateService);
    });
  });
});
