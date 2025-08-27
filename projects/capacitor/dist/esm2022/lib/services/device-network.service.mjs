import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { Logger } from '@ta/server';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class CamDeviceNetworkService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDeviceNetworkService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDeviceNetworkService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDeviceNetworkService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLW5ldHdvcmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZGV2aWNlLW5ldHdvcmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyx1QkFBdUI7SUFPbEM7UUFOTyxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRWxELG1DQUE4QixHQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFRO1FBQzVELFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsbUJBQWMsR0FBMEIsSUFBSSxDQUFDO0lBRXRDLENBQUM7SUFFVCxLQUFLLENBQUMsMEJBQTBCO1FBQ3JDLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFFbkQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLEVBQUUsWUFBb0MsRUFBRSxFQUFFO1lBQ3hGLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNDLE9BQU87WUFDVCxDQUFDO1lBQ0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFFckMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3hCLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixPQUFPO1lBQ1QsQ0FBQztZQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sS0FBSyxDQUFDLHVCQUF1QjtRQUNuQyxPQUFPLENBQUMsTUFBTSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUVPLHVCQUF1QixDQUFDLFdBQW9CLEVBQUUseUJBQWtDLEtBQUs7UUFDM0YsSUFBSSxXQUFXO1lBQ2IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxpQ0FBaUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztZQUN2RyxNQUFNLENBQUMsVUFBVSxDQUFDLDZCQUE2QixzQkFBc0IsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0csQ0FBQzsrR0F6Q1UsdUJBQXVCO21IQUF2Qix1QkFBdUIsY0FGdEIsTUFBTTs7NEZBRVAsdUJBQXVCO2tCQUhuQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0BjYXBhY2l0b3IvbmV0d29yayc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdAdGEvc2VydmVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FtRGV2aWNlTmV0d29ya1NlcnZpY2Uge1xuICBwdWJsaWMgaXNDb25uZWN0ZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgcHJpdmF0ZSBfZGVsYXlUb0Rpc3BsYXlOZXdOb3RpZmljYXRpb246IG51bWJlciA9IDEwICogMTAwMDsgLy8gaW4gbXNcbiAgcHJpdmF0ZSBfc3RhdGU6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF90aW1lb3V0QWN0aXZlOiBOb2RlSlMuVGltZW91dCB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgYXN5bmMgb2JzZXJ2ZU5ldHdvcmtTdGF0ZUNoYW5nZXMoKSB7XG4gICAgLy8gc2F2ZSB0aGUgY3VycmVudFxuICAgIHRoaXMuX3N0YXRlID0gYXdhaXQgdGhpcy5fZ2V0Q3VycmVudE5ldHdvcmtTdGF0ZSgpO1xuXG4gICAgTmV0d29yay5hZGRMaXN0ZW5lcignbmV0d29ya1N0YXR1c0NoYW5nZScsIGFzeW5jIChjdXJyZW50U3RhdGU6IHsgY29ubmVjdGVkOiBib29sZWFuIH0pID0+IHtcbiAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gY3VycmVudFN0YXRlLmNvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9sb2dOZXR3b3JrU3RhdGVDaGFuZ2VkKGN1cnJlbnRTdGF0ZS5jb25uZWN0ZWQpO1xuICAgICAgdGhpcy5fc3RhdGUgPSBjdXJyZW50U3RhdGUuY29ubmVjdGVkO1xuXG4gICAgICBpZiAodGhpcy5fdGltZW91dEFjdGl2ZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dEFjdGl2ZSk7XG4gICAgICAgIHRoaXMuX3RpbWVvdXRBY3RpdmUgPSBudWxsO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl90aW1lb3V0QWN0aXZlID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQkLm5leHQoY3VycmVudFN0YXRlLmNvbm5lY3RlZCk7XG4gICAgICAgIHRoaXMuX2xvZ05ldHdvcmtTdGF0ZUNoYW5nZWQoY3VycmVudFN0YXRlLmNvbm5lY3RlZCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3RpbWVvdXRBY3RpdmUgPSBudWxsO1xuICAgICAgfSwgdGhpcy5fZGVsYXlUb0Rpc3BsYXlOZXdOb3RpZmljYXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0Q3VycmVudE5ldHdvcmtTdGF0ZSgpIHtcbiAgICByZXR1cm4gKGF3YWl0IE5ldHdvcmsuZ2V0U3RhdHVzKCkpLmNvbm5lY3RlZDtcbiAgfVxuXG4gIHByaXZhdGUgX2xvZ05ldHdvcmtTdGF0ZUNoYW5nZWQoaXNDb25uZWN0ZWQ6IGJvb2xlYW4sIGNhbkRpc3BsYXlOb3RpZmljYXRpb246IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmIChpc0Nvbm5lY3RlZClcbiAgICAgIExvZ2dlci5Mb2dXYXJuaW5nKGBbTmV0d29ya10gY29ubmVjdGlvbiByZXN0b3JlZCAke2NhbkRpc3BsYXlOb3RpZmljYXRpb24gPyAnW25vdGlmaWNhdGlvbl0gc2VuZCcgOiAnJ31gKTtcbiAgICBlbHNlIExvZ2dlci5Mb2dXYXJuaW5nKGBbTmV0d29ya10gY29ubmVjdGlvbiBsb3N0ICR7Y2FuRGlzcGxheU5vdGlmaWNhdGlvbiA/ICdbbm90aWZpY2F0aW9uXSBzZW5kJyA6ICcnfWApO1xuICB9XG59XG4iXX0=