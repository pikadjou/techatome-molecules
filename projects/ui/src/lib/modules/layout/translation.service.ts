import { Injectable } from '@angular/core';

import { CamLazyTranslationService } from '@camelot/translation';

@Injectable({
  providedIn: 'root',
})
export class CamTranslationLayout extends CamLazyTranslationService {
  constructor() {
    super('layout');
  }
}
