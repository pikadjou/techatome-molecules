import { NgIf, NgFor, NgClass, NgTemplateOutlet } from "@angular/common";
import { LocalIconComponent } from "@ta/icons";
import { Component, Input } from "@angular/core";
import { TranslatePipe } from "@ta/translation";
import { ButtonComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export class DynamicComponent extends TaBaseComponent {
    constructor() {
        super();
        this.add = () => {
            this.input.add();
        };
        this.remove = (index) => {
            this.input.remove(index);
        };
    }
    canRemove(index) {
        return !isNaN(Number(index));
    }
    getKeys() {
        return Object.keys(this.input.inputsGroup);
    }
    getInputs(key) {
        return this.input.inputsGroup[key];
    }
    trackByFn(_, key) {
        return key;
    }
    trackInputByFn(_, input) {
        return input.key;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DynamicComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: DynamicComponent, isStandalone: true, selector: "ta-input-dynamic", inputs: { inputsTemplate: "inputsTemplate", input: "input" }, usesInheritance: true, ngImport: i0, template: "<div>\n  <div class=\"header\">\n    <h4>{{ input.label }}</h4>\n  </div>\n\n  @for (key of getKeys(); track trackByFn($index, key)) {\n  <div>\n    @if (this.canRemove(key)) {\n    <div class=\"remove-action\">\n      <ta-button\n        class=\"remove-action\"\n        [style]=\"'danger'\"\n        (action)=\"remove(key)\"\n      >\n        <ta-local-icon [type]=\"this.icon.DeleteLight\" size=\"xs\"></ta-local-icon>\n      </ta-button>\n    </div>\n    } @for (input of this.getInputs(key); track trackInputByFn($index, input)) {\n    @if (input) {\n    <div [ngClass]=\"input.class\">\n      <ng-container\n        [ngTemplateOutlet]=\"this.inputsTemplate\"\n        [ngTemplateOutletContext]=\"{\n                input: input,\n              }\"\n      >\n      </ng-container>\n    </div>\n    } }\n  </div>\n  }\n  <ta-button (action)=\"add()\">{{ \"form.dynamic.add\" | translate }}</ta-button>\n</div>\n", styles: [".remove-action{position:absolute;margin-top:16px;right:8px}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DynamicComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-input-dynamic", standalone: true, imports: [
                        NgIf,
                        NgFor,
                        NgClass,
                        NgTemplateOutlet,
                        LocalIconComponent,
                        ButtonComponent,
                        TranslatePipe,
                    ], template: "<div>\n  <div class=\"header\">\n    <h4>{{ input.label }}</h4>\n  </div>\n\n  @for (key of getKeys(); track trackByFn($index, key)) {\n  <div>\n    @if (this.canRemove(key)) {\n    <div class=\"remove-action\">\n      <ta-button\n        class=\"remove-action\"\n        [style]=\"'danger'\"\n        (action)=\"remove(key)\"\n      >\n        <ta-local-icon [type]=\"this.icon.DeleteLight\" size=\"xs\"></ta-local-icon>\n      </ta-button>\n    </div>\n    } @for (input of this.getInputs(key); track trackInputByFn($index, input)) {\n    @if (input) {\n    <div [ngClass]=\"input.class\">\n      <ng-container\n        [ngTemplateOutlet]=\"this.inputsTemplate\"\n        [ngTemplateOutletContext]=\"{\n                input: input,\n              }\"\n      >\n      </ng-container>\n    </div>\n    } }\n  </div>\n  }\n  <ta-button (action)=\"add()\">{{ \"form.dynamic.add\" | translate }}</ta-button>\n</div>\n", styles: [".remove-action{position:absolute;margin-top:16px;right:8px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { inputsTemplate: [{
                type: Input
            }], input: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvZHluYW1pYy9keW5hbWljLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9keW5hbWljL2R5bmFtaWMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBaUI1QyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZUFBZTtJQU9uRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBR0gsUUFBRyxHQUFHLEdBQUcsRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQztRQU1LLFdBQU0sR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQztJQVpGLENBQUM7SUFNTSxTQUFTLENBQUMsS0FBYTtRQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFNTSxPQUFPO1FBQ1osT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLFNBQVMsQ0FBQyxHQUFXO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLFNBQVMsQ0FBQyxDQUFTLEVBQUUsR0FBVztRQUNyQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFTSxjQUFjLENBQUMsQ0FBUyxFQUFFLEtBQXFCO1FBQ3BELE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNuQixDQUFDOytHQXJDVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQixpS0N4QjdCLHE1QkFpQ0EsdUhEaEJJLE9BQU8sb0ZBQ1AsZ0JBQWdCLG9KQUNoQixrQkFBa0IsZ0dBQ2xCLGVBQWUseUpBQ2YsYUFBYTs7NEZBR0osZ0JBQWdCO2tCQWY1QixTQUFTOytCQUNFLGtCQUFrQixjQUdoQixJQUFJLFdBQ1A7d0JBQ1AsSUFBSTt3QkFDSixLQUFLO3dCQUNMLE9BQU87d0JBQ1AsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsYUFBYTtxQkFDZDt3REFJTSxjQUFjO3NCQURwQixLQUFLO2dCQUlOLEtBQUs7c0JBREosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYsIE5nRm9yLCBOZ0NsYXNzLCBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTG9jYWxJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJbnB1dEJhc2UsIElucHV0RHluYW1pYyB9IGZyb20gXCJAdGEvZm9ybS1tb2RlbFwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gXCJAdGEvdHJhbnNsYXRpb25cIjtcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWlucHV0LWR5bmFtaWNcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9keW5hbWljLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9keW5hbWljLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTmdJZixcbiAgICBOZ0ZvcixcbiAgICBOZ0NsYXNzLFxuICAgIE5nVGVtcGxhdGVPdXRsZXQsXG4gICAgTG9jYWxJY29uQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGlucHV0c1RlbXBsYXRlITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBpbnB1dCE6IElucHV0RHluYW1pYztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGFkZCA9ICgpID0+IHtcbiAgICB0aGlzLmlucHV0LmFkZCgpO1xuICB9O1xuXG4gIHB1YmxpYyBjYW5SZW1vdmUoaW5kZXg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNOYU4oTnVtYmVyKGluZGV4KSk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlID0gKGluZGV4OiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLmlucHV0LnJlbW92ZShpbmRleCk7XG4gIH07XG5cbiAgcHVibGljIGdldEtleXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmlucHV0LmlucHV0c0dyb3VwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbnB1dHMoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC5pbnB1dHNHcm91cFtrZXldO1xuICB9XG5cbiAgcHVibGljIHRyYWNrQnlGbihfOiBudW1iZXIsIGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuXG4gIHB1YmxpYyB0cmFja0lucHV0QnlGbihfOiBudW1iZXIsIGlucHV0OiBJbnB1dEJhc2U8YW55Pikge1xuICAgIHJldHVybiBpbnB1dC5rZXk7XG4gIH1cbn1cbiIsIjxkaXY+XG4gIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICA8aDQ+e3sgaW5wdXQubGFiZWwgfX08L2g0PlxuICA8L2Rpdj5cblxuICBAZm9yIChrZXkgb2YgZ2V0S2V5cygpOyB0cmFjayB0cmFja0J5Rm4oJGluZGV4LCBrZXkpKSB7XG4gIDxkaXY+XG4gICAgQGlmICh0aGlzLmNhblJlbW92ZShrZXkpKSB7XG4gICAgPGRpdiBjbGFzcz1cInJlbW92ZS1hY3Rpb25cIj5cbiAgICAgIDx0YS1idXR0b25cbiAgICAgICAgY2xhc3M9XCJyZW1vdmUtYWN0aW9uXCJcbiAgICAgICAgW3N0eWxlXT1cIidkYW5nZXInXCJcbiAgICAgICAgKGFjdGlvbik9XCJyZW1vdmUoa2V5KVwiXG4gICAgICA+XG4gICAgICAgIDx0YS1sb2NhbC1pY29uIFt0eXBlXT1cInRoaXMuaWNvbi5EZWxldGVMaWdodFwiIHNpemU9XCJ4c1wiPjwvdGEtbG9jYWwtaWNvbj5cbiAgICAgIDwvdGEtYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIH0gQGZvciAoaW5wdXQgb2YgdGhpcy5nZXRJbnB1dHMoa2V5KTsgdHJhY2sgdHJhY2tJbnB1dEJ5Rm4oJGluZGV4LCBpbnB1dCkpIHtcbiAgICBAaWYgKGlucHV0KSB7XG4gICAgPGRpdiBbbmdDbGFzc109XCJpbnB1dC5jbGFzc1wiPlxuICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aGlzLmlucHV0c1RlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgICAgICAgICBpbnB1dDogaW5wdXQsXG4gICAgICAgICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgfSB9XG4gIDwvZGl2PlxuICB9XG4gIDx0YS1idXR0b24gKGFjdGlvbik9XCJhZGQoKVwiPnt7IFwiZm9ybS5keW5hbWljLmFkZFwiIHwgdHJhbnNsYXRlIH19PC90YS1idXR0b24+XG48L2Rpdj5cbiJdfQ==