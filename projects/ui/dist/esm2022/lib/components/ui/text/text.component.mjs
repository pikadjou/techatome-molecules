import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TextComponent {
    constructor() {
        /**
         *
         * Add small class to text
         */
        this.size = 'md';
        /**
         *
         * Add bold class to text
         */
        this.isBold = false;
        /**
         *
         * Add bold class to text
         */
        this.color = 'default';
    }
    getColorClass() {
        return `text-color-text-${this.color}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TextComponent, isStandalone: true, selector: "ta-text", inputs: { size: "size", isBold: "isBold", color: "color" }, ngImport: i0, template: "<div\n  class=\"text\"\n  [class.bold]=\"this.isBold\"\n  [ngClass]=\"this.size + ' ' + this.getColorClass()\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [".text{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.xs{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight)}.lg{font-size:var(--ta-font-key-lg-default-size);font-weight:var(--ta-font-key-lg-default-weight)}.bold{font-weight:var(--ta-font-body-md-bold-weight)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-text', standalone: true, imports: [NgClass], template: "<div\n  class=\"text\"\n  [class.bold]=\"this.isBold\"\n  [ngClass]=\"this.size + ' ' + this.getColorClass()\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [".text{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.xs{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight)}.lg{font-size:var(--ta-font-key-lg-default-size);font-weight:var(--ta-font-key-lg-default-weight)}.bold{font-weight:var(--ta-font-body-md-bold-weight)}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], isBold: [{
                type: Input
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvdGV4dC90ZXh0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90ZXh0L3RleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVdqRCxNQUFNLE9BQU8sYUFBYTtJQVAxQjtRQVFFOzs7V0FHRztRQUVILFNBQUksR0FBWSxJQUFJLENBQUM7UUFFckI7OztXQUdHO1FBRUgsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4Qjs7O1dBR0c7UUFFSCxVQUFLLEdBQWMsU0FBUyxDQUFDO0tBSzlCO0lBSFEsYUFBYTtRQUNsQixPQUFPLG1CQUFtQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsQ0FBQzsrR0F4QlUsYUFBYTttR0FBYixhQUFhLCtIQ1oxQiwwSkFPQSxpZ0JER1ksT0FBTzs7NEZBRU4sYUFBYTtrQkFQekIsU0FBUzsrQkFDRSxTQUFTLGNBR1AsSUFBSSxXQUNQLENBQUMsT0FBTyxDQUFDOzhCQVFsQixJQUFJO3NCQURILEtBQUs7Z0JBUU4sTUFBTTtzQkFETCxLQUFLO2dCQVFOLEtBQUs7c0JBREosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2xvclR5cGUsIFRhU2l6ZXMgfSBmcm9tICdAdGEvc3R5bGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtdGV4dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdDbGFzc10sXG59KVxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQge1xuICAvKipcbiAgICpcbiAgICogQWRkIHNtYWxsIGNsYXNzIHRvIHRleHRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNpemU6IFRhU2l6ZXMgPSAnbWQnO1xuXG4gIC8qKlxuICAgKlxuICAgKiBBZGQgYm9sZCBjbGFzcyB0byB0ZXh0XG4gICAqL1xuICBASW5wdXQoKVxuICBpc0JvbGQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICpcbiAgICogQWRkIGJvbGQgY2xhc3MgdG8gdGV4dFxuICAgKi9cbiAgQElucHV0KClcbiAgY29sb3I6IENvbG9yVHlwZSA9ICdkZWZhdWx0JztcblxuICBwdWJsaWMgZ2V0Q29sb3JDbGFzcygpIHtcbiAgICByZXR1cm4gYHRleHQtY29sb3ItdGV4dC0ke3RoaXMuY29sb3J9YDtcbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cInRleHRcIlxuICBbY2xhc3MuYm9sZF09XCJ0aGlzLmlzQm9sZFwiXG4gIFtuZ0NsYXNzXT1cInRoaXMuc2l6ZSArICcgJyArIHRoaXMuZ2V0Q29sb3JDbGFzcygpXCJcbj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=