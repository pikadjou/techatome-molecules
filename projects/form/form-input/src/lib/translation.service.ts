import { Injectable } from '@angular/core';

import { TaLazyTranslationService } from '@ta/translation';

@Injectable({
  providedIn: 'root',
})
export class TaTranslationInput extends TaLazyTranslationService {
  constructor() {
    super('input');
  }
}
