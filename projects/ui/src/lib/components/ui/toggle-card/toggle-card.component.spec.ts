import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleCardComponent } from './toggle-card.component';

describe('ToggleCardComponent', () => {
  let component: ToggleCardComponent;
  let fixture: ComponentFixture<ToggleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleCardComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ToggleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default isActive to false', () => {
    expect(component.isActive()).toBeFalse();
  });

  it('should default disabled to false', () => {
    expect(component.disabled()).toBeFalse();
  });

  it('should emit toggle with inverted value on toggle', () => {
    spyOn(component.toggle, 'emit');
    component.onToggle();
    expect(component.toggle.emit).toHaveBeenCalledWith(true);
  });

  it('should emit false when currently active', () => {
    fixture.componentRef.setInput('isActive', true);
    fixture.detectChanges();
    spyOn(component.toggle, 'emit');
    component.onToggle();
    expect(component.toggle.emit).toHaveBeenCalledWith(false);
  });

  it('should not emit toggle when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    spyOn(component.toggle, 'emit');
    component.onToggle();
    expect(component.toggle.emit).not.toHaveBeenCalled();
  });

  it('should default title to empty string', () => {
    expect(component.title()).toBe('');
  });

  it('should default description to undefined', () => {
    expect(component.description()).toBeUndefined();
  });

  it('should default icon to undefined', () => {
    expect(component.icon()).toBeUndefined();
  });
});
