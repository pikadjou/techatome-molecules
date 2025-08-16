import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CamBaseComponent } from '@camelot/utils';

import { ActiveFilterTag } from '../types';

@Component({
  selector: 'cam-filters-tag',
  templateUrl: './filters-tag.component.html',
  styleUrls: ['./filters-tag.component.scss'],
})
export class FiltersTagComponent extends CamBaseComponent {
  @Input()
  activeFilter: ActiveFilterTag[] = [];

  @Output()
  removedFilter = new EventEmitter<ActiveFilterTag>();

  constructor() {
    super();
  }

  public remove(filter: ActiveFilterTag) {
    this.removedFilter.emit(filter);
  }
}
