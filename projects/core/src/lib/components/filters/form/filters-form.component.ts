import { NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Observable } from "rxjs";

import { FormComponent } from "@ta/form-basic";
import { InputBase } from "@ta/form-model";
import { TranslatePipe } from "@ta/translation";
import { ButtonComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";

@Component({
  selector: "ta-filters-form",
  templateUrl: "./filters-form.component.html",
  styleUrls: ["./filters-form.component.scss"],
  standalone: true,
  imports: [NgIf, ButtonComponent, FormComponent, TranslatePipe],
})
export class FiltersFormComponent extends TaBaseComponent {
  @Input()
  form: InputBase<any>[] = [];

  @Input()
  askValidation$!: Observable<null>;

  @Output()
  filtersSelected = new EventEmitter<any>();

  constructor() {
    super();
  }

  public apply(data: any) {
    this.filtersSelected.emit(data);
  }

  public clear() {
    this.filtersSelected.emit(null);
  }
}
