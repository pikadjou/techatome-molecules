import { Inject, Injectable, Optional, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, mergeMap } from 'rxjs';
import { SessionStorage } from 'storage-manager-js';
import { CamTranslationRegistryService } from './translation-registry.service';
import * as i0 from "@angular/core";
export const TRANSLATION_CONFIG = 'config_translation';
export class CamTranslationService {
    constructor(_config = {
        default: 'fr',
        supportedLanguages: ['fr'],
    }) {
        this._config = _config;
        this.translateService = inject(TranslateService);
        this._registry = inject(CamTranslationRegistryService);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationService, deps: [{ token: TRANSLATION_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationService, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFFL0UsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsb0JBQW9CLENBQUM7QUFTdkQsTUFBTSxPQUFPLHFCQUFxQjtJQUloQyxZQUdVLFVBQThCO1FBQ3BDLE9BQU8sRUFBRSxJQUFJO1FBQ2Isa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDM0I7UUFITyxZQUFPLEdBQVAsT0FBTyxDQUdkO1FBVEkscUJBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFHLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBVXhELGtHQUFrRztRQUNsRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0QsMkZBQTJGO1FBQzNGLElBQUksSUFBSSxHQUFXLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBRWhILElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzlFLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLDRCQUE0QjthQUN4QyxJQUFJLENBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkYsZ0RBQWdEO1NBQ2pEO2FBQ0EsU0FBUyxDQUFDO1lBQ1QsSUFBSSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsQ0FBQztTQUM1RyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNoQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDakMsT0FBTztZQUNULENBQUM7WUFFRCxJQUFJLElBQUksS0FBSyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ3hDLE9BQU87WUFDVCxDQUFDO1lBRUQsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUksS0FBSSxDQUFDO0lBRVQsV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDM0MsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFzQixFQUFFLGlCQUEwQjtRQUMzRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLEdBQUcsQ0FBQyxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOytHQTVEVSxxQkFBcUIsa0JBTXRCLGtCQUFrQjttSEFOakIscUJBQXFCLGNBRnBCLE1BQU07OzRGQUVQLHFCQUFxQjtrQkFIakMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQU1JLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNlc3Npb25TdG9yYWdlIH0gZnJvbSAnc3RvcmFnZS1tYW5hZ2VyLWpzJztcblxuaW1wb3J0IHsgQ2FtVHJhbnNsYXRpb25SZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0aW9uLXJlZ2lzdHJ5LnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgVFJBTlNMQVRJT05fQ09ORklHID0gJ2NvbmZpZ190cmFuc2xhdGlvbic7XG5leHBvcnQgaW50ZXJmYWNlIElUcmFuc2xhdGlvbkNvbmZpZyB7XG4gIGRlZmF1bHQ6IHN0cmluZztcbiAgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBzdHJpbmdbXTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhbVRyYW5zbGF0aW9uU2VydmljZSB7XG4gIHB1YmxpYyB0cmFuc2xhdGVTZXJ2aWNlID0gaW5qZWN0KFRyYW5zbGF0ZVNlcnZpY2UpO1xuICBwcml2YXRlIF9yZWdpc3RyeSA9IGluamVjdChDYW1UcmFuc2xhdGlvblJlZ2lzdHJ5U2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFRSQU5TTEFUSU9OX0NPTkZJRylcbiAgICBwcml2YXRlIF9jb25maWc6IElUcmFuc2xhdGlvbkNvbmZpZyA9IHtcbiAgICAgIGRlZmF1bHQ6ICdmcicsXG4gICAgICBzdXBwb3J0ZWRMYW5ndWFnZXM6IFsnZnInXSxcbiAgICB9XG4gICkge1xuICAgIC8vIHRoaXMgbGFuZ3VhZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgd2hlbiBhIHRyYW5zbGF0aW9uIGlzbid0IGZvdW5kIGluIHRoZSBjdXJyZW50IGxhbmd1YWdlXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKHRoaXMuX2NvbmZpZy5kZWZhdWx0KTtcblxuICAgIC8vIHRoZSBsYW5nIHRvIHVzZSwgaWYgdGhlIGxhbmcgaXNuJ3QgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgY3VycmVudCBsb2FkZXIgdG8gZ2V0IHRoZW1cbiAgICBsZXQgbGFuZzogc3RyaW5nID0gU2Vzc2lvblN0b3JhZ2UuZ2V0KCdsYW5nJykgPz8gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldEJyb3dzZXJMYW5nKCkgPz8gdGhpcy5fY29uZmlnLmRlZmF1bHQ7XG5cbiAgICBpZiAoIWxhbmcgfHwgIXRoaXMuX2NvbmZpZy5zdXBwb3J0ZWRMYW5ndWFnZXMuZmluZChsYW5nSWQgPT4gbGFuZ0lkID09PSBsYW5nKSkge1xuICAgICAgbGFuZyA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0O1xuICAgIH1cbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKGxhbmcpO1xuICAgIHRoaXMuX3JlZ2lzdHJ5Lm5ld1JlZ2lzdHJhdGlvblN1YnNjcmlwdGlvbiRcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgbWVyZ2VNYXAoKCkgPT4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnJlbG9hZExhbmcodGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nKSlcbiAgICAgICAgLy8gdGFwKGRhdGEgPT4gY29uc29sZS5sb2coJ3JlbG9hZCBsYW5nJywgZGF0YSkpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogdHJhbnNsYXRpb25zID0+XG4gICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uVHJhbnNsYXRpb25DaGFuZ2UuZW1pdCh7IGxhbmc6IHRoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZywgdHJhbnNsYXRpb25zIH0pLFxuICAgICAgfSk7XG5cbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoeyBsYW5nIH0pID0+IHtcbiAgICAgIGlmICghU2Vzc2lvblN0b3JhZ2UuaGFzKCdsYW5nJykpIHtcbiAgICAgICAgU2Vzc2lvblN0b3JhZ2Uuc2V0KCdsYW5nJywgbGFuZyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhbmcgPT09IFNlc3Npb25TdG9yYWdlLmdldCgnbGFuZycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgU2Vzc2lvblN0b3JhZ2Uuc2V0KCdsYW5nJywgbGFuZyk7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0KCkge31cblxuICBwdWJsaWMgZ2V0TGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nO1xuICB9XG5cbiAgcHVibGljIGdldChrZXk6IHN0cmluZyB8IHN0cmluZ1tdLCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0KGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICB9XG5cbiAgcHVibGljIHVzZShsYW5nOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnVzZShsYW5nKTtcbiAgfVxufVxuIl19