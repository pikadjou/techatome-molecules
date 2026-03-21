import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit action on click when state is classic', () => {
    spyOn(component.action, 'emit');
    component.handleClick();
    expect(component.action.emit).toHaveBeenCalled();
  });

  it('should not emit action on click when state is not classic', () => {
    fixture.componentRef.setInput('state', 'disabled');
    fixture.detectChanges();
    spyOn(component.action, 'emit');
    component.handleClick();
    expect(component.action.emit).not.toHaveBeenCalled();
  });

  it('should include state, size, and type in class', () => {
    const css = component.getClass();
    expect(css['classic']).toBeTrue();
    expect(css['medium']).toBeTrue();
    expect(css['primary']).toBeTrue();
  });

  it('should add circular class when option is true', () => {
    fixture.componentRef.setInput('options', { circular: true });
    fixture.detectChanges();
    const css = component.getClass();
    expect(css['circular']).toBeTrue();
  });

  it('should add circular big class', () => {
    fixture.componentRef.setInput('options', { circular: 'big' });
    fixture.detectChanges();
    const css = component.getClass();
    expect(css['circular big']).toBeTrue();
  });

  it('should add circular small class', () => {
    fixture.componentRef.setInput('options', { circular: 'small' });
    fixture.detectChanges();
    const css = component.getClass();
    expect(css['circular small']).toBeTrue();
  });

  it('should add no-border class when border is false', () => {
    fixture.componentRef.setInput('options', { border: false });
    fixture.detectChanges();
    const css = component.getClass();
    expect(css['no-border']).toBeTrue();
  });

  it('should add custom class from options', () => {
    fixture.componentRef.setInput('options', { class: 'my-custom' });
    fixture.detectChanges();
    const css = component.getClass();
    expect(css['my-custom']).toBeTrue();
  });
});
