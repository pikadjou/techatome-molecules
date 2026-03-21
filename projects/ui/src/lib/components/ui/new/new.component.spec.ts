import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponent } from './new.component';

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default visible to false', () => {
    expect(component.visible()).toBeFalse();
  });

  it('should default isRelative to false', () => {
    expect(component.isRelative()).toBeFalse();
  });

  it('should default size to md', () => {
    expect(component.size()).toBe('md');
  });

  it('should accept custom visible value', () => {
    fixture.componentRef.setInput('visible', true);
    fixture.detectChanges();
    expect(component.visible()).toBeTrue();
  });
});
