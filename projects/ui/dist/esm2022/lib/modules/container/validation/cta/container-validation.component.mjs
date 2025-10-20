import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import { openModal } from '../common-modal';
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
        openModal(this.dialog).subscribe(result => {
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
            args: [{ selector: 'ta-container-validation', standalone: true, template: "<div stopPropagationActivation (click)=\"this.openModal()\">\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }], propDecorators: { disabled: [{
                type: Input
            }], validated: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLXZhbGlkYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2NvbnRhaW5lci92YWxpZGF0aW9uL2N0YS9jb250YWluZXItdmFsaWRhdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY29udGFpbmVyL3ZhbGlkYXRpb24vY3RhL2NvbnRhaW5lci12YWxpZGF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQU81QyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsZUFBZTtJQU8vRCxZQUFtQixNQUFpQjtRQUNsQyxLQUFLLEVBQUUsQ0FBQztRQURTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFMcEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdqQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUkvQixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLE9BQU87UUFDVCxDQUFDO1FBRUQsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxNQUFNLEVBQUUsQ0FBQztnQkFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBckJVLDRCQUE0QjttR0FBNUIsNEJBQTRCLGlMQ1p6QyxxR0FHQTs7NEZEU2EsNEJBQTRCO2tCQUx4QyxTQUFTOytCQUNFLHlCQUF5QixjQUV2QixJQUFJOzhFQUloQixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sU0FBUztzQkFEUixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IG9wZW5Nb2RhbCB9IGZyb20gJy4uL2NvbW1vbi1tb2RhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWNvbnRhaW5lci12YWxpZGF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhaW5lci12YWxpZGF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyVmFsaWRhdGlvbkNvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHZhbGlkYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgb3Blbk1vZGFsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKHRoaXMuZGlhbG9nKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZWQuZW1pdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IHN0b3BQcm9wYWdhdGlvbkFjdGl2YXRpb24gKGNsaWNrKT1cInRoaXMub3Blbk1vZGFsKClcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=