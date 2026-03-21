import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';

import { MatDialog } from '@angular/material/dialog';

import { ENotificationCode } from '../../../enum';
import { NotificationInlineComponent } from './notification-inline.component';

describe('NotificationInlineComponent', () => {
  let component: NotificationInlineComponent;
  let fixture: ComponentFixture<NotificationInlineComponent>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        NotificationInlineComponent,
      ],
      providers: [
        { provide: MatDialog, useValue: mockMatDialog },
      ],
    })
      .overrideComponent(NotificationInlineComponent, {
        set: {
          imports: [TranslateModule],
          template: '<div></div>',
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(NotificationInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default message to empty string', () => {
    expect(component.message).toBe('');
  });

  it('should default code to information', () => {
    expect(component.code()).toBe(ENotificationCode.information);
  });

  it('should default showClose to true', () => {
    expect(component.showClose()).toBe(true);
  });

  it('should default showMessage to false when message is empty', () => {
    expect(component.showMessage).toBe(false);
  });

  describe('message input', () => {
    it('should update message when input changes', () => {
      fixture.componentRef.setInput('message', 'Hello');
      fixture.detectChanges();
      expect(component.message).toBe('Hello');
    });

    it('should set showMessage to true when message is non-empty', () => {
      fixture.componentRef.setInput('message', 'A message');
      fixture.detectChanges();
      expect(component.showMessage).toBe(true);
    });
  });

  describe('code getters', () => {
    it('should return true for isError when code is error', () => {
      fixture.componentRef.setInput('code', ENotificationCode.error);
      fixture.detectChanges();
      expect(component.isError).toBe(true);
      expect(component.isWarning).toBe(false);
      expect(component.isInformation).toBe(false);
      expect(component.isSuccess).toBe(false);
    });

    it('should return true for isWarning when code is warning', () => {
      fixture.componentRef.setInput('code', ENotificationCode.warning);
      fixture.detectChanges();
      expect(component.isWarning).toBe(true);
      expect(component.isError).toBe(false);
    });

    it('should return true for isInformation when code is information', () => {
      fixture.componentRef.setInput('code', ENotificationCode.information);
      fixture.detectChanges();
      expect(component.isInformation).toBe(true);
      expect(component.isError).toBe(false);
    });

    it('should return true for isSuccess when code is success', () => {
      fixture.componentRef.setInput('code', ENotificationCode.success);
      fixture.detectChanges();
      expect(component.isSuccess).toBe(true);
      expect(component.isError).toBe(false);
    });
  });

  describe('getIcon', () => {
    it('should return close-tool for error', () => {
      fixture.componentRef.setInput('code', ENotificationCode.error);
      fixture.detectChanges();
      expect(component.getIcon()).toBe('close-tool');
    });

    it('should return warning for warning', () => {
      fixture.componentRef.setInput('code', ENotificationCode.warning);
      fixture.detectChanges();
      expect(component.getIcon()).toBe('warning');
    });

    it('should return checked for success', () => {
      fixture.componentRef.setInput('code', ENotificationCode.success);
      fixture.detectChanges();
      expect(component.getIcon()).toBe('checked');
    });

    it('should return help for information', () => {
      fixture.componentRef.setInput('code', ENotificationCode.information);
      fixture.detectChanges();
      expect(component.getIcon()).toBe('help');
    });
  });

  describe('getTypeClass', () => {
    it('should return danger for error', () => {
      fixture.componentRef.setInput('code', ENotificationCode.error);
      fixture.detectChanges();
      expect(component.getTypeClass()).toBe('danger');
    });

    it('should return warning for warning', () => {
      fixture.componentRef.setInput('code', ENotificationCode.warning);
      fixture.detectChanges();
      expect(component.getTypeClass()).toBe('warning');
    });

    it('should return info for information', () => {
      fixture.componentRef.setInput('code', ENotificationCode.information);
      fixture.detectChanges();
      expect(component.getTypeClass()).toBe('info');
    });

    it('should return success for success', () => {
      fixture.componentRef.setInput('code', ENotificationCode.success);
      fixture.detectChanges();
      expect(component.getTypeClass()).toBe('success');
    });

    it('should return empty string for none', () => {
      fixture.componentRef.setInput('code', ENotificationCode.none);
      fixture.detectChanges();
      expect(component.getTypeClass()).toBe('');
    });
  });

  describe('close', () => {
    it('should emit askClose event', () => {
      spyOn(component.askClose, 'emit');
      component.close();
      expect(component.askClose.emit).toHaveBeenCalled();
    });
  });

  describe('openErrorBox', () => {
    it('should open the error modal dialog', () => {
      component.openErrorBox();
      expect(mockMatDialog.open).toHaveBeenCalled();
    });
  });
});
