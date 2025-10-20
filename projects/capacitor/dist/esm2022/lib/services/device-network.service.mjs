import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@ta/server';
import * as i0 from "@angular/core";
export class TaDeviceNetworkService {
    constructor() {
        this.isConnected$ = new BehaviorSubject(false);
        this._delayToDisplayNewNotification = 10 * 1000; // in ms
        this._state = true;
        this._timeoutActive = null;
    }
    async observeNetworkStateChanges() {
        // save the current
        this._state = await this._getCurrentNetworkState();
        Network.addListener('networkStatusChange', async (currentState) => {
            if (this._state === currentState.connected) {
                return;
            }
            this._logNetworkStateChanged(currentState.connected);
            this._state = currentState.connected;
            if (this._timeoutActive) {
                clearTimeout(this._timeoutActive);
                this._timeoutActive = null;
                return;
            }
            this._timeoutActive = setTimeout(async () => {
                this.isConnected$.next(currentState.connected);
                this._logNetworkStateChanged(currentState.connected, true);
                this._timeoutActive = null;
            }, this._delayToDisplayNewNotification);
        });
    }
    async _getCurrentNetworkState() {
        return (await Network.getStatus()).connected;
    }
    _logNetworkStateChanged(isConnected, canDisplayNotification = false) {
        if (isConnected)
            Logger.LogWarning(`[Network] connection restored ${canDisplayNotification ? '[notification] send' : ''}`);
        else
            Logger.LogWarning(`[Network] connection lost ${canDisplayNotification ? '[notification] send' : ''}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceNetworkService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceNetworkService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceNetworkService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLW5ldHdvcmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZGV2aWNlLW5ldHdvcmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBS3BDLE1BQU0sT0FBTyxzQkFBc0I7SUFPakM7UUFOTyxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRWxELG1DQUE4QixHQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFRO1FBQzVELFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsbUJBQWMsR0FBMEIsSUFBSSxDQUFDO0lBRXRDLENBQUM7SUFFVCxLQUFLLENBQUMsMEJBQTBCO1FBQ3JDLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFFbkQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLEVBQUUsWUFBb0MsRUFBRSxFQUFFO1lBQ3hGLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNDLE9BQU87WUFDVCxDQUFDO1lBQ0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFFckMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3hCLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixPQUFPO1lBQ1QsQ0FBQztZQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sS0FBSyxDQUFDLHVCQUF1QjtRQUNuQyxPQUFPLENBQUMsTUFBTSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUVPLHVCQUF1QixDQUFDLFdBQW9CLEVBQUUseUJBQWtDLEtBQUs7UUFDM0YsSUFBSSxXQUFXO1lBQ2IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxpQ0FBaUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztZQUN2RyxNQUFNLENBQUMsVUFBVSxDQUFDLDZCQUE2QixzQkFBc0IsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0csQ0FBQzsrR0F6Q1Usc0JBQXNCO21IQUF0QixzQkFBc0IsY0FGckIsTUFBTTs7NEZBRVAsc0JBQXNCO2tCQUhsQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0BjYXBhY2l0b3IvbmV0d29yayc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUYURldmljZU5ldHdvcmtTZXJ2aWNlIHtcbiAgcHVibGljIGlzQ29ubmVjdGVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHByaXZhdGUgX2RlbGF5VG9EaXNwbGF5TmV3Tm90aWZpY2F0aW9uOiBudW1iZXIgPSAxMCAqIDEwMDA7IC8vIGluIG1zXG4gIHByaXZhdGUgX3N0YXRlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdGltZW91dEFjdGl2ZTogTm9kZUpTLlRpbWVvdXQgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGFzeW5jIG9ic2VydmVOZXR3b3JrU3RhdGVDaGFuZ2VzKCkge1xuICAgIC8vIHNhdmUgdGhlIGN1cnJlbnRcbiAgICB0aGlzLl9zdGF0ZSA9IGF3YWl0IHRoaXMuX2dldEN1cnJlbnROZXR3b3JrU3RhdGUoKTtcblxuICAgIE5ldHdvcmsuYWRkTGlzdGVuZXIoJ25ldHdvcmtTdGF0dXNDaGFuZ2UnLCBhc3luYyAoY3VycmVudFN0YXRlOiB7IGNvbm5lY3RlZDogYm9vbGVhbiB9KSA9PiB7XG4gICAgICBpZiAodGhpcy5fc3RhdGUgPT09IGN1cnJlbnRTdGF0ZS5jb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbG9nTmV0d29ya1N0YXRlQ2hhbmdlZChjdXJyZW50U3RhdGUuY29ubmVjdGVkKTtcbiAgICAgIHRoaXMuX3N0YXRlID0gY3VycmVudFN0YXRlLmNvbm5lY3RlZDtcblxuICAgICAgaWYgKHRoaXMuX3RpbWVvdXRBY3RpdmUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXRBY3RpdmUpO1xuICAgICAgICB0aGlzLl90aW1lb3V0QWN0aXZlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fdGltZW91dEFjdGl2ZSA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkJC5uZXh0KGN1cnJlbnRTdGF0ZS5jb25uZWN0ZWQpO1xuICAgICAgICB0aGlzLl9sb2dOZXR3b3JrU3RhdGVDaGFuZ2VkKGN1cnJlbnRTdGF0ZS5jb25uZWN0ZWQsIHRydWUpO1xuICAgICAgICB0aGlzLl90aW1lb3V0QWN0aXZlID0gbnVsbDtcbiAgICAgIH0sIHRoaXMuX2RlbGF5VG9EaXNwbGF5TmV3Tm90aWZpY2F0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldEN1cnJlbnROZXR3b3JrU3RhdGUoKSB7XG4gICAgcmV0dXJuIChhd2FpdCBOZXR3b3JrLmdldFN0YXR1cygpKS5jb25uZWN0ZWQ7XG4gIH1cblxuICBwcml2YXRlIF9sb2dOZXR3b3JrU3RhdGVDaGFuZ2VkKGlzQ29ubmVjdGVkOiBib29sZWFuLCBjYW5EaXNwbGF5Tm90aWZpY2F0aW9uOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoaXNDb25uZWN0ZWQpXG4gICAgICBMb2dnZXIuTG9nV2FybmluZyhgW05ldHdvcmtdIGNvbm5lY3Rpb24gcmVzdG9yZWQgJHtjYW5EaXNwbGF5Tm90aWZpY2F0aW9uID8gJ1tub3RpZmljYXRpb25dIHNlbmQnIDogJyd9YCk7XG4gICAgZWxzZSBMb2dnZXIuTG9nV2FybmluZyhgW05ldHdvcmtdIGNvbm5lY3Rpb24gbG9zdCAke2NhbkRpc3BsYXlOb3RpZmljYXRpb24gPyAnW25vdGlmaWNhdGlvbl0gc2VuZCcgOiAnJ31gKTtcbiAgfVxufVxuIl19