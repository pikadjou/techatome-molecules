import { Injectable } from '@angular/core';

import { CamLazyTranslationService } from '@ta/translation';

@Injectable({
  providedIn: 'root',
})
export class CamTranslationContainer extends CamLazyTranslationService {
  constructor() {
    super('container');
  }
}
