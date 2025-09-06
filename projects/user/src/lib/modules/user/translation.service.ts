import { Injectable } from '@angular/core';

import { TaLazyTranslationService } from '@ta/translation';

@Injectable({
  providedIn: 'root',
})
export class TaTranslationUser extends TaLazyTranslationService {
  constructor() {
    super('user');
  }
}
