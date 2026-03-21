import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelComponent } from './label.component';

describe('LabelComponent', () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct class with default values', () => {
    expect(component.getClass()).toBe('label-default md');
  });

  it('should return correct class with custom type and size', () => {
    fixture.componentRef.setInput('type', 'success');
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();
    expect(component.getClass()).toBe('label-success sm');
  });
});
