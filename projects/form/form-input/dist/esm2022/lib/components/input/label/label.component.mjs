import { Component } from "@angular/core";
import { TranslatePipe } from "@ta/translation";
import { TaAbstractInputComponent } from "../../abstract.component";
import * as i0 from "@angular/core";
export class LabelComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LabelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: LabelComponent, isStandalone: true, selector: "ta-input-label", usesInheritance: true, ngImport: i0, template: "<span>{{ input.label | translate }}</span>\n", styles: [""], dependencies: [{ kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LabelComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-input-label", standalone: true, imports: [TranslatePipe], template: "<span>{{ input.label | translate }}</span>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2xhYmVsL2xhYmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9sYWJlbC9sYWJlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFTcEUsTUFBTSxPQUFPLGNBQWUsU0FBUSx3QkFBb0M7SUFDdEU7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7K0dBSFUsY0FBYzttR0FBZCxjQUFjLGlHQ2QzQiw4Q0FDQSxxRERXWSxhQUFhOzs0RkFFWixjQUFjO2tCQVAxQixTQUFTOytCQUNFLGdCQUFnQixjQUdkLElBQUksV0FDUCxDQUFDLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IElucHV0TGFiZWwgfSBmcm9tIFwiQHRhL2Zvcm0tbW9kZWxcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tIFwiQHRhL3RyYW5zbGF0aW9uXCI7XG5cbmltcG9ydCB7IFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWlucHV0LWxhYmVsXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbGFiZWwuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2xhYmVsLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbVHJhbnNsYXRlUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsQ29tcG9uZW50IGV4dGVuZHMgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0TGFiZWw+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIiwiPHNwYW4+e3sgaW5wdXQubGFiZWwgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG4iXX0=