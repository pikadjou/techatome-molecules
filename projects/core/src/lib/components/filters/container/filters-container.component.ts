import { NgIf } from "@angular/common";
import { Component, EventEmitter, Output, input } from "@angular/core";

import { Subject } from "rxjs";

import { InputBase } from "@ta/form-model";
import { FontIconComponent } from "@ta/icons";
import {
  LayoutContentComponent,
  LayoutPanelComponent,
  LayoutWithPanelComponent,
  LinkComponent,
} from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";

import { FiltersFormComponent } from "../form/filters-form.component";
import { FiltersTagComponent } from "../tag/filters-tag.component";
import { ActiveFilterTag } from "../types";

@Component({
  selector: "ta-filters-container",
  templateUrl: "./filters-container.component.html",
  styleUrls: ["./filters-container.component.scss"],
  standalone: true,
  imports: [
    NgIf,
    FontIconComponent,
    LayoutWithPanelComponent,
    LayoutPanelComponent,
    FiltersFormComponent,
    LayoutContentComponent,
    FiltersTagComponent,
    LinkComponent,
  ],
})
export class FiltersContainerComponent extends TaBaseComponent {
  form = input<InputBase<any>[]>([]);

  activeFilter = input<ActiveFilterTag[]>([]);

  @Output()
  filtersSelected = new EventEmitter<any>();

  @Output()
  removedFilter = new EventEmitter<ActiveFilterTag>();

  public isFilterOpen = false;
  public askValidation$ = new Subject<null>();

  constructor() {
    super();
  }

  public toggleFilter() {
    if (this.isFilterOpen) {
      this.askValidation$.next(null);
    }
    this.isFilterOpen = !this.isFilterOpen;
  }

  public apply(data: any) {
    this.filtersSelected.emit(data);
  }
}
