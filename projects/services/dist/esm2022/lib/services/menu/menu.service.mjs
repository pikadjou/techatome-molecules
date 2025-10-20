import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
const isMinimizedKey = 'isMinimizedMenu';
export class TaSharedMenuService {
    constructor() {
        this.isMinimized$ = new BehaviorSubject(localStorage.getItem(isMinimizedKey) === '1' ? true : false);
        this.isMinimized$.subscribe(isMinimized => localStorage.setItem(isMinimizedKey, isMinimized ? '1' : '0'));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaSharedMenuService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaSharedMenuService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaSharedMenuService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9tZW51L21lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRXZDLE1BQU0sY0FBYyxHQUFHLGlCQUFpQixDQUFDO0FBSXpDLE1BQU0sT0FBTyxtQkFBbUI7SUFHOUI7UUFGTyxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFVLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRzlHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUcsQ0FBQzsrR0FMVSxtQkFBbUI7bUhBQW5CLG1CQUFtQixjQUZsQixNQUFNOzs0RkFFUCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuY29uc3QgaXNNaW5pbWl6ZWRLZXkgPSAnaXNNaW5pbWl6ZWRNZW51JztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUYVNoYXJlZE1lbnVTZXJ2aWNlIHtcbiAgcHVibGljIGlzTWluaW1pemVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obG9jYWxTdG9yYWdlLmdldEl0ZW0oaXNNaW5pbWl6ZWRLZXkpID09PSAnMScgPyB0cnVlIDogZmFsc2UpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNNaW5pbWl6ZWQkLnN1YnNjcmliZShpc01pbmltaXplZCA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpc01pbmltaXplZEtleSwgaXNNaW5pbWl6ZWQgPyAnMScgOiAnMCcpKTtcbiAgfVxufVxuIl19