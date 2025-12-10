import { Injectable } from "@angular/core";

import { TaLazyTranslationService } from "@ta/translation";

@Injectable({
  providedIn: "root",
})
export class TaTranslationMenu extends TaLazyTranslationService {
  constructor() {
    super("menu");
  }
}
