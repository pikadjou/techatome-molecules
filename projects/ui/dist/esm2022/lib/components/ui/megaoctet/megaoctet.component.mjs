import { NgIf } from '@angular/common';
import { FontIconComponent } from '@ta/icons';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { octetsToMo, roundToDecimal } from '@ta/utils';
import { CamTranslationUI } from '../translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class MegaoctetComponent {
    constructor() {
        this.icon = false;
        CamTranslationUI.getInstance();
    }
    get megaoctet() {
        return roundToDecimal(octetsToMo(this.octet), 2);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MegaoctetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: MegaoctetComponent, isStandalone: true, selector: "ta-megaoctet", inputs: { octet: "octet", icon: "icon" }, ngImport: i0, template: "<div class=\"flex-row align-items-center\">\n  @if (this.icon) {\n    <ta-font-icon name=\"database\" size=\"xs\"></ta-font-icon>\n  }\n  <span>{{ 'ui.megaoctet' | translate: { size: this.megaoctet } }}</span>\n</div>\n", styles: ["ta-font-icon{color:var(--ta-icon-brand-primary)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MegaoctetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-megaoctet', standalone: true, imports: [NgIf, FontIconComponent, TranslateModule], template: "<div class=\"flex-row align-items-center\">\n  @if (this.icon) {\n    <ta-font-icon name=\"database\" size=\"xs\"></ta-font-icon>\n  }\n  <span>{{ 'ui.megaoctet' | translate: { size: this.megaoctet } }}</span>\n</div>\n", styles: ["ta-font-icon{color:var(--ta-icon-brand-primary)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { octet: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYW9jdGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9tZWdhb2N0ZXQvbWVnYW9jdGV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9tZWdhb2N0ZXQvbWVnYW9jdGV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFTMUQsTUFBTSxPQUFPLGtCQUFrQjtJQU83QjtRQUZBLFNBQUksR0FBWSxLQUFLLENBQUM7UUFHcEIsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQzsrR0FiVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixrSENoQi9CLDZOQU1BLDRHRFFrQixpQkFBaUIsa0ZBQUUsZUFBZTs7NEZBRXZDLGtCQUFrQjtrQkFQOUIsU0FBUzsrQkFDQSxjQUFjLGNBR1YsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQzt3REFJbkQsS0FBSztzQkFESixLQUFLO2dCQUlOLElBQUk7c0JBREgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IG9jdGV0c1RvTW8sIHJvdW5kVG9EZWNpbWFsIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgQ2FtVHJhbnNsYXRpb25VSSB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbnNlbGVjdG9yOiAndGEtbWVnYW9jdGV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lZ2FvY3RldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lZ2FvY3RldC5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgRm9udEljb25Db21wb25lbnQsIFRyYW5zbGF0ZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1lZ2FvY3RldENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIG9jdGV0ITogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGljb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBDYW1UcmFuc2xhdGlvblVJLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBnZXQgbWVnYW9jdGV0KCkge1xuICAgIHJldHVybiByb3VuZFRvRGVjaW1hbChvY3RldHNUb01vKHRoaXMub2N0ZXQpLCAyKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICBAaWYgKHRoaXMuaWNvbikge1xuICAgIDx0YS1mb250LWljb24gbmFtZT1cImRhdGFiYXNlXCIgc2l6ZT1cInhzXCI+PC90YS1mb250LWljb24+XG4gIH1cbiAgPHNwYW4+e3sgJ3VpLm1lZ2FvY3RldCcgfCB0cmFuc2xhdGU6IHsgc2l6ZTogdGhpcy5tZWdhb2N0ZXQgfSB9fTwvc3Bhbj5cbjwvZGl2PlxuIl19