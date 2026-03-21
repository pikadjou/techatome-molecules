import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { Subject } from 'rxjs';

import { ENotificationCode } from '../../../enum';
import { TaNotificationService } from '../../../services/notification.service';
import { NotificationBoxComponent } from './notification-box.component';

describe('NotificationBoxComponent', () => {
  let component: NotificationBoxComponent;
  let fixture: ComponentFixture<NotificationBoxComponent>;
  let mockNotificationService: Partial<TaNotificationService>;
  let notificationSubject: Subject<{ message: string; code: ENotificationCode }>;

  beforeEach(async () => {
    notificationSubject = new Subject<{ message: string; code: ENotificationCode }>();
    mockNotificationService = {
      newNotification$: notificationSubject,
    };

    await TestBed.configureTestingModule({
      imports: [NotificationBoxComponent],
      providers: [
        { provide: TaNotificationService, useValue: mockNotificationService },
      ],
    })
      .overrideComponent(NotificationBoxComponent, {
        set: {
          imports: [],
          template: '<div></div>',
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(NotificationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with an empty list', () => {
    expect(component.list).toEqual([]);
  });

  it('should add a notification to the list when newNotification$ emits', () => {
    notificationSubject.next({
      message: 'Test message',
      code: ENotificationCode.success,
    });

    expect(component.list.length).toBe(1);
    expect(component.list[0].message).toBe('Test message');
    expect(component.list[0].code).toBe(ENotificationCode.success);
  });

  it('should add multiple notifications to the list', () => {
    notificationSubject.next({
      message: 'First',
      code: ENotificationCode.information,
    });
    notificationSubject.next({
      message: 'Second',
      code: ENotificationCode.warning,
    });

    expect(component.list.length).toBe(2);
  });

  it('should remove a notification after 3 seconds', fakeAsync(() => {
    notificationSubject.next({
      message: 'Auto-remove',
      code: ENotificationCode.success,
    });

    expect(component.list.length).toBe(1);

    tick(3000);

    expect(component.list.length).toBe(0);
  }));

  it('should handle error notification codes', () => {
    notificationSubject.next({
      message: 'Error occurred',
      code: ENotificationCode.error,
    });

    expect(component.list.length).toBe(1);
    expect(component.list[0].code).toBe(ENotificationCode.error);
  });
});
