import { inject } from '@angular/core';

import { CamBaseService } from '../server/baseService';
import { CamStrapiService } from './strapi.service';

export abstract class CamBaseStrapiService extends CamBaseService {
  protected _strapiService = inject(CamStrapiService);
}
