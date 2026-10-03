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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBYyxZQUFZLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBRTlFLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLG9CQUFvQixDQUFDO0FBU3ZELE1BQU0sT0FBTyxvQkFBb0I7SUFjL0IsWUFHVSxVQUE4QjtRQUNwQyxPQUFPLEVBQUUsSUFBSTtRQUNiLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDO0tBQzNCO1FBSE8sWUFBTyxHQUFQLE9BQU8sQ0FHZDtRQW5CSSxxQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzQyxjQUFTLEdBQUcsTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFFekQsMkZBQTJGO1FBQzNFLGtCQUFhLEdBQXVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUN6RixHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDeEIsQ0FBQztRQUVGLHFGQUFxRjtRQUNyRSx5QkFBb0IsR0FBdUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FDdkcsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ3hCLENBQUM7UUFVQSxrR0FBa0c7UUFDbEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNELDJGQUEyRjtRQUMzRixJQUFJLElBQUksR0FBVyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUU5RyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM5RSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEI7YUFDeEMsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25GLGdEQUFnRDtTQUNqRDthQUNBLFNBQVMsQ0FBQztZQUNULElBQUksRUFBRSxZQUFZLENBQUMsRUFBRSxDQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO2dCQUM3QyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVc7Z0JBQ3ZDLFlBQVk7YUFDYixDQUFDO1NBQ0wsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDOUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLE9BQU87WUFDVCxDQUFDO1lBRUQsSUFBSSxJQUFJLEtBQUssWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUN0QyxPQUFPO1lBQ1QsQ0FBQztZQUVELFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9CLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxJQUFJLEtBQUksQ0FBQztJQUVULFdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQzNDLENBQUM7SUFFTSxHQUFHLENBQUMsR0FBc0IsRUFBRSxpQkFBMEI7UUFDM0QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxvRkFBb0Y7SUFDN0UsT0FBTyxDQUFDLEdBQXNCLEVBQUUsaUJBQTBCO1FBQy9ELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQscURBQXFEO0lBQzlDLE1BQU0sQ0FBQyxHQUFzQixFQUFFLGlCQUEwQjtRQUM5RCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLEdBQUcsQ0FBQyxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOytHQW5GVSxvQkFBb0Isa0JBZ0JyQixrQkFBa0I7bUhBaEJqQixvQkFBb0IsY0FGbkIsTUFBTTs7NEZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBZ0JJLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGRlYm91bmNlVGltZSwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnc3RvcmFnZS1tYW5hZ2VyLWpzJztcblxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblJlZ2lzdHJ5U2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRpb24tcmVnaXN0cnkuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBUUkFOU0xBVElPTl9DT05GSUcgPSAnY29uZmlnX3RyYW5zbGF0aW9uJztcbmV4cG9ydCBpbnRlcmZhY2UgSVRyYW5zbGF0aW9uQ29uZmlnIHtcbiAgZGVmYXVsdDogc3RyaW5nO1xuICBzdXBwb3J0ZWRMYW5ndWFnZXM6IHN0cmluZ1tdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFUcmFuc2xhdGlvblNlcnZpY2Uge1xuICBwdWJsaWMgdHJhbnNsYXRlU2VydmljZSA9IGluamVjdChUcmFuc2xhdGVTZXJ2aWNlKTtcbiAgcHJpdmF0ZSBfcmVnaXN0cnkgPSBpbmplY3QoVGFUcmFuc2xhdGlvblJlZ2lzdHJ5U2VydmljZSk7XG5cbiAgLyoqIExhbmd1ZSBhY3RpdmUsIMOgIGNoYXF1ZSBjaGFuZ2VtZW50IChsZXMgYXBwbGljYXRpb25zIG4naW1wb3J0ZW50IHBhcyBuZ3gtdHJhbnNsYXRlKS4gKi9cbiAgcHVibGljIHJlYWRvbmx5IG9uTGFuZ0NoYW5nZSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2UucGlwZShcbiAgICBtYXAoKHsgbGFuZyB9KSA9PiBsYW5nKVxuICApO1xuXG4gIC8qKiBGaWNoaWVycyBkZSB0cmFkdWN0aW9uIChyZSljaGFyZ8OpcyBzYW5zIGNoYW5nZW1lbnQgZGUgbGFuZ3VlIDogYHJlbG9hZExhbmcoKWAuICovXG4gIHB1YmxpYyByZWFkb25seSBvblRyYW5zbGF0aW9uQ2hhbmdlJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uVHJhbnNsYXRpb25DaGFuZ2UucGlwZShcbiAgICBtYXAoKHsgbGFuZyB9KSA9PiBsYW5nKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChUUkFOU0xBVElPTl9DT05GSUcpXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBJVHJhbnNsYXRpb25Db25maWcgPSB7XG4gICAgICBkZWZhdWx0OiAnZnInLFxuICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBbJ2ZyJ10sXG4gICAgfVxuICApIHtcbiAgICAvLyB0aGlzIGxhbmd1YWdlIHdpbGwgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIHdoZW4gYSB0cmFuc2xhdGlvbiBpc24ndCBmb3VuZCBpbiB0aGUgY3VycmVudCBsYW5ndWFnZVxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXREZWZhdWx0TGFuZyh0aGlzLl9jb25maWcuZGVmYXVsdCk7XG5cbiAgICAvLyB0aGUgbGFuZyB0byB1c2UsIGlmIHRoZSBsYW5nIGlzbid0IGF2YWlsYWJsZSwgaXQgd2lsbCB1c2UgdGhlIGN1cnJlbnQgbG9hZGVyIHRvIGdldCB0aGVtXG4gICAgbGV0IGxhbmc6IHN0cmluZyA9IExvY2FsU3RvcmFnZS5nZXQoJ2xhbmcnKSA/PyB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0QnJvd3NlckxhbmcoKSA/PyB0aGlzLl9jb25maWcuZGVmYXVsdDtcblxuICAgIGlmICghbGFuZyB8fCAhdGhpcy5fY29uZmlnLnN1cHBvcnRlZExhbmd1YWdlcy5maW5kKGxhbmdJZCA9PiBsYW5nSWQgPT09IGxhbmcpKSB7XG4gICAgICBsYW5nID0gdGhpcy5fY29uZmlnLmRlZmF1bHQ7XG4gICAgfVxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XG4gICAgdGhpcy5fcmVnaXN0cnkubmV3UmVnaXN0cmF0aW9uU3Vic2NyaXB0aW9uJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICBtZXJnZU1hcCgoKSA9PiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UucmVsb2FkTGFuZyh0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcpKVxuICAgICAgICAvLyB0YXAoZGF0YSA9PiBjb25zb2xlLmxvZygncmVsb2FkIGxhbmcnLCBkYXRhKSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiB0cmFuc2xhdGlvbnMgPT5cbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25UcmFuc2xhdGlvbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIGxhbmc6IHRoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZyxcbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgICAgICB9KSxcbiAgICAgIH0pO1xuXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHsgbGFuZyB9KSA9PiB7XG4gICAgICBpZiAoIUxvY2FsU3RvcmFnZS5oYXMoJ2xhbmcnKSkge1xuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0KCdsYW5nJywgbGFuZyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhbmcgPT09IExvY2FsU3RvcmFnZS5nZXQoJ2xhbmcnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIExvY2FsU3RvcmFnZS5zZXQoJ2xhbmcnLCBsYW5nKTtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGluaXQoKSB7fVxuXG4gIHB1YmxpYyBnZXRMYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmc7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nIHwgc3RyaW5nW10sIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0KSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gIH1cblxuICAvKiogVHJhZHVjdGlvbiBpbW3DqWRpYXRlIDsgcmVuZCBsYSBjbMOpIHRhbnQgcXVlIGxlcyBmaWNoaWVycyBuZSBzb250IHBhcyBjaGFyZ8Opcy4gKi9cbiAgcHVibGljIGluc3RhbnQoa2V5OiBzdHJpbmcgfCBzdHJpbmdbXSwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudChrZXksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgfVxuXG4gIC8qKiBUcmFkdWN0aW9uIHF1aSBzdWl0IGxlcyBjaGFuZ2VtZW50cyBkZSBsYW5ndWUuICovXG4gIHB1YmxpYyBzdHJlYW0oa2V5OiBzdHJpbmcgfCBzdHJpbmdbXSwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc3RyZWFtKGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICB9XG5cbiAgcHVibGljIHVzZShsYW5nOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcbiAgfVxufVxuIl19