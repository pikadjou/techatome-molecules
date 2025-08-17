import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { InputBase } from '@ta/form-model';
import { TaBaseComponent } from '@ta/utils';
import { Observable } from 'rxjs';

@Component({
selector: 'ta-filters-form',
  templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.scss'],,
  standalone: true,
  imports: [NgIf],
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
