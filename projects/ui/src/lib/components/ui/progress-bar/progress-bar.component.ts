import { Component, input } from "@angular/core";

@Component({
  selector: "ta-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.scss"],
  standalone: true,
})
export class ProgressBarComponent {
  current = input.required<number>();
  max = input.required<number>();
}
