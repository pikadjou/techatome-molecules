import { Component, Injector, inject, input } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

import { skip } from 'rxjs';

import { IDataService } from '../../models/grid-data';
import { ColMetaData, Filter, PaginationMode, Preset } from '../../models/types';
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

  /** Critères de départ, quand la session n'en a pas retenu pour ce grid. */
  initialFilter = input<Filter[]>([]);

  /** Source de données maison, quand la grille ne lit pas un modèle du serveur. */
  dataService = input<IDataService<T>>();

  /** `cursor` pour une source qui ne sait pas compter : le « voir plus » remplace les numéros de page. */
  pagination = input<PaginationMode>('page');

  pageSize = input<number>();

  private _session = inject(TaGridSessionService);
  private _service = inject(TaGridViewService);
  private _injector = inject(Injector);

  override ngOnInit() {
    super.ngOnInit();
    const saved = this._session.getFilter(this.gridId());

    this._grid.init({
      colsMetaData: this.colsMetaData(),
      initialFilter: saved ?? this.initialFilter(),
      data: this.initialData(),
      preset: this.preset(),
      pagination: this.pagination(),
      pageSize: this.pageSize(),
      services:
        this.dataService() ??
        (this.model() ? { getData$: params => this._service.getData$<T>(this.model(), params) } : undefined),
    });

    // Les critères survivent à la navigation : on les retrouve en revenant sur le grid.
    const table = this._grid.table;
    if (table) {
      this._registerSubscription(
        toObservable(table.filters, { injector: this._injector })
          .pipe(skip(1))
          .subscribe(filters => this._session.setFilter(this.gridId(), filters))
      );
    }
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    this._grid.destroy();
  }
}
