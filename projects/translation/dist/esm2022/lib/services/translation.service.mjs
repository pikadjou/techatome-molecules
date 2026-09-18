import { Inject, Injectable, Optional, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, map, mergeMap } from 'rxjs';
import { LocalStorage } from 'storage-manager-js';
import { TaTranslationRegistryService } from './translation-registry.service';
import * as i0 from "@angular/core";
export const TRANSLATION_CONFIG = 'config_translation';
export class TaTranslationService {
    constructor(_config = {
        default: 'fr',
        supportedLanguages: ['fr'],
    }) {
        this._config = _config;
        this.translateService = inject(TranslateService);
        this._registry = inject(TaTranslationRegistryService);
        /** Langue active, à chaque changement (les applications n'importent pas ngx-translate). */
        this.onLangChange$ = this.translateService.onLangChange.pipe(map(({ lang }) => lang));
        /** Fichiers de traduction (re)chargés sans changement de langue : `reloadLang()`. */
        this.onTranslationChange$ = this.translateService.onTranslationChange.pipe(map(({ lang }) => lang));
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translateService.setDefaultLang(this._config.default);
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        let lang = LocalStorage.get('lang') ?? this.translateService.getBrowserLang() ?? this._config.default;
        if (!lang || !this._config.supportedLanguages.find(langId => langId === lang)) {
            lang = this._config.default;
        }
        this.translateService.use(lang);
        this._registry.newRegistrationSubscription$
            .pipe(debounceTime(100), mergeMap(() => this.translateService.reloadLang(this.translateService.currentLang))
        // tap(data => console.log('reload lang', data))
        )
            .subscribe({
            next: translations => this.translateService.onTranslationChange.emit({
                lang: this.translateService.currentLang,
                translations,
            }),
        });
        this.translateService.onLangChange.subscribe(({ lang }) => {
            if (!LocalStorage.has('lang')) {
                LocalStorage.set('lang', lang);
                return;
            }
            if (lang === LocalStorage.get('lang')) {
                return;
            }
            LocalStorage.set('lang', lang);
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
    /** Traduction immédiate ; rend la clé tant que les fichiers ne sont pas chargés. */
    instant(key, interpolateParams) {
        return this.translateService.instant(key, interpolateParams);
    }
    /** Traduction qui suit les changements de langue. */
    stream(key, interpolateParams) {
        return this.translateService.stream(key, interpolateParams);
    }
    use(lang) {
        return this.translateService.use(lang);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationService, deps: [{ token: TRANSLATION_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [TRANSLATION_CONFIG]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxZQUFZLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBRTlFLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLG9CQUFvQixDQUFDO0FBU3ZELE1BQU0sT0FBTyxvQkFBb0I7SUFjL0IsWUFHVSxVQUE4QjtRQUNwQyxPQUFPLEVBQUUsSUFBSTtRQUNiLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDO0tBQzNCO1FBSE8sWUFBTyxHQUFQLE9BQU8sQ0FHZDtRQW5CSSxxQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzQyxjQUFTLEdBQUcsTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFFekQsMkZBQTJGO1FBQzNFLGtCQUFhLEdBQXVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUN6RixHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDeEIsQ0FBQztRQUVGLHFGQUFxRjtRQUNyRSx5QkFBb0IsR0FBdUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FDdkcsR0FBRyxDQUFDLENB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QztJQUN6QyxDQUFDOytHQW5GVSxvQkFBb0Isa0JBZ0JyQixrQkFBa0I7bUhBaEJqQixvQkFBb0IsY0FGbkIsTUFBTTs7NEZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBZ0JJLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIGRlYm91bmNlVGltZSwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICdzdG9yYWdlLW1hbmFnZXItanMnO1xyXG5cclxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblJlZ2lzdHJ5U2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRpb24tcmVnaXN0cnkuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgVFJBTlNMQVRJT05fQ09ORklHID0gJ2NvbmZpZ190cmFuc2xhdGlvbic7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyYW5zbGF0aW9uQ29uZmlnIHtcclxuICBkZWZhdWx0OiBzdHJpbmc7XHJcbiAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhVHJhbnNsYXRpb25TZXJ2aWNlIHtcclxuICBwdWJsaWMgdHJhbnNsYXRlU2VydmljZSA9IGluamVjdChUcmFuc2xhdGVTZXJ2aWNlKTtcclxuICBwcml2YXRlIF9yZWdpc3RyeSA9IGluamVjdChUYVRyYW5zbGF0aW9uUmVnaXN0cnlTZXJ2aWNlKTtcclxuXHJcbiAgLyoqIExhbmd1ZSBhY3RpdmUsIMOgIGNoYXF1ZSBjaGFuZ2VtZW50IChsZXMgYXBwbGljYXRpb25zIG4naW1wb3J0ZW50IHBhcyBuZ3gtdHJhbnNsYXRlKS4gKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgb25MYW5nQ2hhbmdlJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5waXBlKFxyXG4gICAgbWFwKCh7IGxhbmcgfSkgPT4gbGFuZylcclxuICApO1xyXG5cclxuICAvKiogRmljaGllcnMgZGUgdHJhZHVjdGlvbiAocmUpY2hhcmfDqXMgc2FucyBjaGFuZ2VtZW50IGRlIGxhbmd1ZSA6IGByZWxvYWRMYW5nKClgLiAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBvblRyYW5zbGF0aW9uQ2hhbmdlJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uVHJhbnNsYXRpb25DaGFuZ2UucGlwZShcclxuICAgIG1hcCgoeyBsYW5nIH0pID0+IGxhbmcpXHJcbiAgKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChUUkFOU0xBVElPTl9DT05GSUcpXHJcbiAgICBwcml2YXRlIF9jb25maWc6IElUcmFuc2xhdGlvbkNvbmZpZyA9IHtcclxuICAgICAgZGVmYXVsdDogJ2ZyJyxcclxuICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBbJ2ZyJ10sXHJcbiAgICB9XHJcbiAgKSB7XHJcbiAgICAvLyB0aGlzIGxhbmd1YWdlIHdpbGwgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIHdoZW4gYSB0cmFuc2xhdGlvbiBpc24ndCBmb3VuZCBpbiB0aGUgY3VycmVudCBsYW5ndWFnZVxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKHRoaXMuX2NvbmZpZy5kZWZhdWx0KTtcclxuXHJcbiAgICAvLyB0aGUgbGFuZyB0byB1c2UsIGlmIHRoZSBsYW5nIGlzbid0IGF2YWlsYWJsZSwgaXQgd2lsbCB1c2UgdGhlIGN1cnJlbnQgbG9hZGVyIHRvIGdldCB0aGVtXHJcbiAgICBsZXQgbGFuZzogc3RyaW5nID0gTG9jYWxTdG9yYWdlLmdldCgnbGFuZycpID8/IHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRCcm93c2VyTGFuZygpID8/IHRoaXMuX2NvbmZpZy5kZWZhdWx0O1xyXG5cclxuICAgIGlmICghbGFuZyB8fCAhdGhpcy5fY29uZmlnLnN1cHBvcnRlZExhbmd1YWdlcy5maW5kKGxhbmdJZCA9PiBsYW5nSWQgPT09IGxhbmcpKSB7XHJcbiAgICAgIGxhbmcgPSB0aGlzLl9jb25maWcuZGVmYXVsdDtcclxuICAgIH1cclxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XHJcbiAgICB0aGlzLl9yZWdpc3RyeS5uZXdSZWdpc3RyYXRpb25TdWJzY3JpcHRpb24kXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxyXG4gICAgICAgIG1lcmdlTWFwKCgpID0+IHRoaXMudHJhbnNsYXRlU2VydmljZS5yZWxvYWRMYW5nKHRoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZykpXHJcbiAgICAgICAgLy8gdGFwKGRhdGEgPT4gY29uc29sZS5sb2coJ3JlbG9hZCBsYW5nJywgZGF0YSkpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSh7XHJcbiAgICAgICAgbmV4dDogdHJhbnNsYXRpb25zID0+XHJcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25UcmFuc2xhdGlvbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgbGFuZzogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnMsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHsgbGFuZyB9KSA9PiB7XHJcbiAgICAgIGlmICghTG9jYWxTdG9yYWdlLmhhcygnbGFuZycpKSB7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldCgnbGFuZycsIGxhbmcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxhbmcgPT09IExvY2FsU3RvcmFnZS5nZXQoJ2xhbmcnKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgTG9jYWxTdG9yYWdlLnNldCgnbGFuZycsIGxhbmcpO1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7fVxyXG5cclxuICBwdWJsaWMgZ2V0TGFuZ3VhZ2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nIHwgc3RyaW5nW10sIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldChrZXksIGludGVycG9sYXRlUGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKiBUcmFkdWN0aW9uIGltbcOpZGlhdGUgOyByZW5kIGxhIGNsw6kgdGFudCBxdWUgbGVzIGZpY2hpZXJzIG5lIHNvbnQgcGFzIGNoYXJnw6lzLiAqL1xyXG4gIHB1YmxpYyBpbnN0YW50KGtleTogc3RyaW5nIHwgc3RyaW5nW10sIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0KTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudChrZXksIGludGVycG9sYXRlUGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKiBUcmFkdWN0aW9uIHF1aSBzdWl0IGxlcyBjaGFuZ2VtZW50cyBkZSBsYW5ndWUuICovXHJcbiAgcHVibGljIHN0cmVhbShrZXk6IHN0cmluZyB8IHN0cmluZ1tdLCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnN0cmVhbShrZXksIGludGVycG9sYXRlUGFyYW1zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcclxuICB9XHJcbn1cclxuIl19