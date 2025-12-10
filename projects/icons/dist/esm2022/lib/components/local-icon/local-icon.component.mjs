import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
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
        this.size = "xs";
        /**
         * If set to true, icon will have a rotation animation
         */
        this.rotation = false;
    }
    getSvgIcon() {
        return this._sanitizer.bypassSecurityTrustHtml(this._iconService.getIcon(this.type));
    }
    getSize() {
        if (this.size === "xs") {
            return "28px";
        }
        if (this.size === "sm") {
            return "35px";
        }
        if (this.size === "md") {
            return "50px";
        }
        if (this.size === "lg") {
            return "120px";
        }
        if (this.size === "xl") {
            return "120px";
        }
        return "auto";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LocalIconComponent, deps: [{ token: i1.TaIconsService }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: LocalIconComponent, isStandalone: true, selector: "ta-local-icon", inputs: { type: "type", size: "size", rotation: "rotation" }, ngImport: i0, template: "@if (this.type) {\n<div\n  [innerHTML]=\"this.getSvgIcon()\"\n  [style.width]=\"this.getSize()\"\n  [ngClass]=\"{ 'is-rotation': this.rotation }\"\n  class=\"internal-icon\"\n></div>\n}\n", styles: [".internal-icon{margin:auto;display:flex}:host ::ng-deep svg{width:100%!important;height:auto!important}.is-rotation{animation:rotation 2s infinite linear}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LocalIconComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-local-icon", standalone: true, imports: [NgClass], template: "@if (this.type) {\n<div\n  [innerHTML]=\"this.getSvgIcon()\"\n  [style.width]=\"this.getSize()\"\n  [ngClass]=\"{ 'is-rotation': this.rotation }\"\n  class=\"internal-icon\"\n></div>\n}\n", styles: [".internal-icon{margin:auto;display:flex}:host ::ng-deep svg{width:100%!important;height:auto!important}.is-rotation{animation:rotation 2s infinite linear}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}\n"] }]
        }], ctorParameters: () => [{ type: i1.TaIconsService }, { type: i2.DomSanitizer }], propDecorators: { type: [{
                type: Input
            }], size: [{
                type: Input
            }], rotation: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbG9jYWwtaWNvbi9sb2NhbC1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9sb2NhbC1pY29uL2xvY2FsLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pEOztHQUVHO0FBUUgsTUFBTSxPQUFPLGtCQUFrQjtJQW1CN0IsWUFDVSxZQUE0QixFQUM1QixVQUF3QjtRQUR4QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDNUIsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQWRsQzs7V0FFRztRQUVJLFNBQUksR0FBbUIsSUFBSSxDQUFDO1FBRW5DOztXQUVHO1FBRUksYUFBUSxHQUFHLEtBQUssQ0FBQztJQUtyQixDQUFDO0lBRUcsVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQWtCLENBQUMsQ0FDbkQsQ0FBQztJQUNKLENBQUM7SUFDTSxPQUFPO1FBQ1osSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDdkIsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN2QixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDdkIsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7K0dBL0NVLGtCQUFrQjttR0FBbEIsa0JBQWtCLHVJQ2xCL0IsNkxBUUEsOFJEUVksT0FBTzs7NEZBRU4sa0JBQWtCO2tCQVA5QixTQUFTOytCQUNFLGVBQWUsY0FHYixJQUFJLFdBQ1AsQ0FBQyxPQUFPLENBQUM7OEdBT1gsSUFBSTtzQkFEVixLQUFLO2dCQU9DLElBQUk7c0JBRFYsS0FBSztnQkFPQyxRQUFRO3NCQURkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcblxuaW1wb3J0IHsgVGFJY29uVHlwZSwgVGFJY29uc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaWNvbnMuc2VydmljZVwiO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1sb2NhbC1pY29uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbG9jYWwtaWNvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbG9jYWwtaWNvbi5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3NdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NhbEljb25Db21wb25lbnQge1xuICAvKipcbiAgICogSWNvbiB0byBkaXNwbGF5XG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgdHlwZSE6IFRhSWNvblR5cGUgfCBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBpY29uXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2l6ZTogVGFTaXplcyB8IFwieGxcIiA9IFwieHNcIjtcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIGljb24gd2lsbCBoYXZlIGEgcm90YXRpb24gYW5pbWF0aW9uXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgcm90YXRpb24gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9pY29uU2VydmljZTogVGFJY29uc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7fVxuXG4gIHB1YmxpYyBnZXRTdmdJY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoXG4gICAgICB0aGlzLl9pY29uU2VydmljZS5nZXRJY29uKHRoaXMudHlwZSBhcyBUYUljb25UeXBlKVxuICAgICk7XG4gIH1cbiAgcHVibGljIGdldFNpemUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zaXplID09PSBcInhzXCIpIHtcbiAgICAgIHJldHVybiBcIjI4cHhcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gXCJzbVwiKSB7XG4gICAgICByZXR1cm4gXCIzNXB4XCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnNpemUgPT09IFwibWRcIikge1xuICAgICAgcmV0dXJuIFwiNTBweFwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaXplID09PSBcImxnXCIpIHtcbiAgICAgIHJldHVybiBcIjEyMHB4XCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnNpemUgPT09IFwieGxcIikge1xuICAgICAgcmV0dXJuIFwiMTIwcHhcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJhdXRvXCI7XG4gIH1cbn1cbiIsIkBpZiAodGhpcy50eXBlKSB7XG48ZGl2XG4gIFtpbm5lckhUTUxdPVwidGhpcy5nZXRTdmdJY29uKClcIlxuICBbc3R5bGUud2lkdGhdPVwidGhpcy5nZXRTaXplKClcIlxuICBbbmdDbGFzc109XCJ7ICdpcy1yb3RhdGlvbic6IHRoaXMucm90YXRpb24gfVwiXG4gIGNsYXNzPVwiaW50ZXJuYWwtaWNvblwiXG4+PC9kaXY+XG59XG4iXX0=