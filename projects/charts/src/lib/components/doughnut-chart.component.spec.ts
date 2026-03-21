import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaChartDoughnutComponent } from './doughnut-chart.component';

describe('TaChartDoughnutComponent', () => {
  let component: TaChartDoughnutComponent;
  let fixture: ComponentFixture<TaChartDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaChartDoughnutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaChartDoughnutComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('labels', ['A', 'B']);
    fixture.componentRef.setInput('datasets', [{ data: [1, 2] }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have type set to doughnut', () => {
    expect(component.type).toBe('doughnut');
  });

  it('should create a chart instance after view init', () => {
    expect(component.chart).toBeTruthy();
  });
});
