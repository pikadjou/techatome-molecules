import { Injectable } from '@angular/core';

import { CamLazyTranslationService } from '@ta/translation';

@Injectable({
  providedIn: 'root',
})
export class CamTranslationCore extends CamLazyTranslationService {
  constructor() {
    super('core');
  }
}
