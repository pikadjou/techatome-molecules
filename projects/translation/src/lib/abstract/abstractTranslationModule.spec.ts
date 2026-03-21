import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { TaTranslationRegistryService } from '../services/translation-registry.service';
import { TaAbstractTranslationModule } from './abstractTranslationModule';

@Injectable()
class TestTranslationModule extends TaAbstractTranslationModule {
  constructor() {
    super('testModule', {
      en: { greeting: 'Hello', farewell: 'Goodbye' },
      fr: { greeting: 'Bonjour', farewell: 'Au revoir' },
      nl: { greeting: 'Hallo', farewell: 'Tot ziens' },
      es: { greeting: 'Hola', farewell: 'Adios' },
    });
  }
}

describe('TaAbstractTranslationModule', () => {
  let module: TestTranslationModule;
  let registry: TaTranslationRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestTranslationModule,
        TaTranslationRegistryService,
      ],
    });
    registry = TestBed.inject(TaTranslationRegistryService);
    module = TestBed.inject(TestTranslationModule);
  });

  it('should be created', () => {
    expect(module).toBeTruthy();
  });

  it('should have the correct id', () => {
    expect(module.id).toBe('testModule');
  });

  it('should register itself with the registry', () => {
    const registered = registry.registered.find((r) => r.id === 'testModule');
    expect(registered).toBeTruthy();
  });

  describe('getTranslation', () => {
    it('should return English translations', (done) => {
      const result$ = module.getTranslation('en');
      result$.subscribe((translations: any) => {
        expect(translations.testModule).toBeDefined();
        expect(translations.testModule.greeting).toBe('Hello');
        expect(translations.testModule.farewell).toBe('Goodbye');
        done();
      });
    });

    it('should return French translations', (done) => {
      const result$ = module.getTranslation('fr');
      result$.subscribe((translations: any) => {
        expect(translations.testModule).toBeDefined();
        expect(translations.testModule.greeting).toBe('Bonjour');
        done();
      });
    });

    it('should return Dutch translations', (done) => {
      const result$ = module.getTranslation('nl');
      result$.subscribe((translations: any) => {
        expect(translations.testModule).toBeDefined();
        expect(translations.testModule.greeting).toBe('Hallo');
        done();
      });
    });

    it('should return Spanish translations', (done) => {
      const result$ = module.getTranslation('es');
      result$.subscribe((translations: any) => {
        expect(translations.testModule).toBeDefined();
        expect(translations.testModule.greeting).toBe('Hola');
        done();
      });
    });
  });
});
