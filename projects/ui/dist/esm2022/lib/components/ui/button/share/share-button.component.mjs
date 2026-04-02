import { NgClass } from "@angular/common";
import { Component, EventEmitter, input, Output } from "@angular/core";
import { FontIconComponent } from "@ta/icons";
import { StopPropagationDirective } from "@ta/utils";
import * as i0 from "@angular/core";
export class ShareButtonComponent {
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
         * Title for the native share dialog
         */
        this.shareTitle = input("");
        /**
         * Text message to share
         */
        this.message = input(null);
        /**
         * URL to share
         */
        this.url = input(null);
        this.stopPropagationActivation = input(true);
        /**
         * Event emitted when button is clicked
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
        const msg = this.message();
        const link = this.url();
        if (navigator.share && (msg || link)) {
            try {
                await navigator.share({
                    title: this.shareTitle(),
                    text: msg ?? undefined,
                    url: link ?? undefined,
                });
            }
            catch {
                // User cancelled or share failed silently
            }
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ShareButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ShareButtonComponent, isStandalone: true, selector: "ta-share-button", inputs: { state: { classPropertyName: "state", publicName: "state", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, shareTitle: { classPropertyName: "shareTitle", publicName: "shareTitle", isSignal: true, isRequired: false, transformFunction: null }, message: { classPropertyName: "message", publicName: "message", isSignal: true, isRequired: false, transformFunction: null }, url: { classPropertyName: "url", publicName: "url", isSignal: true, isRequired: false, transformFunction: null }, stopPropagationActivation: { classPropertyName: "stopPropagationActivation", publicName: "stopPropagationActivation", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { action: "action" }, ngImport: i0, template: "<button\n  appStopPropagation\n  [stopPropagationActivation]=\"this.stopPropagationActivation()\"\n  type=\"button\"\n  class=\"share-button pointer\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"handleClick()\"\n>\n  <div class=\"flex-row g-space-sm align-center justify-center\">\n    <ta-font-icon name=\"share\" [type]=\"this.getIconSize()\"></ta-font-icon>\n    <ng-content></ng-content>\n  </div>\n</button>\n", styles: [".share-button{width:100%;border:none;border-radius:var(--ta-radius-full);padding:var(--ta-space-sm) var(--ta-space-lg);background-color:#6c757d;color:#fff;font-weight:600;transition:background-color .2s ease,transform .1s ease;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);align-items:center;display:flex;justify-content:center;margin:auto;gap:var(--ta-components-button-gap)}.share-button:hover{background-color:#5a6268}.share-button:active{background-color:#4e555b;transform:scale(.98)}.share-button.small{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);padding:var(--ta-space-xs) var(--ta-space-md)}.share-button.large{padding:var(--ta-space-md) var(--ta-space-xl)}.share-button.disabled{cursor:not-allowed;background-color:#f0f0f0;color:#a0a0a0}.share-button.disabled:hover{background-color:#f0f0f0}.share-button.inactive{cursor:not-allowed;opacity:.5}.share-button.inactive:hover{background-color:#6c757d}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ShareButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-share-button", standalone: true, imports: [NgClass, FontIconComponent, StopPropagationDirective], template: "<button\n  appStopPropagation\n  [stopPropagationActivation]=\"this.stopPropagationActivation()\"\n  type=\"button\"\n  class=\"share-button pointer\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"handleClick()\"\n>\n  <div class=\"flex-row g-space-sm align-center justify-center\">\n    <ta-font-icon name=\"share\" [type]=\"this.getIconSize()\"></ta-font-icon>\n    <ng-content></ng-content>\n  </div>\n</button>\n", styles: [".share-button{width:100%;border:none;border-radius:var(--ta-radius-full);padding:var(--ta-space-sm) var(--ta-space-lg);background-color:#6c757d;color:#fff;font-weight:600;transition:background-color .2s ease,transform .1s ease;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);align-items:center;display:flex;justify-content:center;margin:auto;gap:var(--ta-components-button-gap)}.share-button:hover{background-color:#5a6268}.share-button:active{background-color:#4e555b;transform:scale(.98)}.share-button.small{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);padding:var(--ta-space-xs) var(--ta-space-md)}.share-button.large{padding:var(--ta-space-md) var(--ta-space-xl)}.share-button.disabled{cursor:not-allowed;background-color:#f0f0f0;color:#a0a0a0}.share-button.disabled:hover{background-color:#f0f0f0}.share-button.inactive{cursor:not-allowed;opacity:.5}.share-button.inactive:hover{background-color:#6c757d}\n"] }]
        }], ctorParameters: () => [], propDecorators: { action: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9idXR0b24vc2hhcmUvc2hhcmUtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9idXR0b24vc2hhcmUvc2hhcmUtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU5QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBU3JELE1BQU0sT0FBTyxvQkFBb0I7SUFrQy9CO1FBakNBOztXQUVHO1FBQ0gsVUFBSyxHQUFHLEtBQUssQ0FBVSxTQUFTLENBQUMsQ0FBQztRQUVsQzs7V0FFRztRQUNILFNBQUksR0FBRyxLQUFLLENBQStCLFFBQVEsQ0FBQyxDQUFDO1FBRXJEOztXQUVHO1FBQ0gsZUFBVSxHQUFHLEtBQUssQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUUvQjs7V0FFRztRQUNILFlBQU8sR0FBRyxLQUFLLENBQWdCLElBQUksQ0FBQyxDQUFDO1FBRXJDOztXQUVHO1FBQ0gsUUFBRyxHQUFHLEtBQUssQ0FBZ0IsSUFBSSxDQUFDLENBQUM7UUFFakMsOEJBQXlCLEdBQUcsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRWpEOztXQUVHO1FBRUgsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUEyQnBCLGFBQVEsR0FBNEI7WUFDMUMsS0FBSyxFQUFFLElBQUk7WUFDWCxNQUFNLEVBQUUsSUFBSTtZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQztJQTdCYSxDQUFDO0lBRVQsS0FBSyxDQUFDLFdBQVc7UUFDdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDL0IsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXhCLElBQUksU0FBUyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQztnQkFDSCxNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUM7b0JBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUN4QixJQUFJLEVBQUUsR0FBRyxJQUFJLFNBQVM7b0JBQ3RCLEdBQUcsRUFBRSxJQUFJLElBQUksU0FBUztpQkFDdkIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLE1BQU0sQ0FBQztnQkFDUCwwQ0FBMEM7WUFDNUMsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFRTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDNUMsQ0FBQztJQUVNLFFBQVE7UUFDYixNQUFNLEdBQUcsR0FBaUMsRUFBRSxDQUFDO1FBRTdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDekIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUV4QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7K0dBNUVVLG9CQUFvQjttR0FBcEIsb0JBQW9CLDg0QkNkakMsa2FBYUEsNGlDRERZLE9BQU8sb0ZBQUUsaUJBQWlCLG1GQUFFLHdCQUF3Qjs7NEZBRW5ELG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSxpQkFBaUIsY0FHZixJQUFJLFdBQ1AsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLENBQUM7d0RBa0MvRCxNQUFNO3NCQURMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGlucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IFRhU2l6ZXMsIFRhU3RhdGUgfSBmcm9tIFwiQHRhL3N0eWxlc1wiO1xuaW1wb3J0IHsgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtc2hhcmUtYnV0dG9uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc2hhcmUtYnV0dG9uLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zaGFyZS1idXR0b24uY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBGb250SWNvbkNvbXBvbmVudCwgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVCdXR0b25Db21wb25lbnQge1xuICAvKipcbiAgICogQnV0dG9uIHN0YXRlXG4gICAqL1xuICBzdGF0ZSA9IGlucHV0PFRhU3RhdGU+KFwiY2xhc3NpY1wiKTtcblxuICAvKipcbiAgICogQnV0dG9uIHNpemVcbiAgICovXG4gIHNpemUgPSBpbnB1dDxcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiPihcIm1lZGl1bVwiKTtcblxuICAvKipcbiAgICogVGl0bGUgZm9yIHRoZSBuYXRpdmUgc2hhcmUgZGlhbG9nXG4gICAqL1xuICBzaGFyZVRpdGxlID0gaW5wdXQ8c3RyaW5nPihcIlwiKTtcblxuICAvKipcbiAgICogVGV4dCBtZXNzYWdlIHRvIHNoYXJlXG4gICAqL1xuICBtZXNzYWdlID0gaW5wdXQ8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgLyoqXG4gICAqIFVSTCB0byBzaGFyZVxuICAgKi9cbiAgdXJsID0gaW5wdXQ8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgc3RvcFByb3BhZ2F0aW9uQWN0aXZhdGlvbiA9IGlucHV0PGJvb2xlYW4+KHRydWUpO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYnV0dG9uIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBhc3luYyBoYW5kbGVDbGljaygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSgpICE9PSBcImNsYXNzaWNcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1zZyA9IHRoaXMubWVzc2FnZSgpO1xuICAgIGNvbnN0IGxpbmsgPSB0aGlzLnVybCgpO1xuXG4gICAgaWYgKG5hdmlnYXRvci5zaGFyZSAmJiAobXNnIHx8IGxpbmspKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBuYXZpZ2F0b3Iuc2hhcmUoe1xuICAgICAgICAgIHRpdGxlOiB0aGlzLnNoYXJlVGl0bGUoKSxcbiAgICAgICAgICB0ZXh0OiBtc2cgPz8gdW5kZWZpbmVkLFxuICAgICAgICAgIHVybDogbGluayA/PyB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIFVzZXIgY2FuY2VsbGVkIG9yIHNoYXJlIGZhaWxlZCBzaWxlbnRseVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWN0aW9uLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NpemVNYXA6IFJlY29yZDxzdHJpbmcsIFRhU2l6ZXM+ID0ge1xuICAgIHNtYWxsOiBcInNtXCIsXG4gICAgbWVkaXVtOiBcIm1kXCIsXG4gICAgbGFyZ2U6IFwibGdcIixcbiAgfTtcblxuICBwdWJsaWMgZ2V0SWNvblNpemUoKTogVGFTaXplcyB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemVNYXBbdGhpcy5zaXplKCldIHx8IFwibWRcIjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDbGFzcygpIHtcbiAgICBjb25zdCBjc3M6IHsgW2luZGV4OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcblxuICAgIGNzc1t0aGlzLnN0YXRlKCldID0gdHJ1ZTtcbiAgICBjc3NbdGhpcy5zaXplKCldID0gdHJ1ZTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cbn1cbiIsIjxidXR0b25cbiAgYXBwU3RvcFByb3BhZ2F0aW9uXG4gIFtzdG9wUHJvcGFnYXRpb25BY3RpdmF0aW9uXT1cInRoaXMuc3RvcFByb3BhZ2F0aW9uQWN0aXZhdGlvbigpXCJcbiAgdHlwZT1cImJ1dHRvblwiXG4gIGNsYXNzPVwic2hhcmUtYnV0dG9uIHBvaW50ZXJcIlxuICBbbmdDbGFzc109XCJ0aGlzLmdldENsYXNzKClcIlxuICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soKVwiXG4+XG4gIDxkaXYgY2xhc3M9XCJmbGV4LXJvdyBnLXNwYWNlLXNtIGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgIDx0YS1mb250LWljb24gbmFtZT1cInNoYXJlXCIgW3R5cGVdPVwidGhpcy5nZXRJY29uU2l6ZSgpXCI+PC90YS1mb250LWljb24+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvYnV0dG9uPlxuIl19