import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

import { Observable, map } from 'rxjs';

import { TaBaseStrapiService } from '@ta/server';

import { Translation } from './dto/translation';
import { GET_TRANSLATIONS } from './queries';
import { ITranslation, TaTranslationRegistryService } from './translation-registry.service';
import { TRANSLATION_SOURCE_CONFIG, TranslationSourceType } from './translation-source.config';

export abstract class TaLazyTranslationService extends TaBaseStrapiService implements ITranslation {
  get id() {
    return this._id;
  }
  private readonly _registry = inject(TaTranslationRegistryService);
  private readonly _sourceConfig = inject(TRANSLATION_SOURCE_CONFIG);
  private readonly _http = inject(HttpClient);

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
    const source$ =
      this._sourceConfig.type === TranslationSourceType.FILE
        ? this._getTranslationsFromFile(lang)
        : this._getTranslationsFromGraphQL(lang);

    return source$.pipe(
      map((translations) =>
        translations.reduce<{ [index: string]: string }>((acc, translation) => {
          acc[(this._isApp ? '' : this._id + '.') + translation.key.trim()] = translation.value;
          return acc;
        }, {}),
      ),
      map((translations) =>
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
        }, {}),
      ),
    );
  }

  private _getTranslationsFromFile(lang: string) {
    return this._http.get<Translation[]>(`${this._sourceConfig.filePath}${this._id}/${lang}.json`);
  }

  private _getTranslationsFromGraphQL(lang: string) {
    return this._strapiService.fetchQueryList$<Translation>(GET_TRANSLATIONS(lang, this._id), 'translations');
  }
}
