import { Injectable } from '@angular/core';

import { TaLazyTranslationService } from '@ta/translation';

@Injectable({
  providedIn: 'root',
})
export class TaTranslationContainer extends TaLazyTranslationService {
  constructor() {
    super('container');
  }
}
