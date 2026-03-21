import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENotificationCode } from '../../../enum';

import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default code to information', () => {
    expect(component.code()).toBe(ENotificationCode.information);
  });

  it('should return correct type class for error', () => {
    fixture.componentRef.setInput('code', ENotificationCode.error);
    fixture.detectChanges();
    expect(component.getTypeClass(component.code())).toBe('danger');
  });

  it('should return correct type class for warning', () => {
    fixture.componentRef.setInput('code', ENotificationCode.warning);
    fixture.detectChanges();
    expect(component.getTypeClass(component.code())).toBe('warning');
  });

  it('should return correct type class for information', () => {
    expect(component.getTypeClass(component.code())).toBe('info');
  });

  it('should return correct type class for success', () => {
    fixture.componentRef.setInput('code', ENotificationCode.success);
    fixture.detectChanges();
    expect(component.getTypeClass(component.code())).toBe('success');
  });

  it('should return empty string for none', () => {
    fixture.componentRef.setInput('code', ENotificationCode.none);
    fixture.detectChanges();
    expect(component.getTypeClass(component.code())).toBe('');
  });
});
