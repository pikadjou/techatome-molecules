import { Injectable } from '@angular/core';

import { CamLazyTranslationService } from '@camelot/translation';

@Injectable({
  providedIn: 'root',
})
export class CamTranslationUI extends CamLazyTranslationService {
  constructor() {
    super('ui');
  }
}
