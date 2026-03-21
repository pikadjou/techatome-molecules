import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappedIconComponent } from './wrapped-icon.component';

describe('WrappedIconComponent', () => {
  let component: WrappedIconComponent;
  let fixture: ComponentFixture<WrappedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrappedIconComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(WrappedIconComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('icon', 'check_circle');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct class with default values', () => {
    expect(component.getClass()).toBe('wrapped-icon-default md');
  });

  it('should return correct class with custom type and size', () => {
    fixture.componentRef.setInput('type', 'success');
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    expect(component.getClass()).toBe('wrapped-icon-success lg');
  });
});
