import { Injectable } from '@angular/core';

import { CamLazyTranslationService } from '@ta/translation';

@Injectable({
  providedIn: 'root',
})
export class CamTranslationUser extends CamLazyTranslationService {
  constructor() {
    super('user');
  }
}
