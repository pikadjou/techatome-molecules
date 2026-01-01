import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  input,
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

  @Output()
  rowClicked = new EventEmitter<T>();

  @ViewChild('table', { static: true })
  tableElement!: ElementRef;

  constructor(private renderer: Renderer2) {
    super();
  }

  ngAfterViewInit() {
    this._registerSubscription(
      this.isReady$.subscribe({
        next: () => {
          if (this._grid.tableHtml) {
            this.renderer.appendChild(this.tableElement.nativeElement, this._grid.tableHtml.nativeElement);
          }
          this._registerSubscription(this._grid.rowClicked$.subscribe({ next: row => this.rowClicked.emit(row) }));
        },
      })
    );
  }
}
