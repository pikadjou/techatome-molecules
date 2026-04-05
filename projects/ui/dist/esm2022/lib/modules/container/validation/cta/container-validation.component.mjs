import { Component, EventEmitter, inject, input, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TaBaseComponent } from "@ta/utils";
import { openModal } from "../common-modal";
import * as i0 from "@angular/core";
export class ContainerValidationComponent extends TaBaseComponent {
    constructor() {
        super();
        this.disabled = input(false);
        this.validated = new EventEmitter();
        this._dialog = inject(MatDialog);
    }
    openModal() {
        if (this.disabled()) {
            return;
        }
        this._registerSubscription(openModal(this._dialog).subscribe((result) => {
            if (result) {
                this.validated.emit();
            }
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ContainerValidationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ContainerValidationComponent, isStandalone: true, selector: "ta-container-validation", inputs: { disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { validated: "validated" }, usesInheritance: true, ngImport: i0, template: "<div stopPropagationActivation (click)=\"this.openModal()\">\n  <ng-content></ng-content>\n</div>\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ContainerValidationComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-container-validation", standalone: true, template: "<div stopPropagationActivation (click)=\"this.openModal()\">\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { validated: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLXZhbGlkYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2NvbnRhaW5lci92YWxpZGF0aW9uL2N0YS9jb250YWluZXItdmFsaWRhdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY29udGFpbmVyL3ZhbGlkYXRpb24vY3RhL2NvbnRhaW5lci12YWxpZGF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFPNUMsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGVBQWU7SUFRL0Q7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQVJWLGFBQVEsR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7UUFHakMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEIsWUFBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUluQyxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7WUFDcEIsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMscUJBQXFCLENBQ3hCLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDM0MsSUFBSSxNQUFNLEVBQUUsQ0FBQztnQkFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzsrR0F4QlUsNEJBQTRCO21HQUE1Qiw0QkFBNEIsNFJDWnpDLHFHQUdBOzs0RkRTYSw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0UseUJBQXlCLGNBRXZCLElBQUk7d0RBTWhCLFNBQVM7c0JBRFIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBpbmplY3QsIGlucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuXG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IG9wZW5Nb2RhbCB9IGZyb20gXCIuLi9jb21tb24tbW9kYWxcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWNvbnRhaW5lci12YWxpZGF0aW9uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY29udGFpbmVyLXZhbGlkYXRpb24uY29tcG9uZW50Lmh0bWxcIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyVmFsaWRhdGlvbkNvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCB7XG4gIGRpc2FibGVkID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIEBPdXRwdXQoKVxuICB2YWxpZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIF9kaWFsb2cgPSBpbmplY3QoTWF0RGlhbG9nKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgb3Blbk1vZGFsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIG9wZW5Nb2RhbCh0aGlzLl9kaWFsb2cpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlZC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIiwiPGRpdiBzdG9wUHJvcGFnYXRpb25BY3RpdmF0aW9uIChjbGljayk9XCJ0aGlzLm9wZW5Nb2RhbCgpXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19