import { inject } from '@angular/core';

import { Observable, map } from 'rxjs';

import { TaBaseStrapiService } from '@ta/server';

import { Translation } from './dto/translation';
import { GET_TRANSLATIONS } from './queries';
import { ITranslation, TaTranslationRegistryService } from './translation-registry.service';

export abstract class TaLazyTranslationService extends TaBaseStrapiService implements ITranslation {
  get id() {
    return this._id;
  }
  private readonly _registry = inject(TaTranslationRegistryService);

  private _id = '';
  private _isApp = false;

  constructor(id: string, isApp = false) {
    super();

    this._id = id;
    this._isApp = isApp;
    this._registry.register(this);
  }

  static getInstance() {
    return inject(this);
  }

  public getTranslation(lang: string): Observable<object | null> {
    return this._strapiService.fetchQueryList$<Translation>(GET_TRANSLATIONS(lang, this._id), 'translations').pipe(
      map(translations =>
        translations.reduce<{ [index: string]: string }>((acc, translation) => {
          acc[(this._isApp ? '' : this._id + '.') + translation.key.trim()] = translation.value;
          return acc;
        }, {})
      ),
      map(translations =>
        Object.entries(translations).reduce((acc, [key, value]) => {
          const keys = key.split('.');
          keys.reduce<{ [index: string]: any }>((current, k, index) => {
            if (index === keys.length - 1) {
              current[k] = value;
            } else {
              current[k] = current[k] || {};
            }
            return current[k];
          }, acc);

          return acc;
        }, {})
      )
    );
  }
}
