import { Component, inject, input } from '@angular/core';

import { ColMetaData, Preset } from '../../models/types';
import { TaGridSessionService } from '../../services/grid-session.services';
import { TaGridViewService } from '../../services/grid-view.service';
import { TaAbstractGridComponent } from '../abstract.component';

@Component({
  selector: 'ta-grid-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class TaGridContainerComponent<T = unknown> extends TaAbstractGridComponent<T> {
  initialData = input<T[]>();

  model = input<string>('');

  colsMetaData = input<ColMetaData<T>[]>([]);

  preset = input<Preset[]>();

  private _session = inject(TaGridSessionService);
  private _service = inject(TaGridViewService);

  override ngOnInit() {
    super.ngOnInit();
    const raw = this._session.getFilter(this.gridId());

    this._grid.init({
      colsMetaData: this.colsMetaData(),
      initialFilter: raw ?? [],
      data: this.initialData(),
      preset: this.preset(),
      services: this.model()
        ? { getData$: params => this._service.getData$<T>(this.model(), params) }
        : undefined,
    });
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    this._grid.destroy();
  }
}
