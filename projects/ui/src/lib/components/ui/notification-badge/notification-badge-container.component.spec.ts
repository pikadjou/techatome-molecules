import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBadgeContainerComponent } from './notification-badge-container.component';

describe('NotificationBadgeContainerComponent', () => {
  let component: NotificationBadgeContainerComponent;
  let fixture: ComponentFixture<NotificationBadgeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationBadgeContainerComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(NotificationBadgeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
