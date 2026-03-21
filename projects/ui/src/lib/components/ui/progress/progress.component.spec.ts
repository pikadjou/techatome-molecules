import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressComponent } from './progress.component';

describe('ProgressComponent', () => {
  let component: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct class with default values', () => {
    expect(component.getClass()).toBe('progress-default md');
  });

  it('should return correct class with custom type and size', () => {
    fixture.componentRef.setInput('type', 'success');
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    expect(component.getClass()).toBe('progress-success lg');
  });

  it('should return progress style with correct width', () => {
    fixture.componentRef.setInput('value', 50);
    fixture.detectChanges();
    expect(component.getProgressStyle()).toEqual({ width: '50%' });
  });

  it('should clamp progress at 0 minimum', () => {
    fixture.componentRef.setInput('value', -10);
    fixture.detectChanges();
    expect(component.getProgressStyle()).toEqual({ width: '0%' });
  });

  it('should clamp progress at 100 maximum', () => {
    fixture.componentRef.setInput('value', 150);
    fixture.detectChanges();
    expect(component.getProgressStyle()).toEqual({ width: '100%' });
  });

  it('should default value to 0', () => {
    expect(component.value()).toBe(0);
  });
});
