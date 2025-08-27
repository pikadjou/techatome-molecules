import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TrigramComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: TrigramComponent, isStandalone: true, selector: "ta-trigram", inputs: { value: "value", size: "size" }, ngImport: i0, template: "@if (this.value) {\n  <div\n    class=\"trigram\"\n    [ngStyle]=\"{\n      'width.px': this.size,\n      'height.px': this.size,\n      'line-height.px': this.size,\n      'font-size.px': this.getFontSize()\n    }\"\n  >\n    {{ this.value }}\n  </div>\n}\n", styles: [".trigram{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100);border-radius:100%;width:36px;height:36px;line-height:36px;text-align:center;vertical-align:middle;margin:auto}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TrigramComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-trigram', standalone: true, imports: [NgIf, NgStyle], template: "@if (this.value) {\n  <div\n    class=\"trigram\"\n    [ngStyle]=\"{\n      'width.px': this.size,\n      'height.px': this.size,\n      'line-height.px': this.size,\n      'font-size.px': this.getFontSize()\n    }\"\n  >\n    {{ this.value }}\n  </div>\n}\n", styles: [".trigram{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100);border-radius:100%;width:36px;height:36px;line-height:36px;text-align:center;vertical-align:middle;margin:auto}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ3JhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvdHJpZ3JhbS90cmlncmFtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90cmlncmFtL3RyaWdyYW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFTakQsTUFBTSxPQUFPLGdCQUFnQjtJQWEzQjtRQU5BOztXQUVHO1FBRUgsU0FBSSxHQUFXLEVBQUUsQ0FBQztJQUVILENBQUM7SUFFVCxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7K0dBakJVLGdCQUFnQjttR0FBaEIsZ0JBQWdCLGdIQ1Y3QixvUUFhQSxpWkRMa0IsT0FBTzs7NEZBRVosZ0JBQWdCO2tCQVA1QixTQUFTOytCQUNBLFlBQVksY0FHUixJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO3dEQU94QixLQUFLO3NCQURKLEtBQUs7Z0JBT04sSUFBSTtzQkFESCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiwgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuc2VsZWN0b3I6ICd0YS10cmlncmFtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyaWdyYW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cmlncmFtLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBOZ1N0eWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVHJpZ3JhbUNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUZXh0IHRvIGRpc3BsYXkgaW4gdHJpZ3JhbVxuICAgKi9cbiAgQElucHV0KClcbiAgdmFsdWUhOiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRyaWdyYW1cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNpemU6IG51bWJlciA9IDM1O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgZ2V0Rm9udFNpemUoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5zaXplIC8gMyk7XG4gIH1cbn1cbiIsIkBpZiAodGhpcy52YWx1ZSkge1xuICA8ZGl2XG4gICAgY2xhc3M9XCJ0cmlncmFtXCJcbiAgICBbbmdTdHlsZV09XCJ7XG4gICAgICAnd2lkdGgucHgnOiB0aGlzLnNpemUsXG4gICAgICAnaGVpZ2h0LnB4JzogdGhpcy5zaXplLFxuICAgICAgJ2xpbmUtaGVpZ2h0LnB4JzogdGhpcy5zaXplLFxuICAgICAgJ2ZvbnQtc2l6ZS5weCc6IHRoaXMuZ2V0Rm9udFNpemUoKVxuICAgIH1cIlxuICA+XG4gICAge3sgdGhpcy52YWx1ZSB9fVxuICA8L2Rpdj5cbn1cbiJdfQ==