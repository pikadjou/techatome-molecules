import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkComponent } from './link.component';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LinkComponent);
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

  it('should include state and size in class', () => {
    const css = component.getClass();
    expect(css['classic']).toBeTrue();
    expect(css['md']).toBeTrue();
  });

  it('should default underline to true', () => {
    expect(component.underline()).toBeTrue();
  });

  it('should default bold to false', () => {
    expect(component.bold()).toBeFalse();
  });
});
