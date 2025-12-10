import { Injectable } from "@angular/core";
import { Network } from "@capacitor/network";
import { BehaviorSubject } from "rxjs";
import { Logger } from "@ta/server";
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
        Network.addListener("networkStatusChange", async (currentState) => {
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
            Logger.LogWarning(`[Network] connection restored ${canDisplayNotification ? "[notification] send" : ""}`);
        else
            Logger.LogWarning(`[Network] connection lost ${canDisplayNotification ? "[notification] send" : ""}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceNetworkService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceNetworkService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceNetworkService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLW5ldHdvcmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZGV2aWNlLW5ldHdvcmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBS3BDLE1BQU0sT0FBTyxzQkFBc0I7SUFPakM7UUFOTyxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRWxELG1DQUE4QixHQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxRQUFRO1FBQzVELFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsbUJBQWMsR0FBMEIsSUFBSSxDQUFDO0lBRXRDLENBQUM7SUFFVCxLQUFLLENBQUMsMEJBQTBCO1FBQ3JDLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFFbkQsT0FBTyxDQUFDLFdBQVcsQ0FDakIscUJBQXFCLEVBQ3JCLEtBQUssRUFBRSxZQUFvQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDM0MsT0FBTztZQUNULENBQUM7WUFDRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUVyQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDeEIsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLE9BQU87WUFDVCxDQUFDO1lBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzdCLENBQUMsRUFBRSxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTyxLQUFLLENBQUMsdUJBQXVCO1FBQ25DLE9BQU8sQ0FBQyxNQUFNLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvQyxDQUFDO0lBRU8sdUJBQXVCLENBQzdCLFdBQW9CLEVBQ3BCLHlCQUFrQyxLQUFLO1FBRXZDLElBQUksV0FBVztZQUNiLE1BQU0sQ0FBQyxVQUFVLENBQ2YsaUNBQ0Usc0JBQXNCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUNuRCxFQUFFLENBQ0gsQ0FBQzs7WUFFRixNQUFNLENBQUMsVUFBVSxDQUNmLDZCQUNFLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFDbkQsRUFBRSxDQUNILENBQUM7SUFDTixDQUFDOytHQXhEVSxzQkFBc0I7bUhBQXRCLHNCQUFzQixjQUZyQixNQUFNOzs0RkFFUCxzQkFBc0I7a0JBSGxDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tIFwiQGNhcGFjaXRvci9uZXR3b3JrXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiQHRhL3NlcnZlclwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBUYURldmljZU5ldHdvcmtTZXJ2aWNlIHtcbiAgcHVibGljIGlzQ29ubmVjdGVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHByaXZhdGUgX2RlbGF5VG9EaXNwbGF5TmV3Tm90aWZpY2F0aW9uOiBudW1iZXIgPSAxMCAqIDEwMDA7IC8vIGluIG1zXG4gIHByaXZhdGUgX3N0YXRlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdGltZW91dEFjdGl2ZTogTm9kZUpTLlRpbWVvdXQgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGFzeW5jIG9ic2VydmVOZXR3b3JrU3RhdGVDaGFuZ2VzKCkge1xuICAgIC8vIHNhdmUgdGhlIGN1cnJlbnRcbiAgICB0aGlzLl9zdGF0ZSA9IGF3YWl0IHRoaXMuX2dldEN1cnJlbnROZXR3b3JrU3RhdGUoKTtcblxuICAgIE5ldHdvcmsuYWRkTGlzdGVuZXIoXG4gICAgICBcIm5ldHdvcmtTdGF0dXNDaGFuZ2VcIixcbiAgICAgIGFzeW5jIChjdXJyZW50U3RhdGU6IHsgY29ubmVjdGVkOiBib29sZWFuIH0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBjdXJyZW50U3RhdGUuY29ubmVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xvZ05ldHdvcmtTdGF0ZUNoYW5nZWQoY3VycmVudFN0YXRlLmNvbm5lY3RlZCk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gY3VycmVudFN0YXRlLmNvbm5lY3RlZDtcblxuICAgICAgICBpZiAodGhpcy5fdGltZW91dEFjdGl2ZSkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0QWN0aXZlKTtcbiAgICAgICAgICB0aGlzLl90aW1lb3V0QWN0aXZlID0gbnVsbDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGltZW91dEFjdGl2ZSA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNDb25uZWN0ZWQkLm5leHQoY3VycmVudFN0YXRlLmNvbm5lY3RlZCk7XG4gICAgICAgICAgdGhpcy5fbG9nTmV0d29ya1N0YXRlQ2hhbmdlZChjdXJyZW50U3RhdGUuY29ubmVjdGVkLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLl90aW1lb3V0QWN0aXZlID0gbnVsbDtcbiAgICAgICAgfSwgdGhpcy5fZGVsYXlUb0Rpc3BsYXlOZXdOb3RpZmljYXRpb24pO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9nZXRDdXJyZW50TmV0d29ya1N0YXRlKCkge1xuICAgIHJldHVybiAoYXdhaXQgTmV0d29yay5nZXRTdGF0dXMoKSkuY29ubmVjdGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9nTmV0d29ya1N0YXRlQ2hhbmdlZChcbiAgICBpc0Nvbm5lY3RlZDogYm9vbGVhbixcbiAgICBjYW5EaXNwbGF5Tm90aWZpY2F0aW9uOiBib29sZWFuID0gZmFsc2VcbiAgKTogdm9pZCB7XG4gICAgaWYgKGlzQ29ubmVjdGVkKVxuICAgICAgTG9nZ2VyLkxvZ1dhcm5pbmcoXG4gICAgICAgIGBbTmV0d29ya10gY29ubmVjdGlvbiByZXN0b3JlZCAke1xuICAgICAgICAgIGNhbkRpc3BsYXlOb3RpZmljYXRpb24gPyBcIltub3RpZmljYXRpb25dIHNlbmRcIiA6IFwiXCJcbiAgICAgICAgfWBcbiAgICAgICk7XG4gICAgZWxzZVxuICAgICAgTG9nZ2VyLkxvZ1dhcm5pbmcoXG4gICAgICAgIGBbTmV0d29ya10gY29ubmVjdGlvbiBsb3N0ICR7XG4gICAgICAgICAgY2FuRGlzcGxheU5vdGlmaWNhdGlvbiA/IFwiW25vdGlmaWNhdGlvbl0gc2VuZFwiIDogXCJcIlxuICAgICAgICB9YFxuICAgICAgKTtcbiAgfVxufVxuIl19