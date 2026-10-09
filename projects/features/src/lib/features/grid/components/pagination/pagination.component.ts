import { Component } from '@angular/core';

import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, TextComponent } from '@ta/ui';

import { TaAbstractGridComponent } from '../abstract.component';

type PageNumber = {
  number: number;
  isEllipsis?: boolean;
};

/** Précédent, numéros (avec ellipses au-delà de `maxPageNumber`), suivant ; ou « voir plus » en mode `cursor`. */
@Component({
  selector: 'ta-grid-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [ButtonComponent, TextComponent, TranslatePipe],
})
export class PaginationComponent extends TaAbstractGridComponent<any> {
  readonly maxPageNumber = 7;

  public show() {
    return this.isCursorMode() ? this.hasNextPage() : this.totalPages() > 1;
  }
  public isCursorMode() {
    return this.grid().table?.isCursorMode() ?? false;
  }
  public hasKnownTotal() {
    return this.grid().table?.hasKnownTotal() ?? false;
  }
  public hasNextPage() {
    return this.grid().table?.hasNextPage() ?? false;
  }
  public isLoading() {
    return this.grid().table?.isLoading() ?? false;
  }
  public currentPage() {
    return this.grid().table?.getPage() ?? 1;
  }
  public totalPages() {
    return this.grid().table?.getPageMax() ?? 0;
  }
  public range() {
    const table = this.grid().table;
    const total = table?.totalItems() ?? 0;
    const size = table?.pageSize() ?? 0;
    const start = total === 0 ? 0 : (this.currentPage() - 1) * size + 1;
    return { end: Math.min(this.currentPage() * size, total), start, total };
  }

  public goToPrevious() {
    this.grid().table?.previousPage();
  }
  public goToNext() {
    this.grid().table?.nextPage();
  }
  public goToPage(page: number) {
    this.grid().table?.setPage(page);
  }
  public loadMore() {
    this.grid().table?.loadMore();
  }

  public getListPage(): PageNumber[] {
    const total = this.totalPages();
    if (total <= 1) {
      return [];
    }
    if (total <= this.maxPageNumber) {
      return this._range(1, total);
    }

    const current = this.currentPage();
    const left = Math.max(current - 1, 2);
    const right = Math.min(current + 1, total - 1);
    const pages: PageNumber[] = [{ number: 1 }];
    if (left > 2) {
      pages.push({ isEllipsis: true, number: -1 });
    }
    pages.push(...this._range(left, right));
    if (right < total - 1) {
      pages.push({ isEllipsis: true, number: -2 });
    }
    pages.push({ number: total });
    return pages;
  }

  private _range(start: number, end: number): PageNumber[] {
    const pages: PageNumber[] = [];
    for (let i = start; i <= end; i++) {
      pages.push({ number: i });
    }
    return pages;
  }
}
