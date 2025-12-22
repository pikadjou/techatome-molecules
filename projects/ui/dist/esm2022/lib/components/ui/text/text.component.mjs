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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TextComponent, isStandalone: true, selector: "ta-text", inputs: { size: "size", isBold: "isBold", color: "color" }, ngImport: i0, template: "<div\n  class=\"text\"\n  [class.bold]=\"this.isBold\"\n  [ngClass]=\"this.size + ' ' + this.getColorClass()\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [".text{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.xs{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight)}.lg{font-size:var(--ta-font-key-lg-default-size);font-weight:var(--ta-font-key-lg-default-weight)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-text', standalone: true, imports: [NgClass], template: "<div\n  class=\"text\"\n  [class.bold]=\"this.isBold\"\n  [ngClass]=\"this.size + ' ' + this.getColorClass()\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [".text{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.xs{font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight)}.lg{font-size:var(--ta-font-key-lg-default-size);font-weight:var(--ta-font-key-lg-default-weight)}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], isBold: [{
                type: Input
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvdGV4dC90ZXh0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90ZXh0L3RleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVdqRCxNQUFNLE9BQU8sYUFBYTtJQVAxQjtRQVFFOzs7V0FHRztRQUVILFNBQUksR0FBWSxJQUFJLENBQUM7UUFFckI7OztXQUdHO1FBRUgsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4Qjs7O1dBR0c7UUFFSCxVQUFLLEdBQWMsU0FBUyxDQUFDO0tBSzlCO0lBSFEsYUFBYTtRQUNsQixPQUFPLG1CQUFtQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsQ0FBQzsrR0F4QlUsYUFBYTttR0FBYixhQUFhLCtIQ1oxQiwwSkFPQSw0Y0RHWSxPQUFPOzs0RkFFTixhQUFhO2tCQVB6QixTQUFTOytCQUNFLFNBQVMsY0FHUCxJQUFJLFdBQ1AsQ0FBQyxPQUFPLENBQUM7OEJBUWxCLElBQUk7c0JBREgsS0FBSztnQkFRTixNQUFNO3NCQURMLEtBQUs7Z0JBUU4sS0FBSztzQkFESixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDbGFzcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbG9yVHlwZSwgVGFTaXplcyB9IGZyb20gJ0B0YS9zdHlsZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS10ZXh0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzXSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dENvbXBvbmVudCB7XG4gIC8qKlxuICAgKlxuICAgKiBBZGQgc21hbGwgY2xhc3MgdG8gdGV4dFxuICAgKi9cbiAgQElucHV0KClcbiAgc2l6ZTogVGFTaXplcyA9ICdtZCc7XG5cbiAgLyoqXG4gICAqXG4gICAqIEFkZCBib2xkIGNsYXNzIHRvIHRleHRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGlzQm9sZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKlxuICAgKiBBZGQgYm9sZCBjbGFzcyB0byB0ZXh0XG4gICAqL1xuICBASW5wdXQoKVxuICBjb2xvcjogQ29sb3JUeXBlID0gJ2RlZmF1bHQnO1xuXG4gIHB1YmxpYyBnZXRDb2xvckNsYXNzKCkge1xuICAgIHJldHVybiBgdGV4dC1jb2xvci10ZXh0LSR7dGhpcy5jb2xvcn1gO1xuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwidGV4dFwiXG4gIFtjbGFzcy5ib2xkXT1cInRoaXMuaXNCb2xkXCJcbiAgW25nQ2xhc3NdPVwidGhpcy5zaXplICsgJyAnICsgdGhpcy5nZXRDb2xvckNsYXNzKClcIlxuPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==