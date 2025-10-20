import { Component, inject } from '@angular/core';
import { TA_AUTH_TOKEN } from '../../../services/auth.service';
import * as i0 from "@angular/core";
export class SignRedirectComponent {
    constructor() {
        this._authService = inject(TA_AUTH_TOKEN);
        this._authService.signin();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SignRedirectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SignRedirectComponent, isStandalone: true, selector: "ng-component", ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SignRedirectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '',
                    template: '',
                    standalone: true,
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL2NvbXBvbmVudHMvbG9naW4vcmVkaXJlY3Qvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBTy9ELE1BQU0sT0FBTyxxQkFBcUI7SUFHaEM7UUFGUSxpQkFBWSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUczQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7K0dBTFUscUJBQXFCO21HQUFyQixxQkFBcUIsd0VBSHRCLEVBQUU7OzRGQUdELHFCQUFxQjtrQkFMakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtvQkFDWixRQUFRLEVBQUUsRUFBRTtvQkFDWixVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUQV9BVVRIX1RPS0VOIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBTaWduUmVkaXJlY3RDb21wb25lbnQge1xuICBwcml2YXRlIF9hdXRoU2VydmljZSA9IGluamVjdChUQV9BVVRIX1RPS0VOKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9hdXRoU2VydmljZS5zaWduaW4oKTtcbiAgfVxufVxuIl19