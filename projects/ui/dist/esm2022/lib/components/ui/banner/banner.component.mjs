import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslatePipe } from '@ta/translation';
import { TaBaseComponent } from '@ta/utils';
import { CamTranslationUI } from '../translation.service';
import * as i0 from "@angular/core";
export class BannerComponent extends TaBaseComponent {
    constructor() {
        super();
        CamTranslationUI.getInstance();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFTMUQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsZUFBZTtJQUlsRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzsrR0FQVSxlQUFlO21HQUFmLGVBQWUsNEhDZjVCLG9FQUdBLDhSRFVZLGFBQWEsaURBQUUsZUFBZTs7NEZBRTdCLGVBQWU7a0JBUDNCLFNBQVM7K0JBQ0UsV0FBVyxjQUdULElBQUksV0FDUCxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUM7d0RBSXpDLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IENhbVRyYW5zbGF0aW9uVUkgfSBmcm9tICcuLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtYmFubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Jhbm5lci5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbVHJhbnNsYXRlUGlwZSwgVHJhbnNsYXRlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQmFubmVyQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbWVzc2FnZSE6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIENhbVRyYW5zbGF0aW9uVUkuZ2V0SW5zdGFuY2UoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImJhbm5lclwiPlxuICB7eyB0aGlzLm1lc3NhZ2UgfCB0cmFuc2xhdGUgfX1cbjwvZGl2PlxuIl19