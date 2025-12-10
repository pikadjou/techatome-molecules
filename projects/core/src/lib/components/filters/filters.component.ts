import { Component } from "@angular/core";

import { Subject } from "rxjs";

import { FontIconComponent } from "@ta/icons";
import {
  LayoutContentComponent,
  LayoutPanelComponent,
  LayoutWithPanelComponent,
  LinkComponent,
} from "@ta/ui";

import { FiltersFormComponent } from "./form/filters-form.component";

@Component({
  selector: "ta-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
  standalone: true,
  imports: [
    FontIconComponent,
    LinkComponent,
    LayoutWithPanelComponent,
    LayoutPanelComponent,
    FiltersFormComponent,
    LayoutContentComponent,
  ],
})
export class FiltersComponent {
  public isFilterOpen = false;

  public askValidation$ = new Subject<null>();

  public changeFilterOpen() {
    if (this.isFilterOpen) {
      this.askValidation$.next(null);
    }
    this.isFilterOpen = !this.isFilterOpen;
  }
}
