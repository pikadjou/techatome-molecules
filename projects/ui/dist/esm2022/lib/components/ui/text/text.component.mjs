import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
export class TextComponent {
    constructor() {
        /**
         *
         * Add small class to text
         */
        this.size = input('md');
        /**
         *
         * Add bold class to text
         */
        this.isBold = input(false);
        /**
         *
         * Add bold class to text
         */
        this.color = input('default');
    }
    getColorClass() {
        return `text-color-text-${this.color()}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TextComponent, isStandalone: true, selector: "ta-text", inputs: { size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, isBold: { classPropertyName: "isBold", publicName: "isBold", isSignal: true, isRequired: false, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"text\" [class.bold]=\"this.isBold()\" [ngClass]=\"this.size() + ' ' + this.getColorClass()\">\n  <ng-content></ng-content>\n</div>\n", styles: [".text{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.xs{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight)}.lg{font-size:var(--ta-font-key-lg-default-size);font-weight:var(--ta-font-key-lg-default-weight)}.bold{font-weight:var(--ta-font-body-md-bold-weight)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-text', standalone: true, imports: [NgClass], template: "<div class=\"text\" [class.bold]=\"this.isBold()\" [ngClass]=\"this.size() + ' ' + this.getColorClass()\">\n  <ng-content></ng-content>\n</div>\n", styles: [".text{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.xs{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight)}.lg{font-size:var(--ta-font-key-lg-default-size);font-weight:var(--ta-font-key-lg-default-weight)}.bold{font-weight:var(--ta-font-body-md-bold-weight)}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvdGV4dC90ZXh0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90ZXh0L3RleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVdqRCxNQUFNLE9BQU8sYUFBYTtJQVAxQjtRQVFFOzs7V0FHRztRQUNILFNBQUksR0FBRyxLQUFLLENBQVUsSUFBSSxDQUFDLENBQUM7UUFFNUI7OztXQUdHO1FBQ0gsV0FBTSxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUUvQjs7O1dBR0c7UUFDSCxVQUFLLEdBQUcsS0FBSyxDQUFZLFNBQVMsQ0FBQyxDQUFDO0tBS3JDO0lBSFEsYUFBYTtRQUNsQixPQUFPLG1CQUFtQixJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztJQUMzQyxDQUFDOytHQXJCVSxhQUFhO21HQUFiLGFBQWEsdWJDWjFCLG1KQUdBLGlnQkRPWSxPQUFPOzs0RkFFTixhQUFhO2tCQVB6QixTQUFTOytCQUNFLFNBQVMsY0FHUCxJQUFJLFdBQ1AsQ0FBQyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgaW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sb3JUeXBlLCBUYVNpemVzIH0gZnJvbSAnQHRhL3N0eWxlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3NdLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IHtcbiAgLyoqXG4gICAqXG4gICAqIEFkZCBzbWFsbCBjbGFzcyB0byB0ZXh0XG4gICAqL1xuICBzaXplID0gaW5wdXQ8VGFTaXplcz4oJ21kJyk7XG5cbiAgLyoqXG4gICAqXG4gICAqIEFkZCBib2xkIGNsYXNzIHRvIHRleHRcbiAgICovXG4gIGlzQm9sZCA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcblxuICAvKipcbiAgICpcbiAgICogQWRkIGJvbGQgY2xhc3MgdG8gdGV4dFxuICAgKi9cbiAgY29sb3IgPSBpbnB1dDxDb2xvclR5cGU+KCdkZWZhdWx0Jyk7XG5cbiAgcHVibGljIGdldENvbG9yQ2xhc3MoKSB7XG4gICAgcmV0dXJuIGB0ZXh0LWNvbG9yLXRleHQtJHt0aGlzLmNvbG9yKCl9YDtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInRleHRcIiBbY2xhc3MuYm9sZF09XCJ0aGlzLmlzQm9sZCgpXCIgW25nQ2xhc3NdPVwidGhpcy5zaXplKCkgKyAnICcgKyB0aGlzLmdldENvbG9yQ2xhc3MoKVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==