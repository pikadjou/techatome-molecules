import { inject, Injectable } from '@angular/core';

import { HandleComplexRequest, TaBaseService, TaStrapiService } from '@ta/server';

import { ADD_AGREEMENT, DELETE_AGREEMENT, UPDATE_AGREEMENT } from './mutations';
import { Agreement } from './dto/agreement';
import { combineLatest, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgreementsService extends TaBaseService {
  protected readonly _strapiService = inject(TaStrapiService);

  readonly agreementssByCategory = new HandleComplexRequest<Agreement[]>();

  constructor() {
    super();
  }

  public addAgreements$(agreements: Agreement[]) {
    return combineLatest(
      agreements.map((agreement) =>
        this._strapiService.mutate$<Agreement>(ADD_AGREEMENT(agreement), 'createAgreement'),
      ),
    );
  }
  public updateAgreements$(currentAgreement: Agreement[], agreements: Agreement[]) {
    const toDelete = this.deleteAgreements$(currentAgreement.filter(curr =>
      !agreements.find(agree => agree.key === curr.key)
    ).map(item => item.documentId ?? ''));

    const toAdd = this.addAgreements$(agreements.filter(agree =>
      !currentAgreement.find(curr => curr.key === agree.key)
    ));

    const toUpdate = combineLatest(agreements.filter(curr =>
      currentAgreement.find(agree => agree.key === curr.key)
    ).map(item => {
        const documentId = currentAgreement.find(agree => agree.key === item.key)?.documentId;
        return this._strapiService.mutate$<Agreement>(UPDATE_AGREEMENT(documentId ?? '', item), 'updateAgreement')
      }
    ));

    return combineLatest([toDelete, toAdd, toUpdate]).pipe(map(values => [...values[1].map(i => i.documentId ?? ''), ...values[2].map(i => i.documentId ?? '')]))
  }
  public deleteAgreements$(ids: string[]) {
    if(ids.length === 0) {
      return of([]);
    }
    return combineLatest(
      ids.map((id) =>
        this._strapiService.mutate$<Agreement>(DELETE_AGREEMENT(id), 'deleteAgreement')
      )
    )

  }
}
