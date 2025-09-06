import { Injectable } from '@angular/core';

import { of } from 'rxjs';

import { GraphEndpoint, HandleComplexRequest, TaBaseService } from '@ta/server';

import { Picture } from './dto/picture';

const graphEndpoint: GraphEndpoint = {
  clientName: 'documentService',
  endpoint: 'document',
};

@Injectable({
  providedIn: 'root',
})
export class AppPicturesService extends TaBaseService {
  public dashboardByProject = new HandleComplexRequest<Picture[]>();

  constructor() {
    super();
    super.registerRoutes({ graphEndpoint: graphEndpoint });
  }

  public fetchDashboardProjects$(id: string) {
    return this.dashboardByProject.fetch(
      id,
      of(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => ({
          url: 'https://placehold.co/400',
        }))
      )
    );
  }
}
