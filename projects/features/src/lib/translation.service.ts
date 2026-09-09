import { Injectable } from '@angular/core';

import { TaLazyTranslationService } from '@ta/translation';

/**
 * Charge les libellés de @ta/features depuis `assets/i18n/grid/<lang>.json`.
 * Les clés du fichier sont automatiquement préfixées par `grid.`.
 */
@Injectable({
  providedIn: 'root',
})
export class TaTranslationGrid extends TaLazyTranslationService {
  constructor() {
    super('grid');
  }
}
