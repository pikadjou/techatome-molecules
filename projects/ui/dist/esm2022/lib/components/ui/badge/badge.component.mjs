import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { TaTranslationUI } from '../translation.service';
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
        TaTranslationUI.getInstance();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL2JhZGdlL2JhZGdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9iYWRnZS9iYWRnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQVV6RCxNQUFNLE9BQU8sY0FBYztJQTBCekI7UUFuQkE7O1dBRUc7UUFFSCxTQUFJLEdBQWMsU0FBUyxDQUFDO1FBRTVCOzs7V0FHRztRQUVILG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBTXhCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUcvQixlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOytHQXBDVSxjQUFjO21HQUFkLGNBQWMseU1DakIzQix5WEFTQSxzaUNETWtCLE9BQU8sb0ZBQUUsaUJBQWlCLGtGQUFFLGVBQWU7OzRGQUVoRCxjQUFjO2tCQVAxQixTQUFTOytCQUNFLFVBQVUsY0FHUixJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQzt3REFPNUQsS0FBSztzQkFESixLQUFLO2dCQU9OLElBQUk7c0JBREgsS0FBSztnQkFRTixlQUFlO3NCQURkLEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLO2dCQUlOLFdBQVc7c0JBRFYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MsIE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcblxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblVJIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIEJhZGdlVHlwZSA9ICdkYW5nZXInIHwgJ3dhcm5pbmcnIHwgJ3N1Y2Nlc3MnIHwgJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAnaW5mbycgfCAncHVycGxlJyB8ICdvcmFuZ2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtYmFkZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFkZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYWRnZS5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgTmdDbGFzcywgRm9udEljb25Db21wb25lbnQsIFRyYW5zbGF0ZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEJhZGdlQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFRleHQgdG8gZGlzcGxheSBpbiBiYWRnZVxuICAgKi9cbiAgQElucHV0KClcbiAgdmFsdWUhOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFN0eWxlIG9mIGJhZGdlXG4gICAqL1xuICBASW5wdXQoKVxuICB0eXBlOiBCYWRnZVR5cGUgPSAncHJpbWFyeSc7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqIHNob3dDbGlja09wdGlvblxuICAgKi9cbiAgQElucHV0KClcbiAgc2hvd0NsaWNrT3B0aW9uID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgaWNvbj86IHN0cmluZztcblxuICBAT3V0cHV0KClcbiAgY2xpY2tBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgVGFUcmFuc2xhdGlvblVJLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGJhZGdlLSR7dGhpcy50eXBlfWA7XG4gIH1cblxuICBwdWJsaWMgY2xpY2soKSB7XG4gICAgdGhpcy5jbGlja0FjdGlvbi5lbWl0KCk7XG4gIH1cbn1cbiIsIjxzcGFuIGNsYXNzPVwiYmFkZ2UtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwidGhpcy5nZXRDbGFzcygpXCIgKGNsaWNrKT1cInRoaXMuY2xpY2soKVwiPlxuICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+e3sgdGhpcy52YWx1ZSB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgQGlmICh0aGlzLmljb24pIHtcbiAgICA8dGEtZm9udC1pY29uIGNsYXNzPVwibWwtc3BhY2UteHNcIiBbbmFtZV09XCJpY29uXCIgdHlwZT1cInhzXCI+PC90YS1mb250LWljb24+XG4gIH1cbiAgQGlmICh0aGlzLnNob3dDbGlja09wdGlvbikge1xuICAgIDx0YS1mb250LWljb24gbmFtZT1cImFycm93LXNtYWxsXCIgdHlwZT1cInhzXCI+PC90YS1mb250LWljb24+XG4gIH1cbjwvc3Bhbj5cbiJdfQ==