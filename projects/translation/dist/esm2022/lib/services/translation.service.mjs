import { Inject, Injectable, Optional, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, mergeMap } from 'rxjs';
import { SessionStorage } from 'storage-manager-js';
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
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translateService.setDefaultLang(this._config.default);
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        let lang = SessionStorage.get('lang') ?? this.translateService.getBrowserLang() ?? this._config.default;
        if (!lang || !this._config.supportedLanguages.find(langId => langId === lang)) {
            lang = this._config.default;
        }
        this.translateService.use(lang);
        this._registry.newRegistrationSubscription$
            .pipe(debounceTime(100), mergeMap(() => this.translateService.reloadLang(this.translateService.currentLang))
        // tap(data => console.log('reload lang', data))
        )
            .subscribe({
            next: translations => this.translateService.onTranslationChange.emit({ lang: this.translateService.currentLang, translations }),
        });
        this.translateService.onLangChange.subscribe(({ lang }) => {
            if (!SessionStorage.has('lang')) {
                SessionStorage.set('lang', lang);
                return;
            }
            if (lang === SessionStorage.get('lang')) {
                return;
            }
            SessionStorage.set('lang', lang);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFOUUsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsb0JBQW9CLENBQUM7QUFTdkQsTUFBTSxPQUFPLG9CQUFvQjtJQUkvQixZQUdVLFVBQThCO1FBQ3BDLE9BQU8sRUFBRSxJQUFJO1FBQ2Isa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDM0I7UUFITyxZQUFPLEdBQVAsT0FBTyxDQUdkO1FBVEkscUJBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBVXZELGtHQUFrRztRQUNsRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0QsMkZBQTJGO1FBQzNGLElBQUksSUFBSSxHQUFXLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBRWhILElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzlFLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLDRCQUE0QjthQUN4QyxJQUFJLENBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkYsZ0RBQWdEO1NBQ2pEO2FBQ0EsU0FBUyxDQUFDO1lBQ1QsSUFBSSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsQ0FBQztTQUM1RyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNoQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDakMsT0FBTztZQUNULENBQUM7WUFFRCxJQUFJLElBQUksS0FBSyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ3hDLE9BQU87WUFDVCxDQUFDO1lBRUQsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksS0FBSSxDQUFDO0lBRVQsV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDM0MsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFzQixFQUFFLGlCQUEwQjtRQUMzRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLEdBQUcsQ0FBQyxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOytHQTVEVSxvQkFBb0Isa0JBTXJCLGtCQUFrQjttSEFOakIsb0JBQW9CLGNBRm5CLE1BQU07OzRGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQU1JLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICdzdG9yYWdlLW1hbmFnZXItanMnO1xyXG5cclxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblJlZ2lzdHJ5U2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRpb24tcmVnaXN0cnkuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgVFJBTlNMQVRJT05fQ09ORklHID0gJ2NvbmZpZ190cmFuc2xhdGlvbic7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyYW5zbGF0aW9uQ29uZmlnIHtcclxuICBkZWZhdWx0OiBzdHJpbmc7XHJcbiAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhVHJhbnNsYXRpb25TZXJ2aWNlIHtcclxuICBwdWJsaWMgdHJhbnNsYXRlU2VydmljZSA9IGluamVjdChUcmFuc2xhdGVTZXJ2aWNlKTtcclxuICBwcml2YXRlIF9yZWdpc3RyeSA9IGluamVjdChUYVRyYW5zbGF0aW9uUmVnaXN0cnlTZXJ2aWNlKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChUUkFOU0xBVElPTl9DT05GSUcpXHJcbiAgICBwcml2YXRlIF9jb25maWc6IElUcmFuc2xhdGlvbkNvbmZpZyA9IHtcclxuICAgICAgZGVmYXVsdDogJ2ZyJyxcclxuICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBbJ2ZyJ10sXHJcbiAgICB9XHJcbiAgKSB7XHJcbiAgICAvLyB0aGlzIGxhbmd1YWdlIHdpbGwgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIHdoZW4gYSB0cmFuc2xhdGlvbiBpc24ndCBmb3VuZCBpbiB0aGUgY3VycmVudCBsYW5ndWFnZVxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKHRoaXMuX2NvbmZpZy5kZWZhdWx0KTtcclxuXHJcbiAgICAvLyB0aGUgbGFuZyB0byB1c2UsIGlmIHRoZSBsYW5nIGlzbid0IGF2YWlsYWJsZSwgaXQgd2lsbCB1c2UgdGhlIGN1cnJlbnQgbG9hZGVyIHRvIGdldCB0aGVtXHJcbiAgICBsZXQgbGFuZzogc3RyaW5nID0gU2Vzc2lvblN0b3JhZ2UuZ2V0KCdsYW5nJykgPz8gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldEJyb3dzZXJMYW5nKCkgPz8gdGhpcy5fY29uZmlnLmRlZmF1bHQ7XHJcblxyXG4gICAgaWYgKCFsYW5nIHx8ICF0aGlzLl9jb25maWcuc3VwcG9ydGVkTGFuZ3VhZ2VzLmZpbmQobGFuZ0lkID0+IGxhbmdJZCA9PT0gbGFuZykpIHtcclxuICAgICAgbGFuZyA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0O1xyXG4gICAgfVxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcclxuICAgIHRoaXMuX3JlZ2lzdHJ5Lm5ld1JlZ2lzdHJhdGlvblN1YnNjcmlwdGlvbiRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXHJcbiAgICAgICAgbWVyZ2VNYXAoKCkgPT4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnJlbG9hZExhbmcodGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nKSlcclxuICAgICAgICAvLyB0YXAoZGF0YSA9PiBjb25zb2xlLmxvZygncmVsb2FkIGxhbmcnLCBkYXRhKSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiB0cmFuc2xhdGlvbnMgPT5cclxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoeyBsYW5nOiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcsIHRyYW5zbGF0aW9ucyB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHsgbGFuZyB9KSA9PiB7XHJcbiAgICAgIGlmICghU2Vzc2lvblN0b3JhZ2UuaGFzKCdsYW5nJykpIHtcclxuICAgICAgICBTZXNzaW9uU3RvcmFnZS5zZXQoJ2xhbmcnLCBsYW5nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChsYW5nID09PSBTZXNzaW9uU3RvcmFnZS5nZXQoJ2xhbmcnKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgU2Vzc2lvblN0b3JhZ2Uuc2V0KCdsYW5nJywgbGFuZyk7XHJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHt9XHJcblxyXG4gIHB1YmxpYyBnZXRMYW5ndWFnZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcgfCBzdHJpbmdbXSwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0KGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVzZShsYW5nOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKGxhbmcpO1xyXG4gIH1cclxufVxyXG4iXX0=