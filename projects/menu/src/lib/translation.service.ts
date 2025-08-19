import { Injectable } from '@angular/core';

import { CamLazyTranslationService } from '@ta/translation';

@Injectable({
  providedIn: 'root',
})
export class CamTranslationMenu extends CamLazyTranslationService {
  constructor() {
    super('menu');
  }
}