import { Component, inject } from '@angular/core';
import { TA_AUTH_TOKEN } from '../../../services/auth.service';
import * as i0 from "@angular/core";
export class LoginRedirectComponent {
    constructor() {
        this._authService = inject(TA_AUTH_TOKEN);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvY29tcG9uZW50cy9sb2dpbi9yZWRpcmVjdC9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQU8vRCxNQUFNLE9BQU8sc0JBQXNCO0lBR2pDO1FBRlEsaUJBQVksR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFHM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOytHQUxVLHNCQUFzQjttR0FBdEIsc0JBQXNCLHdFQUh2QixFQUFFOzs0RkFHRCxzQkFBc0I7a0JBTGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7b0JBQ1osUUFBUSxFQUFFLEVBQUU7b0JBQ1osVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVEFfQVVUSF9UT0tFTiB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJycsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5SZWRpcmVjdENvbXBvbmVudCB7XG4gIHByaXZhdGUgX2F1dGhTZXJ2aWNlID0gaW5qZWN0KFRBX0FVVEhfVE9LRU4pO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ2luKCk7XG4gIH1cbn1cbiJdfQ==