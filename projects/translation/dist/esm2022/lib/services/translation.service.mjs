import { Inject, Injectable, Optional, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { debounceTime, mergeMap } from "rxjs";
import { SessionStorage } from "storage-manager-js";
import { TaTranslationRegistryService } from "./translation-registry.service";
import * as i0 from "@angular/core";
export const TRANSLATION_CONFIG = "config_translation";
export class TaTranslationService {
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
        this.translateService.use(lang).subscribe(() => location.reload());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFOUUsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsb0JBQW9CLENBQUM7QUFTdkQsTUFBTSxPQUFPLG9CQUFvQjtJQUkvQixZQUdVLFVBQThCO1FBQ3BDLE9BQU8sRUFBRSxJQUFJO1FBQ2Isa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDM0I7UUFITyxZQUFPLEdBQVAsT0FBTyxDQUdkO1FBVEkscUJBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBVXZELGtHQUFrRztRQUNsRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0QsMkZBQTJGO1FBQzNGLElBQUksSUFBSSxHQUNOLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFFdkIsSUFDRSxDQUFDLElBQUk7WUFDTCxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEVBQ2xFLENBQUM7WUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEI7YUFDeEMsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUNaLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUNwRTtRQUNELGdEQUFnRDtTQUNqRDthQUNBLFNBQVMsQ0FBQztZQUNULElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7Z0JBQzdDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVztnQkFDdkMsWUFBWTthQUNiLENBQUM7U0FDTCxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNoQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDakMsT0FBTztZQUNULENBQUM7WUFFRCxJQUFJLElBQUksS0FBSyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ3hDLE9BQU87WUFDVCxDQUFDO1lBRUQsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksS0FBSSxDQUFDO0lBRVQsV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDM0MsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFzQixFQUFFLGlCQUEwQjtRQUMzRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLEdBQUcsQ0FBQyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7K0dBdkVVLG9CQUFvQixrQkFNckIsa0JBQWtCO21IQU5qQixvQkFBb0IsY0FGbkIsTUFBTTs7NEZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBTUksUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBpbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWVyZ2VNYXAgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU3RvcmFnZSB9IGZyb20gXCJzdG9yYWdlLW1hbmFnZXItanNcIjtcclxuXHJcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25SZWdpc3RyeVNlcnZpY2UgfSBmcm9tIFwiLi90cmFuc2xhdGlvbi1yZWdpc3RyeS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVFJBTlNMQVRJT05fQ09ORklHID0gXCJjb25maWdfdHJhbnNsYXRpb25cIjtcclxuZXhwb3J0IGludGVyZmFjZSBJVHJhbnNsYXRpb25Db25maWcge1xyXG4gIGRlZmF1bHQ6IHN0cmluZztcclxuICBzdXBwb3J0ZWRMYW5ndWFnZXM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYVRyYW5zbGF0aW9uU2VydmljZSB7XHJcbiAgcHVibGljIHRyYW5zbGF0ZVNlcnZpY2UgPSBpbmplY3QoVHJhbnNsYXRlU2VydmljZSk7XHJcbiAgcHJpdmF0ZSBfcmVnaXN0cnkgPSBpbmplY3QoVGFUcmFuc2xhdGlvblJlZ2lzdHJ5U2VydmljZSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoVFJBTlNMQVRJT05fQ09ORklHKVxyXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBJVHJhbnNsYXRpb25Db25maWcgPSB7XHJcbiAgICAgIGRlZmF1bHQ6IFwiZnJcIixcclxuICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBbXCJmclwiXSxcclxuICAgIH1cclxuICApIHtcclxuICAgIC8vIHRoaXMgbGFuZ3VhZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgd2hlbiBhIHRyYW5zbGF0aW9uIGlzbid0IGZvdW5kIGluIHRoZSBjdXJyZW50IGxhbmd1YWdlXHJcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc2V0RGVmYXVsdExhbmcodGhpcy5fY29uZmlnLmRlZmF1bHQpO1xyXG5cclxuICAgIC8vIHRoZSBsYW5nIHRvIHVzZSwgaWYgdGhlIGxhbmcgaXNuJ3QgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgY3VycmVudCBsb2FkZXIgdG8gZ2V0IHRoZW1cclxuICAgIGxldCBsYW5nOiBzdHJpbmcgPVxyXG4gICAgICBTZXNzaW9uU3RvcmFnZS5nZXQoXCJsYW5nXCIpID8/XHJcbiAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRCcm93c2VyTGFuZygpID8/XHJcbiAgICAgIHRoaXMuX2NvbmZpZy5kZWZhdWx0O1xyXG5cclxuICAgIGlmIChcclxuICAgICAgIWxhbmcgfHxcclxuICAgICAgIXRoaXMuX2NvbmZpZy5zdXBwb3J0ZWRMYW5ndWFnZXMuZmluZCgobGFuZ0lkKSA9PiBsYW5nSWQgPT09IGxhbmcpXHJcbiAgICApIHtcclxuICAgICAgbGFuZyA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0O1xyXG4gICAgfVxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcclxuICAgIHRoaXMuX3JlZ2lzdHJ5Lm5ld1JlZ2lzdHJhdGlvblN1YnNjcmlwdGlvbiRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXHJcbiAgICAgICAgbWVyZ2VNYXAoKCkgPT5cclxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5yZWxvYWRMYW5nKHRoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZylcclxuICAgICAgICApXHJcbiAgICAgICAgLy8gdGFwKGRhdGEgPT4gY29uc29sZS5sb2coJ3JlbG9hZCBsYW5nJywgZGF0YSkpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSh7XHJcbiAgICAgICAgbmV4dDogKHRyYW5zbGF0aW9ucykgPT5cclxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICBsYW5nOiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucyxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoeyBsYW5nIH0pID0+IHtcclxuICAgICAgaWYgKCFTZXNzaW9uU3RvcmFnZS5oYXMoXCJsYW5nXCIpKSB7XHJcbiAgICAgICAgU2Vzc2lvblN0b3JhZ2Uuc2V0KFwibGFuZ1wiLCBsYW5nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChsYW5nID09PSBTZXNzaW9uU3RvcmFnZS5nZXQoXCJsYW5nXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBTZXNzaW9uU3RvcmFnZS5zZXQoXCJsYW5nXCIsIGxhbmcpO1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7fVxyXG5cclxuICBwdWJsaWMgZ2V0TGFuZ3VhZ2UoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nIHwgc3RyaW5nW10sIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldChrZXksIGludGVycG9sYXRlUGFyYW1zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKGxhbmcpLnN1YnNjcmliZSgoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==