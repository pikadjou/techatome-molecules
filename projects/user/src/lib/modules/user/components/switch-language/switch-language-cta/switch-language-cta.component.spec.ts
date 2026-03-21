import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaTranslationService } from '@ta/translation';

import { SwitchLanguageCtaComponent } from './switch-language-cta.component';

describe('SwitchLanguageCtaComponent', () => {
  let component: SwitchLanguageCtaComponent;
  let fixture: ComponentFixture<SwitchLanguageCtaComponent>;
  let mockTranslateService: jasmine.SpyObj<TaTranslationService>;

  beforeEach(async () => {
    mockTranslateService = jasmine.createSpyObj('TaTranslationService', ['getLanguage', 'use']);
    mockTranslateService.getLanguage.and.returnValue('en');

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        SwitchLanguageCtaComponent,
      ],
      providers: [
        { provide: TaTranslationService, useValue: mockTranslateService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchLanguageCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have activeLanguage from translate service', () => {
    expect(component.activeLanguage).toBe('en');
  });
});
