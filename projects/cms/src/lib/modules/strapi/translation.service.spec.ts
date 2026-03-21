import { TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaTranslationStrapi } from './translation.service';

describe('TaTranslationStrapi', () => {
  let service: TaTranslationStrapi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [TaTranslationStrapi],
    });
    service = TestBed.inject(TaTranslationStrapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
