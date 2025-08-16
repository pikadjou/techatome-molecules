import { Injectable } from '@angular/core';

import { CamLazyTranslationService } from '@camelot/translation';

@Injectable({
  providedIn: 'root',
})
export class CamTranslationContainer extends CamLazyTranslationService {
  constructor() {
    super('container');
  }
}
