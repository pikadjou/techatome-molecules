import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { InputTextBox, InputTranslation } from '@ta/form-model';
import { TaGraphService, TaStrapiService, TaServerSevice } from '@ta/server';
import { TaTranslationRegistryService } from '@ta/translation';
import { Culture } from '@ta/utils';

import { InputTranslationComponent } from './translation.component';

describe('InputTranslationComponent (standalone)', () => {
  let component: InputTranslationComponent;
  let fixture: ComponentFixture<InputTranslationComponent>;
  let translationInput: InputTranslation;

  beforeEach(async () => {
    translationInput = new InputTranslation({
      key: 'translations',
      label: 'Translations',
      template: [
        { type: 'textbox', options: { key: 'title', label: 'Title' } },
      ],
      inputsGroup: {},
    });

    const group = new FormGroup({});
    translationInput.createFormControl(group);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputTranslationComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({}), queryParams: of({}) },
        },
        {
          provide: Router,
          useValue: { url: '/test' },
        },
        {
          provide: Location,
          useValue: {},
        },
        {
          provide: TaTranslationRegistryService,
          useValue: { register: jasmine.createSpy('register') },
        },
        {
          provide: TaGraphService,
          useValue: { registerGraphEndpoint: jasmine.createSpy('registerGraphEndpoint') },
        },
        {
          provide: TaStrapiService,
          useValue: { fetchQueryList$: jasmine.createSpy('fetchQueryList$') },
        },
        {
          provide: TaServerSevice,
          useValue: { registerRoutes: jasmine.createSpy('registerRoutes') },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTranslationComponent);
    component = fixture.componentInstance;

    const templateRef = {} as TemplateRef<any>;
    fixture.componentRef.setInput('input', translationInput);
    fixture.componentRef.setInput('inputsTemplate', templateRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose input via getter', () => {
    expect(component.input).toBe(translationInput);
    expect(component.input.key).toBe('translations');
  });

  it('should have cultureList populated', () => {
    expect(component.cultureList).toBeTruthy();
    expect(component.cultureList.length).toBeGreaterThan(0);
  });

  it('should default currentCulture to FR_BE', () => {
    expect(component.currentCulture).toBe(Culture[Culture.FR_BE]);
  });

  describe('changeSelection', () => {
    it('should update currentCulture', () => {
      component.changeSelection('EN_GB');
      expect(component.currentCulture).toBe('EN_GB');
    });
  });

  describe('add', () => {
    it('should add a culture to inputs group', () => {
      const culture = 'NL_BE';
      component.add(culture);
      expect(component.hasKey(culture)).toBe(true);
    });

    it('should change selection to added culture', () => {
      const culture = 'DE_DE';
      component.add(culture);
      expect(component.currentCulture).toBe(culture);
    });
  });

  describe('remove', () => {
    it('should remove a culture from inputs group', () => {
      const culture = 'EN_US';
      component.add(culture);
      expect(component.hasKey(culture)).toBe(true);

      component.remove(culture);
      expect(component.hasKey(culture)).toBe(false);
    });
  });

  describe('hasKey', () => {
    it('should return false for non-existing culture', () => {
      expect(component.hasKey('NONEXISTENT')).toBe(false);
    });

    it('should return true for existing culture', () => {
      component.add('IT_IT');
      expect(component.hasKey('IT_IT')).toBe(true);
    });
  });

  describe('getKeys', () => {
    it('should return all group keys', () => {
      component.add('FR_FR');
      component.add('EN_GB');
      const keys = component.getKeys();
      expect(keys).toContain('FR_FR');
      expect(keys).toContain('EN_GB');
    });
  });

  describe('getInputs', () => {
    it('should return inputs for a given culture', () => {
      component.add('ES_ES');
      const inputs = component.getInputs('ES_ES');
      expect(inputs).toBeTruthy();
      expect(inputs.length).toBeGreaterThan(0);
    });
  });

  describe('trackByFn', () => {
    it('should return the key', () => {
      expect(component.trackByFn(0, 'testKey')).toBe('testKey');
    });
  });

  describe('trackInputByFn', () => {
    it('should return the input key', () => {
      const input = new InputTextBox({ key: 'field' });
      expect(component.trackInputByFn(0, input)).toBe('field');
      input.destroy();
    });
  });

  describe('cultureMenu', () => {
    it('should be built on init', () => {
      expect(component.cultureMenu).toBeTruthy();
    });

    it('should have horizontal direction', () => {
      expect(component.cultureMenu?.direction).toBe('horizontal');
    });

    it('should update when list changes', () => {
      component.add('PT_PT');
      expect(component.cultureMenu).toBeTruthy();
      const menuKeys = component.cultureMenu?.elements?.map(e => e.key) ?? [];
      expect(menuKeys).toContain('PT_PT');
    });
  });
});
