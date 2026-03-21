import { TestBed } from '@angular/core/testing';

import { ENotificationCode } from '../enum';
import { LAZY_SERVICE_TOKEN, TaNotificationService } from './notification.service';

describe('TaNotificationService', () => {
  let service: TaNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaNotificationService],
    });
    service = TestBed.inject(TaNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a unique id', () => {
    expect(service.id).toBeDefined();
    expect(typeof service.id).toBe('number');
  });

  it('should have a newNotification$ subject', () => {
    expect(service.newNotification$).toBeTruthy();
  });

  it('should emit a notification when addNotification is called', (done) => {
    const testMessage = 'Test notification message';
    const testCode = ENotificationCode.success;

    service.newNotification$.subscribe((notification) => {
      expect(notification.message).toBe(testMessage);
      expect(notification.code).toBe(testCode);
      done();
    });

    service.addNotification(testMessage, testCode);
  });

  it('should emit error notifications', (done) => {
    service.newNotification$.subscribe((notification) => {
      expect(notification.code).toBe(ENotificationCode.error);
      done();
    });

    service.addNotification('Error occurred', ENotificationCode.error);
  });

  it('should emit warning notifications', (done) => {
    service.newNotification$.subscribe((notification) => {
      expect(notification.code).toBe(ENotificationCode.warning);
      done();
    });

    service.addNotification('Warning', ENotificationCode.warning);
  });

  it('should emit multiple notifications in order', () => {
    const emittedNotifications: { message: string; code: ENotificationCode }[] = [];

    service.newNotification$.subscribe((notification) => {
      emittedNotifications.push(notification);
    });

    service.addNotification('First', ENotificationCode.information);
    service.addNotification('Second', ENotificationCode.success);
    service.addNotification('Third', ENotificationCode.error);

    expect(emittedNotifications.length).toBe(3);
    expect(emittedNotifications[0].message).toBe('First');
    expect(emittedNotifications[1].message).toBe('Second');
    expect(emittedNotifications[2].message).toBe('Third');
  });
});

describe('LAZY_SERVICE_TOKEN', () => {
  it('should be an InjectionToken', () => {
    expect(LAZY_SERVICE_TOKEN).toBeTruthy();
  });

  it('should be injectable when provided', () => {
    const service = new TaNotificationService();
    TestBed.configureTestingModule({
      providers: [{ provide: LAZY_SERVICE_TOKEN, useValue: service }],
    });
    const injected = TestBed.inject(LAZY_SERVICE_TOKEN);
    expect(injected).toBe(service);
  });
});
