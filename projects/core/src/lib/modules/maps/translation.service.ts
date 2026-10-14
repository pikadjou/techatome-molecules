import { Injectable } from "@angular/core";

import { TaLazyTranslationService } from "@ta/translation";

@Injectable({
  providedIn: "root",
})
export class TaTranslationMaps extends TaLazyTranslationService {
  constructor() {
    super("maps");
  }
}
