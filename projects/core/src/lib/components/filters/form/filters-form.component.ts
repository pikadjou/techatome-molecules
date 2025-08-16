import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Observable } from 'rxjs';

import { InputBase } from '@camelot/form-model';
import { CamBaseComponent } from '@camelot/utils';

@Component({
  selector: 'cam-filters-form',
  templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.scss'],
})
export class FiltersFormComponent extends CamBaseComponent {
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
