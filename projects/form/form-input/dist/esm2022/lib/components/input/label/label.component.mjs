import { Component } from '@angular/core';
import { TranslatePipe } from '@ta/translation';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export class LabelComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LabelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LabelComponent, isStandalone: true, selector: "ta-input-label", usesInheritance: true, ngImport: i0, template: "<span>{{ input.label | translate }}</span>\n", styles: [""], dependencies: [{ kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-label', standalone: true, imports: [TranslatePipe], template: "<span>{{ input.label | translate }}</span>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2xhYmVsL2xhYmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9sYWJlbC9sYWJlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFTcEUsTUFBTSxPQUFPLGNBQWUsU0FBUSx3QkFBb0M7SUFDdEU7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7K0dBSFUsY0FBYzttR0FBZCxjQUFjLGlHQ2QzQiw4Q0FDQSxxRERXWSxhQUFhOzs0RkFFWixjQUFjO2tCQVAxQixTQUFTOytCQUNFLGdCQUFnQixjQUdkLElBQUksV0FDUCxDQUFDLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnB1dExhYmVsIH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XG5cbmltcG9ydCB7IFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWlucHV0LWxhYmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xhYmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGFiZWwuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1RyYW5zbGF0ZVBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBMYWJlbENvbXBvbmVudCBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dExhYmVsPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cbiIsIjxzcGFuPnt7IGlucHV0LmxhYmVsIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuIl19