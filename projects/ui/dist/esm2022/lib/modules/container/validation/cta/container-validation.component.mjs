import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import { openModal } from "../common-modal";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class ContainerValidationComponent extends TaBaseComponent {
    constructor(dialog) {
        super();
        this.dialog = dialog;
        this.disabled = false;
        this.validated = new EventEmitter();
    }
    openModal() {
        if (this.disabled) {
            return;
        }
        openModal(this.dialog).subscribe((result) => {
            if (result) {
                this.validated.emit();
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ContainerValidationComponent, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ContainerValidationComponent, isStandalone: true, selector: "ta-container-validation", inputs: { disabled: "disabled" }, outputs: { validated: "validated" }, usesInheritance: true, ngImport: i0, template: "<div stopPropagationActivation (click)=\"this.openModal()\">\n  <ng-content></ng-content>\n</div>\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ContainerValidationComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-container-validation", standalone: true, template: "<div stopPropagationActivation (click)=\"this.openModal()\">\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }], propDecorators: { disabled: [{
                type: Input
            }], validated: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLXZhbGlkYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2NvbnRhaW5lci92YWxpZGF0aW9uL2N0YS9jb250YWluZXItdmFsaWRhdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY29udGFpbmVyL3ZhbGlkYXRpb24vY3RhL2NvbnRhaW5lci12YWxpZGF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQU81QyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsZUFBZTtJQU8vRCxZQUFtQixNQUFpQjtRQUNsQyxLQUFLLEVBQUUsQ0FBQztRQURTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFMcEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdqQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUkvQixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLE9BQU87UUFDVCxDQUFDO1FBRUQsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMxQyxJQUFJLE1BQU0sRUFBRSxDQUFDO2dCQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0FyQlUsNEJBQTRCO21HQUE1Qiw0QkFBNEIsaUxDWnpDLHFHQUdBOzs0RkRTYSw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0UseUJBQXlCLGNBRXZCLElBQUk7OEVBSWhCLFFBQVE7c0JBRFAsS0FBSztnQkFJTixTQUFTO3NCQURSLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5cbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgb3Blbk1vZGFsIH0gZnJvbSBcIi4uL2NvbW1vbi1tb2RhbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtY29udGFpbmVyLXZhbGlkYXRpb25cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jb250YWluZXItdmFsaWRhdGlvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBDb250YWluZXJWYWxpZGF0aW9uQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgdmFsaWRhdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBvcGVuTW9kYWwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvcGVuTW9kYWwodGhpcy5kaWFsb2cpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVkLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiBzdG9wUHJvcGFnYXRpb25BY3RpdmF0aW9uIChjbGljayk9XCJ0aGlzLm9wZW5Nb2RhbCgpXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19