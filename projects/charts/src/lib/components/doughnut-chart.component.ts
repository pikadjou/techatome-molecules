import { Component } from '@angular/core';

import { BaseChartComponent } from './base-chart/base-chart.component';

@Component({
  selector: 'cam-doughnut-chart',
  templateUrl: './base-chart/base-chart.component.html',
  styleUrls: ['./base-chart/base-chart.component.scss'],
  standalone: true,
  imports: [],
})
export class CamChartDoughnutComponent extends BaseChartComponent<'doughnut'> {
  constructor() {
    super();

    this.type = 'doughnut';
  }
}
