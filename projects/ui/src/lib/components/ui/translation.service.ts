import { Injectable } from '@angular/core';

import { TaLazyTranslationService } from '@ta/translation';

@Injectable({
  providedIn: 'root',
})
export class TaTranslationUI extends TaLazyTranslationService {
  constructor() {
    super('ui');
  }
}
