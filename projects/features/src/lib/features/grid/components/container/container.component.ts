import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject, input } from '@angular/core';

import { ColMetaData, Preset } from '../../models/types';
import { TaGridSessionService } from '../../services/grid-session.services';
//import { TaGridViewService } from '../../services/grid-view.service';
import { TaAbstractGridComponent } from '../abstract.component';

@Component({
  selector: 'ta-grid-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class TaGridContainerComponent<T = unknown>
  extends TaAbstractGridComponent<T>
  implements AfterViewInit, OnDestroy
{
  initialData = input<T[]>();

  colsMetaData = input<ColMetaData<any>[]>([]);

  preset = input<Preset[]>();

  @ViewChild('table', { static: true }) tableElement!: ElementRef;

  private _session = inject(TaGridSessionService);
  //private _service = inject(TaGridViewService);

  ngAfterViewInit() {
    const raw = this._session.getFilter(this.gridId());

    this._grid.init({
      elementRef: this.tableElement,
      colsMetaData: this.colsMetaData(),
      initialFilter: raw ?? [],
      data: this.initialData(),
      preset: this.preset(),
      // services: {
      //   getData$: params => this._service.getData$<any>(this.model, params),
      // },
    });
  }

  override ngOnDestroy() {
    this._grid.destroy();
  }
}
