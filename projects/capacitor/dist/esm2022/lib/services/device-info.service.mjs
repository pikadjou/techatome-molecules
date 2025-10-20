import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Device } from '@capacitor/device';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class TaDeviceInfoService {
    constructor() {
        this._getInfo$ = new BehaviorSubject(null);
        Device.getInfo().then(deviceInformation => this._getInfo$.next(deviceInformation));
        this.os$ = this._getInfo$.pipe(filter(deviceInfo => !!deviceInfo), map(deviceInfo => deviceInfo?.operatingSystem ?? 'unknown'));
        this.deviceClasses$ = this.os$.pipe(map(os => {
            return [os, this._getMobileClass(os)];
        }));
    }
    isMobileOs$() {
        return this.os$.pipe(map(value => this.isMobileOs(value)));
    }
    isWeb$() {
        return this.os$.pipe(map(value => !this.isMobileOs(value)));
    }
    isMobileOs(os) {
        return os === 'android' || os === 'ios';
    }
    _getMobileClass(os) {
        return this.isMobileOs(os) ? 'mobile-device' : 'desktop-device';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceInfoService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceInfoService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceInfoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLWluZm8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZGV2aWNlLWluZm8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBK0IsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQUtuRCxNQUFNLE9BQU8sbUJBQW1CO0lBTTlCO1FBRlEsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFvQixJQUFJLENBQUMsQ0FBQztRQUcvRCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFFbkYsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUNsQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZUFBZSxJQUFJLFNBQVMsQ0FBQyxDQUM1RCxDQUFDO1FBRUYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FDakMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNNLE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLFVBQVUsQ0FBQyxFQUFtQjtRQUNuQyxPQUFPLEVBQUUsS0FBSyxTQUFTLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBRU8sZUFBZSxDQUFDLEVBQW1CO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNsRSxDQUFDOytHQWxDVSxtQkFBbUI7bUhBQW5CLG1CQUFtQixjQUZsQixNQUFNOzs0RkFFUCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGV2aWNlLCBEZXZpY2VJbmZvLCBPcGVyYXRpbmdTeXN0ZW0gfSBmcm9tICdAY2FwYWNpdG9yL2RldmljZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhRGV2aWNlSW5mb1NlcnZpY2Uge1xuICBwdWJsaWMgZGV2aWNlQ2xhc3NlcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICBwdWJsaWMgb3MkOiBPYnNlcnZhYmxlPE9wZXJhdGluZ1N5c3RlbT47XG5cbiAgcHJpdmF0ZSBfZ2V0SW5mbyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERldmljZUluZm8gfCBudWxsPihudWxsKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBEZXZpY2UuZ2V0SW5mbygpLnRoZW4oZGV2aWNlSW5mb3JtYXRpb24gPT4gdGhpcy5fZ2V0SW5mbyQubmV4dChkZXZpY2VJbmZvcm1hdGlvbikpO1xuXG4gICAgdGhpcy5vcyQgPSB0aGlzLl9nZXRJbmZvJC5waXBlKFxuICAgICAgZmlsdGVyKGRldmljZUluZm8gPT4gISFkZXZpY2VJbmZvKSxcbiAgICAgIG1hcChkZXZpY2VJbmZvID0+IGRldmljZUluZm8/Lm9wZXJhdGluZ1N5c3RlbSA/PyAndW5rbm93bicpXG4gICAgKTtcblxuICAgIHRoaXMuZGV2aWNlQ2xhc3NlcyQgPSB0aGlzLm9zJC5waXBlKFxuICAgICAgbWFwKG9zID0+IHtcbiAgICAgICAgcmV0dXJuIFtvcywgdGhpcy5fZ2V0TW9iaWxlQ2xhc3Mob3MpXTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBpc01vYmlsZU9zJCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcyQucGlwZShtYXAodmFsdWUgPT4gdGhpcy5pc01vYmlsZU9zKHZhbHVlKSkpO1xuICB9XG4gIHB1YmxpYyBpc1dlYiQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3MkLnBpcGUobWFwKHZhbHVlID0+ICF0aGlzLmlzTW9iaWxlT3ModmFsdWUpKSk7XG4gIH1cblxuICBwdWJsaWMgaXNNb2JpbGVPcyhvczogT3BlcmF0aW5nU3lzdGVtKSB7XG4gICAgcmV0dXJuIG9zID09PSAnYW5kcm9pZCcgfHwgb3MgPT09ICdpb3MnO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TW9iaWxlQ2xhc3Mob3M6IE9wZXJhdGluZ1N5c3RlbSkge1xuICAgIHJldHVybiB0aGlzLmlzTW9iaWxlT3Mob3MpID8gJ21vYmlsZS1kZXZpY2UnIDogJ2Rlc2t0b3AtZGV2aWNlJztcbiAgfVxufVxuIl19