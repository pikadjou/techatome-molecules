import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { InputBase, InputTextBox } from '@ta/form-model';
import { TaGraphService, TaStrapiService, TaServerSevice } from '@ta/server';
import { TaTranslationRegistryService } from '@ta/translation';

import { InputsComponent, MyErrorStateMatcher } from './inputs.component';

describe('InputsComponent', () => {
  let component: InputsComponent;
  let fixture: ComponentFixture<InputsComponent>;
  let textboxInput: InputTextBox;

  beforeEach(async () => {
    textboxInput = new InputTextBox({ key: 'test', label: 'Test', value: 'hello' });

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputsComponent,
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

    fixture = TestBed.createComponent(InputsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', textboxInput);
    fixture.detectChanges();
  });

  afterEach(() => {
    textboxInput.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set input model from alias', () => {
    expect(component.inputModel()).toBe(textboxInput);
  });

  it('should default standaloneMode to false', () => {
    expect(component.standaloneMode()).toBe(false);
  });

  it('should default onFocusObs to undefined', () => {
    expect(component.onFocusObs()).toBeUndefined();
  });

  it('should default space to true', () => {
    expect(component.space()).toBe(true);
  });

  it('should have a MyErrorStateMatcher instance', () => {
    expect(component.matcher).toBeTruthy();
    expect(component.matcher instanceof MyErrorStateMatcher).toBe(true);
  });

  it('should accept standalone mode via input', () => {
    fixture.componentRef.setInput('standalone', true);
    fixture.detectChanges();
    expect(component.standaloneMode()).toBe(true);
  });
});

describe('MyErrorStateMatcher', () => {
  let matcher: MyErrorStateMatcher;

  beforeEach(() => {
    matcher = new MyErrorStateMatcher();
  });

  it('should create', () => {
    expect(matcher).toBeTruthy();
  });

  it('should return false for null control', () => {
    expect(matcher.isErrorState(null, null)).toBe(false);
  });

  it('should return false for valid control', () => {
    const control = new FormControl('valid');
    expect(matcher.isErrorState(control, null)).toBe(false);
  });

  it('should return true for invalid and dirty control', () => {
    const control = new FormControl('', { validators: () => ({ required: true }) });
    control.markAsDirty();
    expect(matcher.isErrorState(control, null)).toBe(true);
  });

  it('should return true for invalid and touched control', () => {
    const control = new FormControl('', { validators: () => ({ required: true }) });
    control.markAsTouched();
    expect(matcher.isErrorState(control, null)).toBe(true);
  });

  it('should return false for invalid but pristine and untouched control', () => {
    const control = new FormControl('', { validators: () => ({ required: true }) });
    expect(matcher.isErrorState(control, null)).toBe(false);
  });

  it('should return true for invalid control when form is submitted', () => {
    const control = new FormControl('', { validators: () => ({ required: true }) });
    const form = { submitted: true } as FormGroupDirective;
    expect(matcher.isErrorState(control, form)).toBe(true);
  });
});
