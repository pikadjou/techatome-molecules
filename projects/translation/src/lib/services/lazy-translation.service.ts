import { inject } from '@angular/core';

import { Observable, map, of } from 'rxjs';

import { CamBaseStrapiService } from '@ta/server';

import { Translation } from './dto/translation';
// import { GET_TRANSLATIONS } from './queries';
import { CamTranslationRegistryService, ITranslation } from './translation-registry.service';

export abstract class CamLazyTranslationService extends CamBaseStrapiService implements ITranslation {
  get id() {
    return this._id;
  }
  private readonly _registry = inject(CamTranslationRegistryService);

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
    // this._strapiService.fetchQueryList$<Translation>(GET_TRANSLATIONS(lang, this._id), 'translations')
    return of<Translation[]>([]).pipe(
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
