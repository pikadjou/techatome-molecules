import { Component, Input } from '@angular/core';
import { FontIconComponent } from '@ta/icons';
import * as i0 from "@angular/core";
export class IconComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: IconComponent, isStandalone: true, selector: "ta-notification-item-icon", inputs: { level: "level", icon: "icon" }, ngImport: i0, template: "<div class=\"icon-container\">\n  <ta-font-icon [name]=\"this.icon\"></ta-font-icon>\n</div>\n", styles: [".icon-container{padding:var(--ta-space-md);border-radius:var(--ta-radius-full);background-color:var(--ta-surface-hover-secondary);color:var(--ta-icon-brand-primary)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-notification-item-icon', standalone: true, imports: [
                        FontIconComponent
                    ], template: "<div class=\"icon-container\">\n  <ta-font-icon [name]=\"this.icon\"></ta-font-icon>\n</div>\n", styles: [".icon-container{padding:var(--ta-space-md);border-radius:var(--ta-radius-full);background-color:var(--ta-surface-hover-secondary);color:var(--ta-icon-brand-primary)}\n"] }]
        }], propDecorators: { level: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaXRlbXMvaXRlbS9pY29uL2ljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2l0ZW1zL2l0ZW0vaWNvbi9pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFXOUMsTUFBTSxPQUFPLGFBQWE7K0dBQWIsYUFBYTttR0FBYixhQUFhLCtIQ2IxQixnR0FHQSxpT0RPSSxpQkFBaUI7OzRGQUdSLGFBQWE7a0JBVHpCLFNBQVM7K0JBQ0UsMkJBQTJCLGNBR3pCLElBQUksV0FDUDt3QkFDUCxpQkFBaUI7cUJBQ2xCOzhCQUlELEtBQUs7c0JBREosS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTm90aWZpY2F0aW9uTGV2ZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9kdG8vbGV2ZWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tICdAdGEvaWNvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1ub3RpZmljYXRpb24taXRlbS1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBGb250SWNvbkNvbXBvbmVudFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbGV2ZWwhOiBFTm90aWZpY2F0aW9uTGV2ZWw7XG5cbiAgQElucHV0KClcbiAgaWNvbiE6IHN0cmluZztcbn1cbiIsIjxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPlxuICA8dGEtZm9udC1pY29uIFtuYW1lXT1cInRoaXMuaWNvblwiPjwvdGEtZm9udC1pY29uPlxuPC9kaXY+XG4iXX0=