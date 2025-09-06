import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BadgeComponent } from '../badge/badge.component';
import { TaTranslationUI } from '../translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export var CriticityStatus;
(function (CriticityStatus) {
    CriticityStatus[CriticityStatus["Unknown"] = 0] = "Unknown";
    CriticityStatus[CriticityStatus["P1"] = 1] = "P1";
    CriticityStatus[CriticityStatus["P2"] = 2] = "P2";
    CriticityStatus[CriticityStatus["P3"] = 3] = "P3";
})(CriticityStatus || (CriticityStatus = {}));
export const criticityLabel = (criticity) => `ui.criticity.${criticity}`;
export class CriticityComponent {
    constructor() {
        TaTranslationUI.getInstance();
    }
    label() {
        return criticityLabel(this.criticity);
    }
    type() {
        switch (this.criticity) {
            case CriticityStatus.P1:
                return 'danger';
            case CriticityStatus.P2:
                return 'warning';
            case CriticityStatus.P3:
                return 'success';
            default:
                return 'primary';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CriticityComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CriticityComponent, isStandalone: true, selector: "ta-criticity", inputs: { criticity: "criticity" }, ngImport: i0, template: "<ta-badge [value]=\"this.label() | translate\" [type]=\"this.type()\"></ta-badge>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CriticityComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-criticity', standalone: true, imports: [TranslateModule, BadgeComponent], template: "<ta-badge [value]=\"this.label() | translate\" [type]=\"this.type()\"></ta-badge>\n" }]
        }], ctorParameters: () => [], propDecorators: { criticity: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpdGljaXR5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9jcml0aWNpdHkvY3JpdGljaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9jcml0aWNpdHkvY3JpdGljaXR5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFFekQsTUFBTSxDQUFOLElBQVksZUFLWDtBQUxELFdBQVksZUFBZTtJQUN6QiwyREFBVyxDQUFBO0lBQ1gsaURBQU0sQ0FBQTtJQUNOLGlEQUFNLENBQUE7SUFDTixpREFBTSxDQUFBO0FBQ1IsQ0FBQyxFQUxXLGVBQWUsS0FBZixlQUFlLFFBSzFCO0FBQ0QsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLENBQUMsU0FBMEIsRUFBRSxFQUFFLENBQUMsZ0JBQWdCLFNBQVMsRUFBRSxDQUFDO0FBUzFGLE1BQU0sT0FBTyxrQkFBa0I7SUFJN0I7UUFDRSxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNNLEtBQUs7UUFDVixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNNLElBQUk7UUFDVCxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN2QixLQUFLLGVBQWUsQ0FBQyxFQUFFO2dCQUNyQixPQUFPLFFBQVEsQ0FBQztZQUNsQixLQUFLLGVBQWUsQ0FBQyxFQUFFO2dCQUNyQixPQUFPLFNBQVMsQ0FBQztZQUNuQixLQUFLLGVBQWUsQ0FBQyxFQUFFO2dCQUNyQixPQUFPLFNBQVMsQ0FBQztZQUNuQjtnQkFDRSxPQUFPLFNBQVMsQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQzsrR0FyQlUsa0JBQWtCO21HQUFsQixrQkFBa0IsNEdDdEIvQixxRkFDQSx5RERtQlksZUFBZSw0RkFBRSxjQUFjOzs0RkFFOUIsa0JBQWtCO2tCQVA5QixTQUFTOytCQUNFLGNBQWMsY0FHWixJQUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDO3dEQUkxQyxTQUFTO3NCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQgeyBCYWRnZUNvbXBvbmVudCB9IGZyb20gJy4uL2JhZGdlL2JhZGdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uVUkgfSBmcm9tICcuLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGVudW0gQ3JpdGljaXR5U3RhdHVzIHtcbiAgVW5rbm93biA9IDAsXG4gIFAxID0gMSxcbiAgUDIgPSAyLFxuICBQMyA9IDMsXG59XG5leHBvcnQgY29uc3QgY3JpdGljaXR5TGFiZWwgPSAoY3JpdGljaXR5OiBDcml0aWNpdHlTdGF0dXMpID0+IGB1aS5jcml0aWNpdHkuJHtjcml0aWNpdHl9YDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtY3JpdGljaXR5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NyaXRpY2l0eS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NyaXRpY2l0eS5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbVHJhbnNsYXRlTW9kdWxlLCBCYWRnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENyaXRpY2l0eUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGNyaXRpY2l0eSE6IG51bWJlciB8IENyaXRpY2l0eVN0YXR1cztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBUYVRyYW5zbGF0aW9uVUkuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICBwdWJsaWMgbGFiZWwoKSB7XG4gICAgcmV0dXJuIGNyaXRpY2l0eUxhYmVsKHRoaXMuY3JpdGljaXR5KTtcbiAgfVxuICBwdWJsaWMgdHlwZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuY3JpdGljaXR5KSB7XG4gICAgICBjYXNlIENyaXRpY2l0eVN0YXR1cy5QMTpcbiAgICAgICAgcmV0dXJuICdkYW5nZXInO1xuICAgICAgY2FzZSBDcml0aWNpdHlTdGF0dXMuUDI6XG4gICAgICAgIHJldHVybiAnd2FybmluZyc7XG4gICAgICBjYXNlIENyaXRpY2l0eVN0YXR1cy5QMzpcbiAgICAgICAgcmV0dXJuICdzdWNjZXNzJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAncHJpbWFyeSc7XG4gICAgfVxuICB9XG59XG4iLCI8dGEtYmFkZ2UgW3ZhbHVlXT1cInRoaXMubGFiZWwoKSB8IHRyYW5zbGF0ZVwiIFt0eXBlXT1cInRoaXMudHlwZSgpXCI+PC90YS1iYWRnZT5cbiJdfQ==