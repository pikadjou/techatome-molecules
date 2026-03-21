import { TestBed } from '@angular/core/testing';

import { Observable, of } from 'rxjs';

import { ITranslation, TaTranslationRegistryService } from './translation-registry.service';

describe('TaTranslationRegistryService', () => {
  let service: TaTranslationRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaTranslationRegistryService],
    });
    service = TestBed.inject(TaTranslationRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with empty registered array', () => {
    expect(service.registered).toEqual([]);
  });

  describe('register', () => {
    it('should add a translation to registered array', () => {
      const mockTranslation: ITranslation = {
        id: 'test',
        getTranslation: (lang: string) => of({ test: 'value' }),
      };
      service.register(mockTranslation);
      expect(service.registered.length).toBe(1);
      expect(service.registered[0].id).toBe('test');
    });

    it('should emit on newRegistrationSubscription$ when registering', (done) => {
      const mockTranslation: ITranslation = {
        id: 'test',
        getTranslation: (lang: string) => of({}),
      };
      service.newRegistrationSubscription$.subscribe(() => {
        done();
      });
      service.register(mockTranslation);
    });

    it('should allow multiple registrations', () => {
      const t1: ITranslation = { id: 'a', getTranslation: () => of({}) };
      const t2: ITranslation = { id: 'b', getTranslation: () => of({}) };
      const t3: ITranslation = { id: 'c', getTranslation: () => of({}) };

      service.register(t1);
      service.register(t2);
      service.register(t3);

      expect(service.registered.length).toBe(3);
    });
  });

  describe('getTranslations', () => {
    it('should return array of observables from registered translations', () => {
      const t1: ITranslation = {
        id: 'mod1',
        getTranslation: (lang: string) => of({ mod1: { hello: 'world' } }),
      };
      const t2: ITranslation = {
        id: 'mod2',
        getTranslation: (lang: string) => of({ mod2: { foo: 'bar' } }),
      };
      service.register(t1);
      service.register(t2);

      const results = service.getTranslations('en');
      expect(results.length).toBe(2);
    });

    it('should call getTranslation with the provided language', (done) => {
      const getTranslationSpy = jasmine.createSpy('getTranslation').and.returnValue(of({}));
      const mockTranslation: ITranslation = {
        id: 'lang-test',
        getTranslation: getTranslationSpy,
      };
      service.register(mockTranslation);

      const results = service.getTranslations('fr');
      expect(getTranslationSpy).toHaveBeenCalledWith('fr');

      results[0].subscribe(() => done());
    });

    it('should return empty array when no translations registered', () => {
      const results = service.getTranslations('en');
      expect(results).toEqual([]);
    });
  });
});
