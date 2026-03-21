import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TRANSLATION_SOURCE_CONFIG, TranslationSourceType } from '@ta/translation';

import { TaTranslationCore } from './translation.service';

describe('TaTranslationCore', () => {
  let service: TaTranslationCore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        TaTranslationCore,
        {
          provide: TRANSLATION_SOURCE_CONFIG,
          useValue: { type: TranslationSourceType.FILE, filePath: '/assets/i18n/' },
        },
      ],
    });
    service = TestBed.inject(TaTranslationCore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have id set to "core"', () => {
    expect(service.id).toBe('core');
  });
});
