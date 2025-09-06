import { Injectable } from '@angular/core';

import { TaLazyTranslationService } from '@ta/translation';

@Injectable({
  providedIn: 'root',
})
export class TaTranslationLayout extends TaLazyTranslationService {
  constructor() {
    super('layout');
  }
}
