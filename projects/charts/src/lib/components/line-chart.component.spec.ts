import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaChartLineComponent } from './line-chart.component';

describe('TaChartLineComponent', () => {
  let component: TaChartLineComponent;
  let fixture: ComponentFixture<TaChartLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaChartLineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaChartLineComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('labels', ['A', 'B']);
    fixture.componentRef.setInput('datasets', [{ data: [1, 2] }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have type set to line', () => {
    expect(component.type).toBe('line');
  });

  it('should create a chart instance after view init', () => {
    expect(component.chart).toBeTruthy();
  });
});
