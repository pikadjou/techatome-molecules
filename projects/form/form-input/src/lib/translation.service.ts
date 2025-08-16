import { Injectable } from '@angular/core';

import { CamLazyTranslationService } from '@camelot/translation';

@Injectable({
  providedIn: 'root',
})
export class CamTranslationInput extends CamLazyTranslationService {
  constructor() {
    super('input');
  }
}
