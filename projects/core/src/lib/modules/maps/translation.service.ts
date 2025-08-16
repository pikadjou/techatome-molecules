import { Injectable } from '@angular/core';

import { CamLazyTranslationService } from '@ta/translation';

@Injectable({
  providedIn: 'root',
})
export class CamTranslationMAps extends CamLazyTranslationService {
  constructor() {
    super('maps');
  }
}
