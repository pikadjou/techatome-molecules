import { Injectable } from "@angular/core";

import { TaLazyTranslationService } from "@ta/translation";

@Injectable({
  providedIn: "root",
})
export class TaTranslationForm extends TaLazyTranslationService {
  constructor() {
    super("form");
  }
}
