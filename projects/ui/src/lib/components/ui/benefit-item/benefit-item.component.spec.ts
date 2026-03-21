import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitItemComponent } from './benefit-item.component';

describe('BenefitItemComponent', () => {
  let component: BenefitItemComponent;
  let fixture: ComponentFixture<BenefitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefitItemComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BenefitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default type to success', () => {
    expect(component.type()).toBe('success');
  });

  it('should default text to empty string', () => {
    expect(component.text()).toBe('');
  });

  it('should return check icon for success type', () => {
    expect(component.icon()).toBe('check');
  });

  it('should return warning icon for warning type', () => {
    fixture.componentRef.setInput('type', 'warning');
    fixture.detectChanges();
    expect(component.icon()).toBe('warning');
  });

  it('should return error icon for alert type', () => {
    fixture.componentRef.setInput('type', 'alert');
    fixture.detectChanges();
    expect(component.icon()).toBe('error');
  });

  it('should return css classes based on type', () => {
    expect(component.cssClasses()).toEqual(['success']);
  });

  it('should return check icon as default', () => {
    fixture.componentRef.setInput('type', 'default');
    fixture.detectChanges();
    expect(component.icon()).toBe('check');
  });
});
