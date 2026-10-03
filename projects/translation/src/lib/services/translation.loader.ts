import { inject } from "@angular/core";

import { TranslateLoader } from "@ngx-translate/core";
import { Observable, catchError, forkJoin, map, of } from "rxjs";

import { TaTranslationRegistryService } from "./translation-registry.service";

export class TaTranslationLoader implements TranslateLoader {
  private _registry = inject(TaTranslationRegistryService);
  constructor() {}

  getTranslation(lang: string): Observable<object> {
    const sources = this._registry.getTranslations(lang);
    if (sources.length === 0) {
      return of({});
    }
    // Un module dont le fichier est absent ou en erreur ne doit pas priver
    // l'application de toutes ses autres traductions.
    return forkJoin(
      sources.map((source$) => source$.pipe(catchError(() => of(null))))
    ).pipe(
      map((translations) =>
        translations.reduce<object>((acc, translation) => {
          if (!translation) {
            return acc;
          }
          return this._merge(acc, translation);
        }, {})
      )
    );
  }

  private _merge(current: object, additionalTranslation: object): object {
    return this._mergeDeep(current, additionalTranslation);
  }

  /**
   * Simple object check.
   * @param item Object
   */
  private _isObject(item: object | undefined): boolean {
    return !!(item && typeof item === "object" && !Array.isArray(item));
  }

  /**
   * Deep merge two objects.
   * @param target Object
   * @param ...sources objects
   */
  private _mergeDeep(
    target: { [key: string]: any },
    ...sources: { [key: string]: any }[]
  ): { [key: string]: any } {
    if (!sources.length) {
      return target;
    }
    const source = sources.shift();
    if (this._isObject(target) && this._isObject(source)) {
      for (const key in source) {
        if (this._isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, { [key]: {} });
          }
          this._mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }

    return this._mergeDeep(target, ...sources);
  }
}
