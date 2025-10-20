import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontIconComponent } from '@ta/icons';
import { TrigramComponent } from '../trigram/trigram.component';
import * as i0 from "@angular/core";
export class UserLogoComponent {
    constructor() {
        /**
         * Size of user logo desired
         */
        this.size = 'lg';
        this.defaultType = 'font';
        this._trigram = (name) => {
            if (!name)
                return '';
            if (name.length < 4)
                return name;
            return (name[0] + name[2] + name[3]).toUpperCase();
        };
    }
    get sizeValue() {
        if (this.forcedSize) {
            return this.forcedSize;
        }
        switch (this.size) {
            case 'sm':
                return 16;
            case 'md':
                return 24;
            case 'lg':
                return 48;
            case 'xl':
                return 70;
            default:
                return 48;
        }
    }
    getTrigram() {
        return this._trigram(this.user?.firstname);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UserLogoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: UserLogoComponent, isStandalone: true, selector: "ta-user-logo", inputs: { user: "user", size: "size", forcedSize: "forcedSize", defaultType: "defaultType" }, ngImport: i0, template: "@if (this.user?.picture) {\n  <div class=\"img-container\">\n    <img\n      [src]=\"this.user?.picture\"\n      [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n      class=\"user-image\"\n    />\n  </div>\n} @else if (this.defaultType === 'trigram') {\n  <ta-trigram [value]=\"this.getTrigram()\" [size]=\"this.sizeValue\"></ta-trigram>\n} @else if (this.defaultType === 'font') {\n  <div\n    class=\"profile-icon\"\n    [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n  >\n    <ta-font-icon name=\"profil-picture\" [type]=\"this.size ?? 'lg'\"></ta-font-icon>\n  </div>\n}\n", styles: [".user-image{border-radius:100%;border:1px solid var(--ta-border-tertiary)}.img-container{display:flex;justify-content:center;align-items:center}.profile-icon{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--ta-brand-200);overflow:hidden}.profile-icon ta-font-icon{color:var(--ta-brand-700)}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: TrigramComponent, selector: "ta-trigram", inputs: ["value", "size"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UserLogoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-user-logo', standalone: true, imports: [NgStyle, FontIconComponent, TrigramComponent], template: "@if (this.user?.picture) {\n  <div class=\"img-container\">\n    <img\n      [src]=\"this.user?.picture\"\n      [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n      class=\"user-image\"\n    />\n  </div>\n} @else if (this.defaultType === 'trigram') {\n  <ta-trigram [value]=\"this.getTrigram()\" [size]=\"this.sizeValue\"></ta-trigram>\n} @else if (this.defaultType === 'font') {\n  <div\n    class=\"profile-icon\"\n    [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n  >\n    <ta-font-icon name=\"profil-picture\" [type]=\"this.size ?? 'lg'\"></ta-font-icon>\n  </div>\n}\n", styles: [".user-image{border-radius:100%;border:1px solid var(--ta-border-tertiary)}.img-container{display:flex;justify-content:center;align-items:center}.profile-icon{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--ta-brand-200);overflow:hidden}.profile-icon ta-font-icon{color:var(--ta-brand-700)}\n"] }]
        }], propDecorators: { user: [{
                type: Input
            }], size: [{
                type: Input
            }], forcedSize: [{
                type: Input
            }], defaultType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1sb2dvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBY2hFLE1BQU0sT0FBTyxpQkFBaUI7SUFQOUI7UUFXRTs7V0FFRztRQUVILFNBQUksR0FBYSxJQUFJLENBQUM7UUFNdEIsZ0JBQVcsR0FBdUIsTUFBTSxDQUFDO1FBd0JqQyxhQUFRLEdBQUcsQ0FBQyxJQUErQixFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFFakMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckQsQ0FBQyxDQUFDO0tBQ0g7SUE1QkMsSUFBSSxTQUFTO1FBQ1gsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWjtnQkFDRSxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRU0sVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7K0dBcENVLGlCQUFpQjttR0FBakIsaUJBQWlCLHNLQ3BCOUIseW5CQWtCQSw2WURBWSxPQUFPLDJFQUFFLGlCQUFpQixtRkFBRSxnQkFBZ0I7OzRGQUUzQyxpQkFBaUI7a0JBUDdCLFNBQVM7K0JBQ0UsY0FBYyxjQUdaLElBQUksV0FDUCxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQzs4QkFJdkQsSUFBSTtzQkFESCxLQUFLO2dCQU9OLElBQUk7c0JBREgsS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sV0FBVztzQkFEVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tICdAdGEvc3R5bGVzJztcblxuaW1wb3J0IHsgVHJpZ3JhbUNvbXBvbmVudCB9IGZyb20gJy4uL3RyaWdyYW0vdHJpZ3JhbS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJMb2dvRGF0YSB7XG4gIGZpcnN0bmFtZTogc3RyaW5nO1xuICBsYXN0bmFtZTogc3RyaW5nO1xuICBwaWN0dXJlPzogc3RyaW5nO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtdXNlci1sb2dvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXItbG9nby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VzZXItbG9nby5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdTdHlsZSwgRm9udEljb25Db21wb25lbnQsIFRyaWdyYW1Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTG9nb0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHVzZXI/OiBVc2VyTG9nb0RhdGE7XG5cbiAgLyoqXG4gICAqIFNpemUgb2YgdXNlciBsb2dvIGRlc2lyZWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNpemU/OiBUYVNpemVzID0gJ2xnJztcblxuICBASW5wdXQoKVxuICBmb3JjZWRTaXplPzogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRUeXBlOiAnZm9udCcgfCAndHJpZ3JhbScgPSAnZm9udCc7XG5cbiAgZ2V0IHNpemVWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5mb3JjZWRTaXplKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JjZWRTaXplO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgY2FzZSAnc20nOlxuICAgICAgICByZXR1cm4gMTY7XG4gICAgICBjYXNlICdtZCc6XG4gICAgICAgIHJldHVybiAyNDtcbiAgICAgIGNhc2UgJ2xnJzpcbiAgICAgICAgcmV0dXJuIDQ4O1xuICAgICAgY2FzZSAneGwnOlxuICAgICAgICByZXR1cm4gNzA7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gNDg7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFRyaWdyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdyYW0odGhpcy51c2VyPy5maXJzdG5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHJpZ3JhbSA9IChuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gICAgaWYgKG5hbWUubGVuZ3RoIDwgNCkgcmV0dXJuIG5hbWU7XG5cbiAgICByZXR1cm4gKG5hbWVbMF0gKyBuYW1lWzJdICsgbmFtZVszXSkudG9VcHBlckNhc2UoKTtcbiAgfTtcbn1cbiIsIkBpZiAodGhpcy51c2VyPy5waWN0dXJlKSB7XG4gIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgPGltZ1xuICAgICAgW3NyY109XCJ0aGlzLnVzZXI/LnBpY3R1cmVcIlxuICAgICAgW25nU3R5bGVdPVwieyAnd2lkdGgucHgnOiB0aGlzLnNpemVWYWx1ZSwgJ2hlaWdodC5weCc6IHRoaXMuc2l6ZVZhbHVlIH1cIlxuICAgICAgY2xhc3M9XCJ1c2VyLWltYWdlXCJcbiAgICAvPlxuICA8L2Rpdj5cbn0gQGVsc2UgaWYgKHRoaXMuZGVmYXVsdFR5cGUgPT09ICd0cmlncmFtJykge1xuICA8dGEtdHJpZ3JhbSBbdmFsdWVdPVwidGhpcy5nZXRUcmlncmFtKClcIiBbc2l6ZV09XCJ0aGlzLnNpemVWYWx1ZVwiPjwvdGEtdHJpZ3JhbT5cbn0gQGVsc2UgaWYgKHRoaXMuZGVmYXVsdFR5cGUgPT09ICdmb250Jykge1xuICA8ZGl2XG4gICAgY2xhc3M9XCJwcm9maWxlLWljb25cIlxuICAgIFtuZ1N0eWxlXT1cInsgJ3dpZHRoLnB4JzogdGhpcy5zaXplVmFsdWUsICdoZWlnaHQucHgnOiB0aGlzLnNpemVWYWx1ZSB9XCJcbiAgPlxuICAgIDx0YS1mb250LWljb24gbmFtZT1cInByb2ZpbC1waWN0dXJlXCIgW3R5cGVdPVwidGhpcy5zaXplID8/ICdsZydcIj48L3RhLWZvbnQtaWNvbj5cbiAgPC9kaXY+XG59XG4iXX0=