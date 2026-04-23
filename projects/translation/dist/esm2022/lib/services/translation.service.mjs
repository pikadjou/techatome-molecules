import { Inject, Injectable, Optional, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, mergeMap } from 'rxjs';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFOUUsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsb0JBQW9CLENBQUM7QUFTdkQsTUFBTSxPQUFPLG9CQUFvQjtJQUkvQixZQUdVLFVBQThCO1FBQ3BDLE9BQU8sRUFBRSxJQUFJO1FBQ2Isa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDM0I7UUFITyxZQUFPLEdBQVAsT0FBTyxDQUdkO1FBVEkscUJBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBVXZELGtHQUFrRztRQUNsRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0QsMkZBQTJGO1FBQzNGLElBQUksSUFBSSxHQUFXLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBRTlHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzlFLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLDRCQUE0QjthQUN4QyxJQUFJLENBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkYsZ0RBQWdEO1NBQ2pEO2FBQ0EsU0FBUyxDQUFDO1lBQ1QsSUFBSSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7Z0JBQzdDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVztnQkFDdkMsWUFBWTthQUNiLENBQUM7U0FDTCxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUM5QixZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDL0IsT0FBTztZQUNULENBQUM7WUFFRCxJQUFJLElBQUksS0FBSyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ3RDLE9BQU87WUFDVCxDQUFDO1lBRUQsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDL0IsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksS0FBSSxDQUFDO0lBRVQsV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDM0MsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFzQixFQUFFLGlCQUEwQjtRQUMzRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLEdBQUcsQ0FBQyxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOytHQS9EVSxvQkFBb0Isa0JBTXJCLGtCQUFrQjttSEFOakIsb0JBQW9CLGNBRm5CLE1BQU07OzRGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQU1JLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnc3RvcmFnZS1tYW5hZ2VyLWpzJztcclxuXHJcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25SZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0aW9uLXJlZ2lzdHJ5LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRSQU5TTEFUSU9OX0NPTkZJRyA9ICdjb25maWdfdHJhbnNsYXRpb24nO1xyXG5leHBvcnQgaW50ZXJmYWNlIElUcmFuc2xhdGlvbkNvbmZpZyB7XHJcbiAgZGVmYXVsdDogc3RyaW5nO1xyXG4gIHN1cHBvcnRlZExhbmd1YWdlczogc3RyaW5nW107XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYVRyYW5zbGF0aW9uU2VydmljZSB7XHJcbiAgcHVibGljIHRyYW5zbGF0ZVNlcnZpY2UgPSBpbmplY3QoVHJhbnNsYXRlU2VydmljZSk7XHJcbiAgcHJpdmF0ZSBfcmVnaXN0cnkgPSBpbmplY3QoVGFUcmFuc2xhdGlvblJlZ2lzdHJ5U2VydmljZSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoVFJBTlNMQVRJT05fQ09ORklHKVxyXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBJVHJhbnNsYXRpb25Db25maWcgPSB7XHJcbiAgICAgIGRlZmF1bHQ6ICdmcicsXHJcbiAgICAgIHN1cHBvcnRlZExhbmd1YWdlczogWydmciddLFxyXG4gICAgfVxyXG4gICkge1xyXG4gICAgLy8gdGhpcyBsYW5ndWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBmYWxsYmFjayB3aGVuIGEgdHJhbnNsYXRpb24gaXNuJ3QgZm91bmQgaW4gdGhlIGN1cnJlbnQgbGFuZ3VhZ2VcclxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXREZWZhdWx0TGFuZyh0aGlzLl9jb25maWcuZGVmYXVsdCk7XHJcblxyXG4gICAgLy8gdGhlIGxhbmcgdG8gdXNlLCBpZiB0aGUgbGFuZyBpc24ndCBhdmFpbGFibGUsIGl0IHdpbGwgdXNlIHRoZSBjdXJyZW50IGxvYWRlciB0byBnZXQgdGhlbVxyXG4gICAgbGV0IGxhbmc6IHN0cmluZyA9IExvY2FsU3RvcmFnZS5nZXQoJ2xhbmcnKSA/PyB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0QnJvd3NlckxhbmcoKSA/PyB0aGlzLl9jb25maWcuZGVmYXVsdDtcclxuXHJcbiAgICBpZiAoIWxhbmcgfHwgIXRoaXMuX2NvbmZpZy5zdXBwb3J0ZWRMYW5ndWFnZXMuZmluZChsYW5nSWQgPT4gbGFuZ0lkID09PSBsYW5nKSkge1xyXG4gICAgICBsYW5nID0gdGhpcy5fY29uZmlnLmRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKGxhbmcpO1xyXG4gICAgdGhpcy5fcmVnaXN0cnkubmV3UmVnaXN0cmF0aW9uU3Vic2NyaXB0aW9uJFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcclxuICAgICAgICBtZXJnZU1hcCgoKSA9PiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UucmVsb2FkTGFuZyh0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcpKVxyXG4gICAgICAgIC8vIHRhcChkYXRhID0+IGNvbnNvbGUubG9nKCdyZWxvYWQgbGFuZycsIGRhdGEpKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgIG5leHQ6IHRyYW5zbGF0aW9ucyA9PlxyXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uVHJhbnNsYXRpb25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIGxhbmc6IHRoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZyxcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25zLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKCh7IGxhbmcgfSkgPT4ge1xyXG4gICAgICBpZiAoIUxvY2FsU3RvcmFnZS5oYXMoJ2xhbmcnKSkge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS5zZXQoJ2xhbmcnLCBsYW5nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChsYW5nID09PSBMb2NhbFN0b3JhZ2UuZ2V0KCdsYW5nJykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIExvY2FsU3RvcmFnZS5zZXQoJ2xhbmcnLCBsYW5nKTtcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge31cclxuXHJcbiAgcHVibGljIGdldExhbmd1YWdlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldChrZXk6IHN0cmluZyB8IHN0cmluZ1tdLCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXNlKGxhbmc6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==