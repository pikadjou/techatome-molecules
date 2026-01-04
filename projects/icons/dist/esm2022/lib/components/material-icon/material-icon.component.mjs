import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
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
        this.outline = input(false);
        /**
         * If set to true, define a sharp style to the icon
         */
        this.sharp = input(false);
        /**
         * If set to true, define a rounded style to the icon
         */
        this.round = input(false);
        /**
         * If set to true, define a dual tone style to the icon
         */
        this.dualTone = input(false);
        /**
         * If set to true, define a size for the icon
         */
        this.type = input('');
    }
    getDisplayStyle() {
        if (this.outline())
            return 'material-icons-outlined';
        if (this.sharp())
            return 'material-icons-sharp';
        if (this.round())
            return 'material-icons-round';
        if (this.dualTone())
            return 'material-icons-two-tone';
        return 'material-icons';
    }
    getTypeStyle() {
        if (!this.type()) {
            return '';
        }
        return `icon-${this.type()}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MaterialIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: MaterialIconComponent, isStandalone: true, selector: "ta-material-icon", inputs: { outline: { classPropertyName: "outline", publicName: "outline", isSignal: true, isRequired: false, transformFunction: null }, sharp: { classPropertyName: "sharp", publicName: "sharp", isSignal: true, isRequired: false, transformFunction: null }, round: { classPropertyName: "round", publicName: "round", isSignal: true, isRequired: false, transformFunction: null }, dualTone: { classPropertyName: "dualTone", publicName: "dualTone", isSignal: true, isRequired: false, transformFunction: null }, type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<mat-icon\n  [ngClass]=\"this.getDisplayStyle() + ' ' + this.getTypeStyle()\"\n  #matIcon\n>\n  <ng-content></ng-content>\n</mat-icon>\n", styles: [":host{display:inline-flex}.icon-xxs{font-size:12px;padding-top:5px}.icon-sm{font-size:20px;height:20px;width:20px}.icon-xl{font-size:45px;height:45px;width:45px}.icon-xxl{height:90px;width:90px}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MaterialIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-material-icon', standalone: true, imports: [NgClass, MatIconModule], template: "<mat-icon\n  [ngClass]=\"this.getDisplayStyle() + ' ' + this.getTypeStyle()\"\n  #matIcon\n>\n  <ng-content></ng-content>\n</mat-icon>\n", styles: [":host{display:inline-flex}.icon-xxs{font-size:12px;padding-top:5px}.icon-sm{font-size:20px;height:20px;width:20px}.icon-xl{font-size:45px;height:45px;width:45px}.icon-xxl{height:90px;width:90px}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbWF0ZXJpYWwtaWNvbi9tYXRlcmlhbC1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9tYXRlcmlhbC1pY29uL21hdGVyaWFsLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBSXZEOztHQUVHO0FBUUgsTUFBTSxPQUFPLHFCQUFxQjtJQVBsQztRQVFFOztXQUVHO1FBQ0ksWUFBTyxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUV2Qzs7V0FFRztRQUNJLFVBQUssR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFckM7O1dBRUc7UUFDSSxVQUFLLEdBQUcsS0FBSyxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRXJDOztXQUVHO1FBQ0ksYUFBUSxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUV4Qzs7V0FFRztRQUNJLFNBQUksR0FBRyxLQUFLLENBQWUsRUFBRSxDQUFDLENBQUM7S0FpQnZDO0lBZlEsZUFBZTtRQUNwQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFBRSxPQUFPLHlCQUF5QixDQUFDO1FBQ3JELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU8sc0JBQXNCLENBQUM7UUFDaEQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQUUsT0FBTyxzQkFBc0IsQ0FBQztRQUNoRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFBRSxPQUFPLHlCQUF5QixDQUFDO1FBRXRELE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUNELE9BQU8sUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztJQUMvQixDQUFDOytHQXhDVSxxQkFBcUI7bUdBQXJCLHFCQUFxQiw0ckJDaEJsQywwSUFNQSw4UERRWSxPQUFPLG1GQUFFLGFBQWE7OzRGQUVyQixxQkFBcUI7a0JBUGpDLFNBQVM7K0JBQ0Usa0JBQWtCLGNBR2hCLElBQUksV0FDUCxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgaW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuaW1wb3J0IHsgVGFTaXplcyB9IGZyb20gJ0B0YS9zdHlsZXMnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLW1hdGVyaWFsLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0ZXJpYWwtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdGVyaWFsLWljb24uY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3MsIE1hdEljb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbEljb25Db21wb25lbnQge1xuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIGRlZmluZSBhbiBvdXRsaW5lIHN0eWxlIHRvIHRoZSBpY29uXG4gICAqL1xuICBwdWJsaWMgb3V0bGluZSA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIGRlZmluZSBhIHNoYXJwIHN0eWxlIHRvIHRoZSBpY29uXG4gICAqL1xuICBwdWJsaWMgc2hhcnAgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG5cbiAgLyoqXG4gICAqIElmIHNldCB0byB0cnVlLCBkZWZpbmUgYSByb3VuZGVkIHN0eWxlIHRvIHRoZSBpY29uXG4gICAqL1xuICBwdWJsaWMgcm91bmQgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG5cbiAgLyoqXG4gICAqIElmIHNldCB0byB0cnVlLCBkZWZpbmUgYSBkdWFsIHRvbmUgc3R5bGUgdG8gdGhlIGljb25cbiAgICovXG4gIHB1YmxpYyBkdWFsVG9uZSA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIGRlZmluZSBhIHNpemUgZm9yIHRoZSBpY29uXG4gICAqL1xuICBwdWJsaWMgdHlwZSA9IGlucHV0PFRhU2l6ZXMgfCAnJz4oJycpO1xuXG4gIHB1YmxpYyBnZXREaXNwbGF5U3R5bGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5vdXRsaW5lKCkpIHJldHVybiAnbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuICAgIGlmICh0aGlzLnNoYXJwKCkpIHJldHVybiAnbWF0ZXJpYWwtaWNvbnMtc2hhcnAnO1xuICAgIGlmICh0aGlzLnJvdW5kKCkpIHJldHVybiAnbWF0ZXJpYWwtaWNvbnMtcm91bmQnO1xuICAgIGlmICh0aGlzLmR1YWxUb25lKCkpIHJldHVybiAnbWF0ZXJpYWwtaWNvbnMtdHdvLXRvbmUnO1xuXG4gICAgcmV0dXJuICdtYXRlcmlhbC1pY29ucyc7XG4gIH1cblxuICBwdWJsaWMgZ2V0VHlwZVN0eWxlKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLnR5cGUoKSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gYGljb24tJHt0aGlzLnR5cGUoKX1gO1xuICB9XG59XG4iLCI8bWF0LWljb25cbiAgW25nQ2xhc3NdPVwidGhpcy5nZXREaXNwbGF5U3R5bGUoKSArICcgJyArIHRoaXMuZ2V0VHlwZVN0eWxlKClcIlxuICAjbWF0SWNvblxuPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L21hdC1pY29uPlxuIl19