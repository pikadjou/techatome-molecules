import { inject } from "@angular/core";

import { BehaviorSubject } from "rxjs";

import {
  ITranslation,
  TaTranslationRegistryService,
} from "../services/translation-registry.service";

/**
 * @deprecated
 */
export abstract class TaAbstractTranslationModule implements ITranslation {
  protected _registry = inject(TaTranslationRegistryService);

  public id: string;
  protected translation: BehaviorSubject<{ [index: string]: any }> =
    new BehaviorSubject({});

  private _lang: { [index: string]: object };

  constructor(
    id: string,
    lang: { en: object; fr: object; nl: object; es: object }
  ) {
    this.id = id;
    this._lang = lang;
    this._registry.register(this);
  }

  getTranslation(lang: string) {
    this._addTranslation(this._lang[lang]);
    return this.translation;
  }

  protected _addTranslation(obj: object): void {
    const translation: { [index: string]: any } = {};
    if (!translation[this.id]) {
      translation[this.id] = {};
    }
    translation[this.id] = obj;

    this.translation.next(translation);
  }
}
