import { Injectable } from '@angular/core';

import { CamLazyTranslationService } from '@ta/translation';

@Injectable({
  providedIn: 'root',
})
export class CamTranslationStrapi extends CamLazyTranslationService {
  constructor() {
    super('strapi');
  }
}
