import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaChartMixedComponent } from './mixed-chart.component';

describe('TaChartMixedComponent', () => {
  let component: TaChartMixedComponent;
  let fixture: ComponentFixture<TaChartMixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaChartMixedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaChartMixedComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('labels', ['A', 'B']);
    fixture.componentRef.setInput('datasets', [{ data: [1, 2] }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have type set to scatter', () => {
    expect(component.type).toBe('scatter');
  });

  it('should create a chart instance after view init', () => {
    expect(component.chart).toBeTruthy();
  });
});
