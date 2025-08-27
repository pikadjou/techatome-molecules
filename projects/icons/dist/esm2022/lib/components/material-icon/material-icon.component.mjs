import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
/**
 * @deprecated
 */
export class MaterialIconComponent {
    constructor() {
        /**
         * If set to true, define an outline style to the icon
         */
        this.outline = false;
        /**
         * If set to true, define a sharp style to the icon
         */
        this.sharp = false;
        /**
         * If set to true, define a rounded style to the icon
         */
        this.round = false;
        /**
         * If set to true, define a dual tone style to the icon
         */
        this.dualTone = false;
        /**
         * If set to true, define a size for the icon
         */
        this.type = '';
    }
    getDisplayStyle() {
        if (this.outline)
            return 'material-icons-outlined';
        if (this.sharp)
            return 'material-icons-sharp';
        if (this.round)
            return 'material-icons-round';
        if (this.dualTone)
            return 'material-icons-two-tone';
        return 'material-icons';
    }
    getTypeStyle() {
        if (!this.type) {
            return '';
        }
        return `icon-${this.type}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MaterialIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: MaterialIconComponent, isStandalone: true, selector: "ta-material-icon", inputs: { outline: "outline", sharp: "sharp", round: "round", dualTone: "dualTone", type: "type" }, ngImport: i0, template: "<mat-icon\n  [ngClass]=\"this.getDisplayStyle() + ' ' + this.getTypeStyle()\"\n  #matIcon\n>\n  <ng-content></ng-content>\n</mat-icon>\n", styles: [":host{display:inline-flex}.icon-xxs{font-size:12px;padding-top:5px}.icon-sm{font-size:20px;height:20px;width:20px}.icon-xl{font-size:45px;height:45px;width:45px}.icon-xxl{height:90px;width:90px}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MaterialIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-material-icon', standalone: true, imports: [NgClass, MatIconModule], template: "<mat-icon\n  [ngClass]=\"this.getDisplayStyle() + ' ' + this.getTypeStyle()\"\n  #matIcon\n>\n  <ng-content></ng-content>\n</mat-icon>\n", styles: [":host{display:inline-flex}.icon-xxs{font-size:12px;padding-top:5px}.icon-sm{font-size:20px;height:20px;width:20px}.icon-xl{font-size:45px;height:45px;width:45px}.icon-xxl{height:90px;width:90px}\n"] }]
        }], propDecorators: { outline: [{
                type: Input
            }], sharp: [{
                type: Input
            }], round: [{
                type: Input
            }], dualTone: [{
                type: Input
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbWF0ZXJpYWwtaWNvbi9tYXRlcmlhbC1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9tYXRlcmlhbC1pY29uL21hdGVyaWFsLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBSXZEOztHQUVHO0FBUUgsTUFBTSxPQUFPLHFCQUFxQjtJQVBsQztRQVFFOztXQUVHO1FBRUksWUFBTyxHQUFZLEtBQUssQ0FBQztRQUVoQzs7V0FFRztRQUVJLFVBQUssR0FBWSxLQUFLLENBQUM7UUFFOUI7O1dBRUc7UUFFSSxVQUFLLEdBQVksS0FBSyxDQUFDO1FBRTlCOztXQUVHO1FBRUksYUFBUSxHQUFZLEtBQUssQ0FBQztRQUVqQzs7V0FFRztRQUVJLFNBQUksR0FBaUIsRUFBRSxDQUFDO0tBaUJoQztJQWZRLGVBQWU7UUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8seUJBQXlCLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sc0JBQXNCLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sc0JBQXNCLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU8seUJBQXlCLENBQUM7UUFFcEQsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2YsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO1FBQ0QsT0FBTyxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOytHQTdDVSxxQkFBcUI7bUdBQXJCLHFCQUFxQixnTENoQmxDLDBJQU1BLDhQRFFZLE9BQU8sbUZBQUUsYUFBYTs7NEZBRXJCLHFCQUFxQjtrQkFQakMsU0FBUzsrQkFDRSxrQkFBa0IsY0FHaEIsSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQzs4QkFPMUIsT0FBTztzQkFEYixLQUFLO2dCQU9DLEtBQUs7c0JBRFgsS0FBSztnQkFPQyxLQUFLO3NCQURYLEtBQUs7Z0JBT0MsUUFBUTtzQkFEZCxLQUFLO2dCQU9DLElBQUk7c0JBRFYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSAnQHRhL3N0eWxlcyc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtbWF0ZXJpYWwtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXRlcmlhbC1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWF0ZXJpYWwtaWNvbi5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdDbGFzcywgTWF0SWNvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsSWNvbkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgZGVmaW5lIGFuIG91dGxpbmUgc3R5bGUgdG8gdGhlIGljb25cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBvdXRsaW5lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIElmIHNldCB0byB0cnVlLCBkZWZpbmUgYSBzaGFycCBzdHlsZSB0byB0aGUgaWNvblxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNoYXJwOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIElmIHNldCB0byB0cnVlLCBkZWZpbmUgYSByb3VuZGVkIHN0eWxlIHRvIHRoZSBpY29uXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgcm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIGRlZmluZSBhIGR1YWwgdG9uZSBzdHlsZSB0byB0aGUgaWNvblxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGR1YWxUb25lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIElmIHNldCB0byB0cnVlLCBkZWZpbmUgYSBzaXplIGZvciB0aGUgaWNvblxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHR5cGU6IFRhU2l6ZXMgfCAnJyA9ICcnO1xuXG4gIHB1YmxpYyBnZXREaXNwbGF5U3R5bGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5vdXRsaW5lKSByZXR1cm4gJ21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcbiAgICBpZiAodGhpcy5zaGFycCkgcmV0dXJuICdtYXRlcmlhbC1pY29ucy1zaGFycCc7XG4gICAgaWYgKHRoaXMucm91bmQpIHJldHVybiAnbWF0ZXJpYWwtaWNvbnMtcm91bmQnO1xuICAgIGlmICh0aGlzLmR1YWxUb25lKSByZXR1cm4gJ21hdGVyaWFsLWljb25zLXR3by10b25lJztcblxuICAgIHJldHVybiAnbWF0ZXJpYWwtaWNvbnMnO1xuICB9XG5cbiAgcHVibGljIGdldFR5cGVTdHlsZSgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy50eXBlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBgaWNvbi0ke3RoaXMudHlwZX1gO1xuICB9XG59XG4iLCI8bWF0LWljb25cbiAgW25nQ2xhc3NdPVwidGhpcy5nZXREaXNwbGF5U3R5bGUoKSArICcgJyArIHRoaXMuZ2V0VHlwZVN0eWxlKClcIlxuICAjbWF0SWNvblxuPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L21hdC1pY29uPlxuIl19