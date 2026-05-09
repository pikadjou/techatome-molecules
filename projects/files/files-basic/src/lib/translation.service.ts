import { Injectable } from '@angular/core';

import { TaLazyTranslationService } from '@ta/translation';

@Injectable({ providedIn: 'root' })
export class TaTranslationFiles extends TaLazyTranslationService {
  constructor() {
    super('files');
  }
}
