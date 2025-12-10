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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFOUUsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsb0JBQW9CLENBQUM7QUFTdkQsTUFBTSxPQUFPLG9CQUFvQjtJQUkvQixZQUdVLFVBQThCO1FBQ3BDLE9BQU8sRUFBRSxJQUFJO1FBQ2Isa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDM0I7UUFITyxZQUFPLEdBQVAsT0FBTyxDQUdkO1FBVEkscUJBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBVXZELGtHQUFrRztRQUNsRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0QsMkZBQTJGO1FBQzNGLElBQUksSUFBSSxHQUNOLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFFdkIsSUFDRSxDQUFDLElBQUk7WUFDTCxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEVBQ2xFLENBQUM7WUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEI7YUFDeEMsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUNaLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUNwRTtRQUNELGdEQUFnRDtTQUNqRDthQUNBLFNBQVMsQ0FBQztZQUNULElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7Z0JBQzdDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVztnQkFDdkMsWUFBWTthQUNiLENBQUM7U0FDTCxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNoQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDakMsT0FBTztZQUNULENBQUM7WUFFRCxJQUFJLElBQUksS0FBSyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ3hDLE9BQU87WUFDVCxDQUFDO1lBRUQsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksS0FBSSxDQUFDO0lBRVQsV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDM0MsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFzQixFQUFFLGlCQUEwQjtRQUMzRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLEdBQUcsQ0FBQyxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOytHQXZFVSxvQkFBb0Isa0JBTXJCLGtCQUFrQjttSEFOakIsb0JBQW9CLGNBRm5CLE1BQU07OzRGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQU1JLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgaW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIG1lcmdlTWFwIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IFNlc3Npb25TdG9yYWdlIH0gZnJvbSBcInN0b3JhZ2UtbWFuYWdlci1qc1wiO1xuXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSBcIi4vdHJhbnNsYXRpb24tcmVnaXN0cnkuc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgVFJBTlNMQVRJT05fQ09ORklHID0gXCJjb25maWdfdHJhbnNsYXRpb25cIjtcbmV4cG9ydCBpbnRlcmZhY2UgSVRyYW5zbGF0aW9uQ29uZmlnIHtcbiAgZGVmYXVsdDogc3RyaW5nO1xuICBzdXBwb3J0ZWRMYW5ndWFnZXM6IHN0cmluZ1tdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBUYVRyYW5zbGF0aW9uU2VydmljZSB7XG4gIHB1YmxpYyB0cmFuc2xhdGVTZXJ2aWNlID0gaW5qZWN0KFRyYW5zbGF0ZVNlcnZpY2UpO1xuICBwcml2YXRlIF9yZWdpc3RyeSA9IGluamVjdChUYVRyYW5zbGF0aW9uUmVnaXN0cnlTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoVFJBTlNMQVRJT05fQ09ORklHKVxuICAgIHByaXZhdGUgX2NvbmZpZzogSVRyYW5zbGF0aW9uQ29uZmlnID0ge1xuICAgICAgZGVmYXVsdDogXCJmclwiLFxuICAgICAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBbXCJmclwiXSxcbiAgICB9XG4gICkge1xuICAgIC8vIHRoaXMgbGFuZ3VhZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgd2hlbiBhIHRyYW5zbGF0aW9uIGlzbid0IGZvdW5kIGluIHRoZSBjdXJyZW50IGxhbmd1YWdlXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKHRoaXMuX2NvbmZpZy5kZWZhdWx0KTtcblxuICAgIC8vIHRoZSBsYW5nIHRvIHVzZSwgaWYgdGhlIGxhbmcgaXNuJ3QgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgY3VycmVudCBsb2FkZXIgdG8gZ2V0IHRoZW1cbiAgICBsZXQgbGFuZzogc3RyaW5nID1cbiAgICAgIFNlc3Npb25TdG9yYWdlLmdldChcImxhbmdcIikgPz9cbiAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRCcm93c2VyTGFuZygpID8/XG4gICAgICB0aGlzLl9jb25maWcuZGVmYXVsdDtcblxuICAgIGlmIChcbiAgICAgICFsYW5nIHx8XG4gICAgICAhdGhpcy5fY29uZmlnLnN1cHBvcnRlZExhbmd1YWdlcy5maW5kKChsYW5nSWQpID0+IGxhbmdJZCA9PT0gbGFuZylcbiAgICApIHtcbiAgICAgIGxhbmcgPSB0aGlzLl9jb25maWcuZGVmYXVsdDtcbiAgICB9XG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcbiAgICB0aGlzLl9yZWdpc3RyeS5uZXdSZWdpc3RyYXRpb25TdWJzY3JpcHRpb24kXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgIG1lcmdlTWFwKCgpID0+XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnJlbG9hZExhbmcodGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nKVxuICAgICAgICApXG4gICAgICAgIC8vIHRhcChkYXRhID0+IGNvbnNvbGUubG9nKCdyZWxvYWQgbGFuZycsIGRhdGEpKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6ICh0cmFuc2xhdGlvbnMpID0+XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uVHJhbnNsYXRpb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBsYW5nOiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcsXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKCh7IGxhbmcgfSkgPT4ge1xuICAgICAgaWYgKCFTZXNzaW9uU3RvcmFnZS5oYXMoXCJsYW5nXCIpKSB7XG4gICAgICAgIFNlc3Npb25TdG9yYWdlLnNldChcImxhbmdcIiwgbGFuZyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhbmcgPT09IFNlc3Npb25TdG9yYWdlLmdldChcImxhbmdcIikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBTZXNzaW9uU3RvcmFnZS5zZXQoXCJsYW5nXCIsIGxhbmcpO1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdCgpIHt9XG5cbiAgcHVibGljIGdldExhbmd1YWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZztcbiAgfVxuXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcgfCBzdHJpbmdbXSwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldChrZXksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgfVxuXG4gIHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UobGFuZyk7XG4gIH1cbn1cbiJdfQ==