import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BadgeComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';

import { ActiveFilterTag } from '../types';

@Component({
  selector: 'ta-filters-tag',
  templateUrl: './filters-tag.component.html',
  styleUrls: ['./filters-tag.component.scss'],
  standalone: true,
  imports: [NgFor, BadgeComponent],
})
export class FiltersTagComponent extends TaBaseComponent {
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
