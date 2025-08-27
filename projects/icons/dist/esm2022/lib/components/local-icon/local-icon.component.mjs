import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/icons.service";
import * as i2 from "@angular/platform-browser";
/**
 * @deprecated
 */
export class LocalIconComponent {
    constructor(_iconService, _sanitizer) {
        this._iconService = _iconService;
        this._sanitizer = _sanitizer;
        /**
         * Size of the icon
         */
        this.size = 'xs';
        /**
         * If set to true, icon will have a rotation animation
         */
        this.rotation = false;
    }
    getSvgIcon() {
        return this._sanitizer.bypassSecurityTrustHtml(this._iconService.getIcon(this.type));
    }
    getSize() {
        if (this.size === 'xs') {
            return '28px';
        }
        if (this.size === 'sm') {
            return '35px';
        }
        if (this.size === 'md') {
            return '50px';
        }
        if (this.size === 'lg') {
            return '120px';
        }
        if (this.size === 'xl') {
            return '120px';
        }
        return 'auto';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LocalIconComponent, deps: [{ token: i1.CamIconsService }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: LocalIconComponent, isStandalone: true, selector: "ta-local-icon", inputs: { type: "type", size: "size", rotation: "rotation" }, ngImport: i0, template: "@if (this.type) {\n  <div\n    [innerHTML]=\"this.getSvgIcon()\"\n    [style.width]=\"this.getSize()\"\n    [ngClass]=\"{ 'is-rotation': this.rotation }\"\n    class=\"internal-icon\"\n  ></div>\n}\n", styles: [".internal-icon{margin:auto;display:flex}:host ::ng-deep svg{width:100%!important;height:auto!important}.is-rotation{animation:rotation 2s infinite linear}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LocalIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-local-icon', standalone: true, imports: [NgClass], template: "@if (this.type) {\n  <div\n    [innerHTML]=\"this.getSvgIcon()\"\n    [style.width]=\"this.getSize()\"\n    [ngClass]=\"{ 'is-rotation': this.rotation }\"\n    class=\"internal-icon\"\n  ></div>\n}\n", styles: [".internal-icon{margin:auto;display:flex}:host ::ng-deep svg{width:100%!important;height:auto!important}.is-rotation{animation:rotation 2s infinite linear}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}\n"] }]
        }], ctorParameters: () => [{ type: i1.CamIconsService }, { type: i2.DomSanitizer }], propDecorators: { type: [{
                type: Input
            }], size: [{
                type: Input
            }], rotation: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbG9jYWwtaWNvbi9sb2NhbC1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9sb2NhbC1pY29uL2xvY2FsLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pEOztHQUVHO0FBUUgsTUFBTSxPQUFPLGtCQUFrQjtJQW1CN0IsWUFDVSxZQUE2QixFQUM3QixVQUF3QjtRQUR4QixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQWRsQzs7V0FFRztRQUVJLFNBQUksR0FBbUIsSUFBSSxDQUFDO1FBRW5DOztXQUVHO1FBRUksYUFBUSxHQUFHLEtBQUssQ0FBQztJQUtyQixDQUFDO0lBRUcsVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUNNLE9BQU87UUFDWixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDdkIsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN2QixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDdkIsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN2QixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzsrR0E3Q1Usa0JBQWtCO21HQUFsQixrQkFBa0IsdUlDbEIvQix5TUFRQSw4UkRRWSxPQUFPOzs0RkFFTixrQkFBa0I7a0JBUDlCLFNBQVM7K0JBQ0UsZUFBZSxjQUdiLElBQUksV0FDUCxDQUFDLE9BQU8sQ0FBQzsrR0FPWCxJQUFJO3NCQURWLEtBQUs7Z0JBT0MsSUFBSTtzQkFEVixLQUFLO2dCQU9DLFFBQVE7c0JBRGQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tICdAdGEvc3R5bGVzJztcblxuaW1wb3J0IHsgQ2FtSWNvblR5cGUsIENhbUljb25zU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ljb25zLnNlcnZpY2UnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWxvY2FsLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9jYWwtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvY2FsLWljb24uY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3NdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NhbEljb25Db21wb25lbnQge1xuICAvKipcbiAgICogSWNvbiB0byBkaXNwbGF5XG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgdHlwZSE6IENhbUljb25UeXBlIHwgc3RyaW5nIHwgbnVsbDtcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGUgaWNvblxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNpemU6IFRhU2l6ZXMgfCAneGwnID0gJ3hzJztcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIGljb24gd2lsbCBoYXZlIGEgcm90YXRpb24gYW5pbWF0aW9uXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgcm90YXRpb24gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9pY29uU2VydmljZTogQ2FtSWNvbnNTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge31cblxuICBwdWJsaWMgZ2V0U3ZnSWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMuX2ljb25TZXJ2aWNlLmdldEljb24odGhpcy50eXBlIGFzIENhbUljb25UeXBlKSk7XG4gIH1cbiAgcHVibGljIGdldFNpemUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zaXplID09PSAneHMnKSB7XG4gICAgICByZXR1cm4gJzI4cHgnO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaXplID09PSAnc20nKSB7XG4gICAgICByZXR1cm4gJzM1cHgnO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaXplID09PSAnbWQnKSB7XG4gICAgICByZXR1cm4gJzUwcHgnO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaXplID09PSAnbGcnKSB7XG4gICAgICByZXR1cm4gJzEyMHB4JztcbiAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gJ3hsJykge1xuICAgICAgcmV0dXJuICcxMjBweCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdhdXRvJztcbiAgfVxufVxuIiwiQGlmICh0aGlzLnR5cGUpIHtcbiAgPGRpdlxuICAgIFtpbm5lckhUTUxdPVwidGhpcy5nZXRTdmdJY29uKClcIlxuICAgIFtzdHlsZS53aWR0aF09XCJ0aGlzLmdldFNpemUoKVwiXG4gICAgW25nQ2xhc3NdPVwieyAnaXMtcm90YXRpb24nOiB0aGlzLnJvdGF0aW9uIH1cIlxuICAgIGNsYXNzPVwiaW50ZXJuYWwtaWNvblwiXG4gID48L2Rpdj5cbn1cbiJdfQ==