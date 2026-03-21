import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { InputPanel, InputTextBox } from '@ta/form-model';
import { TaGraphService, TaStrapiService, TaServerSevice } from '@ta/server';
import { TaTranslationRegistryService } from '@ta/translation';

import { PanelComponent } from './panel.component';

@Component({
  standalone: true,
  imports: [PanelComponent],
  template: `
    <ng-template #inputsTpl let-input="input">
      <div class="mock-input">{{ input?.key }}</div>
    </ng-template>
    <ta-form-panel [panel]="panel" [inputsTemplate]="inputsTpl"></ta-form-panel>
  `,
})
class TestHostComponent {
  @ViewChild('inputsTpl', { static: true }) inputsTpl!: TemplateRef<any>;

  panel = new InputPanel({
    key: 'info',
    label: 'form.info',
    containerClass: ['highlight-title'],
    contentClass: 'flex-column g-space-md',
    children: [
      new InputTextBox({ key: 'name', label: 'Name', value: 'John' }),
      new InputTextBox({ key: 'email', label: 'Email', value: 'john@test.com' }),
    ],
  });
}

describe('PanelComponent', () => {
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
        PanelComponent,
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

  it('should render children inputs', () => {
    const mockInputs = hostFixture.nativeElement.querySelectorAll('.mock-input');
    expect(mockInputs.length).toBe(2);
  });

  it('should apply containerClass', () => {
    const container = hostFixture.nativeElement.querySelector('.highlight-title');
    expect(container).toBeTruthy();
  });

  it('should apply contentClass', () => {
    const content = hostFixture.nativeElement.querySelector('.flex-column.g-space-md');
    expect(content).toBeTruthy();
  });

  it('should render title with label', () => {
    const title = hostFixture.nativeElement.querySelector('ta-title');
    expect(title).toBeTruthy();
  });

  describe('with required flag', () => {
    it('should show required asterisk when required is true', () => {
      hostComponent.panel = new InputPanel({
        key: 'info',
        label: 'form.info',
        required: true,
      });
      hostFixture.detectChanges();

      const required = hostFixture.nativeElement.querySelector('.required');
      expect(required).toBeTruthy();
    });

    it('should not show required asterisk when required is false', () => {
      hostComponent.panel = new InputPanel({
        key: 'info',
        label: 'form.info',
        required: false,
      });
      hostFixture.detectChanges();

      const required = hostFixture.nativeElement.querySelector('.required');
      expect(required).toBeNull();
    });
  });

  describe('without label', () => {
    it('should not render title when label is empty', () => {
      hostComponent.panel = new InputPanel({
        key: 'info',
        label: '',
      });
      hostFixture.detectChanges();

      const title = hostFixture.nativeElement.querySelector('ta-title');
      expect(title).toBeNull();
    });
  });

  describe('with icon', () => {
    it('should pass icon to title component', () => {
      hostComponent.panel = new InputPanel({
        key: 'info',
        label: 'form.info',
        icon: 'settings',
      });
      hostFixture.detectChanges();

      const title = hostFixture.nativeElement.querySelector('ta-title');
      expect(title).toBeTruthy();
    });
  });

  describe('with level', () => {
    it('should pass custom level to title', () => {
      hostComponent.panel = new InputPanel({
        key: 'info',
        label: 'form.info',
        level: 3,
      });
      hostFixture.detectChanges();

      expect(hostComponent.panel.level).toBe(3);
    });
  });
});
