import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToolComponent } from './tool.component';

describe('ButtonToolComponent', () => {
  let component: ButtonToolComponent;
  let fixture: ComponentFixture<ButtonToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToolComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ButtonToolComponent);
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

  it('should not emit action on click when state is disabled', () => {
    fixture.componentRef.setInput('state', 'disabled');
    fixture.detectChanges();
    spyOn(component.action, 'emit');
    component.handleClick();
    expect(component.action.emit).not.toHaveBeenCalled();
  });

  it('should include state, size, and type in class', () => {
    const css = component.getClass();
    expect(css['classic']).toBeTrue();
    expect(css['md']).toBeTrue();
    expect(css['primary']).toBeTrue();
  });

  it('should default readonly to false', () => {
    expect(component.readonly()).toBeFalse();
  });

  it('should default icon to null', () => {
    expect(component.icon()).toBeNull();
  });
});
