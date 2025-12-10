import { inject } from "@angular/core";

import { TaBaseService } from "../server/baseService";
import { TaStrapiService } from "./strapi.service";

export abstract class TaBaseStrapiService extends TaBaseService {
  protected _strapiService = inject(TaStrapiService);
}
