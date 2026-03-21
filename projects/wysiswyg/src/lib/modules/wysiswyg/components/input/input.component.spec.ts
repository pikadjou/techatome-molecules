import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaTranslationService } from '@ta/translation';
import { TaDocumentsService } from '@ta/services';

import { EditorInputComponent, EditorInputSavedData } from './input.component';

describe('EditorInputComponent', () => {
  let component: EditorInputComponent;
  let fixture: ComponentFixture<EditorInputComponent>;
  let mockTranslationService: jasmine.SpyObj<TaTranslationService>;
  let mockDocumentsService: jasmine.SpyObj<TaDocumentsService>;

  beforeEach(async () => {
    mockTranslationService = jasmine.createSpyObj('TaTranslationService', ['getLanguage', 'use']);
    mockTranslationService.getLanguage.and.returnValue('en');

    mockDocumentsService = jasmine.createSpyObj('TaDocumentsService', ['addDocument$']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        EditorInputComponent,
      ],
      providers: [
        { provide: TaTranslationService, useValue: mockTranslationService },
        { provide: TaDocumentsService, useValue: mockDocumentsService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditorInputComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept initValue input', () => {
    const blocks = [{ type: 'paragraph', data: { text: 'test' } }] as any[];
    fixture.componentRef.setInput('initValue', blocks);
    expect(component.initValue()).toEqual(blocks);
  });

  it('should accept users input with default empty array', () => {
    expect(component.users()).toEqual([]);
  });

  it('should accept saveOnChange input with default false', () => {
    expect(component.saveOnChange()).toBe(false);
  });

  it('should accept maxHeight input with default false', () => {
    expect(component.maxHeight()).toBe(false);
  });

  it('should have languages map', () => {
    expect(component.languages).toBeDefined();
    expect(component.languages['en']).toBeDefined();
    expect(component.languages['fr']).toBeDefined();
    expect(component.languages['es']).toBeDefined();
    expect(component.languages['nl']).toBeDefined();
  });

  it('should have changed output emitter', () => {
    expect(component.changed).toBeDefined();
  });

  it('should have saved output emitter', () => {
    expect(component.saved).toBeDefined();
  });
});
