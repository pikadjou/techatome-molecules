import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../../badge/badge.component';
import * as i0 from "@angular/core";
export class DepartmentProfessionsComponent {
    get visibleProfessions() {
        if (this.maxVisible) {
            return this.professions.slice(0, this.maxVisible);
        }
        return this.professions;
    }
    constructor() {
        /**
         * font-size
         */
        this.fontSize = 'xs';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DepartmentProfessionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: DepartmentProfessionsComponent, isStandalone: true, selector: "ta-department-professions", inputs: { professions: "professions", fontSize: "fontSize", maxVisible: "maxVisible" }, ngImport: i0, template: "<div class=\"align-center professions-container g-space-xs\">\n  @for (profession of this.visibleProfessions; track profession) {\n    <span>\n      <ta-badge [value]=\"profession\"></ta-badge>\n    </span>\n  }\n  @if (this.maxVisible && this.professions.length > this.maxVisible) {\n    <span class=\"more-label\"> +{{ this.professions.length - maxVisible }} </span>\n  }\n</div>\n", styles: [".professions-container{display:flex;flex-wrap:wrap}.professions-container .more-label{color:var(--ta-brand-500)}\n"], dependencies: [{ kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DepartmentProfessionsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-department-professions', standalone: true, imports: [NgIf, NgFor, BadgeComponent], template: "<div class=\"align-center professions-container g-space-xs\">\n  @for (profession of this.visibleProfessions; track profession) {\n    <span>\n      <ta-badge [value]=\"profession\"></ta-badge>\n    </span>\n  }\n  @if (this.maxVisible && this.professions.length > this.maxVisible) {\n    <span class=\"more-label\"> +{{ this.professions.length - maxVisible }} </span>\n  }\n</div>\n", styles: [".professions-container{display:flex;flex-wrap:wrap}.professions-container .more-label{color:var(--ta-brand-500)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { professions: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], maxVisible: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzc2lvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL2RlcGFydG1lbnRzL3Byb2Zlc3Npb25zL3Byb2Zlc3Npb25zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9kZXBhcnRtZW50cy9wcm9mZXNzaW9ucy9wcm9mZXNzaW9ucy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFTN0QsTUFBTSxPQUFPLDhCQUE4QjtJQWV6QyxJQUFJLGtCQUFrQjtRQUNwQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQ7UUFmQTs7V0FFRztRQUVILGFBQVEsR0FBWSxJQUFJLENBQUM7SUFXVixDQUFDOytHQXRCTCw4QkFBOEI7bUdBQTlCLDhCQUE4Qiw2S0NkM0MsaVlBVUEsNEtERXlCLGNBQWM7OzRGQUUxQiw4QkFBOEI7a0JBUDFDLFNBQVM7K0JBQ0UsMkJBQTJCLGNBR3pCLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDO3dEQU90QyxXQUFXO3NCQURWLEtBQUs7Z0JBT04sUUFBUTtzQkFEUCxLQUFLO2dCQUdHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0ZvciwgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tICdAdGEvc3R5bGVzJztcblxuaW1wb3J0IHsgQmFkZ2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYWRnZS9iYWRnZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1kZXBhcnRtZW50LXByb2Zlc3Npb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2Zlc3Npb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZmVzc2lvbnMuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIE5nRm9yLCBCYWRnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIERlcGFydG1lbnRQcm9mZXNzaW9uc0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBMaXN0IG9mIHByb2Zlc3Npb25zIHRvIGRpc3BsYXlcbiAgICovXG4gIEBJbnB1dCgpXG4gIHByb2Zlc3Npb25zITogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIGZvbnQtc2l6ZVxuICAgKi9cbiAgQElucHV0KClcbiAgZm9udFNpemU6IFRhU2l6ZXMgPSAneHMnO1xuXG4gIEBJbnB1dCgpIG1heFZpc2libGU/OiBudW1iZXI7XG5cbiAgZ2V0IHZpc2libGVQcm9mZXNzaW9ucygpIHtcbiAgICBpZiAodGhpcy5tYXhWaXNpYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9mZXNzaW9ucy5zbGljZSgwLCB0aGlzLm1heFZpc2libGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9mZXNzaW9ucztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiIsIjxkaXYgY2xhc3M9XCJhbGlnbi1jZW50ZXIgcHJvZmVzc2lvbnMtY29udGFpbmVyIGctc3BhY2UteHNcIj5cbiAgQGZvciAocHJvZmVzc2lvbiBvZiB0aGlzLnZpc2libGVQcm9mZXNzaW9uczsgdHJhY2sgcHJvZmVzc2lvbikge1xuICAgIDxzcGFuPlxuICAgICAgPHRhLWJhZGdlIFt2YWx1ZV09XCJwcm9mZXNzaW9uXCI+PC90YS1iYWRnZT5cbiAgICA8L3NwYW4+XG4gIH1cbiAgQGlmICh0aGlzLm1heFZpc2libGUgJiYgdGhpcy5wcm9mZXNzaW9ucy5sZW5ndGggPiB0aGlzLm1heFZpc2libGUpIHtcbiAgICA8c3BhbiBjbGFzcz1cIm1vcmUtbGFiZWxcIj4gK3t7IHRoaXMucHJvZmVzc2lvbnMubGVuZ3RoIC0gbWF4VmlzaWJsZSB9fSA8L3NwYW4+XG4gIH1cbjwvZGl2PlxuIl19