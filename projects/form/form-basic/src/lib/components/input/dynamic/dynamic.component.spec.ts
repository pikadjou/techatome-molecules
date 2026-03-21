import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { InputDynamic, InputTextBox } from '@ta/form-model';
import { TaGraphService, TaStrapiService, TaServerSevice } from '@ta/server';
import { TaTranslationRegistryService } from '@ta/translation';

import { DynamicComponent } from './dynamic.component';

@Component({
  standalone: true,
  imports: [DynamicComponent],
  template: `
    <ng-template #inputsTpl let-input="input">
      <div class="mock-input">{{ input?.key }}</div>
    </ng-template>
    <ta-input-dynamic [input]="dynamicInput" [inputsTemplate]="inputsTpl"></ta-input-dynamic>
  `,
})
class TestHostComponent {
  @ViewChild('inputsTpl', { static: true }) inputsTpl!: TemplateRef<any>;

  dynamicInput = new InputDynamic({
    key: 'items',
    label: 'Items',
    template: [
      { type: 'textbox', options: { key: 'itemName', label: 'Item Name' } },
    ],
    inputsGroup: {},
  });

  constructor() {
    const group = new FormGroup({});
    this.dynamicInput.createFormControl(group);
  }
}

describe('DynamicComponent', () => {
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TestHostComponent,
        DynamicComponent,
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

    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  it('should create via host', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should have initial group keys from firstRender auto-add', () => {
    const keys = Object.keys(hostComponent.dynamicInput.inputsGroup);
    expect(keys.length).toBeGreaterThanOrEqual(1);
  });
});

describe('DynamicComponent (standalone)', () => {
  let component: DynamicComponent;
  let fixture: ComponentFixture<DynamicComponent>;
  let dynamicInput: InputDynamic;

  beforeEach(async () => {
    dynamicInput = new InputDynamic({
      key: 'items',
      label: 'Items',
      template: [
        { type: 'textbox', options: { key: 'itemName', label: 'Item Name' } },
      ],
      inputsGroup: {
        existing: [new InputTextBox({ key: 'itemName', label: 'Item Name', value: 'First' })],
      },
    });

    dynamicInput.firstRender = false;
    const group = new FormGroup({});
    dynamicInput.createFormControl(group);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        DynamicComponent,
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

    fixture = TestBed.createComponent(DynamicComponent);
    component = fixture.componentInstance;

    // Provide a mock TemplateRef
    const templateRef = {} as TemplateRef<any>;
    fixture.componentRef.setInput('input', dynamicInput);
    fixture.componentRef.setInput('inputsTemplate', templateRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose input via getter', () => {
    expect(component.input).toBe(dynamicInput);
    expect(component.input.key).toBe('items');
  });

  describe('getKeys', () => {
    it('should return group keys', () => {
      const keys = component.getKeys();
      expect(keys).toContain('existing');
    });
  });

  describe('getInputs', () => {
    it('should return inputs for a given key', () => {
      const inputs = component.getInputs('existing');
      expect(inputs).toBeTruthy();
      expect(inputs.length).toBe(1);
      expect(inputs[0].key).toBe('itemName');
    });
  });

  describe('canRemove', () => {
    it('should return true for numeric index string', () => {
      expect(component.canRemove('0')).toBe(true);
      expect(component.canRemove('42')).toBe(true);
      expect(component.canRemove('100')).toBe(true);
    });

    it('should return false for non-numeric index string', () => {
      expect(component.canRemove('existing')).toBe(false);
      expect(component.canRemove('abc')).toBe(false);
    });
  });

  describe('add', () => {
    it('should add a new group entry', () => {
      const initialCount = component.getKeys().length;
      component.add();
      expect(component.getKeys().length).toBe(initialCount + 1);
    });
  });

  describe('remove', () => {
    it('should remove a group entry by key', () => {
      component.add();
      const keys = component.getKeys();
      const lastKey = keys[keys.length - 1];

      component.remove(lastKey);
      expect(component.getKeys()).not.toContain(lastKey);
    });
  });

  describe('trackByFn', () => {
    it('should return the key string', () => {
      expect(component.trackByFn(0, 'myKey')).toBe('myKey');
    });
  });

  describe('trackInputByFn', () => {
    it('should return the input key', () => {
      const input = new InputTextBox({ key: 'test' });
      expect(component.trackInputByFn(0, input)).toBe('test');
      input.destroy();
    });
  });
});
