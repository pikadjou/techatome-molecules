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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFOUUsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsb0JBQW9CLENBQUM7QUFTdkQsTUFBTSxPQUFPLG9CQUFvQjtJQUkvQixZQUdVLFVBQThCO1FBQ3BDLE9BQU8sRUFBRSxJQUFJO1FBQ2Isa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDM0I7UUFITyxZQUFPLEdBQVAsT0FBTyxDQUdkO1FBVEkscUJBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBVXZELGtHQUFrRztRQUNsRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0QsMkZBQTJGO1FBQzNGLElBQUksSUFBSSxHQUNOLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFFdkIsSUFDRSxDQUFDLElBQUk7WUFDTCxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEVBQ2xFLENBQUM7WUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEI7YUFDeEMsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUNaLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUNwRTtRQUNELGdEQUFnRDtTQUNqRDthQUNBLFNBQVMsQ0FBQztZQUNULElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7Z0JBQzdDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVztnQkFDdkMsWUFBWTthQUNiLENBQUM7U0FDTCxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNoQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDakMsT0FBTztZQUNULENBQUM7WUFFRCxJQUFJLElBQUksS0FBSyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ3hDLE9BQU87WUFDVCxDQUFDO1lBRUQsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksS0FBSSxDQUFDO0lBRVQsV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDM0MsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFzQixFQUFFLGlCQUEwQjtRQUMzRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLEdBQUcsQ0FBQyxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOytHQXZFVSxvQkFBb0Isa0JBTXJCLGtCQUFrQjttSEFOakIsb0JBQW9CLGNBRm5CLE1BQU07OzRGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQU1JLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgaW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIG1lcmdlTWFwIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwic3RvcmFnZS1tYW5hZ2VyLWpzXCI7XHJcblxyXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSBcIi4vdHJhbnNsYXRpb24tcmVnaXN0cnkuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRSQU5TTEFUSU9OX0NPTkZJRyA9IFwiY29uZmlnX3RyYW5zbGF0aW9uXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyYW5zbGF0aW9uQ29uZmlnIHtcclxuICBkZWZhdWx0OiBzdHJpbmc7XHJcbiAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFUcmFuc2xhdGlvblNlcnZpY2Uge1xyXG4gIHB1YmxpYyB0cmFuc2xhdGVTZXJ2aWNlID0gaW5qZWN0KFRyYW5zbGF0ZVNlcnZpY2UpO1xyXG4gIHByaXZhdGUgX3JlZ2lzdHJ5ID0gaW5qZWN0KFRhVHJhbnNsYXRpb25SZWdpc3RyeVNlcnZpY2UpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASW5qZWN0KFRSQU5TTEFUSU9OX0NPTkZJRylcclxuICAgIHByaXZhdGUgX2NvbmZpZzogSVRyYW5zbGF0aW9uQ29uZmlnID0ge1xyXG4gICAgICBkZWZhdWx0OiBcImZyXCIsXHJcbiAgICAgIHN1cHBvcnRlZExhbmd1YWdlczogW1wiZnJcIl0sXHJcbiAgICB9XHJcbiAgKSB7XHJcbiAgICAvLyB0aGlzIGxhbmd1YWdlIHdpbGwgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIHdoZW4gYSB0cmFuc2xhdGlvbiBpc24ndCBmb3VuZCBpbiB0aGUgY3VycmVudCBsYW5ndWFnZVxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKHRoaXMuX2NvbmZpZy5kZWZhdWx0KTtcclxuXHJcbiAgICAvLyB0aGUgbGFuZyB0byB1c2UsIGlmIHRoZSBsYW5nIGlzbid0IGF2YWlsYWJsZSwgaXQgd2lsbCB1c2UgdGhlIGN1cnJlbnQgbG9hZGVyIHRvIGdldCB0aGVtXHJcbiAgICBsZXQgbGFuZzogc3RyaW5nID1cclxuICAgICAgU2Vzc2lvblN0b3JhZ2UuZ2V0KFwibGFuZ1wiKSA/P1xyXG4gICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0QnJvd3NlckxhbmcoKSA/P1xyXG4gICAgICB0aGlzLl9jb25maWcuZGVmYXVsdDtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICFsYW5nIHx8XHJcbiAgICAgICF0aGlzLl9jb25maWcuc3VwcG9ydGVkTGFuZ3VhZ2VzLmZpbmQoKGxhbmdJZCkgPT4gbGFuZ0lkID09PSBsYW5nKVxyXG4gICAgKSB7XHJcbiAgICAgIGxhbmcgPSB0aGlzLl9jb25maWcuZGVmYXVsdDtcclxuICAgIH1cclxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XHJcbiAgICB0aGlzLl9yZWdpc3RyeS5uZXdSZWdpc3RyYXRpb25TdWJzY3JpcHRpb24kXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxyXG4gICAgICAgIG1lcmdlTWFwKCgpID0+XHJcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UucmVsb2FkTGFuZyh0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8vIHRhcChkYXRhID0+IGNvbnNvbGUubG9nKCdyZWxvYWQgbGFuZycsIGRhdGEpKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgIG5leHQ6ICh0cmFuc2xhdGlvbnMpID0+XHJcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25UcmFuc2xhdGlvbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgbGFuZzogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnMsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHsgbGFuZyB9KSA9PiB7XHJcbiAgICAgIGlmICghU2Vzc2lvblN0b3JhZ2UuaGFzKFwibGFuZ1wiKSkge1xyXG4gICAgICAgIFNlc3Npb25TdG9yYWdlLnNldChcImxhbmdcIiwgbGFuZyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobGFuZyA9PT0gU2Vzc2lvblN0b3JhZ2UuZ2V0KFwibGFuZ1wiKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgU2Vzc2lvblN0b3JhZ2Uuc2V0KFwibGFuZ1wiLCBsYW5nKTtcclxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge31cclxuXHJcbiAgcHVibGljIGdldExhbmd1YWdlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldChrZXk6IHN0cmluZyB8IHN0cmluZ1tdLCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXNlKGxhbmc6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==