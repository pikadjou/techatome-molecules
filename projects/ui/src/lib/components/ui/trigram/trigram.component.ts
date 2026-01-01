import { NgIf, NgStyle } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: "ta-trigram",
  templateUrl: "./trigram.component.html",
  styleUrls: ["./trigram.component.scss"],
  standalone: true,
  imports: [NgIf, NgStyle],
})
export class TrigramComponent {
  /**
   * Text to display in trigram
   */
  value = input.required<string | null>();

  /**
   * Size of trigram
   */
  size = input<number>(35);

  constructor() {}

  public getFontSize() {
    return Math.round(this.size() / 3);
  }
}
