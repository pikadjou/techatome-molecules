import { NgFor, NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { BadgeComponent } from "../../badge/badge.component";
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
        this.fontSize = "xs";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DepartmentProfessionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: DepartmentProfessionsComponent, isStandalone: true, selector: "ta-department-professions", inputs: { professions: "professions", fontSize: "fontSize", maxVisible: "maxVisible" }, ngImport: i0, template: "<div class=\"align-center professions-container g-space-xs\">\n  @for (profession of this.visibleProfessions; track profession) {\n  <span>\n    <ta-badge [value]=\"profession\"></ta-badge>\n  </span>\n  } @if (this.maxVisible && this.professions.length > this.maxVisible) {\n  <span class=\"more-label\"> +{{ this.professions.length - maxVisible }} </span>\n  }\n</div>\n", styles: [".professions-container{display:flex;flex-wrap:wrap}.professions-container .more-label{color:var(--ta-brand-500)}\n"], dependencies: [{ kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DepartmentProfessionsComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-department-professions", standalone: true, imports: [NgIf, NgFor, BadgeComponent], template: "<div class=\"align-center professions-container g-space-xs\">\n  @for (profession of this.visibleProfessions; track profession) {\n  <span>\n    <ta-badge [value]=\"profession\"></ta-badge>\n  </span>\n  } @if (this.maxVisible && this.professions.length > this.maxVisible) {\n  <span class=\"more-label\"> +{{ this.professions.length - maxVisible }} </span>\n  }\n</div>\n", styles: [".professions-container{display:flex;flex-wrap:wrap}.professions-container .more-label{color:var(--ta-brand-500)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { professions: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], maxVisible: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzc2lvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL2RlcGFydG1lbnRzL3Byb2Zlc3Npb25zL3Byb2Zlc3Npb25zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9kZXBhcnRtZW50cy9wcm9mZXNzaW9ucy9wcm9mZXNzaW9ucy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFTN0QsTUFBTSxPQUFPLDhCQUE4QjtJQWV6QyxJQUFJLGtCQUFrQjtRQUNwQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQ7UUFmQTs7V0FFRztRQUVILGFBQVEsR0FBWSxJQUFJLENBQUM7SUFXVixDQUFDOytHQXRCTCw4QkFBOEI7bUdBQTlCLDhCQUE4Qiw2S0NkM0Msc1hBU0EsNEtER3lCLGNBQWM7OzRGQUUxQiw4QkFBOEI7a0JBUDFDLFNBQVM7K0JBQ0UsMkJBQTJCLGNBR3pCLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDO3dEQU90QyxXQUFXO3NCQURWLEtBQUs7Z0JBT04sUUFBUTtzQkFEUCxLQUFLO2dCQUdHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0ZvciwgTmdJZiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcblxuaW1wb3J0IHsgQmFkZ2VDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vYmFkZ2UvYmFkZ2UuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1kZXBhcnRtZW50LXByb2Zlc3Npb25zXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcHJvZmVzc2lvbnMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3Byb2Zlc3Npb25zLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgTmdGb3IsIEJhZGdlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgRGVwYXJ0bWVudFByb2Zlc3Npb25zQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIExpc3Qgb2YgcHJvZmVzc2lvbnMgdG8gZGlzcGxheVxuICAgKi9cbiAgQElucHV0KClcbiAgcHJvZmVzc2lvbnMhOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogZm9udC1zaXplXG4gICAqL1xuICBASW5wdXQoKVxuICBmb250U2l6ZTogVGFTaXplcyA9IFwieHNcIjtcblxuICBASW5wdXQoKSBtYXhWaXNpYmxlPzogbnVtYmVyO1xuXG4gIGdldCB2aXNpYmxlUHJvZmVzc2lvbnMoKSB7XG4gICAgaWYgKHRoaXMubWF4VmlzaWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZmVzc2lvbnMuc2xpY2UoMCwgdGhpcy5tYXhWaXNpYmxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJvZmVzc2lvbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYWxpZ24tY2VudGVyIHByb2Zlc3Npb25zLWNvbnRhaW5lciBnLXNwYWNlLXhzXCI+XG4gIEBmb3IgKHByb2Zlc3Npb24gb2YgdGhpcy52aXNpYmxlUHJvZmVzc2lvbnM7IHRyYWNrIHByb2Zlc3Npb24pIHtcbiAgPHNwYW4+XG4gICAgPHRhLWJhZGdlIFt2YWx1ZV09XCJwcm9mZXNzaW9uXCI+PC90YS1iYWRnZT5cbiAgPC9zcGFuPlxuICB9IEBpZiAodGhpcy5tYXhWaXNpYmxlICYmIHRoaXMucHJvZmVzc2lvbnMubGVuZ3RoID4gdGhpcy5tYXhWaXNpYmxlKSB7XG4gIDxzcGFuIGNsYXNzPVwibW9yZS1sYWJlbFwiPiAre3sgdGhpcy5wcm9mZXNzaW9ucy5sZW5ndGggLSBtYXhWaXNpYmxlIH19IDwvc3Bhbj5cbiAgfVxuPC9kaXY+XG4iXX0=