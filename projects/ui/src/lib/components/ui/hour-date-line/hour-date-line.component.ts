import { Component, Input } from '@angular/core';

@Component({
  selector: 'cam-hour-date-line',
  templateUrl: './hour-date-line.component.html',
  styleUrls: ['./hour-date-line.component.scss'],
})
export class HourDateLineComponent {
  /**
   * Start date
   */
  @Input() startDate!: Date | null;

  /**
   * End date
   */
  @Input() endDate!: Date | null;
}
