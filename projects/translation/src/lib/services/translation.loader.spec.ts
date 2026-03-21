import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { ITranslation, TaTranslationRegistryService } from './translation-registry.service';
import { TaTranslationLoader } from './translation.loader';

describe('TaTranslationLoader', () => {
  let loader: TaTranslationLoader;
  let registry: TaTranslationRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TaTranslationLoader,
        TaTranslationRegistryService,
      ],
    });
    registry = TestBed.inject(TaTranslationRegistryService);
    loader = TestBed.inject(TaTranslationLoader);
  });

  it('should be created', () => {
    expect(loader).toBeTruthy();
  });

  describe('getTranslation', () => {
    it('should return merged translations from all registered modules', (done) => {
      const t1: ITranslation = {
        id: 'mod1',
        getTranslation: () => of({ mod1: { hello: 'world' } }),
      };
      const t2: ITranslation = {
        id: 'mod2',
        getTranslation: () => of({ mod2: { foo: 'bar' } }),
      };
      registry.register(t1);
      registry.register(t2);

      loader.getTranslation('en').subscribe((result: any) => {
        expect(result.mod1).toBeDefined();
        expect(result.mod1.hello).toBe('world');
        expect(result.mod2).toBeDefined();
        expect(result.mod2.foo).toBe('bar');
        done();
      });
    });

    it('should handle null translations gracefully', (done) => {
      const t1: ITranslation = {
        id: 'mod1',
        getTranslation: () => of(null),
      };
      const t2: ITranslation = {
        id: 'mod2',
        getTranslation: () => of({ mod2: { key: 'value' } }),
      };
      registry.register(t1);
      registry.register(t2);

      loader.getTranslation('en').subscribe((result: any) => {
        expect(result.mod2).toBeDefined();
        expect(result.mod2.key).toBe('value');
        done();
      });
    });

    it('should deep merge nested translations', (done) => {
      const t1: ITranslation = {
        id: 'mod1',
        getTranslation: () => of({ shared: { a: '1', nested: { x: 'one' } } }),
      };
      const t2: ITranslation = {
        id: 'mod2',
        getTranslation: () => of({ shared: { b: '2', nested: { y: 'two' } } }),
      };
      registry.register(t1);
      registry.register(t2);

      loader.getTranslation('en').subscribe((result: any) => {
        expect(result.shared.a).toBe('1');
        expect(result.shared.b).toBe('2');
        expect(result.shared.nested.x).toBe('one');
        expect(result.shared.nested.y).toBe('two');
        done();
      });
    });

    it('should overwrite scalar values in deep merge', (done) => {
      const t1: ITranslation = {
        id: 'mod1',
        getTranslation: () => of({ key: 'first' }),
      };
      const t2: ITranslation = {
        id: 'mod2',
        getTranslation: () => of({ key: 'second' }),
      };
      registry.register(t1);
      registry.register(t2);

      loader.getTranslation('en').subscribe((result: any) => {
        expect(result.key).toBe('second');
        done();
      });
    });

    it('should pass language parameter to registered translations', () => {
      const spy = jasmine.createSpy('getTranslation').and.returnValue(of({}));
      const t1: ITranslation = { id: 'spy', getTranslation: spy };
      registry.register(t1);

      loader.getTranslation('fr');
      expect(spy).toHaveBeenCalledWith('fr');
    });
  });
});
