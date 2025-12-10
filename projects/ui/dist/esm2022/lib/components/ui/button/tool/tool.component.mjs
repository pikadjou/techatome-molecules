import { NgClass, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FontIconComponent } from "@ta/icons";
import { StopPropagationDirective } from "@ta/utils";
import * as i0 from "@angular/core";
export class ButtonToolComponent {
    constructor() {
        this.state = "classic";
        this.type = "primary";
        this.size = "md";
        this.icon = null;
        this.stopPropagationActivation = true;
        this.readonly = false;
        /**
         * Event emitted when button is clicked
         */
        this.action = new EventEmitter();
    }
    handleClick() {
        if (this.state === "classic") {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ButtonToolComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ButtonToolComponent, isStandalone: true, selector: "ta-button-tool", inputs: { state: "state", type: "type", size: "size", icon: "icon", stopPropagationActivation: "stopPropagationActivation", readonly: "readonly" }, outputs: { action: "action" }, ngImport: i0, template: "<button\n  [disabled]=\"this.readonly\"\n  appStopPropagation\n  [stopPropagationActivation]=\"this.stopPropagationActivation\"\n  type=\"button\"\n  class=\"button pointer\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"this.handleClick()\"\n>\n  <div class=\"flex-row g-space-sm align-c enter\">\n    @if (this.icon) {\n    <ta-font-icon [name]=\"this.icon\" [type]=\"this.size\"></ta-font-icon>\n    }\n  </div>\n</button>\n", styles: [".button{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);padding:var(--ta-space-sm);align-items:center;display:flex;justify-content:center;margin:auto}.button.disabled,.button.inactive{cursor:not-allowed}.button.primary{color:var(--ta-icon-primary)}.button.primary:hover,.button.primary.selected{color:var(--ta-text-brand-primary)}.button.primary.disabled,.button.primary.inactive{color:var(--ta-neutral-200);border-color:var(--ta-surface-hover-secondary)}.button.primary.unselected{color:var(--ta-text-primary);background-color:var(--ta-surface-tertiary)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ButtonToolComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-button-tool", standalone: true, imports: [NgIf, NgClass, FontIconComponent, StopPropagationDirective], template: "<button\n  [disabled]=\"this.readonly\"\n  appStopPropagation\n  [stopPropagationActivation]=\"this.stopPropagationActivation\"\n  type=\"button\"\n  class=\"button pointer\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"this.handleClick()\"\n>\n  <div class=\"flex-row g-space-sm align-c enter\">\n    @if (this.icon) {\n    <ta-font-icon [name]=\"this.icon\" [type]=\"this.size\"></ta-font-icon>\n    }\n  </div>\n</button>\n", styles: [".button{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);padding:var(--ta-space-sm);align-items:center;display:flex;justify-content:center;margin:auto}.button.disabled,.button.inactive{cursor:not-allowed}.button.primary{color:var(--ta-icon-primary)}.button.primary:hover,.button.primary.selected{color:var(--ta-text-brand-primary)}.button.primary.disabled,.button.primary.inactive{color:var(--ta-neutral-200);border-color:var(--ta-surface-hover-secondary)}.button.primary.unselected{color:var(--ta-text-primary);background-color:var(--ta-surface-tertiary)}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvYnV0dG9uL3Rvb2wvdG9vbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvYnV0dG9uL3Rvb2wvdG9vbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTlDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFTckQsTUFBTSxPQUFPLG1CQUFtQjtJQXlCOUI7UUF2QkEsVUFBSyxHQUFZLFNBQVMsQ0FBQztRQUczQixTQUFJLEdBQWMsU0FBUyxDQUFDO1FBRzVCLFNBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsU0FBSSxHQUFrQixJQUFJLENBQUM7UUFHM0IsOEJBQXlCLEdBQUcsSUFBSSxDQUFDO1FBR2pDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUI7O1dBRUc7UUFFSCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUViLENBQUM7SUFFVCxXQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRU0sUUFBUTtRQUNiLE1BQU0sR0FBRyxHQUFpQyxFQUFFLENBQUM7UUFFN0MsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFdEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOytHQXpDVSxtQkFBbUI7bUdBQW5CLG1CQUFtQiw2UENkaEMsNmFBZUEscXJCREhrQixPQUFPLG9GQUFFLGlCQUFpQixtRkFBRSx3QkFBd0I7OzRGQUV6RCxtQkFBbUI7a0JBUC9CLFNBQVM7K0JBQ0UsZ0JBQWdCLGNBR2QsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSx3QkFBd0IsQ0FBQzt3REFJckUsS0FBSztzQkFESixLQUFLO2dCQUlOLElBQUk7c0JBREgsS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLO2dCQUlOLHlCQUF5QjtzQkFEeEIsS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBT04sTUFBTTtzQkFETCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDbGFzcywgTmdJZiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBUYVNpemVzLCBUYVN0YXRlIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcbmltcG9ydCB7IFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWJ1dHRvbi10b29sXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdG9vbC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdG9vbC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIE5nQ2xhc3MsIEZvbnRJY29uQ29tcG9uZW50LCBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub29sQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgc3RhdGU6IFRhU3RhdGUgPSBcImNsYXNzaWNcIjtcblxuICBASW5wdXQoKVxuICB0eXBlOiBcInByaW1hcnlcIiA9IFwicHJpbWFyeVwiO1xuXG4gIEBJbnB1dCgpXG4gIHNpemU6IFRhU2l6ZXMgPSBcIm1kXCI7XG5cbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgc3RvcFByb3BhZ2F0aW9uQWN0aXZhdGlvbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgaGFuZGxlQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IFwiY2xhc3NpY1wiKSB7XG4gICAgICB0aGlzLmFjdGlvbi5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldENsYXNzKCkge1xuICAgIGNvbnN0IGNzczogeyBbaW5kZXg6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG4gICAgY3NzW3RoaXMuc3RhdGVdID0gdHJ1ZTtcbiAgICBjc3NbdGhpcy5zaXplXSA9IHRydWU7XG4gICAgY3NzW3RoaXMudHlwZV0gPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxufVxuIiwiPGJ1dHRvblxuICBbZGlzYWJsZWRdPVwidGhpcy5yZWFkb25seVwiXG4gIGFwcFN0b3BQcm9wYWdhdGlvblxuICBbc3RvcFByb3BhZ2F0aW9uQWN0aXZhdGlvbl09XCJ0aGlzLnN0b3BQcm9wYWdhdGlvbkFjdGl2YXRpb25cIlxuICB0eXBlPVwiYnV0dG9uXCJcbiAgY2xhc3M9XCJidXR0b24gcG9pbnRlclwiXG4gIFtuZ0NsYXNzXT1cInRoaXMuZ2V0Q2xhc3MoKVwiXG4gIChjbGljayk9XCJ0aGlzLmhhbmRsZUNsaWNrKClcIlxuPlxuICA8ZGl2IGNsYXNzPVwiZmxleC1yb3cgZy1zcGFjZS1zbSBhbGlnbi1jIGVudGVyXCI+XG4gICAgQGlmICh0aGlzLmljb24pIHtcbiAgICA8dGEtZm9udC1pY29uIFtuYW1lXT1cInRoaXMuaWNvblwiIFt0eXBlXT1cInRoaXMuc2l6ZVwiPjwvdGEtZm9udC1pY29uPlxuICAgIH1cbiAgPC9kaXY+XG48L2J1dHRvbj5cbiJdfQ==