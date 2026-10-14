import { InjectionToken, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, map, mergeMap } from 'rxjs';
import { LocalStorage } from 'storage-manager-js';
import { TaTranslationRegistryService } from './translation-registry.service';
import * as i0 from "@angular/core";
export const TRANSLATION_CONFIG = new InjectionToken('config_translation');
export class TaTranslationService {
    constructor() {
        this.translateService = inject(TranslateService);
        this._registry = inject(TaTranslationRegistryService);
        /** Langue active, à chaque changement (les applications n'importent pas ngx-translate). */
        this.onLangChange$ = this.translateService.onLangChange.pipe(map(({ lang }) => lang));
        /** Fichiers de traduction (re)chargés sans changement de langue : `reloadLang()`. */
        this.onTranslationChange$ = this.translateService.onTranslationChange.pipe(map(({ lang }) => lang));
        this._config = inject(TRANSLATION_CONFIG, { optional: true }) ?? {
            default: 'fr',
            supportedLanguages: ['fr'],
        };
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translateService.setDefaultLang(this._config.default);
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        let lang = LocalStorage.get('lang') ?? this.translateService.getBrowserLang() ?? this._config.default;
        if (!lang || !this._config.supportedLanguages.find(langId => langId === lang)) {
            lang = this._config.default;
        }
        this.translateService.use(lang);
        this._registry.newRegistrationSubscription$
            .pipe(debounceTime(100), mergeMap(() => this.translateService.reloadLang(this.translateService.currentLang)), takeUntilDestroyed())
            .subscribe({
            next: translations => this.translateService.onTranslationChange.emit({
                lang: this.translateService.currentLang,
                translations,
            }),
        });
        this.translateService.onLangChange.pipe(takeUntilDestroyed()).subscribe(({ lang }) => {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFjLFlBQVksRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFOUUsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxjQUFjLENBQXFCLG9CQUFvQixDQUFDLENBQUM7QUFTL0YsTUFBTSxPQUFPLG9CQUFvQjtJQW1CL0I7UUFsQk8scUJBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRXpELDJGQUEyRjtRQUMzRSxrQkFBYSxHQUF1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDekYsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ3hCLENBQUM7UUFFRixxRkFBcUY7UUFDckUseUJBQW9CLEdBQXVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQ3ZHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUks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Z0JBQWdCLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxHQUFHLENBQUMsSUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzsrR0FqRlUsb0JBQW9CO21IQUFwQixvQkFBb0IsY0FGbkIsTUFBTTs7NEZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBJbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZGVib3VuY2VUaW1lLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICdzdG9yYWdlLW1hbmFnZXItanMnO1xuXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGlvbi1yZWdpc3RyeS5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFRSQU5TTEFUSU9OX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJVHJhbnNsYXRpb25Db25maWc+KCdjb25maWdfdHJhbnNsYXRpb24nKTtcbmV4cG9ydCBpbnRlcmZhY2UgSVRyYW5zbGF0aW9uQ29uZmlnIHtcbiAgZGVmYXVsdDogc3RyaW5nO1xuICBzdXBwb3J0ZWRMYW5ndWFnZXM6IHN0cmluZ1tdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFUcmFuc2xhdGlvblNlcnZpY2Uge1xuICBwdWJsaWMgdHJhbnNsYXRlU2VydmljZSA9IGluamVjdChUcmFuc2xhdGVTZXJ2aWNlKTtcbiAgcHJpdmF0ZSBfcmVnaXN0cnkgPSBpbmplY3QoVGFUcmFuc2xhdGlvblJlZ2lzdHJ5U2VydmljZSk7XG5cbiAgLyoqIExhbmd1ZSBhY3RpdmUsIMOgIGNoYXF1ZSBjaGFuZ2VtZW50IChsZXMgYXBwbGljYXRpb25zIG4naW1wb3J0ZW50IHBhcyBuZ3gtdHJhbnNsYXRlKS4gKi9cbiAgcHVibGljIHJlYWRvbmx5IG9uTGFuZ0NoYW5nZSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2UucGlwZShcbiAgICBtYXAoKHsgbGFuZyB9KSA9PiBsYW5nKVxuICApO1xuXG4gIC8qKiBGaWNoaWVycyBkZSB0cmFkdWN0aW9uIChyZSljaGFyZ8OpcyBzYW5zIGNoYW5nZW1lbnQgZGUgbGFuZ3VlIDogYHJlbG9hZExhbmcoKWAuICovXG4gIHB1YmxpYyByZWFkb25seSBvblRyYW5zbGF0aW9uQ2hhbmdlJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uVHJhbnNsYXRpb25DaGFuZ2UucGlwZShcbiAgICBtYXAoKHsgbGFuZyB9KSA9PiBsYW5nKVxuICApO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2NvbmZpZzogSVRyYW5zbGF0aW9uQ29uZmlnID0gaW5qZWN0KFRSQU5TTEFUSU9OX0NPTkZJRywgeyBvcHRpb25hbDogdHJ1ZSB9KSA/PyB7XG4gICAgZGVmYXVsdDogJ2ZyJyxcbiAgICBzdXBwb3J0ZWRMYW5ndWFnZXM6IFsnZnInXSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyB0aGlzIGxhbmd1YWdlIHdpbGwgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIHdoZW4gYSB0cmFuc2xhdGlvbiBpc24ndCBmb3VuZCBpbiB0aGUgY3VycmVudCBsYW5ndWFnZVxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXREZWZhdWx0TGFuZyh0aGlzLl9jb25maWcuZGVmYXVsdCk7XG5cbiAgICAvLyB0aGUgbGFuZyB0byB1c2UsIGlmIHRoZSBsYW5nIGlzbid0IGF2YWlsYWJsZSwgaXQgd2lsbCB1c2UgdGhlIGN1cnJlbnQgbG9hZGVyIHRvIGdldCB0aGVtXG4gICAgbGV0IGxhbmc6IHN0cmluZyA9IExvY2FsU3RvcmFnZS5nZXQoJ2xhbmcnKSA/PyB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0QnJvd3NlckxhbmcoKSA/PyB0aGlzLl9jb25maWcuZGVmYXVsdDtcblxuICAgIGlmICghbGFuZyB8fCAhdGhpcy5fY29uZmlnLnN1cHBvcnRlZExhbmd1YWdlcy5maW5kKGxhbmdJZCA9PiBsYW5nSWQgPT09IGxhbmcpKSB7XG4gICAgICBsYW5nID0gdGhpcy5fY29uZmlnLmRlZmF1bHQ7XG4gICAgfVxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XG4gICAgdGhpcy5fcmVnaXN0cnkubmV3UmVnaXN0cmF0aW9uU3Vic2NyaXB0aW9uJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICBtZXJnZU1hcCgoKSA9PiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UucmVsb2FkTGFuZyh0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcpKSxcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveWVkKClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiB0cmFuc2xhdGlvbnMgPT5cbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25UcmFuc2xhdGlvbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIGxhbmc6IHRoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZyxcbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgICAgICB9KSxcbiAgICAgIH0pO1xuXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5waXBlKHRha2VVbnRpbERlc3Ryb3llZCgpKS5zdWJzY3JpYmUoKHsgbGFuZyB9KSA9PiB7XG4gICAgICBpZiAoIUxvY2FsU3RvcmFnZS5oYXMoJ2xhbmcnKSkge1xuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0KCdsYW5nJywgbGFuZyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhbmcgPT09IExvY2FsU3RvcmFnZS5nZXQoJ2xhbmcnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIExvY2FsU3RvcmFnZS5zZXQoJ2xhbmcnLCBsYW5nKTtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGluaXQoKSB7fVxuXG4gIHB1YmxpYyBnZXRMYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmc7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nIHwgc3RyaW5nW10sIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0KSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gIH1cblxuICAvKiogVHJhZHVjdGlvbiBpbW3DqWRpYXRlIDsgcmVuZCBsYSBjbMOpIHRhbnQgcXVlIGxlcyBmaWNoaWVycyBuZSBzb250IHBhcyBjaGFyZ8Opcy4gKi9cbiAgcHVibGljIGluc3RhbnQoa2V5OiBzdHJpbmcgfCBzdHJpbmdbXSwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudChrZXksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgfVxuXG4gIC8qKiBUcmFkdWN0aW9uIHF1aSBzdWl0IGxlcyBjaGFuZ2VtZW50cyBkZSBsYW5ndWUuICovXG4gIHB1YmxpYyBzdHJlYW0oa2V5OiBzdHJpbmcgfCBzdHJpbmdbXSwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc3RyZWFtKGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICB9XG5cbiAgcHVibGljIHVzZShsYW5nOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcbiAgfVxufVxuIl19