import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaTranslationRegistryService } from '@ta/translation';

import { TaTranslationNotification } from './translation.service';

describe('TaTranslationNotification', () => {
  let service: TaTranslationNotification;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        TaTranslationNotification,
        TaTranslationRegistryService,
      ],
    });
    service = TestBed.inject(TaTranslationNotification);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have notification as id', () => {
    expect(service.id).toBe('notification');
  });
});
