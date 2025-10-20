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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LocalIconComponent, deps: [{ token: i1.TaIconsService }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: LocalIconComponent, isStandalone: true, selector: "ta-local-icon", inputs: { type: "type", size: "size", rotation: "rotation" }, ngImport: i0, template: "@if (this.type) {\n  <div\n    [innerHTML]=\"this.getSvgIcon()\"\n    [style.width]=\"this.getSize()\"\n    [ngClass]=\"{ 'is-rotation': this.rotation }\"\n    class=\"internal-icon\"\n  ></div>\n}\n", styles: [".internal-icon{margin:auto;display:flex}:host ::ng-deep svg{width:100%!important;height:auto!important}.is-rotation{animation:rotation 2s infinite linear}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LocalIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-local-icon', standalone: true, imports: [NgClass], template: "@if (this.type) {\n  <div\n    [innerHTML]=\"this.getSvgIcon()\"\n    [style.width]=\"this.getSize()\"\n    [ngClass]=\"{ 'is-rotation': this.rotation }\"\n    class=\"internal-icon\"\n  ></div>\n}\n", styles: [".internal-icon{margin:auto;display:flex}:host ::ng-deep svg{width:100%!important;height:auto!important}.is-rotation{animation:rotation 2s infinite linear}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}\n"] }]
        }], ctorParameters: () => [{ type: i1.TaIconsService }, { type: i2.DomSanitizer }], propDecorators: { type: [{
                type: Input
            }], size: [{
                type: Input
            }], rotation: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbG9jYWwtaWNvbi9sb2NhbC1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9sb2NhbC1pY29uL2xvY2FsLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pEOztHQUVHO0FBUUgsTUFBTSxPQUFPLGtCQUFrQjtJQW1CN0IsWUFDVSxZQUE0QixFQUM1QixVQUF3QjtRQUR4QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDNUIsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQWRsQzs7V0FFRztRQUVJLFNBQUksR0FBbUIsSUFBSSxDQUFDO1FBRW5DOztXQUVHO1FBRUksYUFBUSxHQUFHLEtBQUssQ0FBQztJQUtyQixDQUFDO0lBRUcsVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUNNLE9BQU87UUFDWixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDdkIsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN2QixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDdkIsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN2QixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzsrR0E3Q1Usa0JBQWtCO21HQUFsQixrQkFBa0IsdUlDbEIvQix5TUFRQSw4UkRRWSxPQUFPOzs0RkFFTixrQkFBa0I7a0JBUDlCLFNBQVM7K0JBQ0UsZUFBZSxjQUdiLElBQUksV0FDUCxDQUFDLE9BQU8sQ0FBQzs4R0FPWCxJQUFJO3NCQURWLEtBQUs7Z0JBT0MsSUFBSTtzQkFEVixLQUFLO2dCQU9DLFFBQVE7c0JBRGQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tICdAdGEvc3R5bGVzJztcblxuaW1wb3J0IHsgVGFJY29uVHlwZSwgVGFJY29uc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pY29ucy5zZXJ2aWNlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1sb2NhbC1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvY2FsLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2NhbC1pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxJY29uQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEljb24gdG8gZGlzcGxheVxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHR5cGUhOiBUYUljb25UeXBlIHwgc3RyaW5nIHwgbnVsbDtcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGUgaWNvblxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNpemU6IFRhU2l6ZXMgfCAneGwnID0gJ3hzJztcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIGljb24gd2lsbCBoYXZlIGEgcm90YXRpb24gYW5pbWF0aW9uXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgcm90YXRpb24gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9pY29uU2VydmljZTogVGFJY29uc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7fVxuXG4gIHB1YmxpYyBnZXRTdmdJY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5faWNvblNlcnZpY2UuZ2V0SWNvbih0aGlzLnR5cGUgYXMgVGFJY29uVHlwZSkpO1xuICB9XG4gIHB1YmxpYyBnZXRTaXplKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gJ3hzJykge1xuICAgICAgcmV0dXJuICcyOHB4JztcbiAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gJ3NtJykge1xuICAgICAgcmV0dXJuICczNXB4JztcbiAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gJ21kJykge1xuICAgICAgcmV0dXJuICc1MHB4JztcbiAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gJ2xnJykge1xuICAgICAgcmV0dXJuICcxMjBweCc7XG4gICAgfVxuICAgIGlmICh0aGlzLnNpemUgPT09ICd4bCcpIHtcbiAgICAgIHJldHVybiAnMTIwcHgnO1xuICAgIH1cblxuICAgIHJldHVybiAnYXV0byc7XG4gIH1cbn1cbiIsIkBpZiAodGhpcy50eXBlKSB7XG4gIDxkaXZcbiAgICBbaW5uZXJIVE1MXT1cInRoaXMuZ2V0U3ZnSWNvbigpXCJcbiAgICBbc3R5bGUud2lkdGhdPVwidGhpcy5nZXRTaXplKClcIlxuICAgIFtuZ0NsYXNzXT1cInsgJ2lzLXJvdGF0aW9uJzogdGhpcy5yb3RhdGlvbiB9XCJcbiAgICBjbGFzcz1cImludGVybmFsLWljb25cIlxuICA+PC9kaXY+XG59XG4iXX0=