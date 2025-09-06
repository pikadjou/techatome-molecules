import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslatePipe } from '@ta/translation';
import { TaBaseComponent } from '@ta/utils';
import { TaTranslationUI } from '../translation.service';
import * as i0 from "@angular/core";
export class BannerComponent extends TaBaseComponent {
    constructor() {
        super();
        TaTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BannerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BannerComponent, isStandalone: true, selector: "ta-banner", inputs: { message: "message" }, usesInheritance: true, ngImport: i0, template: "<div class=\"banner\">\n  {{ this.message | translate }}\n</div>\n", styles: [".banner{position:fixed;top:0;left:0;right:0;background-color:var(--ta-semantic-yellow-light);color:var(--ta-semantic-yellow-dark);padding:var(--ta-space-xs) var(--ta-space-md);text-align:center;box-shadow:var(--ta-shadow-black-sm)}\n"], dependencies: [{ kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "ngmodule", type: TranslateModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BannerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-banner', standalone: true, imports: [TranslatePipe, TranslateModule], template: "<div class=\"banner\">\n  {{ this.message | translate }}\n</div>\n", styles: [".banner{position:fixed;top:0;left:0;right:0;background-color:var(--ta-semantic-yellow-light);color:var(--ta-semantic-yellow-dark);padding:var(--ta-space-xs) var(--ta-space-md);text-align:center;box-shadow:var(--ta-shadow-black-sm)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { message: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBU3pELE1BQU0sT0FBTyxlQUFnQixTQUFRLGVBQWU7SUFJbEQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUNSLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDOytHQVBVLGVBQWU7bUdBQWYsZUFBZSw0SENoQjVCLG9FQUdBLDhSRFdZLGFBQWEsaURBQUUsZUFBZTs7NEZBRTdCLGVBQWU7a0JBUDNCLFNBQVM7K0JBQ0UsV0FBVyxjQUdULElBQUksV0FDUCxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUM7d0RBSXpDLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblVJIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWJhbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYW5uZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1RyYW5zbGF0ZVBpcGUsIFRyYW5zbGF0ZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEJhbm5lckNvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIG1lc3NhZ2UhOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBUYVRyYW5zbGF0aW9uVUkuZ2V0SW5zdGFuY2UoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImJhbm5lclwiPlxuICB7eyB0aGlzLm1lc3NhZ2UgfCB0cmFuc2xhdGUgfX1cbjwvZGl2PlxuIl19