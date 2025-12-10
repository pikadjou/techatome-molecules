import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
const isMinimizedKey = "isMinimizedMenu";
export class TaSharedMenuService {
    constructor() {
        this.isMinimized$ = new BehaviorSubject(localStorage.getItem(isMinimizedKey) === "1" ? true : false);
        this.isMinimized$.subscribe((isMinimized) => localStorage.setItem(isMinimizedKey, isMinimized ? "1" : "0"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9tZW51L21lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRXZDLE1BQU0sY0FBYyxHQUFHLGlCQUFpQixDQUFDO0FBSXpDLE1BQU0sT0FBTyxtQkFBbUI7SUFLOUI7UUFKTyxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUN2QyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQzVELENBQUM7UUFHQSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQzFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7K0dBVFUsbUJBQW1CO21IQUFuQixtQkFBbUIsY0FGbEIsTUFBTTs7NEZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuXG5jb25zdCBpc01pbmltaXplZEtleSA9IFwiaXNNaW5pbWl6ZWRNZW51XCI7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBUYVNoYXJlZE1lbnVTZXJ2aWNlIHtcbiAgcHVibGljIGlzTWluaW1pemVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oaXNNaW5pbWl6ZWRLZXkpID09PSBcIjFcIiA/IHRydWUgOiBmYWxzZVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNNaW5pbWl6ZWQkLnN1YnNjcmliZSgoaXNNaW5pbWl6ZWQpID0+XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpc01pbmltaXplZEtleSwgaXNNaW5pbWl6ZWQgPyBcIjFcIiA6IFwiMFwiKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==