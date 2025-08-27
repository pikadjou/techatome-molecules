import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontIconComponent } from '@ta/icons';
import { StopPropagationDirective } from '@ta/utils';
import * as i0 from "@angular/core";
export class ButtonToolComponent {
    constructor() {
        this.state = 'classic';
        this.type = 'primary';
        this.size = 'md';
        this.icon = null;
        this.stopPropagationActivation = true;
        this.readonly = false;
        /**
         * Event emitted when button is clicked
         */
        this.action = new EventEmitter();
    }
    handleClick() {
        if (this.state === 'classic') {
            this.action.emit();
        }
    }
    getClass() {
        const css = {};
        css[this.state] = true;
        css[this.size] = true;
        css[this.type] = true;
        return css;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonToolComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ButtonToolComponent, isStandalone: true, selector: "ta-button-tool", inputs: { state: "state", type: "type", size: "size", icon: "icon", stopPropagationActivation: "stopPropagationActivation", readonly: "readonly" }, outputs: { action: "action" }, ngImport: i0, template: "<button\r\n  [disabled]=\"this.readonly\"\r\n  appStopPropagation\r\n  [stopPropagationActivation]=\"this.stopPropagationActivation\"\r\n  type=\"button\"\r\n  class=\"button pointer\"\r\n  [ngClass]=\"this.getClass()\"\r\n  (click)=\"this.handleClick()\"\r\n>\r\n  <div class=\"flex-row g-space-sm align-c enter\">\r\n    @if (this.icon) {\r\n      <ta-font-icon [name]=\"this.icon\" [type]=\"this.size\"></ta-font-icon>\r\n    }\r\n  </div>\r\n</button>\r\n", styles: [".button{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);padding:var(--ta-space-sm);align-items:center;display:flex;justify-content:center;margin:auto}.button.disabled,.button.inactive{cursor:not-allowed}.button.primary{color:var(--ta-icon-primary)}.button.primary:hover,.button.primary.selected{color:var(--ta-text-brand-primary)}.button.primary.disabled,.button.primary.inactive{color:var(--ta-neutral-200);border-color:var(--ta-surface-hover-secondary)}.button.primary.unselected{color:var(--ta-text-primary);background-color:var(--ta-surface-tertiary)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonToolComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-button-tool', standalone: true, imports: [NgIf, NgClass, FontIconComponent, StopPropagationDirective], template: "<button\r\n  [disabled]=\"this.readonly\"\r\n  appStopPropagation\r\n  [stopPropagationActivation]=\"this.stopPropagationActivation\"\r\n  type=\"button\"\r\n  class=\"button pointer\"\r\n  [ngClass]=\"this.getClass()\"\r\n  (click)=\"this.handleClick()\"\r\n>\r\n  <div class=\"flex-row g-space-sm align-c enter\">\r\n    @if (this.icon) {\r\n      <ta-font-icon [name]=\"this.icon\" [type]=\"this.size\"></ta-font-icon>\r\n    }\r\n  </div>\r\n</button>\r\n", styles: [".button{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);padding:var(--ta-space-sm);align-items:center;display:flex;justify-content:center;margin:auto}.button.disabled,.button.inactive{cursor:not-allowed}.button.primary{color:var(--ta-icon-primary)}.button.primary:hover,.button.primary.selected{color:var(--ta-text-brand-primary)}.button.primary.disabled,.button.primary.inactive{color:var(--ta-neutral-200);border-color:var(--ta-surface-hover-secondary)}.button.primary.unselected{color:var(--ta-text-primary);background-color:var(--ta-surface-tertiary)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { state: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], icon: [{
                type: Input
            }], stopPropagationActivation: [{
                type: Input
            }], readonly: [{
                type: Input
            }], action: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvYnV0dG9uL3Rvb2wvdG9vbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvYnV0dG9uL3Rvb2wvdG9vbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTlDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFTckQsTUFBTSxPQUFPLG1CQUFtQjtJQXlCOUI7UUF2QkEsVUFBSyxHQUFZLFNBQVMsQ0FBQztRQUczQixTQUFJLEdBQWMsU0FBUyxDQUFDO1FBRzVCLFNBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsU0FBSSxHQUFrQixJQUFJLENBQUM7UUFHM0IsOEJBQXlCLEdBQUcsSUFBSSxDQUFDO1FBR2pDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUI7O1dBRUc7UUFFSCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUViLENBQUM7SUFFVCxXQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRU0sUUFBUTtRQUNiLE1BQU0sR0FBRyxHQUFpQyxFQUFFLENBQUM7UUFFN0MsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFdEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOytHQXpDVSxtQkFBbUI7bUdBQW5CLG1CQUFtQiw2UENkaEMsNmNBZUEscXJCREhrQixPQUFPLG9GQUFFLGlCQUFpQixtRkFBRSx3QkFBd0I7OzRGQUV6RCxtQkFBbUI7a0JBUC9CLFNBQVM7K0JBQ0UsZ0JBQWdCLGNBR2QsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSx3QkFBd0IsQ0FBQzt3REFJckUsS0FBSztzQkFESixLQUFLO2dCQUlOLElBQUk7c0JBREgsS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLO2dCQUlOLHlCQUF5QjtzQkFEeEIsS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBT04sTUFBTTtzQkFETCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDbGFzcywgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBUYVNpemVzLCBUYVN0YXRlIH0gZnJvbSAnQHRhL3N0eWxlcyc7XG5pbXBvcnQgeyBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1idXR0b24tdG9vbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbC5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgTmdDbGFzcywgRm9udEljb25Db21wb25lbnQsIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblRvb2xDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBzdGF0ZTogVGFTdGF0ZSA9ICdjbGFzc2ljJztcblxuICBASW5wdXQoKVxuICB0eXBlOiAncHJpbWFyeScgPSAncHJpbWFyeSc7XG5cbiAgQElucHV0KClcbiAgc2l6ZTogVGFTaXplcyA9ICdtZCc7XG5cbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgc3RvcFByb3BhZ2F0aW9uQWN0aXZhdGlvbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgaGFuZGxlQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdjbGFzc2ljJykge1xuICAgICAgdGhpcy5hY3Rpb24uZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDbGFzcygpIHtcbiAgICBjb25zdCBjc3M6IHsgW2luZGV4OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcblxuICAgIGNzc1t0aGlzLnN0YXRlXSA9IHRydWU7XG4gICAgY3NzW3RoaXMuc2l6ZV0gPSB0cnVlO1xuICAgIGNzc1t0aGlzLnR5cGVdID0gdHJ1ZTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cbn1cbiIsIjxidXR0b25cclxuICBbZGlzYWJsZWRdPVwidGhpcy5yZWFkb25seVwiXHJcbiAgYXBwU3RvcFByb3BhZ2F0aW9uXHJcbiAgW3N0b3BQcm9wYWdhdGlvbkFjdGl2YXRpb25dPVwidGhpcy5zdG9wUHJvcGFnYXRpb25BY3RpdmF0aW9uXCJcclxuICB0eXBlPVwiYnV0dG9uXCJcclxuICBjbGFzcz1cImJ1dHRvbiBwb2ludGVyXCJcclxuICBbbmdDbGFzc109XCJ0aGlzLmdldENsYXNzKClcIlxyXG4gIChjbGljayk9XCJ0aGlzLmhhbmRsZUNsaWNrKClcIlxyXG4+XHJcbiAgPGRpdiBjbGFzcz1cImZsZXgtcm93IGctc3BhY2Utc20gYWxpZ24tYyBlbnRlclwiPlxyXG4gICAgQGlmICh0aGlzLmljb24pIHtcclxuICAgICAgPHRhLWZvbnQtaWNvbiBbbmFtZV09XCJ0aGlzLmljb25cIiBbdHlwZV09XCJ0aGlzLnNpemVcIj48L3RhLWZvbnQtaWNvbj5cclxuICAgIH1cclxuICA8L2Rpdj5cclxuPC9idXR0b24+XHJcbiJdfQ==