import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
export class TextComponent {
    constructor() {
        /**
         *
         * Add small class to text
         */
        this.size = "md";
        /**
         *
         * Add bold class to text
         */
        this.isBold = false;
        /**
         *
         * Add bold class to text
         */
        this.color = "primary";
    }
    getColorClass() {
        return `text-color-text-${this.color}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TextComponent, isStandalone: true, selector: "ta-text", inputs: { size: "size", isBold: "isBold", color: "color" }, ngImport: i0, template: "<div\n  class=\"text\"\n  [class.bold]=\"this.isBold\"\n  [ngClass]=\"this.size + ' ' + this.getColorClass()\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [".text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.xs{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}.bold{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-text", standalone: true, imports: [NgClass], template: "<div\n  class=\"text\"\n  [class.bold]=\"this.isBold\"\n  [ngClass]=\"this.size + ' ' + this.getColorClass()\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [".text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.xs{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}.bold{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], isBold: [{
                type: Input
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvdGV4dC90ZXh0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90ZXh0L3RleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVdqRCxNQUFNLE9BQU8sYUFBYTtJQVAxQjtRQVFFOzs7V0FHRztRQUVILFNBQUksR0FBWSxJQUFJLENBQUM7UUFFckI7OztXQUdHO1FBRUgsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4Qjs7O1dBR0c7UUFFSCxVQUFLLEdBQVcsU0FBUyxDQUFDO0tBSzNCO0lBSFEsYUFBYTtRQUNsQixPQUFPLG1CQUFtQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsQ0FBQzsrR0F4QlUsYUFBYTttR0FBYixhQUFhLCtIQ1oxQiwwSkFPQSw2b0JER1ksT0FBTzs7NEZBRU4sYUFBYTtrQkFQekIsU0FBUzsrQkFDRSxTQUFTLGNBR1AsSUFBSSxXQUNQLENBQUMsT0FBTyxDQUFDOzhCQVFsQixJQUFJO3NCQURILEtBQUs7Z0JBUU4sTUFBTTtzQkFETCxLQUFLO2dCQVFOLEtBQUs7c0JBREosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVGFTaXplcyB9IGZyb20gXCJAdGEvc3R5bGVzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS10ZXh0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGV4dC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdGV4dC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3NdLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IHtcbiAgLyoqXG4gICAqXG4gICAqIEFkZCBzbWFsbCBjbGFzcyB0byB0ZXh0XG4gICAqL1xuICBASW5wdXQoKVxuICBzaXplOiBUYVNpemVzID0gXCJtZFwiO1xuXG4gIC8qKlxuICAgKlxuICAgKiBBZGQgYm9sZCBjbGFzcyB0byB0ZXh0XG4gICAqL1xuICBASW5wdXQoKVxuICBpc0JvbGQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICpcbiAgICogQWRkIGJvbGQgY2xhc3MgdG8gdGV4dFxuICAgKi9cbiAgQElucHV0KClcbiAgY29sb3I6IHN0cmluZyA9IFwicHJpbWFyeVwiO1xuXG4gIHB1YmxpYyBnZXRDb2xvckNsYXNzKCkge1xuICAgIHJldHVybiBgdGV4dC1jb2xvci10ZXh0LSR7dGhpcy5jb2xvcn1gO1xuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwidGV4dFwiXG4gIFtjbGFzcy5ib2xkXT1cInRoaXMuaXNCb2xkXCJcbiAgW25nQ2xhc3NdPVwidGhpcy5zaXplICsgJyAnICsgdGhpcy5nZXRDb2xvckNsYXNzKClcIlxuPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==