import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CamTranslationUI } from '../translation.service';
import { BadgeComponent } from '../badge/badge.component';
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
        CamTranslationUI.getInstance();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpdGljaXR5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9jcml0aWNpdHkvY3JpdGljaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9jcml0aWNpdHkvY3JpdGljaXR5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUUxRCxNQUFNLENBQU4sSUFBWSxlQUtYO0FBTEQsV0FBWSxlQUFlO0lBQ3pCLDJEQUFXLENBQUE7SUFDWCxpREFBTSxDQUFBO0lBQ04saURBQU0sQ0FBQTtJQUNOLGlEQUFNLENBQUE7QUFDUixDQUFDLEVBTFcsZUFBZSxLQUFmLGVBQWUsUUFLMUI7QUFDRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxTQUEwQixFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsU0FBUyxFQUFFLENBQUM7QUFTMUYsTUFBTSxPQUFPLGtCQUFrQjtJQUk3QjtRQUNFLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDTSxLQUFLO1FBQ1YsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTSxJQUFJO1FBQ1QsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDdkIsS0FBSyxlQUFlLENBQUMsRUFBRTtnQkFDckIsT0FBTyxRQUFRLENBQUM7WUFDbEIsS0FBSyxlQUFlLENBQUMsRUFBRTtnQkFDckIsT0FBTyxTQUFTLENBQUM7WUFDbkIsS0FBSyxlQUFlLENBQUMsRUFBRTtnQkFDckIsT0FBTyxTQUFTLENBQUM7WUFDbkI7Z0JBQ0UsT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUM7K0dBckJVLGtCQUFrQjttR0FBbEIsa0JBQWtCLDRHQ3JCL0IscUZBQ0EseUREa0JZLGVBQWUsNEZBQUUsY0FBYzs7NEZBRTlCLGtCQUFrQjtrQkFQOUIsU0FBUzsrQkFDQSxjQUFjLGNBR1YsSUFBSSxXQUNQLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQzt3REFJMUMsU0FBUztzQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IENhbVRyYW5zbGF0aW9uVUkgfSBmcm9tICcuLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEJhZGdlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFkZ2UvYmFkZ2UuY29tcG9uZW50JztcblxuZXhwb3J0IGVudW0gQ3JpdGljaXR5U3RhdHVzIHtcbiAgVW5rbm93biA9IDAsXG4gIFAxID0gMSxcbiAgUDIgPSAyLFxuICBQMyA9IDMsXG59XG5leHBvcnQgY29uc3QgY3JpdGljaXR5TGFiZWwgPSAoY3JpdGljaXR5OiBDcml0aWNpdHlTdGF0dXMpID0+IGB1aS5jcml0aWNpdHkuJHtjcml0aWNpdHl9YDtcblxuQENvbXBvbmVudCh7XG5zZWxlY3RvcjogJ3RhLWNyaXRpY2l0eScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jcml0aWNpdHkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcml0aWNpdHkuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1RyYW5zbGF0ZU1vZHVsZSwgQmFkZ2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDcml0aWNpdHlDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBjcml0aWNpdHkhOiBudW1iZXIgfCBDcml0aWNpdHlTdGF0dXM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgQ2FtVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIHB1YmxpYyBsYWJlbCgpIHtcbiAgICByZXR1cm4gY3JpdGljaXR5TGFiZWwodGhpcy5jcml0aWNpdHkpO1xuICB9XG4gIHB1YmxpYyB0eXBlKCkge1xuICAgIHN3aXRjaCAodGhpcy5jcml0aWNpdHkpIHtcbiAgICAgIGNhc2UgQ3JpdGljaXR5U3RhdHVzLlAxOlxuICAgICAgICByZXR1cm4gJ2Rhbmdlcic7XG4gICAgICBjYXNlIENyaXRpY2l0eVN0YXR1cy5QMjpcbiAgICAgICAgcmV0dXJuICd3YXJuaW5nJztcbiAgICAgIGNhc2UgQ3JpdGljaXR5U3RhdHVzLlAzOlxuICAgICAgICByZXR1cm4gJ3N1Y2Nlc3MnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdwcmltYXJ5JztcbiAgICB9XG4gIH1cbn1cbiIsIjx0YS1iYWRnZSBbdmFsdWVdPVwidGhpcy5sYWJlbCgpIHwgdHJhbnNsYXRlXCIgW3R5cGVdPVwidGhpcy50eXBlKClcIj48L3RhLWJhZGdlPlxuIl19