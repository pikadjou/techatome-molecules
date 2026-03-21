import { TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaTranslationUser } from './translation.service';

describe('TaTranslationUser', () => {
  let service: TaTranslationUser;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [TaTranslationUser],
    });
    service = TestBed.inject(TaTranslationUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
