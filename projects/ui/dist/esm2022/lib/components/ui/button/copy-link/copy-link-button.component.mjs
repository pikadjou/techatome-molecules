import { NgClass } from "@angular/common";
import { Component, input, output } from "@angular/core";
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
        this.action = output();
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: CopyLinkButtonComponent, isStandalone: true, selector: "ta-copy-link-button", inputs: { state: { classPropertyName: "state", publicName: "state", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, stopPropagationActivation: { classPropertyName: "stopPropagationActivation", publicName: "stopPropagationActivation", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { action: "action" }, ngImport: i0, template: "<button\n  appStopPropagation\n  [stopPropagationActivation]=\"this.stopPropagationActivation()\"\n  type=\"button\"\n  class=\"copy-link-button pointer\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"this.handleClick()\"\n>\n  <div class=\"flex-row g-space-sm align-center justify-center\">\n    <ta-font-icon name=\"content_copy\" [type]=\"this.getIconSize()\"></ta-font-icon>\n    <ng-content></ng-content>\n  </div>\n</button>\n", styles: [".copy-link-button{width:100%;border:1px solid var(--ta-border-primary);border-radius:var(--ta-radius-full);padding:var(--ta-space-sm) var(--ta-space-lg);background-color:transparent;color:var(--ta-text-primary);font-weight:var(--ta-font-weight-bold);transition:background-color .2s ease,transform .1s ease;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);align-items:center;display:flex;justify-content:center;margin:auto;gap:var(--ta-components-button-gap)}.copy-link-button:hover{background-color:var(--ta-surface-hover)}.copy-link-button:active{transform:scale(.98)}.copy-link-button.small{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);padding:var(--ta-space-xs) var(--ta-space-md)}.copy-link-button.large{padding:var(--ta-space-md) var(--ta-space-xl)}.copy-link-button.disabled{cursor:not-allowed;color:var(--ta-components-brand-button-disabled-color);border-color:var(--ta-components-brand-button-disabled-color)}.copy-link-button.disabled:hover{background-color:transparent}.copy-link-button.inactive{cursor:not-allowed;opacity:.5}.copy-link-button.inactive:hover{background-color:transparent}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CopyLinkButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-copy-link-button", standalone: true, imports: [NgClass, FontIconComponent, StopPropagationDirective], template: "<button\n  appStopPropagation\n  [stopPropagationActivation]=\"this.stopPropagationActivation()\"\n  type=\"button\"\n  class=\"copy-link-button pointer\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"this.handleClick()\"\n>\n  <div class=\"flex-row g-space-sm align-center justify-center\">\n    <ta-font-icon name=\"content_copy\" [type]=\"this.getIconSize()\"></ta-font-icon>\n    <ng-content></ng-content>\n  </div>\n</button>\n", styles: [".copy-link-button{width:100%;border:1px solid var(--ta-border-primary);border-radius:var(--ta-radius-full);padding:var(--ta-space-sm) var(--ta-space-lg);background-color:transparent;color:var(--ta-text-primary);font-weight:var(--ta-font-weight-bold);transition:background-color .2s ease,transform .1s ease;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);align-items:center;display:flex;justify-content:center;margin:auto;gap:var(--ta-components-button-gap)}.copy-link-button:hover{background-color:var(--ta-surface-hover)}.copy-link-button:active{transform:scale(.98)}.copy-link-button.small{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);padding:var(--ta-space-xs) var(--ta-space-md)}.copy-link-button.large{padding:var(--ta-space-md) var(--ta-space-xl)}.copy-link-button.disabled{cursor:not-allowed;color:var(--ta-components-brand-button-disabled-color);border-color:var(--ta-components-brand-button-disabled-color)}.copy-link-button.disabled:hover{background-color:transparent}.copy-link-button.inactive{cursor:not-allowed;opacity:.5}.copy-link-button.inactive:hover{background-color:transparent}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1saW5rLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvYnV0dG9uL2NvcHktbGluay9jb3B5LWxpbmstYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9idXR0b24vY29weS1saW5rL2NvcHktbGluay1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFOUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQVNyRCxNQUFNLE9BQU8sdUJBQXVCO0lBdUJsQztRQXRCQTs7V0FFRztRQUNILFVBQUssR0FBRyxLQUFLLENBQVUsU0FBUyxDQUFDLENBQUM7UUFFbEM7O1dBRUc7UUFDSCxTQUFJLEdBQUcsS0FBSyxDQUErQixRQUFRLENBQUMsQ0FBQztRQUVyRDs7V0FFRztRQUNILFVBQUssR0FBRyxLQUFLLENBQWdCLElBQUksQ0FBQyxDQUFDO1FBRW5DLDhCQUF5QixHQUFHLEtBQUssQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUVqRDs7V0FFRztRQUNILFdBQU0sR0FBRyxNQUFNLEVBQVEsQ0FBQztRQWlCaEIsYUFBUSxHQUE0QjtZQUMxQyxLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxJQUFJO1lBQ1osS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDO0lBbkJhLENBQUM7SUFFVCxLQUFLLENBQUMsV0FBVztRQUN0QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUMvQixPQUFPO1FBQ1QsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1QsTUFBTSxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBUU0sV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzVDLENBQUM7SUFFTSxRQUFRO1FBQ2IsTUFBTSxHQUFHLEdBQWlDLEVBQUUsQ0FBQztRQUU3QyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFeEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOytHQXZEVSx1QkFBdUI7bUdBQXZCLHVCQUF1QixtcEJDZHBDLGtiQWFBLHd1Q0REWSxPQUFPLG9GQUFFLGlCQUFpQixtRkFBRSx3QkFBd0I7OzRGQUVuRCx1QkFBdUI7a0JBUG5DLFNBQVM7K0JBQ0UscUJBQXFCLGNBR25CLElBQUksV0FDUCxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIGlucHV0LCBvdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IFRhU2l6ZXMsIFRhU3RhdGUgfSBmcm9tIFwiQHRhL3N0eWxlc1wiO1xuaW1wb3J0IHsgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtY29weS1saW5rLWJ1dHRvblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NvcHktbGluay1idXR0b24uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmw6IFwiLi9jb3B5LWxpbmstYnV0dG9uLmNvbXBvbmVudC5zY3NzXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBGb250SWNvbkNvbXBvbmVudCwgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29weUxpbmtCdXR0b25Db21wb25lbnQge1xuICAvKipcbiAgICogQnV0dG9uIHN0YXRlXG4gICAqL1xuICBzdGF0ZSA9IGlucHV0PFRhU3RhdGU+KFwiY2xhc3NpY1wiKTtcblxuICAvKipcbiAgICogQnV0dG9uIHNpemVcbiAgICovXG4gIHNpemUgPSBpbnB1dDxcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiPihcIm1lZGl1bVwiKTtcblxuICAvKipcbiAgICogVGV4dCB0byBjb3B5IHRvIGNsaXBib2FyZFxuICAgKi9cbiAgdmFsdWUgPSBpbnB1dDxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBzdG9wUHJvcGFnYXRpb25BY3RpdmF0aW9uID0gaW5wdXQ8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBidXR0b24gaXMgY2xpY2tlZCAoYWZ0ZXIgY29weSlcbiAgICovXG4gIGFjdGlvbiA9IG91dHB1dDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgYXN5bmMgaGFuZGxlQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUoKSAhPT0gXCJjbGFzc2ljXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0ID0gdGhpcy52YWx1ZSgpO1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KTtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGlvbi5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIF9zaXplTWFwOiBSZWNvcmQ8c3RyaW5nLCBUYVNpemVzPiA9IHtcbiAgICBzbWFsbDogXCJzbVwiLFxuICAgIG1lZGl1bTogXCJtZFwiLFxuICAgIGxhcmdlOiBcImxnXCIsXG4gIH07XG5cbiAgcHVibGljIGdldEljb25TaXplKCk6IFRhU2l6ZXMge1xuICAgIHJldHVybiB0aGlzLl9zaXplTWFwW3RoaXMuc2l6ZSgpXSB8fCBcIm1kXCI7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgY3NzOiB7IFtpbmRleDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG5cbiAgICBjc3NbdGhpcy5zdGF0ZSgpXSA9IHRydWU7XG4gICAgY3NzW3RoaXMuc2l6ZSgpXSA9IHRydWU7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG59XG4iLCI8YnV0dG9uXG4gIGFwcFN0b3BQcm9wYWdhdGlvblxuICBbc3RvcFByb3BhZ2F0aW9uQWN0aXZhdGlvbl09XCJ0aGlzLnN0b3BQcm9wYWdhdGlvbkFjdGl2YXRpb24oKVwiXG4gIHR5cGU9XCJidXR0b25cIlxuICBjbGFzcz1cImNvcHktbGluay1idXR0b24gcG9pbnRlclwiXG4gIFtuZ0NsYXNzXT1cInRoaXMuZ2V0Q2xhc3MoKVwiXG4gIChjbGljayk9XCJ0aGlzLmhhbmRsZUNsaWNrKClcIlxuPlxuICA8ZGl2IGNsYXNzPVwiZmxleC1yb3cgZy1zcGFjZS1zbSBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICA8dGEtZm9udC1pY29uIG5hbWU9XCJjb250ZW50X2NvcHlcIiBbdHlwZV09XCJ0aGlzLmdldEljb25TaXplKClcIj48L3RhLWZvbnQtaWNvbj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9idXR0b24+XG4iXX0=