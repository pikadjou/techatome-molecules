import { TranslateLoader } from '@ngx-translate/core';

import { TaTranslationLoader } from './services/translation.loader';
import {
  TRANSLATION_SOURCE_CONFIG,
  TranslationSourceType,
} from './services/translation-source.config';
import { TRANSLATION_CONFIG } from './services/translation.service';
import {
  HttpLoaderFactory,
  initTranslation,
  provideTranslation,
} from './provider';

describe('Translation Provider', () => {
  describe('HttpLoaderFactory', () => {
    it('should return a TaTranslationLoader instance', () => {
      const loader = HttpLoaderFactory();
      expect(loader).toBeInstanceOf(TaTranslationLoader);
    });
  });

  describe('initTranslation', () => {
    it('should return a function', () => {
      const mockService = { init: jasmine.createSpy('init') } as any;
      const fn = initTranslation(mockService);
      expect(typeof fn).toBe('function');
    });

    it('should call service.init when the returned function is executed', () => {
      const mockService = { init: jasmine.createSpy('init') } as any;
      const fn = initTranslation(mockService);
      fn();
      expect(mockService.init).toHaveBeenCalled();
    });
  });

  describe('provideTranslation', () => {
    it('should return an array of providers', () => {
      const providers = provideTranslation({
        default: 'en',
        supportedLanguages: ['en', 'fr'],
      });
      expect(Array.isArray(providers)).toBe(true);
      expect(providers.length).toBeGreaterThan(0);
    });

    it('should include TRANSLATION_CONFIG provider', () => {
      const providers = provideTranslation({
        default: 'fr',
        supportedLanguages: ['fr', 'en'],
      }) as any[];
      const configProvider = providers.find(
        (p: any) => p && p.provide === TRANSLATION_CONFIG
      );
      expect(configProvider).toBeTruthy();
      expect(configProvider.useValue.default).toBe('fr');
      expect(configProvider.useValue.supportedLanguages).toEqual(['fr', 'en']);
    });

    it('should default source to GRAPHQL when not provided', () => {
      const providers = provideTranslation({
        default: 'en',
        supportedLanguages: ['en'],
      }) as any[];
      const sourceProvider = providers.find(
        (p: any) => p && p.provide === TRANSLATION_SOURCE_CONFIG
      );
      expect(sourceProvider).toBeTruthy();
      expect(sourceProvider.useValue.type).toBe(TranslationSourceType.GRAPHQL);
    });

    it('should use provided source config', () => {
      const providers = provideTranslation({
        default: 'en',
        supportedLanguages: ['en'],
        source: {
          type: TranslationSourceType.FILE,
          filePath: '/assets/i18n/',
        },
      }) as any[];
      const sourceProvider = providers.find(
        (p: any) => p && p.provide === TRANSLATION_SOURCE_CONFIG
      );
      expect(sourceProvider).toBeTruthy();
      expect(sourceProvider.useValue.type).toBe(TranslationSourceType.FILE);
      expect(sourceProvider.useValue.filePath).toBe('/assets/i18n/');
    });
  });
});
