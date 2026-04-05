import { DatePipe } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: "ta-hour-date-line",
  templateUrl: "./hour-date-line.component.html",
  styleUrls: ["./hour-date-line.component.scss"],
  standalone: true,
  imports: [DatePipe],
})
export class HourDateLineComponent {
  /**
   * Start date
   */
  startDate = input.required<Date | null>();

  /**
   * End date
   */
  endDate = input.required<Date | null>();
}
