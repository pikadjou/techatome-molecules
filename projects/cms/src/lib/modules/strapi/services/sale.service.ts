import { Injectable, LOCALE_ID, inject } from '@angular/core';

import { map } from 'rxjs';

import { HandleComplexRequest, TaBaseStrapiService } from '@ta/server';

import { Sale } from './dto/sale';
import { GET_SALE_CONTENT } from './strapiQueries';

@Injectable({
  providedIn: 'root',
})
export class TaSaleService extends TaBaseStrapiService {
  readonly local = inject(LOCALE_ID);

  readonly saleContents = new HandleComplexRequest<Sale>();

  constructor() {
    super();
  }

  public fetchSaleContents$(tenantId: string) {
    return this.saleContents.fetch(
      tenantId,
      this._strapiService
        .fetchQueryList$<Sale>(GET_SALE_CONTENT(tenantId, this.local), 'sales')
        .pipe(map(list => list[0]))
    );
  }
}
