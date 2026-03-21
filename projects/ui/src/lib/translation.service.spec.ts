import { TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaTranslationUI } from './translation.service';

describe('TaTranslationUI', () => {
  let service: TaTranslationUI;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [TaTranslationUI],
    });

    service = TestBed.inject(TaTranslationUI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the same instance via getInstance', () => {
    const instance = TaTranslationUI.getInstance();
    expect(instance).toBeDefined();
  });
});
