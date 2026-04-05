import { NgStyle } from "@angular/common";
import { Component, input } from "@angular/core";
import * as i0 from "@angular/core";
export class TrigramComponent {
    constructor() {
        /**
         * Text to display in trigram
         */
        this.value = input.required();
        /**
         * Size of trigram
         */
        this.size = input(35);
    }
    getFontSize() {
        return Math.round(this.size() / 3);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TrigramComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TrigramComponent, isStandalone: true, selector: "ta-trigram", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: true, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "@if (this.value()) {\n<div\n  class=\"trigram\"\n  [ngStyle]=\"{\n    'width.px': this.size(),\n    'height.px': this.size(),\n    'line-height.px': this.size(),\n    'font-size.px': this.getFontSize()\n  }\"\n>\n  {{ this.value() }}\n</div>\n}\n", styles: [".trigram{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100);border-radius:100%;width:36px;height:36px;line-height:36px;text-align:center;vertical-align:middle;margin:auto}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TrigramComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-trigram", standalone: true, imports: [NgStyle], template: "@if (this.value()) {\n<div\n  class=\"trigram\"\n  [ngStyle]=\"{\n    'width.px': this.size(),\n    'height.px': this.size(),\n    'line-height.px': this.size(),\n    'font-size.px': this.getFontSize()\n  }\"\n>\n  {{ this.value() }}\n</div>\n}\n", styles: [".trigram{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100);border-radius:100%;width:36px;height:36px;line-height:36px;text-align:center;vertical-align:middle;margin:auto}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ3JhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvdHJpZ3JhbS90cmlncmFtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90cmlncmFtL3RyaWdyYW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVNqRCxNQUFNLE9BQU8sZ0JBQWdCO0lBVzNCO1FBVkE7O1dBRUc7UUFDSCxVQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBaUIsQ0FBQztRQUV4Qzs7V0FFRztRQUNILFNBQUksR0FBRyxLQUFLLENBQVMsRUFBRSxDQUFDLENBQUM7SUFFVixDQUFDO0lBRVQsV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7K0dBZlUsZ0JBQWdCO21HQUFoQixnQkFBZ0IsOFRDVjdCLHdQQWFBLGlXRExZLE9BQU87OzRGQUVOLGdCQUFnQjtrQkFQNUIsU0FBUzsrQkFDRSxZQUFZLGNBR1YsSUFBSSxXQUNQLENBQUMsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdTdHlsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgaW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtdHJpZ3JhbVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3RyaWdyYW0uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3RyaWdyYW0uY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ1N0eWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVHJpZ3JhbUNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUZXh0IHRvIGRpc3BsYXkgaW4gdHJpZ3JhbVxuICAgKi9cbiAgdmFsdWUgPSBpbnB1dC5yZXF1aXJlZDxzdHJpbmcgfCBudWxsPigpO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRyaWdyYW1cbiAgICovXG4gIHNpemUgPSBpbnB1dDxudW1iZXI+KDM1KTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGdldEZvbnRTaXplKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuc2l6ZSgpIC8gMyk7XG4gIH1cbn1cbiIsIkBpZiAodGhpcy52YWx1ZSgpKSB7XG48ZGl2XG4gIGNsYXNzPVwidHJpZ3JhbVwiXG4gIFtuZ1N0eWxlXT1cIntcbiAgICAnd2lkdGgucHgnOiB0aGlzLnNpemUoKSxcbiAgICAnaGVpZ2h0LnB4JzogdGhpcy5zaXplKCksXG4gICAgJ2xpbmUtaGVpZ2h0LnB4JzogdGhpcy5zaXplKCksXG4gICAgJ2ZvbnQtc2l6ZS5weCc6IHRoaXMuZ2V0Rm9udFNpemUoKVxuICB9XCJcbj5cbiAge3sgdGhpcy52YWx1ZSgpIH19XG48L2Rpdj5cbn1cbiJdfQ==