import { TranslateService, provideTranslateService, TranslateLoader } from '@ngx-translate/core';
export { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import * as i0 from '@angular/core';
import { Injectable, inject, Optional, Inject, InjectionToken, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import { Subject, BehaviorSubject, debounceTime, mergeMap, map, forkJoin } from 'rxjs';
import { SessionStorage } from 'storage-manager-js';
import { HttpClient } from '@angular/common/http';
import { GraphSchema, baseStrapiProps, Apollo_gql, TaBaseStrapiService } from '@ta/server';

class TaTranslationRegistryService {
    constructor() {
        this.registered = [];
        this.newRegistrationSubscription$ = new Subject();
    }
    register(register) {
        this.registered.push(register);
        this.newRegistrationSubscription$.next(null);
    }
    getTranslations(lang) {
        return this.registered.map((r) => r.getTranslation(lang));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationRegistryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationRegistryService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationRegistryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });

/**
 * @deprecated
 */
class TaAbstractTranslationModule {
    constructor(id, lang) {
        this._registry = inject(TaTranslationRegistryService);
        this.translation = new BehaviorSubject({});
        this.id = id;
        this._lang = lang;
        this._registry.register(this);
    }
    getTranslation(lang) {
        this._addTranslation(this._lang[lang]);
        return this.translation;
    }
    _addTranslation(obj) {
        const translation = {};
        if (!translation[this.id]) {
            translation[this.id] = {};
        }
        translation[this.id] = obj;
        this.translation.next(translation);
    }
}

const TRANSLATION_CONFIG = "config_translation";
class TaTranslationService {
    constructor(_config = {
        default: "fr",
        supportedLanguages: ["fr"],
    }) {
        this._config = _config;
        this.translateService = inject(TranslateService);
        this._registry = inject(TaTranslationRegistryService);
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translateService.setDefaultLang(this._config.default);
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        let lang = SessionStorage.get("lang") ??
            this.translateService.getBrowserLang() ??
            this._config.default;
        if (!lang ||
            !this._config.supportedLanguages.find((langId) => langId === lang)) {
            lang = this._config.default;
        }
        this.translateService.use(lang);
        this._registry.newRegistrationSubscription$
            .pipe(debounceTime(100), mergeMap(() => this.translateService.reloadLang(this.translateService.currentLang))
        // tap(data => console.log('reload lang', data))
        )
            .subscribe({
            next: (translations) => this.translateService.onTranslationChange.emit({
                lang: this.translateService.currentLang,
                translations,
            }),
        });
        this.translateService.onLangChange.subscribe(({ lang }) => {
            if (!SessionStorage.has("lang")) {
                SessionStorage.set("lang", lang);
                return;
            }
            if (lang === SessionStorage.get("lang")) {
                return;
            }
            SessionStorage.set("lang", lang);
            location.reload();
        });
    }
    init() { }
    getLanguage() {
        return this.translateService.currentLang;
    }
    get(key, interpolateParams) {
        return this.translateService.get(key, interpolateParams);
    }
    use(lang) {
        return this.translateService.use(lang);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationService, deps: [{ token: TRANSLATION_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [TRANSLATION_CONFIG]
                }] }] });

const props$1 = ["key"];
const featureProps = new GraphSchema(props$1.concat(baseStrapiProps));

const props = ["key", "feature", "value"];
const translationProps = new GraphSchema(props.concat(baseStrapiProps));

function GET_TRANSLATIONS(locale, feature) {
    const filters = { feature: { key: { eq: feature } } };
    return {
        query: Apollo_gql `
      query Translations($locale: I18NLocaleCode!, $filters: TranslationFiltersInput!) {
        translations(locale: $locale, filters: $filters, pagination: { pageSize: 50000 }) {
          ${translationProps.get("key")}
          ${translationProps.get("value")}
          ${translationProps.get("feature")} {
            ${featureProps.get("key")}
          }
        }
      }
    `,
        variables: {
            locale: locale,
            filters: filters,
        },
    };
}

var TranslationSourceType;
(function (TranslationSourceType) {
    TranslationSourceType["GRAPHQL"] = "graphql";
    TranslationSourceType["FILE"] = "file";
})(TranslationSourceType || (TranslationSourceType = {}));
const TRANSLATION_SOURCE_CONFIG = new InjectionToken("TRANSLATION_SOURCE_CONFIG", {
    providedIn: "root",
    factory: () => ({
        type: TranslationSourceType.GRAPHQL,
    }),
});

class TaLazyTranslationService extends TaBaseStrapiService {
    get id() {
        return this._id;
    }
    constructor(id, isApp = false) {
        super();
        this._registry = inject(TaTranslationRegistryService);
        this._sourceConfig = inject(TRANSLATION_SOURCE_CONFIG);
        this._http = inject(HttpClient);
        this._id = "";
        this._isApp = false;
        this._id = id;
        this._isApp = isApp;
        this._registry.register(this);
    }
    static getInstance() {
        return inject(this);
    }
    getTranslation(lang) {
        const source$ = this._sourceConfig.type === TranslationSourceType.FILE
            ? this._getTranslationsFromFile(lang)
            : this._getTranslationsFromGraphQL(lang);
        return source$.pipe(map((translations) => translations.reduce((acc, translation) => {
            acc[(this._isApp ? "" : this._id + ".") + translation.key.trim()] =
                translation.value;
            return acc;
        }, {})), map((translations) => Object.entries(translations).reduce((acc, [key, value]) => {
            const keys = key.split(".");
            keys.reduce((current, k, index) => {
                if (index === keys.length - 1) {
                    current[k] = value;
                }
                else {
                    current[k] = current[k] || {};
                }
                return current[k];
            }, acc);
            return acc;
        }, {})));
    }
    _getTranslationsFromFile(lang) {
        return this._http
            .get(`${this._sourceConfig.filePath}${this._id}/${lang}.json`)
            .pipe(map((jsonData) => Object.entries(jsonData).map(([key, value]) => ({
            key,
            value,
        }))));
    }
    _getTranslationsFromGraphQL(lang) {
        return this._strapiService.fetchQueryList$(GET_TRANSLATIONS(lang, this._id), "translations");
    }
}

class TaTranslationLoader {
    constructor() {
        this.registry = inject(TaTranslationRegistryService);
    }
    getTranslation(lang) {
        return forkJoin([...this.registry.getTranslations(lang)]).pipe(map((translations) => translations.reduce((acc, translation) => {
            if (!translation) {
                return acc;
            }
            return this._merge(acc, translation);
        }, {})));
    }
    _merge(current, additionalTranslation) {
        return this._mergeDeep(current, additionalTranslation);
    }
    /**
     * Simple object check.
     * @param item Object
     */
    _isObject(item) {
        return !!(item && typeof item === "object" && !Array.isArray(item));
    }
    /**
     * Deep merge two objects.
     * @param target Object
     * @param ...sources objects
     */
    _mergeDeep(target, ...sources) {
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
                }
                else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
        return this._mergeDeep(target, ...sources);
    }
}

function HttpLoaderFactory() {
    return new TaTranslationLoader();
}
function initTranslation(service) {
    const fn = () => service.init();
    return fn;
}
const provideTranslation = (data) => [
    provideTranslateService({
        loader: {
            provide: TranslateLoader,
            useClass: TaTranslationLoader,
        },
    }),
    {
        provide: LOCALE_ID,
        deps: [TaTranslationService],
        useFactory: (TranslationService) => TranslationService.getLanguage(),
    },
    {
        provide: APP_INITIALIZER,
        useFactory: initTranslation,
        deps: [TaTranslationService],
        multi: true,
    },
    {
        provide: TRANSLATION_CONFIG,
        useValue: {
            default: data.default,
            supportedLanguages: data.supportedLanguages,
        },
    },
    {
        provide: TRANSLATION_SOURCE_CONFIG,
        useValue: data.source ?? {
            type: TranslationSourceType.GRAPHQL,
        },
    },
];

/*
 * Public API Surface of translation
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HttpLoaderFactory, TRANSLATION_CONFIG, TRANSLATION_SOURCE_CONFIG, TaAbstractTranslationModule, TaLazyTranslationService, TaTranslationRegistryService, TaTranslationService, TranslationSourceType, initTranslation, provideTranslation };
//# sourceMappingURL=ta-translation.mjs.map
