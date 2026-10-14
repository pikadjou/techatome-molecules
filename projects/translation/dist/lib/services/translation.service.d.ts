import { InjectionToken } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare const TRANSLATION_CONFIG: InjectionToken<ITranslationConfig>;
export interface ITranslationConfig {
    default: string;
    supportedLanguages: string[];
}
export declare class TaTranslationService {
    translateService: TranslateService;
    private _registry;
    /** Langue active, à chaque changement (les applications n'importent pas ngx-translate). */
    readonly onLangChange$: Observable<string>;
    /** Fichiers de traduction (re)chargés sans changement de langue : `reloadLang()`. */
    readonly onTranslationChange$: Observable<string>;
    private readonly _config;
    constructor();
    init(): void;
    getLanguage(): string;
    get(key: string | string[], interpolateParams?: Object): Observable<any>;
    /** Traduction immédiate ; rend la clé tant que les fichiers ne sont pas chargés. */
    instant(key: string | string[], interpolateParams?: Object): string;
    /** Traduction qui suit les changements de langue. */
    stream(key: string | string[], interpolateParams?: Object): Observable<string>;
    use(lang: string): Observable<import("@ngx-translate/core").InterpolatableTranslationObject>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaTranslationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaTranslationService>;
}
