import { NgClass } from "@angular/common";
import { Component, EventEmitter, input, Output, inject, effect } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TranslateModule } from "@ngx-translate/core";
import { FontIconComponent } from "@ta/icons";
import { LinkComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import { ENotificationCode } from "../../../enum";
import { TaTranslationNotification } from "../../../translation.service";
import { openErrorModal } from "../../error-box/error-box.component";
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class NotificationInlineComponent extends TaBaseComponent {
    get message() {
        return this.messageInput();
    }
    get isError() {
        return this.code() === ENotificationCode.error;
    }
    get isWarning() {
        return this.code() === ENotificationCode.warning;
    }
    get isInformation() {
        return this.code() === ENotificationCode.information;
    }
    get isSuccess() {
        return this.code() === ENotificationCode.success;
    }
    constructor() {
        super();
        this.messageInput = input("", { alias: "message" });
        this.code = input(ENotificationCode.information);
        this.showClose = input(true);
        this.askClose = new EventEmitter();
        this._matDialog = inject(MatDialog);
        this.showMessage = false;
        this.close = () => {
            this.askClose.emit();
        };
        TaTranslationNotification.getInstance();
        effect(() => {
            this.showMessage = !!this.messageInput();
        });
    }
    getIcon() {
        if (this.isError) {
            return "close-tool";
        }
        if (this.isWarning) {
            return "warning";
        }
        if (this.isSuccess) {
            return "checked";
        }
        return "help";
    }
    getTypeClass() {
        if (this.isError) {
            return "danger";
        }
        else if (this.isWarning) {
            return "warning";
        }
        else if (this.isInformation) {
            return "info";
        }
        else if (this.isSuccess) {
            return "success";
        }
        else {
            return "";
        }
    }
    openErrorBox() {
        openErrorModal(this._matDialog);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationInlineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: NotificationInlineComponent, isStandalone: true, selector: "ta-notification-inline", inputs: { messageInput: { classPropertyName: "messageInput", publicName: "message", isSignal: true, isRequired: false, transformFunction: null }, code: { classPropertyName: "code", publicName: "code", isSignal: true, isRequired: false, transformFunction: null }, showClose: { classPropertyName: "showClose", publicName: "showClose", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { askClose: "askClose" }, usesInheritance: true, ngImport: i0, template: "@if (this.showMessage) {\n<div class=\"notification-container\">\n  <div class=\"text\">\n    <div class=\"label\" [ngClass]=\"this.getTypeClass()\">\n      <ta-font-icon\n        class=\"mr-space-xs\"\n        [name]=\"this.getIcon()\"\n        type=\"md\"\n      ></ta-font-icon>\n      @if (!this.message) { @switch (true) { @case (this.isError) {\n      {{ \"notification.inline.label.error\" | translate }}\n      } @case (this.isWarning) {\n      {{ \"notification.inline.label.warning\" | translate }}\n      } @case (this.isInformation) {\n      {{ \"notification.inline.label.info\" | translate }}\n      } @case (this.isSuccess) {\n      {{ \"notification.inline.label.success\" | translate }}\n      } } } @else {\n      {{ this.message | translate }}\n      }\n    </div>\n  </div>\n  @if (this.showClose()) {\n  <span class=\"close\" (click)=\"this.close()\">\n    <ta-font-icon name=\"close\"></ta-font-icon>\n  </span>\n  }\n</div>\n} @else {\n<ng-content></ng-content>\n} @if (this.isError) {\n<ta-link\n  size=\"sm\"\n  class=\"color-semantic-orange-dark flex-end\"\n  (action)=\"this.openErrorBox()\"\n  >Open</ta-link\n>\n}\n", styles: [".notification-container{position:relative;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.wrapper{padding:var(--ta-space-sm)}.icon{display:flex;align-items:center}.text .label{display:flex;justify-content:flex-start;align-items:flex-start}.text .label.success{color:var(--ta-semantic-token-success)}.text .label.danger{color:var(--ta-semantic-token-alert)}.text .label.warning{color:var(--ta-semantic-token-warning)}.text .label.info{color:var(--ta-semantic-token-link)}.close{position:absolute;top:0;right:0;width:auto;padding:5px;cursor:pointer}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationInlineComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-inline", standalone: true, imports: [FontIconComponent, LinkComponent, NgClass, TranslateModule], template: "@if (this.showMessage) {\n<div class=\"notification-container\">\n  <div class=\"text\">\n    <div class=\"label\" [ngClass]=\"this.getTypeClass()\">\n      <ta-font-icon\n        class=\"mr-space-xs\"\n        [name]=\"this.getIcon()\"\n        type=\"md\"\n      ></ta-font-icon>\n      @if (!this.message) { @switch (true) { @case (this.isError) {\n      {{ \"notification.inline.label.error\" | translate }}\n      } @case (this.isWarning) {\n      {{ \"notification.inline.label.warning\" | translate }}\n      } @case (this.isInformation) {\n      {{ \"notification.inline.label.info\" | translate }}\n      } @case (this.isSuccess) {\n      {{ \"notification.inline.label.success\" | translate }}\n      } } } @else {\n      {{ this.message | translate }}\n      }\n    </div>\n  </div>\n  @if (this.showClose()) {\n  <span class=\"close\" (click)=\"this.close()\">\n    <ta-font-icon name=\"close\"></ta-font-icon>\n  </span>\n  }\n</div>\n} @else {\n<ng-content></ng-content>\n} @if (this.isError) {\n<ta-link\n  size=\"sm\"\n  class=\"color-semantic-orange-dark flex-end\"\n  (action)=\"this.openErrorBox()\"\n  >Open</ta-link\n>\n}\n", styles: [".notification-container{position:relative;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.wrapper{padding:var(--ta-space-sm)}.icon{display:flex;align-items:center}.text .label{display:flex;justify-content:flex-start;align-items:flex-start}.text .label.success{color:var(--ta-semantic-token-success)}.text .label.danger{color:var(--ta-semantic-token-alert)}.text .label.warning{color:var(--ta-semantic-token-warning)}.text .label.info{color:var(--ta-semantic-token-link)}.close{position:absolute;top:0;right:0;width:auto;padding:5px;cursor:pointer}\n"] }]
        }], ctorParameters: () => [], propDecorators: { askClose: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWlubGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvcG9wdXAvaW5saW5lL25vdGlmaWNhdGlvbi1pbmxpbmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3BvcHVwL2lubGluZS9ub3RpZmljYXRpb24taW5saW5lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXJELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7OztBQVNyRSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZUFBZTtJQWM5RCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssaUJBQWlCLENBQUMsS0FBSyxDQUFDO0lBQ2pELENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7SUFDbkQsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssaUJBQWlCLENBQUMsT0FBTyxDQUFDO0lBQ25ELENBQUM7SUFFRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBOUJWLGlCQUFZLEdBQUcsS0FBSyxDQUFTLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRXZELFNBQUksR0FBRyxLQUFLLENBQW9CLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRS9ELGNBQVMsR0FBRyxLQUFLLENBQVUsSUFBSSxDQUFDLENBQUM7UUFHakMsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFDLGVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUEwQnBCLFVBQUssR0FBRyxHQUFHLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUM7UUFSQSx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU1NLE9BQU87UUFDWixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkIsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25CLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ00sWUFBWTtRQUNqQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDMUIsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQzthQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzlCLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMxQixPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztJQUNILENBQUM7SUFFTSxZQUFZO1FBQ2pCLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQzsrR0F0RVUsMkJBQTJCO21HQUEzQiwyQkFBMkIseWhCQ3JCeEMsMG5DQXNDQSxncEJEbkJZLGlCQUFpQixtRkFBRSxhQUFhLGlJQUFFLE9BQU8sbUZBQUUsZUFBZTs7NEZBRXpELDJCQUEyQjtrQkFQdkMsU0FBUzsrQkFDRSx3QkFBd0IsY0FHdEIsSUFBSSxXQUNQLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUM7d0RBVXJFLFFBQVE7c0JBRFAsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgaW5wdXQsIE91dHB1dCwgaW5qZWN0LCBlZmZlY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IExpbmtDb21wb25lbnQgfSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IEVOb3RpZmljYXRpb25Db2RlIH0gZnJvbSBcIi4uLy4uLy4uL2VudW1cIjtcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25Ob3RpZmljYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNsYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgb3BlbkVycm9yTW9kYWwgfSBmcm9tIFwiLi4vLi4vZXJyb3ItYm94L2Vycm9yLWJveC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLW5vdGlmaWNhdGlvbi1pbmxpbmVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9ub3RpZmljYXRpb24taW5saW5lLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9ub3RpZmljYXRpb24taW5saW5lLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9udEljb25Db21wb25lbnQsIExpbmtDb21wb25lbnQsIE5nQ2xhc3MsIFRyYW5zbGF0ZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbklubGluZUNvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCB7XG4gIG1lc3NhZ2VJbnB1dCA9IGlucHV0PHN0cmluZz4oXCJcIiwgeyBhbGlhczogXCJtZXNzYWdlXCIgfSk7XG5cbiAgY29kZSA9IGlucHV0PEVOb3RpZmljYXRpb25Db2RlPihFTm90aWZpY2F0aW9uQ29kZS5pbmZvcm1hdGlvbik7XG5cbiAgc2hvd0Nsb3NlID0gaW5wdXQ8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgQE91dHB1dCgpXG4gIGFza0Nsb3NlOiBFdmVudEVtaXR0ZXI8bnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfbWF0RGlhbG9nID0gaW5qZWN0KE1hdERpYWxvZyk7XG5cbiAgcHVibGljIHNob3dNZXNzYWdlID0gZmFsc2U7XG5cbiAgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlSW5wdXQoKTtcbiAgfVxuICBnZXQgaXNFcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb2RlKCkgPT09IEVOb3RpZmljYXRpb25Db2RlLmVycm9yO1xuICB9XG4gIGdldCBpc1dhcm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29kZSgpID09PSBFTm90aWZpY2F0aW9uQ29kZS53YXJuaW5nO1xuICB9XG4gIGdldCBpc0luZm9ybWF0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvZGUoKSA9PT0gRU5vdGlmaWNhdGlvbkNvZGUuaW5mb3JtYXRpb247XG4gIH1cbiAgZ2V0IGlzU3VjY2VzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb2RlKCkgPT09IEVOb3RpZmljYXRpb25Db2RlLnN1Y2Nlc3M7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIFRhVHJhbnNsYXRpb25Ob3RpZmljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93TWVzc2FnZSA9ICEhdGhpcy5tZXNzYWdlSW5wdXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLmFza0Nsb3NlLmVtaXQoKTtcbiAgfTtcblxuICBwdWJsaWMgZ2V0SWNvbigpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmlzRXJyb3IpIHtcbiAgICAgIHJldHVybiBcImNsb3NlLXRvb2xcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNXYXJuaW5nKSB7XG4gICAgICByZXR1cm4gXCJ3YXJuaW5nXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzU3VjY2Vzcykge1xuICAgICAgcmV0dXJuIFwiY2hlY2tlZFwiO1xuICAgIH1cbiAgICByZXR1cm4gXCJoZWxwXCI7XG4gIH1cbiAgcHVibGljIGdldFR5cGVDbGFzcygpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmlzRXJyb3IpIHtcbiAgICAgIHJldHVybiBcImRhbmdlclwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1dhcm5pbmcpIHtcbiAgICAgIHJldHVybiBcIndhcm5pbmdcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNJbmZvcm1hdGlvbikge1xuICAgICAgcmV0dXJuIFwiaW5mb1wiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1N1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBcInN1Y2Nlc3NcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9wZW5FcnJvckJveCgpIHtcbiAgICBvcGVuRXJyb3JNb2RhbCh0aGlzLl9tYXREaWFsb2cpO1xuICB9XG59XG4iLCJAaWYgKHRoaXMuc2hvd01lc3NhZ2UpIHtcbjxkaXYgY2xhc3M9XCJub3RpZmljYXRpb24tY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgPGRpdiBjbGFzcz1cImxhYmVsXCIgW25nQ2xhc3NdPVwidGhpcy5nZXRUeXBlQ2xhc3MoKVwiPlxuICAgICAgPHRhLWZvbnQtaWNvblxuICAgICAgICBjbGFzcz1cIm1yLXNwYWNlLXhzXCJcbiAgICAgICAgW25hbWVdPVwidGhpcy5nZXRJY29uKClcIlxuICAgICAgICB0eXBlPVwibWRcIlxuICAgICAgPjwvdGEtZm9udC1pY29uPlxuICAgICAgQGlmICghdGhpcy5tZXNzYWdlKSB7IEBzd2l0Y2ggKHRydWUpIHsgQGNhc2UgKHRoaXMuaXNFcnJvcikge1xuICAgICAge3sgXCJub3RpZmljYXRpb24uaW5saW5lLmxhYmVsLmVycm9yXCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgIH0gQGNhc2UgKHRoaXMuaXNXYXJuaW5nKSB7XG4gICAgICB7eyBcIm5vdGlmaWNhdGlvbi5pbmxpbmUubGFiZWwud2FybmluZ1wiIHwgdHJhbnNsYXRlIH19XG4gICAgICB9IEBjYXNlICh0aGlzLmlzSW5mb3JtYXRpb24pIHtcbiAgICAgIHt7IFwibm90aWZpY2F0aW9uLmlubGluZS5sYWJlbC5pbmZvXCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgIH0gQGNhc2UgKHRoaXMuaXNTdWNjZXNzKSB7XG4gICAgICB7eyBcIm5vdGlmaWNhdGlvbi5pbmxpbmUubGFiZWwuc3VjY2Vzc1wiIHwgdHJhbnNsYXRlIH19XG4gICAgICB9IH0gfSBAZWxzZSB7XG4gICAgICB7eyB0aGlzLm1lc3NhZ2UgfCB0cmFuc2xhdGUgfX1cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIEBpZiAodGhpcy5zaG93Q2xvc2UoKSkge1xuICA8c3BhbiBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cInRoaXMuY2xvc2UoKVwiPlxuICAgIDx0YS1mb250LWljb24gbmFtZT1cImNsb3NlXCI+PC90YS1mb250LWljb24+XG4gIDwvc3Bhbj5cbiAgfVxuPC9kaXY+XG59IEBlbHNlIHtcbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbn0gQGlmICh0aGlzLmlzRXJyb3IpIHtcbjx0YS1saW5rXG4gIHNpemU9XCJzbVwiXG4gIGNsYXNzPVwiY29sb3Itc2VtYW50aWMtb3JhbmdlLWRhcmsgZmxleC1lbmRcIlxuICAoYWN0aW9uKT1cInRoaXMub3BlbkVycm9yQm94KClcIlxuICA+T3BlbjwvdGEtbGlua1xuPlxufVxuIl19