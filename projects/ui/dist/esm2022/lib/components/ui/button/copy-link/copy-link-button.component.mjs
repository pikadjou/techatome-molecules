import { NgClass } from "@angular/common";
import { Component, EventEmitter, input, Output } from "@angular/core";
import { FontIconComponent } from "@ta/icons";
import { StopPropagationDirective } from "@ta/utils";
import * as i0 from "@angular/core";
export class CopyLinkButtonComponent {
    constructor() {
        /**
         * Button state
         */
        this.state = input("classic");
        /**
         * Button size
         */
        this.size = input("medium");
        /**
         * Text to copy to clipboard
         */
        this.value = input(null);
        this.stopPropagationActivation = input(true);
        /**
         * Event emitted when button is clicked (after copy)
         */
        this.action = new EventEmitter();
        this._sizeMap = {
            small: "sm",
            medium: "md",
            large: "lg",
        };
    }
    async handleClick() {
        if (this.state() !== "classic") {
            return;
        }
        const text = this.value();
        if (text) {
            await navigator.clipboard.writeText(text);
        }
        this.action.emit();
    }
    getIconSize() {
        return this._sizeMap[this.size()] || "md";
    }
    getClass() {
        const css = {};
        css[this.state()] = true;
        css[this.size()] = true;
        return css;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CopyLinkButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: CopyLinkButtonComponent, isStandalone: true, selector: "ta-copy-link-button", inputs: { state: { classPropertyName: "state", publicName: "state", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, stopPropagationActivation: { classPropertyName: "stopPropagationActivation", publicName: "stopPropagationActivation", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { action: "action" }, ngImport: i0, template: "<button\n  appStopPropagation\n  [stopPropagationActivation]=\"this.stopPropagationActivation()\"\n  type=\"button\"\n  class=\"copy-link-button pointer\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"handleClick()\"\n>\n  <div class=\"flex-row g-space-sm align-center justify-center\">\n    <ta-font-icon name=\"content_copy\" [type]=\"this.getIconSize()\"></ta-font-icon>\n    <ng-content></ng-content>\n  </div>\n</button>\n", styles: [".copy-link-button{width:100%;border:1px solid var(--ta-border-primary);border-radius:var(--ta-radius-full);padding:var(--ta-space-sm) var(--ta-space-lg);background-color:transparent;color:var(--ta-text-primary);font-weight:600;transition:background-color .2s ease,transform .1s ease;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);align-items:center;display:flex;justify-content:center;margin:auto;gap:var(--ta-components-button-gap)}.copy-link-button:hover{background-color:var(--ta-surface-hover)}.copy-link-button:active{transform:scale(.98)}.copy-link-button.small{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);padding:var(--ta-space-xs) var(--ta-space-md)}.copy-link-button.large{padding:var(--ta-space-md) var(--ta-space-xl)}.copy-link-button.disabled{cursor:not-allowed;color:#a0a0a0;border-color:#a0a0a0}.copy-link-button.disabled:hover{background-color:transparent}.copy-link-button.inactive{cursor:not-allowed;opacity:.5}.copy-link-button.inactive:hover{background-color:transparent}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CopyLinkButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-copy-link-button", standalone: true, imports: [NgClass, FontIconComponent, StopPropagationDirective], template: "<button\n  appStopPropagation\n  [stopPropagationActivation]=\"this.stopPropagationActivation()\"\n  type=\"button\"\n  class=\"copy-link-button pointer\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"handleClick()\"\n>\n  <div class=\"flex-row g-space-sm align-center justify-center\">\n    <ta-font-icon name=\"content_copy\" [type]=\"this.getIconSize()\"></ta-font-icon>\n    <ng-content></ng-content>\n  </div>\n</button>\n", styles: [".copy-link-button{width:100%;border:1px solid var(--ta-border-primary);border-radius:var(--ta-radius-full);padding:var(--ta-space-sm) var(--ta-space-lg);background-color:transparent;color:var(--ta-text-primary);font-weight:600;transition:background-color .2s ease,transform .1s ease;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);align-items:center;display:flex;justify-content:center;margin:auto;gap:var(--ta-components-button-gap)}.copy-link-button:hover{background-color:var(--ta-surface-hover)}.copy-link-button:active{transform:scale(.98)}.copy-link-button.small{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);padding:var(--ta-space-xs) var(--ta-space-md)}.copy-link-button.large{padding:var(--ta-space-md) var(--ta-space-xl)}.copy-link-button.disabled{cursor:not-allowed;color:#a0a0a0;border-color:#a0a0a0}.copy-link-button.disabled:hover{background-color:transparent}.copy-link-button.inactive{cursor:not-allowed;opacity:.5}.copy-link-button.inactive:hover{background-color:transparent}\n"] }]
        }], ctorParameters: () => [], propDecorators: { action: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1saW5rLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvYnV0dG9uL2NvcHktbGluay9jb3B5LWxpbmstYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9idXR0b24vY29weS1saW5rL2NvcHktbGluay1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTlDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFTckQsTUFBTSxPQUFPLHVCQUF1QjtJQXdCbEM7UUF2QkE7O1dBRUc7UUFDSCxVQUFLLEdBQUcsS0FBSyxDQUFVLFNBQVMsQ0FBQyxDQUFDO1FBRWxDOztXQUVHO1FBQ0gsU0FBSSxHQUFHLEtBQUssQ0FBK0IsUUFBUSxDQUFDLENBQUM7UUFFckQ7O1dBRUc7UUFDSCxVQUFLLEdBQUcsS0FBSyxDQUFnQixJQUFJLENBQUMsQ0FBQztRQUVuQyw4QkFBeUIsR0FBRyxLQUFLLENBQVUsSUFBSSxDQUFDLENBQUM7UUFFakQ7O1dBRUc7UUFFSCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWlCcEIsYUFBUSxHQUE0QjtZQUMxQyxLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDO0lBbkJhLENBQUM7SUFFVCxLQUFLLENBQUMsV0FBVztRQUN0QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUMvQixPQUFPO1FBQ1QsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1QsTUFBTSxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBUU0sV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzVDLENBQUM7SUFFTSxRQUFRO1FBQ2IsTUFBTSxHQUFHLEdBQWlDLEVBQUUsQ0FBQztRQUU3QyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFeEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOytHQXhEVSx1QkFBdUI7bUdBQXZCLHVCQUF1QixtcEJDZHBDLDZhQWFBLCtuQ0REWSxPQUFPLG9GQUFFLGlCQUFpQixtRkFBRSx3QkFBd0I7OzRGQUVuRCx1QkFBdUI7a0JBUG5DLFNBQVM7K0JBQ0UscUJBQXFCLGNBR25CLElBQUksV0FDUCxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSx3QkFBd0IsQ0FBQzt3REF3Qi9ELE1BQU07c0JBREwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgaW5wdXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgVGFTaXplcywgVGFTdGF0ZSB9IGZyb20gXCJAdGEvc3R5bGVzXCI7XG5pbXBvcnQgeyBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1jb3B5LWxpbmstYnV0dG9uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY29weS1saW5rLWJ1dHRvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY29weS1saW5rLWJ1dHRvbi5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3MsIEZvbnRJY29uQ29tcG9uZW50LCBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3B5TGlua0J1dHRvbkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBCdXR0b24gc3RhdGVcbiAgICovXG4gIHN0YXRlID0gaW5wdXQ8VGFTdGF0ZT4oXCJjbGFzc2ljXCIpO1xuXG4gIC8qKlxuICAgKiBCdXR0b24gc2l6ZVxuICAgKi9cbiAgc2l6ZSA9IGlucHV0PFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCI+KFwibWVkaXVtXCIpO1xuXG4gIC8qKlxuICAgKiBUZXh0IHRvIGNvcHkgdG8gY2xpcGJvYXJkXG4gICAqL1xuICB2YWx1ZSA9IGlucHV0PHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHN0b3BQcm9wYWdhdGlvbkFjdGl2YXRpb24gPSBpbnB1dDxib29sZWFuPih0cnVlKTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkIChhZnRlciBjb3B5KVxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGFzeW5jIGhhbmRsZUNsaWNrKCkge1xuICAgIGlmICh0aGlzLnN0YXRlKCkgIT09IFwiY2xhc3NpY1wiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9IHRoaXMudmFsdWUoKTtcbiAgICBpZiAodGV4dCkge1xuICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gICAgfVxuXG4gICAgdGhpcy5hY3Rpb24uZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2l6ZU1hcDogUmVjb3JkPHN0cmluZywgVGFTaXplcz4gPSB7XG4gICAgc21hbGw6IFwic21cIixcbiAgICBtZWRpdW06IFwibWRcIixcbiAgICBsYXJnZTogXCJsZ1wiLFxuICB9O1xuXG4gIHB1YmxpYyBnZXRJY29uU2l6ZSgpOiBUYVNpemVzIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZU1hcFt0aGlzLnNpemUoKV0gfHwgXCJtZFwiO1xuICB9XG5cbiAgcHVibGljIGdldENsYXNzKCkge1xuICAgIGNvbnN0IGNzczogeyBbaW5kZXg6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG4gICAgY3NzW3RoaXMuc3RhdGUoKV0gPSB0cnVlO1xuICAgIGNzc1t0aGlzLnNpemUoKV0gPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxufVxuIiwiPGJ1dHRvblxuICBhcHBTdG9wUHJvcGFnYXRpb25cbiAgW3N0b3BQcm9wYWdhdGlvbkFjdGl2YXRpb25dPVwidGhpcy5zdG9wUHJvcGFnYXRpb25BY3RpdmF0aW9uKClcIlxuICB0eXBlPVwiYnV0dG9uXCJcbiAgY2xhc3M9XCJjb3B5LWxpbmstYnV0dG9uIHBvaW50ZXJcIlxuICBbbmdDbGFzc109XCJ0aGlzLmdldENsYXNzKClcIlxuICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soKVwiXG4+XG4gIDxkaXYgY2xhc3M9XCJmbGV4LXJvdyBnLXNwYWNlLXNtIGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgIDx0YS1mb250LWljb24gbmFtZT1cImNvbnRlbnRfY29weVwiIFt0eXBlXT1cInRoaXMuZ2V0SWNvblNpemUoKVwiPjwvdGEtZm9udC1pY29uPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2J1dHRvbj5cbiJdfQ==