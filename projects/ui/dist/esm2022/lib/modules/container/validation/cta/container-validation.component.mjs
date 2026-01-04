import { Component, EventEmitter, input, Output } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import { openModal } from "../common-modal";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class ContainerValidationComponent extends TaBaseComponent {
    constructor(dialog) {
        super();
        this.dialog = dialog;
        this.disabled = input(false);
        this.validated = new EventEmitter();
    }
    openModal() {
        if (this.disabled()) {
            return;
        }
        openModal(this.dialog).subscribe((result) => {
            if (result) {
                this.validated.emit();
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ContainerValidationComponent, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ContainerValidationComponent, isStandalone: true, selector: "ta-container-validation", inputs: { disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { validated: "validated" }, usesInheritance: true, ngImport: i0, template: "<div stopPropagationActivation (click)=\"this.openModal()\">\n  <ng-content></ng-content>\n</div>\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ContainerValidationComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-container-validation", standalone: true, template: "<div stopPropagationActivation (click)=\"this.openModal()\">\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }], propDecorators: { validated: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLXZhbGlkYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2NvbnRhaW5lci92YWxpZGF0aW9uL2N0YS9jb250YWluZXItdmFsaWRhdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY29udGFpbmVyL3ZhbGlkYXRpb24vY3RhL2NvbnRhaW5lci12YWxpZGF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQU81QyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsZUFBZTtJQU0vRCxZQUFtQixNQUFpQjtRQUNsQyxLQUFLLEVBQUUsQ0FBQztRQURTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFMcEMsYUFBUSxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUdqQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUkvQixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7WUFDcEIsT0FBTztRQUNULENBQUM7UUFFRCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzFDLElBQUksTUFBTSxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOytHQXBCVSw0QkFBNEI7bUdBQTVCLDRCQUE0Qiw0UkNaekMscUdBR0E7OzRGRFNhLDRCQUE0QjtrQkFMeEMsU0FBUzsrQkFDRSx5QkFBeUIsY0FFdkIsSUFBSTs4RUFNaEIsU0FBUztzQkFEUixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGlucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuXG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IG9wZW5Nb2RhbCB9IGZyb20gXCIuLi9jb21tb24tbW9kYWxcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWNvbnRhaW5lci12YWxpZGF0aW9uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY29udGFpbmVyLXZhbGlkYXRpb24uY29tcG9uZW50Lmh0bWxcIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyVmFsaWRhdGlvbkNvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCB7XG4gIGRpc2FibGVkID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIEBPdXRwdXQoKVxuICB2YWxpZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG9wZW5Nb2RhbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKHRoaXMuZGlhbG9nKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRlZC5lbWl0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgc3RvcFByb3BhZ2F0aW9uQWN0aXZhdGlvbiAoY2xpY2spPVwidGhpcy5vcGVuTW9kYWwoKVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==