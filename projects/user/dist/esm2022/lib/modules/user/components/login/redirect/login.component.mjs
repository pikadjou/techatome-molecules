import { Component, inject } from "@angular/core";
import { TA_AUTH_TOKEN } from "../../../services/auth.service";
import * as i0 from "@angular/core";
export class LoginRedirectComponent {
    constructor() {
        this._authService = inject(TA_AUTH_TOKEN);
        this._authService.login();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LoginRedirectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: LoginRedirectComponent, isStandalone: true, selector: "ng-component", ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LoginRedirectComponent, decorators: [{
            type: Component,
            args: [{
                    template: "",
                    standalone: true,
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvY29tcG9uZW50cy9sb2dpbi9yZWRpcmVjdC9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQU0vRCxNQUFNLE9BQU8sc0JBQXNCO0lBR2pDO1FBRlEsaUJBQVksR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFHM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOytHQUxVLHNCQUFzQjttR0FBdEIsc0JBQXNCLHdFQUh2QixFQUFFOzs0RkFHRCxzQkFBc0I7a0JBSmxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7b0JBQ1osVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUQV9BVVRIX1RPS0VOIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IFwiXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luUmVkaXJlY3RDb21wb25lbnQge1xuICBwcml2YXRlIF9hdXRoU2VydmljZSA9IGluamVjdChUQV9BVVRIX1RPS0VOKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9hdXRoU2VydmljZS5sb2dpbigpO1xuICB9XG59XG4iXX0=