import { Component, input, OnInit } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";
import { Duration, intervalToDuration } from "date-fns";

import { PluralTranslatePipe } from "@ta/utils";

import { TaTranslationUI } from "../../../translation.service";

@Component({
  selector: "ta-duration",
  templateUrl: "./duration.component.html",
  styleUrls: ["./duration.component.scss"],
  standalone: true,
  imports: [TranslateModule, PluralTranslatePipe],
})
export class DurationComponent implements OnInit {
  startDate = input<number | string>(Date.now());

  endDate = input<number | string>(Date.now());

  public interval: Duration | null = null;

  constructor() {
    TaTranslationUI.getInstance();
  }

  ngOnInit() {
    if (this.startDate() && this.endDate()) {
      try {
        this.interval = intervalToDuration({
          start: new Date(this.startDate()),
          end: new Date(this.endDate()),
        });
      } catch (error) {
        console.error("Invalid date format:", error);
      }
    } else {
      console.error("startDate or endDate is missing");
    }
  }
}
