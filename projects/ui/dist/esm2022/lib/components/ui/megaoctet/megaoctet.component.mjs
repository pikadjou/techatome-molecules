import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { octetsToMo, roundToDecimal } from '@ta/utils';
import { TaTranslationUI } from '../translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class MegaoctetComponent {
    constructor() {
        this.icon = false;
        TaTranslationUI.getInstance();
    }
    get megaoctet() {
        return roundToDecimal(octetsToMo(this.octet), 2);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MegaoctetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: MegaoctetComponent, isStandalone: true, selector: "ta-megaoctet", inputs: { octet: "octet", icon: "icon" }, ngImport: i0, template: "<div class=\"flex-row align-items-center\">\n  @if (this.icon) {\n    <ta-font-icon name=\"database\" size=\"xs\"></ta-font-icon>\n  }\n  <span>{{ 'ui.megaoctet' | translate: { size: this.megaoctet } }}</span>\n</div>\n", styles: ["ta-font-icon{color:var(--ta-icon-brand-primary)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MegaoctetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-megaoctet', standalone: true, imports: [NgIf, FontIconComponent, TranslateModule], template: "<div class=\"flex-row align-items-center\">\n  @if (this.icon) {\n    <ta-font-icon name=\"database\" size=\"xs\"></ta-font-icon>\n  }\n  <span>{{ 'ui.megaoctet' | translate: { size: this.megaoctet } }}</span>\n</div>\n", styles: ["ta-font-icon{color:var(--ta-icon-brand-primary)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { octet: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYW9jdGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9tZWdhb2N0ZXQvbWVnYW9jdGV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9tZWdhb2N0ZXQvbWVnYW9jdGV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBU3pELE1BQU0sT0FBTyxrQkFBa0I7SUFPN0I7UUFGQSxTQUFJLEdBQVksS0FBSyxDQUFDO1FBR3BCLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDOytHQWJVLGtCQUFrQjttR0FBbEIsa0JBQWtCLGtIQ2pCL0IsNk5BTUEsNEdEU2tCLGlCQUFpQixrRkFBRSxlQUFlOzs0RkFFdkMsa0JBQWtCO2tCQVA5QixTQUFTOytCQUNFLGNBQWMsY0FHWixJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO3dEQUluRCxLQUFLO3NCQURKLEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBvY3RldHNUb01vLCByb3VuZFRvRGVjaW1hbCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IFRhVHJhbnNsYXRpb25VSSB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1tZWdhb2N0ZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVnYW9jdGV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVnYW9jdGV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBGb250SWNvbkNvbXBvbmVudCwgVHJhbnNsYXRlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVnYW9jdGV0Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgb2N0ZXQhOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgaWNvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xuICB9XG5cbiAgZ2V0IG1lZ2FvY3RldCgpIHtcbiAgICByZXR1cm4gcm91bmRUb0RlY2ltYWwob2N0ZXRzVG9Nbyh0aGlzLm9jdGV0KSwgMik7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgQGlmICh0aGlzLmljb24pIHtcbiAgICA8dGEtZm9udC1pY29uIG5hbWU9XCJkYXRhYmFzZVwiIHNpemU9XCJ4c1wiPjwvdGEtZm9udC1pY29uPlxuICB9XG4gIDxzcGFuPnt7ICd1aS5tZWdhb2N0ZXQnIHwgdHJhbnNsYXRlOiB7IHNpemU6IHRoaXMubWVnYW9jdGV0IH0gfX08L3NwYW4+XG48L2Rpdj5cbiJdfQ==