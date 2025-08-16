import { Injectable } from '@angular/core';

import { CamLazyTranslationService } from '@ta/translation';

@Injectable({
  providedIn: 'root',
})
export class CamTranslationCommunication extends CamLazyTranslationService {
  constructor() {
    super('communication');
  }
}
