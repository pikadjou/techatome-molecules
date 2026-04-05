import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ElementRef,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  inject,
  input,
  output,
} from '@angular/core';

import { TitleComponent } from '@ta/ui';

import { TaAbstractGridComponent } from '../abstract.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'ta-grid',
  standalone: true,
  imports: [PaginationComponent, NgTemplateOutlet, AsyncPipe, TitleComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TaGridComponent<T extends { id: number }> extends TaAbstractGridComponent<T> {
  cardTemplate = input.required<TemplateRef<{ items: T[] }>>();

  rowClicked = output<T>();

  @ViewChild('table', { static: true })
  tableElement!: ElementRef;

  private _renderer = inject(Renderer2);

  constructor() {
    super();
  }

  ngAfterViewInit() {
    this._registerSubscription(
      this.isReady$.subscribe({
        next: () => {
          if (this._grid.tableHtml) {
            this._renderer.appendChild(this.tableElement.nativeElement, this._grid.tableHtml.nativeElement);
          }
          this._registerSubscription(this._grid.rowClicked$.subscribe({ next: row => this.rowClicked.emit(row) }));
        },
      })
    );
  }
}
