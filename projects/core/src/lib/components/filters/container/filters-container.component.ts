import { Component, EventEmitter, Input, Output } from '@angular/core';

import { InputBase } from '@ta/form-model';
import { CamBaseComponent } from '@ta/utils';
import { Subject } from 'rxjs';

import { ActiveFilterTag } from '../types';

@Component({
  selector: 'ta-filters-container',
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.scss'],
})
export class FiltersContainerComponent extends CamBaseComponent {
  @Input()
  form: InputBase<any>[] = [];

  @Input()
  activeFilter: ActiveFilterTag[] = [];

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
