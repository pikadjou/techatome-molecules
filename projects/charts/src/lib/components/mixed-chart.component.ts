import { Component } from '@angular/core';

import { BaseChartComponent } from './base-chart/base-chart.component';

@Component({
  selector: 'cam-mixed-chart',
  templateUrl: './base-chart/base-chart.component.html',
  styleUrls: ['./base-chart/base-chart.component.scss'],
  standalone: true,
  imports: [],
})
export class CamChartMixedComponent extends BaseChartComponent<'scatter'> {
  constructor() {
    super();

    this.type = 'scatter';
  }
}
