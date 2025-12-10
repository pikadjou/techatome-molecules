import { NgIf, NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
export class TrigramComponent {
    constructor() {
        /**
         * Size of trigram
         */
        this.size = 35;
    }
    getFontSize() {
        return Math.round(this.size / 3);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TrigramComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TrigramComponent, isStandalone: true, selector: "ta-trigram", inputs: { value: "value", size: "size" }, ngImport: i0, template: "@if (this.value) {\n<div\n  class=\"trigram\"\n  [ngStyle]=\"{\n    'width.px': this.size,\n    'height.px': this.size,\n    'line-height.px': this.size,\n    'font-size.px': this.getFontSize()\n  }\"\n>\n  {{ this.value }}\n</div>\n}\n", styles: [".trigram{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100);border-radius:100%;width:36px;height:36px;line-height:36px;text-align:center;vertical-align:middle;margin:auto}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TrigramComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-trigram", standalone: true, imports: [NgIf, NgStyle], template: "@if (this.value) {\n<div\n  class=\"trigram\"\n  [ngStyle]=\"{\n    'width.px': this.size,\n    'height.px': this.size,\n    'line-height.px': this.size,\n    'font-size.px': this.getFontSize()\n  }\"\n>\n  {{ this.value }}\n</div>\n}\n", styles: [".trigram{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100);border-radius:100%;width:36px;height:36px;line-height:36px;text-align:center;vertical-align:middle;margin:auto}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ3JhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvdHJpZ3JhbS90cmlncmFtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90cmlncmFtL3RyaWdyYW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFTakQsTUFBTSxPQUFPLGdCQUFnQjtJQWEzQjtRQU5BOztXQUVHO1FBRUgsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQUVILENBQUM7SUFFVCxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7K0dBakJVLGdCQUFnQjttR0FBaEIsZ0JBQWdCLGdIQ1Y3Qiw4T0FhQSxpWkRMa0IsT0FBTzs7NEZBRVosZ0JBQWdCO2tCQVA1QixTQUFTOytCQUNFLFlBQVksY0FHVixJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO3dEQU94QixLQUFLO3NCQURKLEtBQUs7Z0JBT04sSUFBSTtzQkFESCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiwgTmdTdHlsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtdHJpZ3JhbVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3RyaWdyYW0uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3RyaWdyYW0uY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBOZ1N0eWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVHJpZ3JhbUNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUZXh0IHRvIGRpc3BsYXkgaW4gdHJpZ3JhbVxuICAgKi9cbiAgQElucHV0KClcbiAgdmFsdWUhOiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRyaWdyYW1cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNpemU6IG51bWJlciA9IDM1O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgZ2V0Rm9udFNpemUoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5zaXplIC8gMyk7XG4gIH1cbn1cbiIsIkBpZiAodGhpcy52YWx1ZSkge1xuPGRpdlxuICBjbGFzcz1cInRyaWdyYW1cIlxuICBbbmdTdHlsZV09XCJ7XG4gICAgJ3dpZHRoLnB4JzogdGhpcy5zaXplLFxuICAgICdoZWlnaHQucHgnOiB0aGlzLnNpemUsXG4gICAgJ2xpbmUtaGVpZ2h0LnB4JzogdGhpcy5zaXplLFxuICAgICdmb250LXNpemUucHgnOiB0aGlzLmdldEZvbnRTaXplKClcbiAgfVwiXG4+XG4gIHt7IHRoaXMudmFsdWUgfX1cbjwvZGl2PlxufVxuIl19