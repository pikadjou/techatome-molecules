import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { LAZY_SERVICE_TOKEN } from '@ta/notification';

import { TextToClipboardComponent } from './text-to-clipboard.component';

describe('TextToClipboardComponent', () => {
  let component: TextToClipboardComponent;
  let fixture: ComponentFixture<TextToClipboardComponent>;
  let mockNotificationService: jasmine.SpyObj<any>;

  beforeEach(async () => {
    mockNotificationService = jasmine.createSpyObj('TaNotificationService', ['addNotification']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TextToClipboardComponent,
      ],
      providers: [{ provide: LAZY_SERVICE_TOKEN, useValue: mockNotificationService }],
    })
      .overrideComponent(TextToClipboardComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TextToClipboardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('value', 'test-text');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a required value input', () => {
    expect(component.value()).toBe('test-text');
  });

  it('should accept different value input', () => {
    fixture.componentRef.setInput('value', 'another-value');
    fixture.detectChanges();

    expect(component.value()).toBe('another-value');
  });

  describe('copyContent', () => {
    it('should be defined as a function', () => {
      expect(component.copyContent).toBeDefined();
      expect(typeof component.copyContent).toBe('function');
    });
  });
});
