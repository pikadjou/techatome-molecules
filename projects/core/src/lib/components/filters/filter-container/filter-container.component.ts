import { Component, EventEmitter, OnInit, Output, input } from "@angular/core";

import { Subject } from "rxjs";

import { FormComponent } from "@ta/form-basic";
import { InputBase } from "@ta/form-model";
import { FontIconComponent } from "@ta/icons";
import { TranslatePipe } from "@ta/translation";
import {
  ButtonComponent,
  LayoutSideComponent,
  LayoutSideContentComponent,
  LayoutSideCtaComponent,
  LinkComponent,
} from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";

@Component({
  selector: "ta-filter-container",
  templateUrl: "./filter-container.component.html",
  styleUrls: ["./filter-container.component.scss"],
  standalone: true,
  imports: [
    FontIconComponent,
    LinkComponent,
    LayoutSideComponent,
    LayoutSideContentComponent,
    FormComponent,
    LayoutSideCtaComponent,
    ButtonComponent,
    TranslatePipe,
  ],
})
export class FilterContainerComponent
  extends TaBaseComponent
  implements OnInit
{
  form = input<InputBase<any>[]>([]);

  @Output()
  filtersSelected = new EventEmitter<any>();

  public isFilterOpen = false;

  public askValidation$ = new Subject<null>();
  public askClear$ = new Subject<null>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (this.askClear$) {
      this._registerSubscription(this.askClear$.subscribe((_) => this.clear()));
    }
  }

  public apply(data: any) {
    this.filtersSelected.emit(data);
  }

  public clear() {
    this.filtersSelected.emit(null);
  }

  public validate() {
    this.askValidation$.next(null);
  }
}
