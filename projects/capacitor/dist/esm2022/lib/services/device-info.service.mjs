import { Injectable } from "@angular/core";
import { filter, map } from "rxjs/operators";
import { Device } from "@capacitor/device";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
export class TaDeviceInfoService {
    constructor() {
        this._getInfo$ = new BehaviorSubject(null);
        Device.getInfo().then((deviceInformation) => this._getInfo$.next(deviceInformation));
        this.os$ = this._getInfo$.pipe(filter((deviceInfo) => !!deviceInfo), map((deviceInfo) => deviceInfo?.operatingSystem ?? "unknown"));
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
        return os === "android" || os === "ios";
    }
    _getMobileClass(os) {
        return this.isMobileOs(os) ? "mobile-device" : "desktop-device";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceInfoService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceInfoService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceInfoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLWluZm8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZGV2aWNlLWluZm8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBK0IsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQUtuRCxNQUFNLE9BQU8sbUJBQW1CO0lBTTlCO1FBRlEsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFvQixJQUFJLENBQUMsQ0FBQztRQUcvRCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUN2QyxDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQ3BDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFLGVBQWUsSUFBSSxTQUFTLENBQUMsQ0FDOUQsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQ2pDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ1QsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ00sTUFBTTtRQUNYLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxVQUFVLENBQUMsRUFBbUI7UUFDbkMsT0FBTyxFQUFFLEtBQUssU0FBUyxJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUVPLGVBQWUsQ0FBQyxFQUFtQjtRQUN6QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7SUFDbEUsQ0FBQzsrR0FwQ1UsbUJBQW1CO21IQUFuQixtQkFBbUIsY0FGbEIsTUFBTTs7NEZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5pbXBvcnQgeyBEZXZpY2UsIERldmljZUluZm8sIE9wZXJhdGluZ1N5c3RlbSB9IGZyb20gXCJAY2FwYWNpdG9yL2RldmljZVwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgVGFEZXZpY2VJbmZvU2VydmljZSB7XG4gIHB1YmxpYyBkZXZpY2VDbGFzc2VzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gIHB1YmxpYyBvcyQ6IE9ic2VydmFibGU8T3BlcmF0aW5nU3lzdGVtPjtcblxuICBwcml2YXRlIF9nZXRJbmZvJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGV2aWNlSW5mbyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIERldmljZS5nZXRJbmZvKCkudGhlbigoZGV2aWNlSW5mb3JtYXRpb24pID0+XG4gICAgICB0aGlzLl9nZXRJbmZvJC5uZXh0KGRldmljZUluZm9ybWF0aW9uKVxuICAgICk7XG5cbiAgICB0aGlzLm9zJCA9IHRoaXMuX2dldEluZm8kLnBpcGUoXG4gICAgICBmaWx0ZXIoKGRldmljZUluZm8pID0+ICEhZGV2aWNlSW5mbyksXG4gICAgICBtYXAoKGRldmljZUluZm8pID0+IGRldmljZUluZm8/Lm9wZXJhdGluZ1N5c3RlbSA/PyBcInVua25vd25cIilcbiAgICApO1xuXG4gICAgdGhpcy5kZXZpY2VDbGFzc2VzJCA9IHRoaXMub3MkLnBpcGUoXG4gICAgICBtYXAoKG9zKSA9PiB7XG4gICAgICAgIHJldHVybiBbb3MsIHRoaXMuX2dldE1vYmlsZUNsYXNzKG9zKV07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaXNNb2JpbGVPcyQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3MkLnBpcGUobWFwKCh2YWx1ZSkgPT4gdGhpcy5pc01vYmlsZU9zKHZhbHVlKSkpO1xuICB9XG4gIHB1YmxpYyBpc1dlYiQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3MkLnBpcGUobWFwKCh2YWx1ZSkgPT4gIXRoaXMuaXNNb2JpbGVPcyh2YWx1ZSkpKTtcbiAgfVxuXG4gIHB1YmxpYyBpc01vYmlsZU9zKG9zOiBPcGVyYXRpbmdTeXN0ZW0pIHtcbiAgICByZXR1cm4gb3MgPT09IFwiYW5kcm9pZFwiIHx8IG9zID09PSBcImlvc1wiO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TW9iaWxlQ2xhc3Mob3M6IE9wZXJhdGluZ1N5c3RlbSkge1xuICAgIHJldHVybiB0aGlzLmlzTW9iaWxlT3Mob3MpID8gXCJtb2JpbGUtZGV2aWNlXCIgOiBcImRlc2t0b3AtZGV2aWNlXCI7XG4gIH1cbn1cbiJdfQ==