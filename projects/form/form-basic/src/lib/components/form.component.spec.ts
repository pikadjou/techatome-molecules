import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of, Subject } from 'rxjs';

import { InputBase, InputTextBox } from '@ta/form-model';
import { ENotificationCode } from '@ta/notification';
import { TaGraphService, TaStrapiService, TaServerSevice } from '@ta/server';
import { TaTranslationRegistryService } from '@ta/translation';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let inputs: InputBase<any>[];

  beforeEach(async () => {
    inputs = [
      new InputTextBox({ key: 'name', label: 'Name', value: 'John' }),
      new InputTextBox({ key: 'email', label: 'Email', value: 'john@test.com' }),
    ];

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FormComponent,
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

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('inputs', inputs);
    fixture.detectChanges();
  });

  afterEach(() => {
    inputs.forEach(i => i.destroy());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initialization', () => {
    it('should create a FormGroup on init', () => {
      expect(component.form).toBeTruthy();
      expect(component.form.get('name')).toBeTruthy();
      expect(component.form.get('email')).toBeTruthy();
    });

    it('should set form values from inputs', () => {
      expect(component.form.get('name')?.value).toBe('John');
      expect(component.form.get('email')?.value).toBe('john@test.com');
    });
  });

  describe('toFormGroup', () => {
    it('should return empty group for null inputs', () => {
      const group = component.toFormGroup(null as any);
      expect(Object.keys(group.controls).length).toBe(0);
    });

    it('should return empty group for empty array', () => {
      const group = component.toFormGroup([]);
      expect(Object.keys(group.controls).length).toBe(0);
    });

    it('should create controls for provided inputs', () => {
      const testInputs = [
        new InputTextBox({ key: 'a', value: '1' }),
        new InputTextBox({ key: 'b', value: '2' }),
      ];
      const group = component.toFormGroup(testInputs);
      expect(group.get('a')).toBeTruthy();
      expect(group.get('b')).toBeTruthy();
      testInputs.forEach(i => i.destroy());
    });
  });

  describe('isValid', () => {
    it('should return true when form is valid and not loading', () => {
      expect(component.isValid()).toBe(true);
    });

    it('should return false when loader is true', () => {
      fixture.componentRef.setInput('loader', true);
      fixture.detectChanges();
      expect(component.isValid()).toBe(false);
    });

    it('should return false when form is invalid', () => {
      const requiredInputs = [
        new InputTextBox({ key: 'required', validators: [Validators.required] }),
      ];
      fixture.componentRef.setInput('inputs', requiredInputs);
      fixture.detectChanges();
      expect(component.isValid()).toBe(false);
      requiredInputs.forEach(i => i.destroy());
    });
  });

  describe('onSubmit', () => {
    it('should emit valid event when form is valid', () => {
      spyOn(component.valid, 'emit');
      component.onSubmit();
      expect(component.valid.emit).toHaveBeenCalledWith(component.form.value);
    });

    it('should not emit when form is invalid', () => {
      const requiredInputs = [
        new InputTextBox({ key: 'required', validators: [Validators.required] }),
      ];
      fixture.componentRef.setInput('inputs', requiredInputs);
      fixture.detectChanges();

      spyOn(component.valid, 'emit');
      component.onSubmit();
      expect(component.valid.emit).not.toHaveBeenCalled();
      requiredInputs.forEach(i => i.destroy());
    });

    it('should not emit when loader is active', () => {
      fixture.componentRef.setInput('loader', true);
      fixture.detectChanges();

      spyOn(component.valid, 'emit');
      component.onSubmit();
      expect(component.valid.emit).not.toHaveBeenCalled();
    });
  });

  describe('isFormValid output', () => {
    it('should emit form validity on status changes', () => {
      const emitted: boolean[] = [];
      component.isFormValid.subscribe(v => emitted.push(v));

      component.form.get('name')?.setValue('changed');
      fixture.detectChanges();

      expect(emitted.length).toBeGreaterThan(0);
      expect(emitted[emitted.length - 1]).toBe(true);
    });
  });

  describe('onLive mode', () => {
    it('should auto-submit when value changes in live mode', () => {
      const liveInputs = [
        new InputTextBox({ key: 'field', value: 'initial' }),
      ];

      fixture.componentRef.setInput('inputs', liveInputs);
      fixture.componentRef.setInput('onLive', true);
      fixture.detectChanges();

      // Re-init after input change
      component.ngOnInit();

      spyOn(component.valid, 'emit');
      component.form.get('field')?.setValue('changed');
      fixture.detectChanges();

      expect(component.valid.emit).toHaveBeenCalled();
      liveInputs.forEach(i => i.destroy());
    });
  });

  describe('askValidation$', () => {
    it('should trigger submit when askValidation$ emits', () => {
      const trigger$ = new Subject<null>();
      const triggerInputs = [
        new InputTextBox({ key: 'val', value: 'ok' }),
      ];

      fixture.componentRef.setInput('inputs', triggerInputs);
      fixture.componentRef.setInput('askValidation$', trigger$.asObservable());
      fixture.detectChanges();

      component.ngOnInit();

      spyOn(component.valid, 'emit');
      trigger$.next(null);
      expect(component.valid.emit).toHaveBeenCalled();

      trigger$.complete();
      triggerInputs.forEach(i => i.destroy());
    });
  });

  describe('ngOnDestroy', () => {
    it('should destroy all inputs', () => {
      const spies = inputs.map(i => spyOn(i, 'destroy'));
      component.ngOnDestroy();
      spies.forEach(spy => expect(spy).toHaveBeenCalled());
    });

    it('should submit on destroy when askOnDestroy is true', () => {
      fixture.componentRef.setInput('askOnDestroy', true);
      fixture.detectChanges();

      spyOn(component.valid, 'emit');
      component.ngOnDestroy();
      expect(component.valid.emit).toHaveBeenCalled();
    });

    it('should not submit on destroy when askOnDestroy is false', () => {
      fixture.componentRef.setInput('askOnDestroy', false);
      fixture.detectChanges();

      spyOn(component.valid, 'emit');
      component.ngOnDestroy();
      expect(component.valid.emit).not.toHaveBeenCalled();
    });
  });

  describe('default inputs', () => {
    it('should default border to true', () => {
      expect(component.border()).toBe(true);
    });

    it('should default canDisplayButton to true', () => {
      expect(component.canDisplayButton()).toBe(true);
    });

    it('should default buttonTitle to form.save', () => {
      expect(component.buttonTitle()).toBe('form.save');
    });

    it('should default onLive to false', () => {
      expect(component.onLive()).toBe(false);
    });

    it('should default loader to false', () => {
      expect(component.loader()).toBe(false);
    });

    it('should default error to none status with empty message', () => {
      expect(component.error().status).toBe(ENotificationCode.none);
      expect(component.error().message).toBe('');
    });
  });
});
