import { Injectable } from '@angular/core';

import { CamLazyTranslationService } from '@camelot/translation';

@Injectable({
  providedIn: 'root',
})
export class CamTranslationForm extends CamLazyTranslationService {
  constructor() {
    super('form');
  }
}
