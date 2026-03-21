import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaTranslationRegistryService } from './translation-registry.service';
import { TaLazyTranslationService } from './lazy-translation.service';
import {
  TRANSLATION_SOURCE_CONFIG,
  TranslationSourceType,
} from './translation-source.config';

@Injectable()
class TestLazyService extends TaLazyTranslationService {
  constructor() {
    super('testModule');
  }
}

@Injectable()
class TestLazyAppService extends TaLazyTranslationService {
  constructor() {
    super('appModule', true);
  }
}

describe('TaLazyTranslationService', () => {
  describe('with GraphQL source', () => {
    let service: TestLazyService;
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
          TestLazyService,
          TaTranslationRegistryService,
          {
            provide: TRANSLATION_SOURCE_CONFIG,
            useValue: { type: TranslationSourceType.GRAPHQL },
          },
        ],
      });
      registry = TestBed.inject(TaTranslationRegistryService);
      service = TestBed.inject(TestLazyService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should have the correct id', () => {
      expect(service.id).toBe('testModule');
    });

    it('should register itself with the translation registry', () => {
      const registered = registry.registered.find((r) => r.id === 'testModule');
      expect(registered).toBeTruthy();
    });
  });

  describe('with FILE source', () => {
    let service: TestLazyService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          TranslateModule.forRoot({
            loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
          }),
        ],
        providers: [
          TestLazyService,
          TaTranslationRegistryService,
          {
            provide: TRANSLATION_SOURCE_CONFIG,
            useValue: {
              type: TranslationSourceType.FILE,
              filePath: '/assets/i18n/',
            },
          },
        ],
      });
      httpMock = TestBed.inject(HttpTestingController);
      service = TestBed.inject(TestLazyService);
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should fetch translations from file path', (done) => {
      service.getTranslation('en').subscribe((result: any) => {
        expect(result).toBeDefined();
        expect(result.testModule).toBeDefined();
        expect(result.testModule.greeting).toBe('Hello');
        done();
      });

      const req = httpMock.expectOne('/assets/i18n/testModule/en.json');
      expect(req.request.method).toBe('GET');
      req.flush({ 'greeting': 'Hello', 'farewell': 'Goodbye' });
    });

    it('should prefix keys with module id', (done) => {
      service.getTranslation('fr').subscribe((result: any) => {
        expect(result.testModule).toBeDefined();
        expect(result.testModule.key1).toBe('valeur1');
        done();
      });

      const req = httpMock.expectOne('/assets/i18n/testModule/fr.json');
      req.flush({ 'key1': 'valeur1' });
    });
  });

  describe('with FILE source and isApp=true', () => {
    let service: TestLazyAppService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          TranslateModule.forRoot({
            loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
          }),
        ],
        providers: [
          TestLazyAppService,
          TaTranslationRegistryService,
          {
            provide: TRANSLATION_SOURCE_CONFIG,
            useValue: {
              type: TranslationSourceType.FILE,
              filePath: '/assets/i18n/',
            },
          },
        ],
      });
      httpMock = TestBed.inject(HttpTestingController);
      service = TestBed.inject(TestLazyAppService);
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should not prefix keys with module id when isApp is true', (done) => {
      service.getTranslation('en').subscribe((result: any) => {
        expect(result.greeting).toBe('Hello');
        done();
      });

      const req = httpMock.expectOne('/assets/i18n/appModule/en.json');
      req.flush({ 'greeting': 'Hello' });
    });
  });

  describe('getTranslation key nesting', () => {
    let service: TestLazyService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          TranslateModule.forRoot({
            loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
          }),
        ],
        providers: [
          TestLazyService,
          TaTranslationRegistryService,
          {
            provide: TRANSLATION_SOURCE_CONFIG,
            useValue: {
              type: TranslationSourceType.FILE,
              filePath: '/assets/i18n/',
            },
          },
        ],
      });
      httpMock = TestBed.inject(HttpTestingController);
      service = TestBed.inject(TestLazyService);
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should nest dotted keys into objects', (done) => {
      service.getTranslation('en').subscribe((result: any) => {
        expect(result.testModule).toBeDefined();
        expect(result.testModule.form).toBeDefined();
        expect(result.testModule.form.title).toBe('My Form');
        done();
      });

      const req = httpMock.expectOne('/assets/i18n/testModule/en.json');
      req.flush({ 'form.title': 'My Form' });
    });
  });
});
