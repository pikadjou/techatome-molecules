import { Injectable } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
const isMinimizedKey = "isMinimizedMenu";
export class TaSharedMenuService {
    constructor() {
        this.isMinimized$ = new BehaviorSubject(localStorage.getItem(isMinimizedKey) === "1");
        this.isMinimized$
            .pipe(takeUntilDestroyed())
            .subscribe((isMinimized) => localStorage.setItem(isMinimizedKey, isMinimized ? "1" : "0"));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaSharedMenuService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaSharedMenuService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaSharedMenuService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLW1lbnUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZS9zaGFyZWQtbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFdkMsTUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUM7QUFLekMsTUFBTSxPQUFPLG1CQUFtQjtJQUc5QjtRQUZPLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQVUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUcvRixJQUFJLENBQUMsWUFBWTthQUNkLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQzFCLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQzsrR0FQVSxtQkFBbUI7bUhBQW5CLG1CQUFtQixjQUZsQixNQUFNOzs0RkFFUCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3BcIjtcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcblxuY29uc3QgaXNNaW5pbWl6ZWRLZXkgPSBcImlzTWluaW1pemVkTWVudVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBUYVNoYXJlZE1lbnVTZXJ2aWNlIHtcbiAgcHVibGljIGlzTWluaW1pemVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obG9jYWxTdG9yYWdlLmdldEl0ZW0oaXNNaW5pbWl6ZWRLZXkpID09PSBcIjFcIik7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc01pbmltaXplZCRcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3llZCgpKVxuICAgICAgLnN1YnNjcmliZSgoaXNNaW5pbWl6ZWQpID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlzTWluaW1pemVkS2V5LCBpc01pbmltaXplZCA/IFwiMVwiIDogXCIwXCIpKTtcbiAgfVxufVxuIl19