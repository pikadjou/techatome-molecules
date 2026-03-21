import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { ServerError, TaServerErrorService } from '@ta/server';

import { ENotificationCode } from '../../enum';
import { LAZY_SERVICE_TOKEN, TaNotificationService } from '../../services/notification.service';
import { ErrorBoxModal, openErrorModal } from './error-box.component';

describe('ErrorBoxModal', () => {
  let component: ErrorBoxModal;
  let fixture: ComponentFixture<ErrorBoxModal>;
  let mockNotificationService: jasmine.SpyObj<TaNotificationService>;
  let mockErrorService: Partial<TaServerErrorService>;

  beforeEach(async () => {
    mockNotificationService = jasmine.createSpyObj('TaNotificationService', [
      'addNotification',
    ]);

    mockErrorService = {
      notifications: signal<ServerError[]>([]),
    };

    await TestBed.configureTestingModule({
      imports: [ErrorBoxModal, MatDialogModule],
      providers: [
        { provide: LAZY_SERVICE_TOKEN, useValue: mockNotificationService },
        { provide: TaServerErrorService, useValue: mockErrorService },
        { provide: MatDialog, useValue: jasmine.createSpyObj('MatDialog', ['open', 'close']) },
      ],
    })
      .overrideComponent(ErrorBoxModal, {
        set: {
          imports: [],
          template: '<div></div>',
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ErrorBoxModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an errorList from the error service', () => {
    expect(component.errorList).toBeDefined();
    expect(component.errorList()).toEqual([]);
  });

  it('should have a copyContent method', () => {
    expect(component.copyContent).toBeDefined();
    expect(typeof component.copyContent).toBe('function');
  });
});

describe('openErrorModal', () => {
  it('should open a dialog with ErrorBoxModal', () => {
    const mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
    mockDialog.open.and.returnValue({} as any);

    openErrorModal(mockDialog);

    expect(mockDialog.open).toHaveBeenCalledWith(ErrorBoxModal, {
      width: '600px',
      maxHeight: '80vh',
    });
  });
});
