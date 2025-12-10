import { Component, inject } from "@angular/core";
import { TA_AUTH_TOKEN } from "../../../services/auth.service";
import * as i0 from "@angular/core";
export class SignRedirectComponent {
    constructor() {
        this._authService = inject(TA_AUTH_TOKEN);
        this._authService.signin();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SignRedirectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SignRedirectComponent, isStandalone: true, selector: "ng-component", ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SignRedirectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "",
                    template: "",
                    standalone: true,
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL2NvbXBvbmVudHMvbG9naW4vcmVkaXJlY3Qvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBTy9ELE1BQU0sT0FBTyxxQkFBcUI7SUFHaEM7UUFGUSxpQkFBWSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUczQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7K0dBTFUscUJBQXFCO21HQUFyQixxQkFBcUIsd0VBSHRCLEVBQUU7OzRGQUdELHFCQUFxQjtrQkFMakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtvQkFDWixRQUFRLEVBQUUsRUFBRTtvQkFDWixVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRBX0FVVEhfVE9LRU4gfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJcIixcbiAgdGVtcGxhdGU6IFwiXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25SZWRpcmVjdENvbXBvbmVudCB7XG4gIHByaXZhdGUgX2F1dGhTZXJ2aWNlID0gaW5qZWN0KFRBX0FVVEhfVE9LRU4pO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ25pbigpO1xuICB9XG59XG4iXX0=