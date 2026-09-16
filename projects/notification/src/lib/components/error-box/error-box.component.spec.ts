import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerError, TaServerErrorService } from '@ta/server';
import { ModalState } from '@ta/utils';

import { ENotificationCode } from '../../enum';
import { LAZY_SERVICE_TOKEN, TaNotificationService } from '../../services/notification.service';
import { ErrorBoxModal } from './error-box.component';

describe('ErrorBoxModal', () => {
  let component: ErrorBoxModal;
  let fixture: ComponentFixture<ErrorBoxModal>;
  let mockNotificationService: jasmine.SpyObj<TaNotificationService>;
  let mockErrorService: Partial<TaServerErrorService>;

  beforeEach(async () => {
    mockNotificationService = jasmine.createSpyObj('TaNotificationService', ['addNotification']);

    mockErrorService = {
      notifications: signal<ServerError[]>([]),
    };

    await TestBed.configureTestingModule({
      imports: [ErrorBoxModal],
      providers: [
        { provide: LAZY_SERVICE_TOKEN, useValue: mockNotificationService },
        { provide: TaServerErrorService, useValue: mockErrorService },
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

  it('should follow its modal state', () => {
    const state = new ModalState<null, null>();
    fixture.componentRef.setInput('modalState', state);

    expect(component.isOpen()).toBe(false);
    state.asked(null);
    expect(component.isOpen()).toBe(true);
    component.dismiss();
    expect(component.isOpen()).toBe(false);
  });
});
