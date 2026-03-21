import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of, Subject } from 'rxjs';

import { InputBase, InputTextBox } from '@ta/form-model';
import { TaGraphService, TaStrapiService, TaServerSevice } from '@ta/server';
import { TaTranslationRegistryService } from '@ta/translation';

import { EditFieldComponent } from './edit-field.component';

describe('EditFieldComponent', () => {
  let component: EditFieldComponent;
  let fixture: ComponentFixture<EditFieldComponent>;
  let inputFactory: () => InputBase<any>;
  let textboxInput: InputTextBox;

  beforeEach(async () => {
    textboxInput = new InputTextBox({ key: 'name', label: 'Name', value: 'John' });
    inputFactory = () => textboxInput;

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        EditFieldComponent,
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

    fixture = TestBed.createComponent(EditFieldComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('getInput', inputFactory);
    fixture.detectChanges();
  });

  afterEach(() => {
    textboxInput.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize renderInput from getInput factory', () => {
    expect(component.renderInput()).toBeTruthy();
    expect(component.renderInput()?.key).toBe('name');
  });

  it('should default editMode to false', () => {
    expect(component.editMode()).toBe(false);
  });

  it('should default isLoading to false', () => {
    expect(component.isLoading()).toBe(false);
  });

  it('should default withBorder to true', () => {
    expect(component.withBorder()).toBe(true);
  });

  it('should default disabled to false', () => {
    expect(component.disabled()).toBe(false);
  });

  it('should default changeEditMode$ to null', () => {
    expect(component.changeEditMode$()).toBeNull();
  });

  describe('toggleEditMode', () => {
    it('should toggle editMode from false to true', () => {
      component.toggleEditMode();
      expect(component.editMode()).toBe(true);
    });

    it('should toggle editMode from true to false', () => {
      component.editMode.set(true);
      component.toggleEditMode();
      expect(component.editMode()).toBe(false);
    });

    it('should emit onFocusBehavior when entering edit mode', () => {
      const spy = spyOn(component.onFocusBehavior, 'next');
      component.toggleEditMode();
      expect(spy).toHaveBeenCalled();
    });

    it('should not emit onFocusBehavior when leaving edit mode', () => {
      component.editMode.set(true);
      const spy = spyOn(component.onFocusBehavior, 'next');
      component.toggleEditMode();
      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('validation', () => {
    it('should emit newValue with input value', () => {
      component.editMode.set(true);
      const spy = spyOn(component.newValue, 'emit');

      component.validation();

      expect(spy).toHaveBeenCalledWith('John');
    });

    it('should toggle edit mode after validation', () => {
      component.editMode.set(true);
      component.validation();
      expect(component.editMode()).toBe(false);
    });

    it('should not emit if renderInput is null', () => {
      component.renderInput.set(null);
      const spy = spyOn(component.newValue, 'emit');
      component.validation();
      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('onDocumentClick', () => {
    it('should do nothing when not in edit mode', () => {
      const spy = spyOn(component.newValue, 'emit');
      const element = document.createElement('div');
      component.onDocumentClick(element);
      expect(spy).not.toHaveBeenCalled();
    });

    it('should call validation when clicking outside in edit mode', () => {
      component.editMode.set(true);
      const spy = spyOn(component, 'validation');

      const outsideElement = document.createElement('div');
      document.body.appendChild(outsideElement);
      component.onDocumentClick(outsideElement);
      document.body.removeChild(outsideElement);

      expect(spy).toHaveBeenCalled();
    });

    it('should not call validation when clicking a file input', () => {
      component.editMode.set(true);
      const spy = spyOn(component, 'validation');

      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      component.onDocumentClick(fileInput);

      expect(spy).not.toHaveBeenCalled();
    });

    it('should not call validation when clicking inside the component', () => {
      component.editMode.set(true);
      const spy = spyOn(component, 'validation');

      const nativeElement = fixture.nativeElement;
      const childElement = document.createElement('div');
      nativeElement.appendChild(childElement);
      component.onDocumentClick(childElement);

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('changeEditMode$', () => {
    it('should subscribe to changeEditMode$ observable', () => {
      const editMode$ = new BehaviorSubject<boolean>(false);

      fixture.componentRef.setInput('changeEditMode$', editMode$.asObservable());
      fixture.detectChanges();
      component.ngOnInit();

      editMode$.next(true);
      expect(component.editMode()).toBe(true);

      editMode$.next(false);
      expect(component.editMode()).toBe(false);

      editMode$.complete();
    });
  });

  describe('ngOnChanges', () => {
    it('should reset input and editMode when isLoading goes from true to false', () => {
      component.editMode.set(true);
      const changes = {
        isLoading: {
          currentValue: false,
          previousValue: true,
          firstChange: false,
          isFirstChange: () => false,
        },
      };
      component.ngOnChanges(changes);
      expect(component.editMode()).toBe(false);
    });

    it('should not reset when isLoading is not changing to false', () => {
      component.editMode.set(true);
      const changes = {
        isLoading: {
          currentValue: true,
          previousValue: false,
          firstChange: false,
          isFirstChange: () => false,
        },
      };
      component.ngOnChanges(changes);
      expect(component.editMode()).toBe(true);
    });
  });
});
