import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourDateLineComponent } from './hour-date-line.component';

describe('HourDateLineComponent', () => {
  let component: HourDateLineComponent;
  let fixture: ComponentFixture<HourDateLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourDateLineComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HourDateLineComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('startDate', new Date('2024-01-01T09:00:00'));
    fixture.componentRef.setInput('endDate', new Date('2024-01-01T17:00:00'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept null start date', () => {
    fixture.componentRef.setInput('startDate', null);
    fixture.detectChanges();
    expect(component.startDate()).toBeNull();
  });

  it('should accept null end date', () => {
    fixture.componentRef.setInput('endDate', null);
    fixture.detectChanges();
    expect(component.endDate()).toBeNull();
  });
});
