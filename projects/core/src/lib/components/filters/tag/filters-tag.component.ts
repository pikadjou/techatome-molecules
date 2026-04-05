import { Component, input, output } from "@angular/core";

import { BadgeComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";

import { ActiveFilterTag } from "../types";

@Component({
  selector: "ta-filters-tag",
  templateUrl: "./filters-tag.component.html",
  styleUrls: ["./filters-tag.component.scss"],
  standalone: true,
  imports: [BadgeComponent],
})
export class FiltersTagComponent extends TaBaseComponent {
  activeFilter = input<ActiveFilterTag[]>([]);

  removedFilter = output<ActiveFilterTag>();

  constructor() {
    super();
  }

  public remove(filter: ActiveFilterTag) {
    this.removedFilter.emit(filter);
  }
}
