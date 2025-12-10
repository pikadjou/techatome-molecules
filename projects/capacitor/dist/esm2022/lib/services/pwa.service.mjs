import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
export const PWA_CONFIG_KEY = "config_pwa";
export class TaPwaService {
    constructor(_config) {
        this._config = _config;
        this.isPWaCapability$ = new BehaviorSubject(false);
        if (this._config.active) {
            window.addEventListener("beforeinstallprompt", (event) => {
                this._promptEvent = event;
                this.isPWaCapability$.next(true);
            });
        }
    }
    isPWaCapability() {
        return !!this._promptEvent;
    }
    launchInstall() {
        if (this._promptEvent) {
            this._promptEvent.prompt();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaPwaService, deps: [{ token: PWA_CONFIG_KEY }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaPwaService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaPwaService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PWA_CONFIG_KEY]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3B3YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRXZDLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUM7QUFTM0MsTUFBTSxPQUFPLFlBQVk7SUFLdkIsWUFFVSxPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBTnRCLHFCQUFnQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBUTVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4QixNQUFNLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVNLGVBQWU7UUFDcEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBQ00sYUFBYTtRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDOytHQXhCVSxZQUFZLGtCQU1iLGNBQWM7bUhBTmIsWUFBWSxjQUZYLE1BQU07OzRGQUVQLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFPSSxNQUFNOzJCQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgY29uc3QgUFdBX0NPTkZJR19LRVkgPSBcImNvbmZpZ19wd2FcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUHdhQ29uZmlnIHtcbiAgYWN0aXZlOiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBUYVB3YVNlcnZpY2Uge1xuICBwdWJsaWMgaXNQV2FDYXBhYmlsaXR5JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHByaXZhdGUgX3Byb21wdEV2ZW50ITogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUFdBX0NPTkZJR19LRVkpXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBJUHdhQ29uZmlnXG4gICkge1xuICAgIGlmICh0aGlzLl9jb25maWcuYWN0aXZlKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWluc3RhbGxwcm9tcHRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX3Byb21wdEV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMuaXNQV2FDYXBhYmlsaXR5JC5uZXh0KHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzUFdhQ2FwYWJpbGl0eSgpIHtcbiAgICByZXR1cm4gISF0aGlzLl9wcm9tcHRFdmVudDtcbiAgfVxuICBwdWJsaWMgbGF1bmNoSW5zdGFsbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcHJvbXB0RXZlbnQpIHtcbiAgICAgIHRoaXMuX3Byb21wdEV2ZW50LnByb21wdCgpO1xuICAgIH1cbiAgfVxufVxuIl19