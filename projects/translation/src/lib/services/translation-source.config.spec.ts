import { TestBed } from '@angular/core/testing';

import {
  TRANSLATION_SOURCE_CONFIG,
  TranslationSourceType,
  ITranslationSourceConfig,
} from './translation-source.config';

describe('TranslationSourceType', () => {
  it('should have GRAPHQL value', () => {
    expect(TranslationSourceType.GRAPHQL).toBe('graphql');
  });

  it('should have FILE value', () => {
    expect(TranslationSourceType.FILE).toBe('file');
  });
});

describe('TRANSLATION_SOURCE_CONFIG', () => {
  it('should provide default config with GRAPHQL type', () => {
    TestBed.configureTestingModule({});
    const config = TestBed.inject(TRANSLATION_SOURCE_CONFIG);
    expect(config).toBeTruthy();
    expect(config.type).toBe(TranslationSourceType.GRAPHQL);
  });

  it('should allow overriding with FILE type', () => {
    const customConfig: ITranslationSourceConfig = {
      type: TranslationSourceType.FILE,
      filePath: '/assets/i18n/',
    };
    TestBed.configureTestingModule({
      providers: [
        { provide: TRANSLATION_SOURCE_CONFIG, useValue: customConfig },
      ],
    });
    const config = TestBed.inject(TRANSLATION_SOURCE_CONFIG);
    expect(config.type).toBe(TranslationSourceType.FILE);
    expect(config.filePath).toBe('/assets/i18n/');
  });
});
