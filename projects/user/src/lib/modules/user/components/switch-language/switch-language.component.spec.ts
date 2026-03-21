import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaTranslationService } from '@ta/translation';

import { SwitchLanguageComponent } from './switch-language.component';

describe('SwitchLanguageComponent', () => {
  let component: SwitchLanguageComponent;
  let fixture: ComponentFixture<SwitchLanguageComponent>;
  let mockTranslateService: jasmine.SpyObj<TaTranslationService>;

  beforeEach(async () => {
    mockTranslateService = jasmine.createSpyObj('TaTranslationService', ['getLanguage', 'use']);
    mockTranslateService.getLanguage.and.returnValue('fr');

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        SwitchLanguageComponent,
      ],
      providers: [
        { provide: TaTranslationService, useValue: mockTranslateService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 languages', () => {
    expect(component.languages.length).toBe(4);
  });

  it('should have fr, nl, en, es languages', () => {
    const ids = component.languages.map(l => l.id);
    expect(ids).toContain('fr');
    expect(ids).toContain('nl');
    expect(ids).toContain('en');
    expect(ids).toContain('es');
  });

  it('should set active language from translate service', () => {
    expect(component.activeLanguage).toBe('fr');
  });

  it('should have changeLanguageAsked default to false', () => {
    expect(component.changeLanguageAsked).toBe(false);
  });

  it('should change language when different language is selected', () => {
    component.changeLanguage('en');
    expect(component.activeLanguage).toBe('en');
    expect(component.changeLanguageAsked).toBe(true);
    expect(mockTranslateService.use).toHaveBeenCalledWith('en');
  });

  it('should not change language when same language is selected', () => {
    component.changeLanguage('fr');
    expect(component.changeLanguageAsked).toBe(false);
    expect(mockTranslateService.use).not.toHaveBeenCalled();
  });
});
