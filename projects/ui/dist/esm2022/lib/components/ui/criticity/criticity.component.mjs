import { Component, Input } from "@angular/core";
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
        TaTranslationUI.getInstance();
    }
    label() {
        return criticityLabel(this.criticity);
    }
    type() {
        switch (this.criticity) {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CriticityComponent, isStandalone: true, selector: "ta-criticity", inputs: { criticity: "criticity" }, ngImport: i0, template: "<ta-badge [value]=\"this.label() | translate\" [type]=\"this.type()\"></ta-badge>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CriticityComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-criticity", standalone: true, imports: [TranslateModule, BadgeComponent], template: "<ta-badge [value]=\"this.label() | translate\" [type]=\"this.type()\"></ta-badge>\n" }]
        }], ctorParameters: () => [], propDecorators: { criticity: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JpdGljaXR5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9jcml0aWNpdHkvY3JpdGljaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9jcml0aWNpdHkvY3JpdGljaXR5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFFL0QsTUFBTSxDQUFOLElBQVksZUFLWDtBQUxELFdBQVksZUFBZTtJQUN6QiwyREFBVyxDQUFBO0lBQ1gsaURBQU0sQ0FBQTtJQUNOLGlEQUFNLENBQUE7SUFDTixpREFBTSxDQUFBO0FBQ1IsQ0FBQyxFQUxXLGVBQWUsS0FBZixlQUFlLFFBSzFCO0FBQ0QsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLENBQUMsU0FBMEIsRUFBRSxFQUFFLENBQzNELGdCQUFnQixTQUFTLEVBQUUsQ0FBQztBQVM5QixNQUFNLE9BQU8sa0JBQWtCO0lBSTdCO1FBQ0UsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDTSxLQUFLO1FBQ1YsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTSxJQUFJO1FBQ1QsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDdkIsS0FBSyxlQUFlLENBQUMsRUFBRTtnQkFDckIsT0FBTyxRQUFRLENBQUM7WUFDbEIsS0FBSyxlQUFlLENBQUMsRUFBRTtnQkFDckIsT0FBTyxTQUFTLENBQUM7WUFDbkIsS0FBSyxlQUFlLENBQUMsRUFBRTtnQkFDckIsT0FBTyxTQUFTLENBQUM7WUFDbkI7Z0JBQ0UsT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUM7K0dBckJVLGtCQUFrQjttR0FBbEIsa0JBQWtCLDRHQ3ZCL0IscUZBQ0EseUREb0JZLGVBQWUsNEZBQUUsY0FBYzs7NEZBRTlCLGtCQUFrQjtrQkFQOUIsU0FBUzsrQkFDRSxjQUFjLGNBR1osSUFBSSxXQUNQLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQzt3REFJMUMsU0FBUztzQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5cbmltcG9ydCB7IEJhZGdlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2JhZGdlL2JhZGdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblVJIH0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2VcIjtcblxuZXhwb3J0IGVudW0gQ3JpdGljaXR5U3RhdHVzIHtcbiAgVW5rbm93biA9IDAsXG4gIFAxID0gMSxcbiAgUDIgPSAyLFxuICBQMyA9IDMsXG59XG5leHBvcnQgY29uc3QgY3JpdGljaXR5TGFiZWwgPSAoY3JpdGljaXR5OiBDcml0aWNpdHlTdGF0dXMpID0+XG4gIGB1aS5jcml0aWNpdHkuJHtjcml0aWNpdHl9YDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWNyaXRpY2l0eVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NyaXRpY2l0eS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY3JpdGljaXR5LmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbVHJhbnNsYXRlTW9kdWxlLCBCYWRnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENyaXRpY2l0eUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGNyaXRpY2l0eSE6IG51bWJlciB8IENyaXRpY2l0eVN0YXR1cztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBUYVRyYW5zbGF0aW9uVUkuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICBwdWJsaWMgbGFiZWwoKSB7XG4gICAgcmV0dXJuIGNyaXRpY2l0eUxhYmVsKHRoaXMuY3JpdGljaXR5KTtcbiAgfVxuICBwdWJsaWMgdHlwZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuY3JpdGljaXR5KSB7XG4gICAgICBjYXNlIENyaXRpY2l0eVN0YXR1cy5QMTpcbiAgICAgICAgcmV0dXJuIFwiZGFuZ2VyXCI7XG4gICAgICBjYXNlIENyaXRpY2l0eVN0YXR1cy5QMjpcbiAgICAgICAgcmV0dXJuIFwid2FybmluZ1wiO1xuICAgICAgY2FzZSBDcml0aWNpdHlTdGF0dXMuUDM6XG4gICAgICAgIHJldHVybiBcInN1Y2Nlc3NcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcInByaW1hcnlcIjtcbiAgICB9XG4gIH1cbn1cbiIsIjx0YS1iYWRnZSBbdmFsdWVdPVwidGhpcy5sYWJlbCgpIHwgdHJhbnNsYXRlXCIgW3R5cGVdPVwidGhpcy50eXBlKClcIj48L3RhLWJhZGdlPlxuIl19