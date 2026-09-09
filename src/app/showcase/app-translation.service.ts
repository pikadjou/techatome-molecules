import { Injectable } from "@angular/core";

import { TaLazyTranslationService } from "@ta/translation";

/**
 * Libellés propres à l'application de démonstration — chargés depuis
 * `assets/i18n/app/<lang>.json`. Les clés y sont écrites en entier
 * (pas de préfixe automatique), notamment les en-têtes de colonnes
 * `grid.<gridId>.core.<champ>` attendues par @ta/features.
 */
@Injectable({
  providedIn: "root",
})
export class AppTranslationService extends TaLazyTranslationService {
  constructor() {
    super("app", true);
  }
}
