import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaChartPieComponent } from './pie-chart.component';

describe('TaChartPieComponent', () => {
  let component: TaChartPieComponent;
  let fixture: ComponentFixture<TaChartPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaChartPieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaChartPieComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('labels', ['A', 'B']);
    fixture.componentRef.setInput('datasets', [{ data: [1, 2] }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have type set to pie', () => {
    expect(component.type).toBe('pie');
  });

  it('should accept optional radius input', () => {
    fixture.componentRef.setInput('radius', 100);
    fixture.detectChanges();
    expect(component.radius()).toBe(100);
  });

  it('should create a chart instance after view init', () => {
    expect(component.chart).toBeTruthy();
  });
});
