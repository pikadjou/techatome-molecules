import { Injectable } from '@angular/core';

import { TaLazyTranslationService } from '@ta/translation';

@Injectable({
  providedIn: 'root',
})
export class TaTranslationMAps extends TaLazyTranslationService {
  constructor() {
    super('maps');
  }
}
