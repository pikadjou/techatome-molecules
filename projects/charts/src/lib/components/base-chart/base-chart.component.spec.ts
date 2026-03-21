import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseChartComponent } from './base-chart.component';

@Component({
  selector: 'ta-test-chart',
  template: '<div class="chart-container"><canvas #chartCanvas></canvas></div>',
  standalone: true,
})
class TestChartComponent extends BaseChartComponent<'bar'> {
  constructor() {
    super();
    this.type = 'bar';
  }
}

describe('BaseChartComponent', () => {
  let component: TestChartComponent;
  let fixture: ComponentFixture<TestChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestChartComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('labels', ['Jan', 'Feb', 'Mar']);
    fixture.componentRef.setInput('datasets', [{ data: [10, 20, 30] }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct chart type', () => {
    expect(component.type).toBe('bar');
  });

  it('should create chart on AfterViewInit', () => {
    expect(component.chart).toBeTruthy();
  });

  it('should destroy chart on ngOnDestroy', () => {
    const destroySpy = spyOn(component.chart!, 'destroy');
    component.ngOnDestroy();
    expect(destroySpy).toHaveBeenCalled();
    expect(component.chart).toBeNull();
  });

  it('should refresh chart when labels change', () => {
    const refreshSpy = spyOn(component, 'refreshChart');
    component.ngOnChanges({
      labels: {
        previousValue: ['Jan'],
        currentValue: ['Jan', 'Feb'],
        firstChange: false,
        isFirstChange: () => false,
      },
    });
    expect(refreshSpy).toHaveBeenCalled();
  });

  it('should refresh chart when datasets change', () => {
    const refreshSpy = spyOn(component, 'refreshChart');
    component.ngOnChanges({
      datasets: {
        previousValue: [{ data: [10] }],
        currentValue: [{ data: [10, 20] }],
        firstChange: false,
        isFirstChange: () => false,
      },
    });
    expect(refreshSpy).toHaveBeenCalled();
  });

  it('should not refresh chart if data is unchanged', () => {
    const refreshSpy = spyOn(component, 'refreshChart');
    component.ngOnChanges({
      labels: {
        previousValue: ['Jan'],
        currentValue: ['Jan'],
        firstChange: false,
        isFirstChange: () => false,
      },
    });
    expect(refreshSpy).not.toHaveBeenCalled();
  });

  it('refreshChart should do nothing if chart is null', () => {
    component.chart = null;
    expect(() => component.refreshChart()).not.toThrow();
  });
});
