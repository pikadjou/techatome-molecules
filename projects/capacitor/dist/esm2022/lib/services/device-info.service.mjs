import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Device } from '@capacitor/device';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class CamDeviceInfoService {
    constructor() {
        this._getInfo$ = new BehaviorSubject(null);
        Device.getInfo().then((deviceInformation) => this._getInfo$.next(deviceInformation));
        this.os$ = this._getInfo$.pipe(filter((deviceInfo) => !!deviceInfo), map((deviceInfo) => deviceInfo?.operatingSystem ?? 'unknown'));
        this.deviceClasses$ = this.os$.pipe(map((os) => {
            return [os, this._getMobileClass(os)];
        }));
    }
    isMobileOs$() {
        return this.os$.pipe(map((value) => this.isMobileOs(value)));
    }
    isWeb$() {
        return this.os$.pipe(map((value) => !this.isMobileOs(value)));
    }
    isMobileOs(os) {
        return os === 'android' || os === 'ios';
    }
    _getMobileClass(os) {
        return this.isMobileOs(os) ? 'mobile-device' : 'desktop-device';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDeviceInfoService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDeviceInfoService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDeviceInfoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLWluZm8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZGV2aWNlLWluZm8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBK0IsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQUtuRCxNQUFNLE9BQU8sb0JBQW9CO0lBTS9CO1FBRlEsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFvQixJQUFJLENBQUMsQ0FBQztRQUcvRCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUN2QyxDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQ3BDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFLGVBQWUsSUFBSSxTQUFTLENBQUMsQ0FDOUQsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQ2pDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ1QsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ00sTUFBTTtRQUNYLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxVQUFVLENBQUMsRUFBbUI7UUFDbkMsT0FBTyxFQUFFLEtBQUssU0FBUyxJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUVPLGVBQWUsQ0FBQyxFQUFtQjtRQUN6QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7SUFDbEUsQ0FBQzsrR0FwQ1Usb0JBQW9CO21IQUFwQixvQkFBb0IsY0FGbkIsTUFBTTs7NEZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERldmljZSwgRGV2aWNlSW5mbywgT3BlcmF0aW5nU3lzdGVtIH0gZnJvbSAnQGNhcGFjaXRvci9kZXZpY2UnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1EZXZpY2VJbmZvU2VydmljZSB7XG4gIHB1YmxpYyBkZXZpY2VDbGFzc2VzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gIHB1YmxpYyBvcyQ6IE9ic2VydmFibGU8T3BlcmF0aW5nU3lzdGVtPjtcblxuICBwcml2YXRlIF9nZXRJbmZvJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGV2aWNlSW5mbyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIERldmljZS5nZXRJbmZvKCkudGhlbigoZGV2aWNlSW5mb3JtYXRpb24pID0+XG4gICAgICB0aGlzLl9nZXRJbmZvJC5uZXh0KGRldmljZUluZm9ybWF0aW9uKVxuICAgICk7XG5cbiAgICB0aGlzLm9zJCA9IHRoaXMuX2dldEluZm8kLnBpcGUoXG4gICAgICBmaWx0ZXIoKGRldmljZUluZm8pID0+ICEhZGV2aWNlSW5mbyksXG4gICAgICBtYXAoKGRldmljZUluZm8pID0+IGRldmljZUluZm8/Lm9wZXJhdGluZ1N5c3RlbSA/PyAndW5rbm93bicpXG4gICAgKTtcblxuICAgIHRoaXMuZGV2aWNlQ2xhc3NlcyQgPSB0aGlzLm9zJC5waXBlKFxuICAgICAgbWFwKChvcykgPT4ge1xuICAgICAgICByZXR1cm4gW29zLCB0aGlzLl9nZXRNb2JpbGVDbGFzcyhvcyldO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGlzTW9iaWxlT3MkKCkge1xuICAgIHJldHVybiB0aGlzLm9zJC5waXBlKG1hcCgodmFsdWUpID0+IHRoaXMuaXNNb2JpbGVPcyh2YWx1ZSkpKTtcbiAgfVxuICBwdWJsaWMgaXNXZWIkKCkge1xuICAgIHJldHVybiB0aGlzLm9zJC5waXBlKG1hcCgodmFsdWUpID0+ICF0aGlzLmlzTW9iaWxlT3ModmFsdWUpKSk7XG4gIH1cblxuICBwdWJsaWMgaXNNb2JpbGVPcyhvczogT3BlcmF0aW5nU3lzdGVtKSB7XG4gICAgcmV0dXJuIG9zID09PSAnYW5kcm9pZCcgfHwgb3MgPT09ICdpb3MnO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TW9iaWxlQ2xhc3Mob3M6IE9wZXJhdGluZ1N5c3RlbSkge1xuICAgIHJldHVybiB0aGlzLmlzTW9iaWxlT3Mob3MpID8gJ21vYmlsZS1kZXZpY2UnIDogJ2Rlc2t0b3AtZGV2aWNlJztcbiAgfVxufVxuIl19