import { Component, input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { BadgeComponent } from "../badge/badge.component";
import { TaTranslationUI } from "../../../translation.service";
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
        this.criticity = input.required();
        TaTranslationUI.getInstance();
    }
    label() {
        return criticityLabel(this.criticity());
    }
    type() {
        switch (this.criticity()) {
            case CriticityStatus.P1:
                return "danger";
            case CriticityStatus.P2:
                return "warning";
            case CriticityStatus.P3:
                return "success";
            default:
                return "primary";
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CriticityComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: CriticityComponent, isStandalone: true, selector: "ta-criticity", inputs: { criticity: { classPropertyName: "criticity", publicName: "criticity", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "<ta-badge [value]=\"this.label() | translate\" [type]=\"this.type()\"></ta-badge>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CriticityComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-criticity", standalone: true, imports: [TranslateModule, BadgeComponent], template: "<ta-badge [value]=\"this.label() | translate\" [type]=\"this.type()\"></ta-badge>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpdGljaXR5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9jcml0aWNpdHkvY3JpdGljaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9jcml0aWNpdHkvY3JpdGljaXR5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFFL0QsTUFBTSxDQUFOLElBQVksZUFLWDtBQUxELFdBQVksZUFBZTtJQUN6QiwyREFBVyxDQUFBO0lBQ1gsaURBQU0sQ0FBQTtJQUNOLGlEQUFNLENBQUE7SUFDTixpREFBTSxDQUFBO0FBQ1IsQ0FBQyxFQUxXLGVBQWUsS0FBZixlQUFlLFFBSzFCO0FBQ0QsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLENBQUMsU0FBMEIsRUFBRSxFQUFFLENBQzNELGdCQUFnQixTQUFTLEVBQUUsQ0FBQztBQVM5QixNQUFNLE9BQU8sa0JBQWtCO0lBRzdCO1FBRkEsY0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQTRCLENBQUM7UUFHckQsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDTSxLQUFLO1FBQ1YsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNNLElBQUk7UUFDVCxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQ3pCLEtBQUssZUFBZSxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sUUFBUSxDQUFDO1lBQ2xCLEtBQUssZUFBZSxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sU0FBUyxDQUFDO1lBQ25CLEtBQUssZUFBZSxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sU0FBUyxDQUFDO1lBQ25CO2dCQUNFLE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDOytHQXBCVSxrQkFBa0I7bUdBQWxCLGtCQUFrQix1TkN2Qi9CLHFGQUNBLHlERG9CWSxlQUFlLDRGQUFFLGNBQWM7OzRGQUU5QixrQkFBa0I7a0JBUDlCLFNBQVM7K0JBQ0UsY0FBYyxjQUdaLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGlucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcblxuaW1wb3J0IHsgQmFkZ2VDb21wb25lbnQgfSBmcm9tIFwiLi4vYmFkZ2UvYmFkZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uVUkgfSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNsYXRpb24uc2VydmljZVwiO1xuXG5leHBvcnQgZW51bSBDcml0aWNpdHlTdGF0dXMge1xuICBVbmtub3duID0gMCxcbiAgUDEgPSAxLFxuICBQMiA9IDIsXG4gIFAzID0gMyxcbn1cbmV4cG9ydCBjb25zdCBjcml0aWNpdHlMYWJlbCA9IChjcml0aWNpdHk6IENyaXRpY2l0eVN0YXR1cykgPT5cbiAgYHVpLmNyaXRpY2l0eS4ke2NyaXRpY2l0eX1gO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtY3JpdGljaXR5XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY3JpdGljaXR5LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jcml0aWNpdHkuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtUcmFuc2xhdGVNb2R1bGUsIEJhZGdlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ3JpdGljaXR5Q29tcG9uZW50IHtcbiAgY3JpdGljaXR5ID0gaW5wdXQucmVxdWlyZWQ8bnVtYmVyIHwgQ3JpdGljaXR5U3RhdHVzPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIHB1YmxpYyBsYWJlbCgpIHtcbiAgICByZXR1cm4gY3JpdGljaXR5TGFiZWwodGhpcy5jcml0aWNpdHkoKSk7XG4gIH1cbiAgcHVibGljIHR5cGUoKSB7XG4gICAgc3dpdGNoICh0aGlzLmNyaXRpY2l0eSgpKSB7XG4gICAgICBjYXNlIENyaXRpY2l0eVN0YXR1cy5QMTpcbiAgICAgICAgcmV0dXJuIFwiZGFuZ2VyXCI7XG4gICAgICBjYXNlIENyaXRpY2l0eVN0YXR1cy5QMjpcbiAgICAgICAgcmV0dXJuIFwid2FybmluZ1wiO1xuICAgICAgY2FzZSBDcml0aWNpdHlTdGF0dXMuUDM6XG4gICAgICAgIHJldHVybiBcInN1Y2Nlc3NcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcInByaW1hcnlcIjtcbiAgICB9XG4gIH1cbn1cbiIsIjx0YS1iYWRnZSBbdmFsdWVdPVwidGhpcy5sYWJlbCgpIHwgdHJhbnNsYXRlXCIgW3R5cGVdPVwidGhpcy50eXBlKClcIj48L3RhLWJhZGdlPlxuIl19