import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBadgeComponent } from './notification-badge.component';

describe('NotificationBadgeComponent', () => {
  let component: NotificationBadgeComponent;
  let fixture: ComponentFixture<NotificationBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationBadgeComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(NotificationBadgeComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('number', 5);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return class with default style', () => {
    const css = component.getClass();
    expect(css['bgc-semantic-token-info']).toBeTrue();
  });

  it('should return class with custom style', () => {
    fixture.componentRef.setInput('style', 'brand-500');
    fixture.detectChanges();
    const css = component.getClass();
    expect(css['bgc-brand-500']).toBeTrue();
  });

  it('should add relative class when relative is true', () => {
    fixture.componentRef.setInput('relative', true);
    fixture.detectChanges();
    const css = component.getClass();
    expect(css['relative']).toBeTrue();
  });

  it('should not add relative class by default', () => {
    const css = component.getClass();
    expect(css['relative']).toBeFalsy();
  });
});
