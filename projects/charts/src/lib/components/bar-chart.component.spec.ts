import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaChartBarComponent } from './bar-chart.component';

describe('TaChartBarComponent', () => {
  let component: TaChartBarComponent;
  let fixture: ComponentFixture<TaChartBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaChartBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaChartBarComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('labels', ['A', 'B']);
    fixture.componentRef.setInput('datasets', [{ data: [1, 2] }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have type set to bar', () => {
    expect(component.type).toBe('bar');
  });

  it('should create a chart instance after view init', () => {
    expect(component.chart).toBeTruthy();
  });
});
