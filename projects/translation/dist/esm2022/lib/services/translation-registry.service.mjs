import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
        return this.registered.map(r => r.getTranslation(lang));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationRegistryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationRegistryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationRegistryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tcmVnaXN0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvdHJhbnNsYXRpb24tcmVnaXN0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBVTNDLE1BQU0sT0FBTyw0QkFBNEI7SUFJdkM7UUFIQSxlQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUNoQyxpQ0FBNEIsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBRTlCLENBQUM7SUFFVCxRQUFRLENBQUMsUUFBc0I7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sZUFBZSxDQUFDLElBQVk7UUFDakMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDOytHQWJVLDRCQUE0QjttSEFBNUIsNEJBQTRCLGNBRjNCLE1BQU07OzRGQUVQLDRCQUE0QjtrQkFIeEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVHJhbnNsYXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG9iamVjdCB8IG51bGw+O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFUcmFuc2xhdGlvblJlZ2lzdHJ5U2VydmljZSB7XG4gIHJlZ2lzdGVyZWQ6IElUcmFuc2xhdGlvbltdID0gW107XG4gIG5ld1JlZ2lzdHJhdGlvblN1YnNjcmlwdGlvbiQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgcmVnaXN0ZXIocmVnaXN0ZXI6IElUcmFuc2xhdGlvbikge1xuICAgIHRoaXMucmVnaXN0ZXJlZC5wdXNoKHJlZ2lzdGVyKTtcbiAgICB0aGlzLm5ld1JlZ2lzdHJhdGlvblN1YnNjcmlwdGlvbiQubmV4dChudWxsKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUcmFuc2xhdGlvbnMobGFuZzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJlZC5tYXAociA9PiByLmdldFRyYW5zbGF0aW9uKGxhbmcpKTtcbiAgfVxufVxuIl19