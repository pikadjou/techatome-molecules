import { Injectable, LOCALE_ID, inject } from '@angular/core';

import { CamBaseStrapiService, HandleComplexRequest } from '@ta/server';
import { map } from 'rxjs';

import { Cms } from './dto/cms';
import { GET_CMS_CONTENT } from './strapiQueries';

@Injectable({
  providedIn: 'root',
})
export class CamCmsService extends CamBaseStrapiService {
  readonly local = inject(LOCALE_ID);
  readonly cmsContents = new HandleComplexRequest<Cms>();

  constructor() {
    super();
  }

  public fetchCmsContents$(type: string, tenantId: string) {
    return this.cmsContents.fetch(
      type,
      this._strapiService
        .fetchQueryList$<Cms>(GET_CMS_CONTENT(type, this.local, tenantId), 'contents')
        .pipe(map(list => list[0]))
    );
  }
}
