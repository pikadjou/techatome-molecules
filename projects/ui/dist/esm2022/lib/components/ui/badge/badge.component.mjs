import { NgIf, NgClass } from '@angular/common';
import { FontIconComponent } from '@ta/icons';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CamTranslationUI } from '../translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class BadgeComponent {
    constructor() {
        /**
         * Style of badge
         */
        this.type = 'primary';
        /**
         * @deprecated
         * showClickOption
         */
        this.showClickOption = false;
        this.clickAction = new EventEmitter();
        CamTranslationUI.getInstance();
    }
    getClass() {
        return `badge-${this.type}`;
    }
    click() {
        this.clickAction.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: BadgeComponent, isStandalone: true, selector: "ta-badge", inputs: { value: "value", type: "type", showClickOption: "showClickOption", icon: "icon" }, outputs: { clickAction: "clickAction" }, ngImport: i0, template: "<span class=\"badge-container\" [ngClass]=\"this.getClass()\" (click)=\"this.click()\">\n  <span class=\"value\">{{ this.value | translate }}</span>\n  @if (this.icon) {\n    <ta-font-icon class=\"ml-space-xs\" [name]=\"icon\" type=\"xs\"></ta-font-icon>\n  }\n  @if (this.showClickOption) {\n    <ta-font-icon name=\"arrow-small\" type=\"xs\"></ta-font-icon>\n  }\n</span>\n", styles: [".badge-container{display:flex;width:fit-content;padding:var(--ta-space-sm) var(--ta-space-xs);font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-bold-weight);border-radius:6px}.badge-container .value{white-space:nowrap}.badge-info{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light)}.badge-danger{color:var(--ta-semantic-red-dark);background:var(--ta-semantic-red-light)}.badge-warning{color:var(--ta-semantic-yellow-dark);background:var(--ta-semantic-yellow-light)}.badge-success{color:var(--ta-semantic-green-dark);background:var(--ta-semantic-green-light)}.badge-primary{color:var(--ta-brand-800);background:var(--ta-brand-300)}.badge-secondary{color:var(--ta-neutral-black);background:var(--ta-brand-300)}.badge-purple{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light)}.badge-orange{color:var(--ta-semantic-orange-dark);background:var(--ta-semantic-orange-light)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-badge', standalone: true, imports: [NgIf, NgClass, FontIconComponent, TranslateModule], template: "<span class=\"badge-container\" [ngClass]=\"this.getClass()\" (click)=\"this.click()\">\n  <span class=\"value\">{{ this.value | translate }}</span>\n  @if (this.icon) {\n    <ta-font-icon class=\"ml-space-xs\" [name]=\"icon\" type=\"xs\"></ta-font-icon>\n  }\n  @if (this.showClickOption) {\n    <ta-font-icon name=\"arrow-small\" type=\"xs\"></ta-font-icon>\n  }\n</span>\n", styles: [".badge-container{display:flex;width:fit-content;padding:var(--ta-space-sm) var(--ta-space-xs);font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-bold-weight);border-radius:6px}.badge-container .value{white-space:nowrap}.badge-info{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light)}.badge-danger{color:var(--ta-semantic-red-dark);background:var(--ta-semantic-red-light)}.badge-warning{color:var(--ta-semantic-yellow-dark);background:var(--ta-semantic-yellow-light)}.badge-success{color:var(--ta-semantic-green-dark);background:var(--ta-semantic-green-light)}.badge-primary{color:var(--ta-brand-800);background:var(--ta-brand-300)}.badge-secondary{color:var(--ta-neutral-black);background:var(--ta-brand-300)}.badge-purple{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light)}.badge-orange{color:var(--ta-semantic-orange-dark);background:var(--ta-semantic-orange-light)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], type: [{
                type: Input
            }], showClickOption: [{
                type: Input
            }], icon: [{
                type: Input
            }], clickAction: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL2JhZGdlL2JhZGdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9iYWRnZS9iYWRnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBVTFELE1BQU0sT0FBTyxjQUFjO0lBMEJ6QjtRQW5CQTs7V0FFRztRQUVILFNBQUksR0FBYyxTQUFTLENBQUM7UUFFNUI7OztXQUdHO1FBRUgsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFNeEIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRy9CLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxRQUFRO1FBQ2IsT0FBTyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzsrR0FwQ1UsY0FBYzttR0FBZCxjQUFjLHlNQ2YzQix5WEFTQSxzaUNESWtCLE9BQU8sb0ZBQUUsaUJBQWlCLGtGQUFFLGVBQWU7OzRGQUVoRCxjQUFjO2tCQVAxQixTQUFTOytCQUNBLFVBQVUsY0FHTixJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQzt3REFPNUQsS0FBSztzQkFESixLQUFLO2dCQU9OLElBQUk7c0JBREgsS0FBSztnQkFRTixlQUFlO3NCQURkLEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLO2dCQUlOLFdBQVc7c0JBRFYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYsIE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQgeyBDYW1UcmFuc2xhdGlvblVJIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIEJhZGdlVHlwZSA9ICdkYW5nZXInIHwgJ3dhcm5pbmcnIHwgJ3N1Y2Nlc3MnIHwgJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAnaW5mbycgfCAncHVycGxlJyB8ICdvcmFuZ2UnO1xuQENvbXBvbmVudCh7XG5zZWxlY3RvcjogJ3RhLWJhZGdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhZGdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFkZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIE5nQ2xhc3MsIEZvbnRJY29uQ29tcG9uZW50LCBUcmFuc2xhdGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBCYWRnZUNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUZXh0IHRvIGRpc3BsYXkgaW4gYmFkZ2VcbiAgICovXG4gIEBJbnB1dCgpXG4gIHZhbHVlITogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdHlsZSBvZiBiYWRnZVxuICAgKi9cbiAgQElucHV0KClcbiAgdHlwZTogQmFkZ2VUeXBlID0gJ3ByaW1hcnknO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBzaG93Q2xpY2tPcHRpb25cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dDbGlja09wdGlvbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGljb24/OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpXG4gIGNsaWNrQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIENhbVRyYW5zbGF0aW9uVUkuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgYmFkZ2UtJHt0aGlzLnR5cGV9YDtcbiAgfVxuXG4gIHB1YmxpYyBjbGljaygpIHtcbiAgICB0aGlzLmNsaWNrQWN0aW9uLmVtaXQoKTtcbiAgfVxufVxuIiwiPHNwYW4gY2xhc3M9XCJiYWRnZS1jb250YWluZXJcIiBbbmdDbGFzc109XCJ0aGlzLmdldENsYXNzKClcIiAoY2xpY2spPVwidGhpcy5jbGljaygpXCI+XG4gIDxzcGFuIGNsYXNzPVwidmFsdWVcIj57eyB0aGlzLnZhbHVlIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICBAaWYgKHRoaXMuaWNvbikge1xuICAgIDx0YS1mb250LWljb24gY2xhc3M9XCJtbC1zcGFjZS14c1wiIFtuYW1lXT1cImljb25cIiB0eXBlPVwieHNcIj48L3RhLWZvbnQtaWNvbj5cbiAgfVxuICBAaWYgKHRoaXMuc2hvd0NsaWNrT3B0aW9uKSB7XG4gICAgPHRhLWZvbnQtaWNvbiBuYW1lPVwiYXJyb3ctc21hbGxcIiB0eXBlPVwieHNcIj48L3RhLWZvbnQtaWNvbj5cbiAgfVxuPC9zcGFuPlxuIl19