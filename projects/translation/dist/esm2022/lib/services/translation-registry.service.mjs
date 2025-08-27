import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class CamTranslationRegistryService {
    constructor() {
        this.registered = [];
        this.newRegistrationSubscription$ = new Subject();
    }
    register(register) {
        this.registered.push(register);
        this.newRegistrationSubscription$.next(null);
    }
    getTranslations(lang) {
        return this.registered.map(r => r.getTranslation(lang));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationRegistryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationRegistryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationRegistryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tcmVnaXN0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvdHJhbnNsYXRpb24tcmVnaXN0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBVTNDLE1BQU0sT0FBTyw2QkFBNkI7SUFJeEM7UUFIQSxlQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUNoQyxpQ0FBNEIsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBRTlCLENBQUM7SUFFVCxRQUFRLENBQUMsUUFBc0I7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sZUFBZSxDQUFDLElBQVk7UUFDakMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDOytHQWJVLDZCQUE2QjttSEFBN0IsNkJBQTZCLGNBRjVCLE1BQU07OzRGQUVQLDZCQUE2QjtrQkFIekMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVHJhbnNsYXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG9iamVjdCB8IG51bGw+O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FtVHJhbnNsYXRpb25SZWdpc3RyeVNlcnZpY2Uge1xuICByZWdpc3RlcmVkOiBJVHJhbnNsYXRpb25bXSA9IFtdO1xuICBuZXdSZWdpc3RyYXRpb25TdWJzY3JpcHRpb24kID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIHJlZ2lzdGVyKHJlZ2lzdGVyOiBJVHJhbnNsYXRpb24pIHtcbiAgICB0aGlzLnJlZ2lzdGVyZWQucHVzaChyZWdpc3Rlcik7XG4gICAgdGhpcy5uZXdSZWdpc3RyYXRpb25TdWJzY3JpcHRpb24kLm5leHQobnVsbCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VHJhbnNsYXRpb25zKGxhbmc6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyZWQubWFwKHIgPT4gci5nZXRUcmFuc2xhdGlvbihsYW5nKSk7XG4gIH1cbn1cbiJdfQ==