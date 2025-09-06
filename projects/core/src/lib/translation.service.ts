import { Injectable } from '@angular/core';

import { TaLazyTranslationService } from '@ta/translation';

@Injectable({
  providedIn: 'root',
})
export class TaTranslationCore extends TaLazyTranslationService {
  constructor() {
    super('core');
  }
}
