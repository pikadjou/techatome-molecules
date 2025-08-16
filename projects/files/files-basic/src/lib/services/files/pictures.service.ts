import { Injectable } from '@angular/core';

import { CamBaseService, GraphEndpoint, HandleComplexRequest } from '@ta/server';
import { of } from 'rxjs';

import { Picture } from './dto/picture';

const graphEndpoint: GraphEndpoint = {
  clientName: 'documentService',
  endpoint: 'document',
};

@Injectable({
  providedIn: 'root',
})
export class AppPicturesService extends CamBaseService {
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
