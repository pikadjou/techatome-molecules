import { NgClass } from "@angular/common";
import { Component, input, output } from "@angular/core";
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: ShareButtonComponent, isStandalone: true, selector: "ta-share-button", inputs: { state: { classPropertyName: "state", publicName: "state", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, shareTitle: { classPropertyName: "shareTitle", publicName: "shareTitle", isSignal: true, isRequired: false, transformFunction: null }, message: { classPropertyName: "message", publicName: "message", isSignal: true, isRequired: false, transformFunction: null }, url: { classPropertyName: "url", publicName: "url", isSignal: true, isRequired: false, transformFunction: null }, stopPropagationActivation: { classPropertyName: "stopPropagationActivation", publicName: "stopPropagationActivation", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { action: "action" }, ngImport: i0, template: "<button\n  appStopPropagation\n  [stopPropagationActivation]=\"this.stopPropagationActivation()\"\n  type=\"button\"\n  class=\"share-button pointer\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"this.handleClick()\"\n>\n  <div class=\"flex-row g-space-sm align-center justify-center\">\n    <ta-font-icon name=\"share\" [type]=\"this.getIconSize()\"></ta-font-icon>\n    <ng-content></ng-content>\n  </div>\n</button>\n", styles: [".share-button{width:100%;border:none;border-radius:var(--ta-radius-full);padding:var(--ta-space-sm) var(--ta-space-lg);background-color:var(--ta-components-brand-button-share-background);color:var(--ta-components-brand-button-color);font-weight:var(--ta-font-weight-bold);transition:background-color .2s ease,opacity .2s ease,transform .1s ease;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);align-items:center;display:flex;justify-content:center;margin:auto;gap:var(--ta-components-button-gap)}.share-button:hover{background-color:var(--ta-components-brand-button-share-hover)}.share-button:active{transform:scale(.98);background-color:var(--ta-components-brand-button-share-active)}.share-button.small{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);padding:var(--ta-space-xs) var(--ta-space-md)}.share-button.small .share-logo{height:24px}.share-button.medium .share-logo{height:32px}.share-button.large{padding:var(--ta-space-md) var(--ta-space-xl)}.share-button.large .share-logo{height:40px}.share-button.logo{padding:var(--ta-space-sm);width:auto}.share-button.disabled{cursor:not-allowed;background:var(--ta-components-brand-button-disabled-background);color:var(--ta-components-brand-button-disabled-color)}.share-button.disabled:hover{opacity:1;background-color:var(--ta-components-brand-button-disabled-background)}.share-button.inactive{cursor:not-allowed;opacity:.5}.share-button.inactive:hover{opacity:.5;background-color:var(--ta-components-brand-button-share-background)}.share-logo{height:32px;width:auto;flex-shrink:0}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ShareButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-share-button", standalone: true, imports: [NgClass, FontIconComponent, StopPropagationDirective], template: "<button\n  appStopPropagation\n  [stopPropagationActivation]=\"this.stopPropagationActivation()\"\n  type=\"button\"\n  class=\"share-button pointer\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"this.handleClick()\"\n>\n  <div class=\"flex-row g-space-sm align-center justify-center\">\n    <ta-font-icon name=\"share\" [type]=\"this.getIconSize()\"></ta-font-icon>\n    <ng-content></ng-content>\n  </div>\n</button>\n", styles: [".share-button{width:100%;border:none;border-radius:var(--ta-radius-full);padding:var(--ta-space-sm) var(--ta-space-lg);background-color:var(--ta-components-brand-button-share-background);color:var(--ta-components-brand-button-color);font-weight:var(--ta-font-weight-bold);transition:background-color .2s ease,opacity .2s ease,transform .1s ease;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);align-items:center;display:flex;justify-content:center;margin:auto;gap:var(--ta-components-button-gap)}.share-button:hover{background-color:var(--ta-components-brand-button-share-hover)}.share-button:active{transform:scale(.98);background-color:var(--ta-components-brand-button-share-active)}.share-button.small{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);padding:var(--ta-space-xs) var(--ta-space-md)}.share-button.small .share-logo{height:24px}.share-button.medium .share-logo{height:32px}.share-button.large{padding:var(--ta-space-md) var(--ta-space-xl)}.share-button.large .share-logo{height:40px}.share-button.logo{padding:var(--ta-space-sm);width:auto}.share-button.disabled{cursor:not-allowed;background:var(--ta-components-brand-button-disabled-background);color:var(--ta-components-brand-button-disabled-color)}.share-button.disabled:hover{opacity:1;background-color:var(--ta-components-brand-button-disabled-background)}.share-button.inactive{cursor:not-allowed;opacity:.5}.share-button.inactive:hover{opacity:.5;background-color:var(--ta-components-brand-button-share-background)}.share-logo{height:32px;width:auto;flex-shrink:0}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9idXR0b24vc2hhcmUvc2hhcmUtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9idXR0b24vc2hhcmUvc2hhcmUtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTlDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFTckQsTUFBTSxPQUFPLG9CQUFvQjtJQWlDL0I7UUFoQ0E7O1dBRUc7UUFDSCxVQUFLLEdBQUcsS0FBSyxDQUFVLFNBQVMsQ0FBQyxDQUFDO1FBRWxDOztXQUVHO1FBQ0gsU0FBSSxHQUFHLEtBQUssQ0FBK0IsUUFBUSxDQUFDLENBQUM7UUFFckQ7O1dBRUc7UUFDSCxlQUFVLEdBQUcsS0FBSyxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRS9COztXQUVHO1FBQ0gsWUFBTyxHQUFHLEtBQUssQ0FBZ0IsSUFBSSxDQUFDLENBQUM7UUFFckM7O1dBRUc7UUFDSCxRQUFHLEdBQUcsS0FBSyxDQUFnQixJQUFJLENBQUMsQ0FBQztRQUVqQyw4QkFBeUIsR0FBRyxLQUFLLENBQVUsSUFBSSxDQUFDLENBQUM7UUFFakQ7O1dBRUc7UUFDSCxXQUFNLEdBQUcsTUFBTSxFQUFRLENBQUM7UUEyQmhCLGFBQVEsR0FBNEI7WUFDMUMsS0FBSyxFQUFFLElBQUk7WUFDWCxNQUFNLEVBQUUsSUFBSTtZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQztJQTdCYSxDQUFDO0lBRVQsS0FBSyxDQUFDLFdBQVc7UUFDdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDL0IsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXhCLElBQUksU0FBUyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQztnQkFDSCxNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUM7b0JBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUN4QixJQUFJLEVBQUUsR0FBRyxJQUFJLFNBQVM7b0JBQ3RCLEdBQUcsRUFBRSxJQUFJLElBQUksU0FBUztpQkFDdkIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLE1BQU0sQ0FBQztnQkFDUCwwQ0FBMEM7WUFDNUMsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFRTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDNUMsQ0FBQztJQUVNLFFBQVE7UUFDYixNQUFNLEdBQUcsR0FBaUMsRUFBRSxDQUFDO1FBRTdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDekIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUV4QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7K0dBM0VVLG9CQUFvQjttR0FBcEIsb0JBQW9CLDg0QkNkakMsdWFBYUEsNnBERERZLE9BQU8sb0ZBQUUsaUJBQWlCLG1GQUFFLHdCQUF3Qjs7NEZBRW5ELG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSxpQkFBaUIsY0FHZixJQUFJLFdBQ1AsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBpbnB1dCwgb3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBUYVNpemVzLCBUYVN0YXRlIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcbmltcG9ydCB7IFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLXNoYXJlLWJ1dHRvblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3NoYXJlLWJ1dHRvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybDogXCIuL3NoYXJlLWJ1dHRvbi5jb21wb25lbnQuc2Nzc1wiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdDbGFzcywgRm9udEljb25Db21wb25lbnQsIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlQnV0dG9uQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEJ1dHRvbiBzdGF0ZVxuICAgKi9cbiAgc3RhdGUgPSBpbnB1dDxUYVN0YXRlPihcImNsYXNzaWNcIik7XG5cbiAgLyoqXG4gICAqIEJ1dHRvbiBzaXplXG4gICAqL1xuICBzaXplID0gaW5wdXQ8XCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIj4oXCJtZWRpdW1cIik7XG5cbiAgLyoqXG4gICAqIFRpdGxlIGZvciB0aGUgbmF0aXZlIHNoYXJlIGRpYWxvZ1xuICAgKi9cbiAgc2hhcmVUaXRsZSA9IGlucHV0PHN0cmluZz4oXCJcIik7XG5cbiAgLyoqXG4gICAqIFRleHQgbWVzc2FnZSB0byBzaGFyZVxuICAgKi9cbiAgbWVzc2FnZSA9IGlucHV0PHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gc2hhcmVcbiAgICovXG4gIHVybCA9IGlucHV0PHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHN0b3BQcm9wYWdhdGlvbkFjdGl2YXRpb24gPSBpbnB1dDxib29sZWFuPih0cnVlKTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAqL1xuICBhY3Rpb24gPSBvdXRwdXQ8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGFzeW5jIGhhbmRsZUNsaWNrKCkge1xuICAgIGlmICh0aGlzLnN0YXRlKCkgIT09IFwiY2xhc3NpY1wiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbXNnID0gdGhpcy5tZXNzYWdlKCk7XG4gICAgY29uc3QgbGluayA9IHRoaXMudXJsKCk7XG5cbiAgICBpZiAobmF2aWdhdG9yLnNoYXJlICYmIChtc2cgfHwgbGluaykpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG5hdmlnYXRvci5zaGFyZSh7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuc2hhcmVUaXRsZSgpLFxuICAgICAgICAgIHRleHQ6IG1zZyA/PyB1bmRlZmluZWQsXG4gICAgICAgICAgdXJsOiBsaW5rID8/IHVuZGVmaW5lZCxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gVXNlciBjYW5jZWxsZWQgb3Igc2hhcmUgZmFpbGVkIHNpbGVudGx5XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hY3Rpb24uZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2l6ZU1hcDogUmVjb3JkPHN0cmluZywgVGFTaXplcz4gPSB7XG4gICAgc21hbGw6IFwic21cIixcbiAgICBtZWRpdW06IFwibWRcIixcbiAgICBsYXJnZTogXCJsZ1wiLFxuICB9O1xuXG4gIHB1YmxpYyBnZXRJY29uU2l6ZSgpOiBUYVNpemVzIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZU1hcFt0aGlzLnNpemUoKV0gfHwgXCJtZFwiO1xuICB9XG5cbiAgcHVibGljIGdldENsYXNzKCkge1xuICAgIGNvbnN0IGNzczogeyBbaW5kZXg6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuXG4gICAgY3NzW3RoaXMuc3RhdGUoKV0gPSB0cnVlO1xuICAgIGNzc1t0aGlzLnNpemUoKV0gPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxufVxuIiwiPGJ1dHRvblxuICBhcHBTdG9wUHJvcGFnYXRpb25cbiAgW3N0b3BQcm9wYWdhdGlvbkFjdGl2YXRpb25dPVwidGhpcy5zdG9wUHJvcGFnYXRpb25BY3RpdmF0aW9uKClcIlxuICB0eXBlPVwiYnV0dG9uXCJcbiAgY2xhc3M9XCJzaGFyZS1idXR0b24gcG9pbnRlclwiXG4gIFtuZ0NsYXNzXT1cInRoaXMuZ2V0Q2xhc3MoKVwiXG4gIChjbGljayk9XCJ0aGlzLmhhbmRsZUNsaWNrKClcIlxuPlxuICA8ZGl2IGNsYXNzPVwiZmxleC1yb3cgZy1zcGFjZS1zbSBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICA8dGEtZm9udC1pY29uIG5hbWU9XCJzaGFyZVwiIFt0eXBlXT1cInRoaXMuZ2V0SWNvblNpemUoKVwiPjwvdGEtZm9udC1pY29uPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2J1dHRvbj5cbiJdfQ==