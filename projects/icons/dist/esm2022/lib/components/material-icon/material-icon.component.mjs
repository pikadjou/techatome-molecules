import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
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
        this.type = "";
    }
    getDisplayStyle() {
        if (this.outline)
            return "material-icons-outlined";
        if (this.sharp)
            return "material-icons-sharp";
        if (this.round)
            return "material-icons-round";
        if (this.dualTone)
            return "material-icons-two-tone";
        return "material-icons";
    }
    getTypeStyle() {
        if (!this.type) {
            return "";
        }
        return `icon-${this.type}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MaterialIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: MaterialIconComponent, isStandalone: true, selector: "ta-material-icon", inputs: { outline: "outline", sharp: "sharp", round: "round", dualTone: "dualTone", type: "type" }, ngImport: i0, template: "<mat-icon\n  [ngClass]=\"this.getDisplayStyle() + ' ' + this.getTypeStyle()\"\n  #matIcon\n>\n  <ng-content></ng-content>\n</mat-icon>\n", styles: [":host{display:inline-flex}.icon-xxs{font-size:12px;padding-top:5px}.icon-sm{font-size:20px;height:20px;width:20px}.icon-xl{font-size:45px;height:45px;width:45px}.icon-xxl{height:90px;width:90px}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MaterialIconComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-material-icon", standalone: true, imports: [NgClass, MatIconModule], template: "<mat-icon\n  [ngClass]=\"this.getDisplayStyle() + ' ' + this.getTypeStyle()\"\n  #matIcon\n>\n  <ng-content></ng-content>\n</mat-icon>\n", styles: [":host{display:inline-flex}.icon-xxs{font-size:12px;padding-top:5px}.icon-sm{font-size:20px;height:20px;width:20px}.icon-xl{font-size:45px;height:45px;width:45px}.icon-xxl{height:90px;width:90px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbWF0ZXJpYWwtaWNvbi9tYXRlcmlhbC1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9tYXRlcmlhbC1pY29uL21hdGVyaWFsLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBSXZEOztHQUVHO0FBUUgsTUFBTSxPQUFPLHFCQUFxQjtJQVBsQztRQVFFOztXQUVHO1FBRUksWUFBTyxHQUFZLEtBQUssQ0FBQztRQUVoQzs7V0FFRztRQUVJLFVBQUssR0FBWSxLQUFLLENBQUM7UUFFOUI7O1dBRUc7UUFFSSxVQUFLLEdBQVksS0FBSyxDQUFDO1FBRTlCOztXQUVHO1FBRUksYUFBUSxHQUFZLEtBQUssQ0FBQztRQUVqQzs7V0FFRztRQUVJLFNBQUksR0FBaUIsRUFBRSxDQUFDO0tBaUJoQztJQWZRLGVBQWU7UUFDcEIsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8seUJBQXlCLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sc0JBQXNCLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sc0JBQXNCLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU8seUJBQXlCLENBQUM7UUFFcEQsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2YsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO1FBQ0QsT0FBTyxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOytHQTdDVSxxQkFBcUI7bUdBQXJCLHFCQUFxQixnTENoQmxDLDBJQU1BLDhQRFFZLE9BQU8sbUZBQUUsYUFBYTs7NEZBRXJCLHFCQUFxQjtrQkFQakMsU0FBUzsrQkFDRSxrQkFBa0IsY0FHaEIsSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQzs4QkFPMUIsT0FBTztzQkFEYixLQUFLO2dCQU9DLEtBQUs7c0JBRFgsS0FBSztnQkFPQyxLQUFLO3NCQURYLEtBQUs7Z0JBT0MsUUFBUTtzQkFEZCxLQUFLO2dCQU9DLElBQUk7c0JBRFYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xuXG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtbWF0ZXJpYWwtaWNvblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL21hdGVyaWFsLWljb24uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL21hdGVyaWFsLWljb24uY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBNYXRJY29uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxJY29uQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIElmIHNldCB0byB0cnVlLCBkZWZpbmUgYW4gb3V0bGluZSBzdHlsZSB0byB0aGUgaWNvblxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIGRlZmluZSBhIHNoYXJwIHN0eWxlIHRvIHRoZSBpY29uXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hhcnA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIGRlZmluZSBhIHJvdW5kZWQgc3R5bGUgdG8gdGhlIGljb25cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgZGVmaW5lIGEgZHVhbCB0b25lIHN0eWxlIHRvIHRoZSBpY29uXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZHVhbFRvbmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIGRlZmluZSBhIHNpemUgZm9yIHRoZSBpY29uXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgdHlwZTogVGFTaXplcyB8IFwiXCIgPSBcIlwiO1xuXG4gIHB1YmxpYyBnZXREaXNwbGF5U3R5bGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5vdXRsaW5lKSByZXR1cm4gXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiO1xuICAgIGlmICh0aGlzLnNoYXJwKSByZXR1cm4gXCJtYXRlcmlhbC1pY29ucy1zaGFycFwiO1xuICAgIGlmICh0aGlzLnJvdW5kKSByZXR1cm4gXCJtYXRlcmlhbC1pY29ucy1yb3VuZFwiO1xuICAgIGlmICh0aGlzLmR1YWxUb25lKSByZXR1cm4gXCJtYXRlcmlhbC1pY29ucy10d28tdG9uZVwiO1xuXG4gICAgcmV0dXJuIFwibWF0ZXJpYWwtaWNvbnNcIjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUeXBlU3R5bGUoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMudHlwZSkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBgaWNvbi0ke3RoaXMudHlwZX1gO1xuICB9XG59XG4iLCI8bWF0LWljb25cbiAgW25nQ2xhc3NdPVwidGhpcy5nZXREaXNwbGF5U3R5bGUoKSArICcgJyArIHRoaXMuZ2V0VHlwZVN0eWxlKClcIlxuICAjbWF0SWNvblxuPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L21hdC1pY29uPlxuIl19