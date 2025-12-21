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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TextComponent, isStandalone: true, selector: "ta-text", inputs: { size: "size", isBold: "isBold", color: "color" }, ngImport: i0, template: "<div\n  class=\"text\"\n  [class.bold]=\"this.isBold\"\n  [ngClass]=\"this.size + ' ' + this.getColorClass()\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [".text{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.xs{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight)}.bold{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-bold-weight)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-text", standalone: true, imports: [NgClass], template: "<div\n  class=\"text\"\n  [class.bold]=\"this.isBold\"\n  [ngClass]=\"this.size + ' ' + this.getColorClass()\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [".text{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.xs{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight)}.bold{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-bold-weight)}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], isBold: [{
                type: Input
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvdGV4dC90ZXh0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90ZXh0L3RleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVdqRCxNQUFNLE9BQU8sYUFBYTtJQVAxQjtRQVFFOzs7V0FHRztRQUVILFNBQUksR0FBWSxJQUFJLENBQUM7UUFFckI7OztXQUdHO1FBRUgsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4Qjs7O1dBR0c7UUFFSCxVQUFLLEdBQVcsU0FBUyxDQUFDO0tBSzNCO0lBSFEsYUFBYTtRQUNsQixPQUFPLG1CQUFtQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsQ0FBQzsrR0F4QlUsYUFBYTttR0FBYixhQUFhLCtIQ1oxQiwwSkFPQSw2Y0RHWSxPQUFPOzs0RkFFTixhQUFhO2tCQVB6QixTQUFTOytCQUNFLFNBQVMsY0FHUCxJQUFJLFdBQ1AsQ0FBQyxPQUFPLENBQUM7OEJBUWxCLElBQUk7c0JBREgsS0FBSztnQkFRTixNQUFNO3NCQURMLEtBQUs7Z0JBUU4sS0FBSztzQkFESixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDbGFzcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLXRleHRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi90ZXh0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi90ZXh0LmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdDbGFzc10sXG59KVxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQge1xuICAvKipcbiAgICpcbiAgICogQWRkIHNtYWxsIGNsYXNzIHRvIHRleHRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNpemU6IFRhU2l6ZXMgPSBcIm1kXCI7XG5cbiAgLyoqXG4gICAqXG4gICAqIEFkZCBib2xkIGNsYXNzIHRvIHRleHRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGlzQm9sZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKlxuICAgKiBBZGQgYm9sZCBjbGFzcyB0byB0ZXh0XG4gICAqL1xuICBASW5wdXQoKVxuICBjb2xvcjogc3RyaW5nID0gXCJwcmltYXJ5XCI7XG5cbiAgcHVibGljIGdldENvbG9yQ2xhc3MoKSB7XG4gICAgcmV0dXJuIGB0ZXh0LWNvbG9yLXRleHQtJHt0aGlzLmNvbG9yfWA7XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJ0ZXh0XCJcbiAgW2NsYXNzLmJvbGRdPVwidGhpcy5pc0JvbGRcIlxuICBbbmdDbGFzc109XCJ0aGlzLnNpemUgKyAnICcgKyB0aGlzLmdldENvbG9yQ2xhc3MoKVwiXG4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19