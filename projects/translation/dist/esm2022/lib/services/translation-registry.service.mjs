import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
export class TaTranslationRegistryService {
    constructor() {
        this.registered = [];
        this.newRegistrationSubscription$ = new Subject();
    }
    register(register) {
        this.registered.push(register);
        this.newRegistrationSubscription$.next(null);
    }
    getTranslations(lang) {
        return this.registered.map((r) => r.getTranslation(lang));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationRegistryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationRegistryService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationRegistryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tcmVnaXN0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvdHJhbnNsYXRpb24tcmVnaXN0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBVTNDLE1BQU0sT0FBTyw0QkFBNEI7SUFJdkM7UUFIQSxlQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUNoQyxpQ0FBNEIsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBRTlCLENBQUM7SUFFVCxRQUFRLENBQUMsUUFBc0I7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sZUFBZSxDQUFDLElBQVk7UUFDakMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7K0dBYlUsNEJBQTRCO21IQUE1Qiw0QkFBNEIsY0FGM0IsTUFBTTs7NEZBRVAsNEJBQTRCO2tCQUh4QyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVHJhbnNsYXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG9iamVjdCB8IG51bGw+O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBUYVRyYW5zbGF0aW9uUmVnaXN0cnlTZXJ2aWNlIHtcbiAgcmVnaXN0ZXJlZDogSVRyYW5zbGF0aW9uW10gPSBbXTtcbiAgbmV3UmVnaXN0cmF0aW9uU3Vic2NyaXB0aW9uJCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyByZWdpc3RlcihyZWdpc3RlcjogSVRyYW5zbGF0aW9uKSB7XG4gICAgdGhpcy5yZWdpc3RlcmVkLnB1c2gocmVnaXN0ZXIpO1xuICAgIHRoaXMubmV3UmVnaXN0cmF0aW9uU3Vic2NyaXB0aW9uJC5uZXh0KG51bGwpO1xuICB9XG5cbiAgcHVibGljIGdldFRyYW5zbGF0aW9ucyhsYW5nOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RlcmVkLm1hcCgocikgPT4gci5nZXRUcmFuc2xhdGlvbihsYW5nKSk7XG4gIH1cbn1cbiJdfQ==