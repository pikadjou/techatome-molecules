import { Component, Input } from '@angular/core';

@Component({
  selector: 'cam-dashboard-card',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardCardComponent {
  @Input()
  icon!: string;
}
