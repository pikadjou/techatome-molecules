import { Component, inject } from '@angular/core';
import { CAM_AUTH_TOKEN } from '../../../services/auth.service';
import * as i0 from "@angular/core";
export class LoginRedirectComponent {
    constructor() {
        this._authService = inject(CAM_AUTH_TOKEN);
        this._authService.login();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LoginRedirectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LoginRedirectComponent, isStandalone: true, selector: "ng-component", ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LoginRedirectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '',
                    template: '',
                    standalone: true,
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXJlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvY29tcG9uZW50cy9sb2dpbi9yZWRpcmVjdC9yZWRpcmVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQU9oRSxNQUFNLE9BQU8sc0JBQXNCO0lBR2pDO1FBRlEsaUJBQVksR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFHNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOytHQUxVLHNCQUFzQjttR0FBdEIsc0JBQXNCLHdFQUh2QixFQUFFOzs0RkFHRCxzQkFBc0I7a0JBTGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7b0JBQ1osUUFBUSxFQUFFLEVBQUU7b0JBQ1osVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ0FNX0FVVEhfVE9LRU4gfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICcnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luUmVkaXJlY3RDb21wb25lbnQge1xuICBwcml2YXRlIF9hdXRoU2VydmljZSA9IGluamVjdChDQU1fQVVUSF9UT0tFTik7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fYXV0aFNlcnZpY2UubG9naW4oKTtcbiAgfVxufVxuIl19