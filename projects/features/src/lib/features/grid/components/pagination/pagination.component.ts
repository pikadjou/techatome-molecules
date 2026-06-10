import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { TypedTemplateDirective } from '@ta/utils';

import { TaAbstractGridComponent } from '../abstract.component';

type PageNumber = {
  number: number;
  icon?: string;
};
@Component({
  selector: 'ta-grid-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [FontIconComponent, NgTemplateOutlet, TypedTemplateDirective],
})
export class PaginationComponent extends TaAbstractGridComponent<any> {
  readonly PageNumber!: { pagenumber: PageNumber };
  readonly maxPageNumber = 10;

  get show() {
    return this.paginationGetTotalPages > 1;
  }
  get paginationGetTotalPages() {
    return this.grid.table?.getPageMax() || 0;
  }

  constructor() {
    super();
  }

  public getListPage() {
    if (!this.grid || !this.grid.table) {
      return [];
    }
    const last = this.paginationGetTotalPages;

    if (last <= this.maxPageNumber) {
      return this._computedPageNumbers(2, last);
    }

    const current = this.grid.table.getPage() || 0;
    const rangeStart = Math.floor(current / 10) * 10;
    const rangeEnd = rangeStart + 10;

    return [
      ...(rangeStart <= 1 ? [] : [{ number: rangeStart - 1, icon: 'more_horiz' }]),
      ...this._computedPageNumbers(rangeStart > 1 ? rangeStart : 2, rangeEnd < last ? rangeEnd : last),
      ...(rangeEnd > last ? [] : [{ number: rangeEnd, icon: 'more_horiz' }]),
    ];
  }

  private _computedPageNumbers(start: number, end: number): PageNumber[] {
    const pageNumbers = [];
    for (let i = start; i < end; i++) {
      pageNumbers.push({ number: i });
    }
    return pageNumbers;
  }
}
