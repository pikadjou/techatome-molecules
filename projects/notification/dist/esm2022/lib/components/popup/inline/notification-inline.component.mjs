import { NgClass } from "@angular/common";
import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
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
    set message(value) {
        this._message = value;
        this.showMessage = !!value;
    }
    get message() {
        return this._message;
    }
    get isError() {
        return this.code === ENotificationCode.error;
    }
    get isWarning() {
        return this.code === ENotificationCode.warning;
    }
    get isInformation() {
        return this.code === ENotificationCode.information;
    }
    get isSuccess() {
        return this.code === ENotificationCode.success;
    }
    constructor() {
        super();
        this.code = ENotificationCode.information;
        this.showClose = true;
        this.askClose = new EventEmitter();
        this._matDialog = inject(MatDialog);
        this.showMessage = false;
        this.close = () => {
            this.askClose.emit();
        };
        TaTranslationNotification.getInstance();
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: NotificationInlineComponent, isStandalone: true, selector: "ta-notification-inline", inputs: { message: "message", code: "code", showClose: "showClose" }, outputs: { askClose: "askClose" }, usesInheritance: true, ngImport: i0, template: "@if (this.showMessage) {\n<div class=\"notification-container\">\n  <div class=\"text\">\n    <div class=\"label\" [ngClass]=\"this.getTypeClass()\">\n      <ta-font-icon\n        class=\"mr-space-xs\"\n        [name]=\"this.getIcon()\"\n        type=\"md\"\n      ></ta-font-icon>\n      @if (!this.message) { @switch (true) { @case (this.isError) {\n      {{ \"notification.inline.label.error\" | translate }}\n      } @case (this.isWarning) {\n      {{ \"notification.inline.label.warning\" | translate }}\n      } @case (this.isInformation) {\n      {{ \"notification.inline.label.info\" | translate }}\n      } @case (this.isSuccess) {\n      {{ \"notification.inline.label.success\" | translate }}\n      } } } @else {\n      {{ this.message | translate }}\n      }\n    </div>\n  </div>\n  @if (this.showClose) {\n  <span class=\"close\" (click)=\"this.close()\">\n    <ta-font-icon name=\"close\"></ta-font-icon>\n  </span>\n  }\n</div>\n} @else {\n<ng-content></ng-content>\n} @if (this.isError) {\n<ta-link\n  size=\"sm\"\n  class=\"color-semantic-orange-dark flex-end\"\n  (action)=\"this.openErrorBox()\"\n  >Open</ta-link\n>\n}\n", styles: [".notification-container{position:relative;font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.wrapper{padding:var(--ta-space-sm)}.icon{display:flex;align-items:center}.text .label{display:flex;justify-content:flex-start;align-items:flex-start}.text .label.success{color:var(--ta-semantic-token-success)}.text .label.danger{color:var(--ta-semantic-token-alert)}.text .label.warning{color:var(--ta-semantic-token-warning)}.text .label.info{color:var(--ta-semantic-token-link)}.close{position:absolute;top:0;right:0;width:auto;padding:5px;cursor:pointer}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationInlineComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-inline", standalone: true, imports: [FontIconComponent, LinkComponent, NgClass, TranslateModule], template: "@if (this.showMessage) {\n<div class=\"notification-container\">\n  <div class=\"text\">\n    <div class=\"label\" [ngClass]=\"this.getTypeClass()\">\n      <ta-font-icon\n        class=\"mr-space-xs\"\n        [name]=\"this.getIcon()\"\n        type=\"md\"\n      ></ta-font-icon>\n      @if (!this.message) { @switch (true) { @case (this.isError) {\n      {{ \"notification.inline.label.error\" | translate }}\n      } @case (this.isWarning) {\n      {{ \"notification.inline.label.warning\" | translate }}\n      } @case (this.isInformation) {\n      {{ \"notification.inline.label.info\" | translate }}\n      } @case (this.isSuccess) {\n      {{ \"notification.inline.label.success\" | translate }}\n      } } } @else {\n      {{ this.message | translate }}\n      }\n    </div>\n  </div>\n  @if (this.showClose) {\n  <span class=\"close\" (click)=\"this.close()\">\n    <ta-font-icon name=\"close\"></ta-font-icon>\n  </span>\n  }\n</div>\n} @else {\n<ng-content></ng-content>\n} @if (this.isError) {\n<ta-link\n  size=\"sm\"\n  class=\"color-semantic-orange-dark flex-end\"\n  (action)=\"this.openErrorBox()\"\n  >Open</ta-link\n>\n}\n", styles: [".notification-container{position:relative;font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.wrapper{padding:var(--ta-space-sm)}.icon{display:flex;align-items:center}.text .label{display:flex;justify-content:flex-start;align-items:flex-start}.text .label.success{color:var(--ta-semantic-token-success)}.text .label.danger{color:var(--ta-semantic-token-alert)}.text .label.warning{color:var(--ta-semantic-token-warning)}.text .label.info{color:var(--ta-semantic-token-link)}.close{position:absolute;top:0;right:0;width:auto;padding:5px;cursor:pointer}\n"] }]
        }], ctorParameters: () => [], propDecorators: { message: [{
                type: Input
            }], code: [{
                type: Input
            }], showClose: [{
                type: Input
            }], askClose: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWlubGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvcG9wdXAvaW5saW5lL25vdGlmaWNhdGlvbi1pbmxpbmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3BvcHVwL2lubGluZS9ub3RpZmljYXRpb24taW5saW5lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7O0FBU3JFLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxlQUFlO0lBQzlELElBQWEsT0FBTyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFlRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7SUFDakQsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7SUFDckQsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7SUFDakQsQ0FBQztJQUlEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUEvQlYsU0FBSSxHQUFzQixpQkFBaUIsQ0FBQyxXQUFXLENBQUM7UUFHeEQsY0FBUyxHQUFHLElBQUksQ0FBQztRQUdqQixhQUFRLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUMsZUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVoQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQXlCcEIsVUFBSyxHQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUxBLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFNTSxPQUFPO1FBQ1osSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsT0FBTyxZQUFZLENBQUM7UUFDdEIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25CLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuQixPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNNLFlBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQzthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzFCLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7YUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM5QixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDMUIsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7SUFDSCxDQUFDO0lBRU0sWUFBWTtRQUNqQixjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7K0dBMUVVLDJCQUEyQjttR0FBM0IsMkJBQTJCLGtOQ3JCeEMsd25DQXNDQSxnc0JEbkJZLGlCQUFpQixtRkFBRSxhQUFhLGlJQUFFLE9BQU8sbUZBQUUsZUFBZTs7NEZBRXpELDJCQUEyQjtrQkFQdkMsU0FBUzsrQkFDRSx3QkFBd0IsY0FHdEIsSUFBSSxXQUNQLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUM7d0RBR3hELE9BQU87c0JBQW5CLEtBQUs7Z0JBTU4sSUFBSTtzQkFESCxLQUFLO2dCQUlOLFNBQVM7c0JBRFIsS0FBSztnQkFJTixRQUFRO3NCQURQLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgTGlua0NvbXBvbmVudCB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgRU5vdGlmaWNhdGlvbkNvZGUgfSBmcm9tIFwiLi4vLi4vLi4vZW51bVwiO1xuaW1wb3J0IHsgVGFUcmFuc2xhdGlvbk5vdGlmaWNhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi90cmFuc2xhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBvcGVuRXJyb3JNb2RhbCB9IGZyb20gXCIuLi8uLi9lcnJvci1ib3gvZXJyb3ItYm94LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtbm90aWZpY2F0aW9uLWlubGluZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL25vdGlmaWNhdGlvbi1pbmxpbmUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL25vdGlmaWNhdGlvbi1pbmxpbmUuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtGb250SWNvbkNvbXBvbmVudCwgTGlua0NvbXBvbmVudCwgTmdDbGFzcywgVHJhbnNsYXRlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uSW5saW5lQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc2V0IG1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgICB0aGlzLnNob3dNZXNzYWdlID0gISF2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGNvZGU6IEVOb3RpZmljYXRpb25Db2RlID0gRU5vdGlmaWNhdGlvbkNvZGUuaW5mb3JtYXRpb247XG5cbiAgQElucHV0KClcbiAgc2hvd0Nsb3NlID0gdHJ1ZTtcblxuICBAT3V0cHV0KClcbiAgYXNrQ2xvc2U6IEV2ZW50RW1pdHRlcjxudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIF9tYXREaWFsb2cgPSBpbmplY3QoTWF0RGlhbG9nKTtcblxuICBwdWJsaWMgc2hvd01lc3NhZ2UgPSBmYWxzZTtcblxuICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlO1xuICB9XG4gIGdldCBpc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvZGUgPT09IEVOb3RpZmljYXRpb25Db2RlLmVycm9yO1xuICB9XG4gIGdldCBpc1dhcm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29kZSA9PT0gRU5vdGlmaWNhdGlvbkNvZGUud2FybmluZztcbiAgfVxuICBnZXQgaXNJbmZvcm1hdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb2RlID09PSBFTm90aWZpY2F0aW9uQ29kZS5pbmZvcm1hdGlvbjtcbiAgfVxuICBnZXQgaXNTdWNjZXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvZGUgPT09IEVOb3RpZmljYXRpb25Db2RlLnN1Y2Nlc3M7XG4gIH1cblxuICBwcml2YXRlIF9tZXNzYWdlITogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgVGFUcmFuc2xhdGlvbk5vdGlmaWNhdGlvbi5nZXRJbnN0YW5jZSgpO1xuICB9XG5cbiAgcHVibGljIGNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuYXNrQ2xvc2UuZW1pdCgpO1xuICB9O1xuXG4gIHB1YmxpYyBnZXRJY29uKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuaXNFcnJvcikge1xuICAgICAgcmV0dXJuIFwiY2xvc2UtdG9vbFwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1dhcm5pbmcpIHtcbiAgICAgIHJldHVybiBcIndhcm5pbmdcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNTdWNjZXNzKSB7XG4gICAgICByZXR1cm4gXCJjaGVja2VkXCI7XG4gICAgfVxuICAgIHJldHVybiBcImhlbHBcIjtcbiAgfVxuICBwdWJsaWMgZ2V0VHlwZUNsYXNzKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuaXNFcnJvcikge1xuICAgICAgcmV0dXJuIFwiZGFuZ2VyXCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzV2FybmluZykge1xuICAgICAgcmV0dXJuIFwid2FybmluZ1wiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0luZm9ybWF0aW9uKSB7XG4gICAgICByZXR1cm4gXCJpbmZvXCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzU3VjY2Vzcykge1xuICAgICAgcmV0dXJuIFwic3VjY2Vzc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3BlbkVycm9yQm94KCkge1xuICAgIG9wZW5FcnJvck1vZGFsKHRoaXMuX21hdERpYWxvZyk7XG4gIH1cbn1cbiIsIkBpZiAodGhpcy5zaG93TWVzc2FnZSkge1xuPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbi1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cInRleHRcIj5cbiAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIiBbbmdDbGFzc109XCJ0aGlzLmdldFR5cGVDbGFzcygpXCI+XG4gICAgICA8dGEtZm9udC1pY29uXG4gICAgICAgIGNsYXNzPVwibXItc3BhY2UteHNcIlxuICAgICAgICBbbmFtZV09XCJ0aGlzLmdldEljb24oKVwiXG4gICAgICAgIHR5cGU9XCJtZFwiXG4gICAgICA+PC90YS1mb250LWljb24+XG4gICAgICBAaWYgKCF0aGlzLm1lc3NhZ2UpIHsgQHN3aXRjaCAodHJ1ZSkgeyBAY2FzZSAodGhpcy5pc0Vycm9yKSB7XG4gICAgICB7eyBcIm5vdGlmaWNhdGlvbi5pbmxpbmUubGFiZWwuZXJyb3JcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgfSBAY2FzZSAodGhpcy5pc1dhcm5pbmcpIHtcbiAgICAgIHt7IFwibm90aWZpY2F0aW9uLmlubGluZS5sYWJlbC53YXJuaW5nXCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgIH0gQGNhc2UgKHRoaXMuaXNJbmZvcm1hdGlvbikge1xuICAgICAge3sgXCJub3RpZmljYXRpb24uaW5saW5lLmxhYmVsLmluZm9cIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgfSBAY2FzZSAodGhpcy5pc1N1Y2Nlc3MpIHtcbiAgICAgIHt7IFwibm90aWZpY2F0aW9uLmlubGluZS5sYWJlbC5zdWNjZXNzXCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgIH0gfSB9IEBlbHNlIHtcbiAgICAgIHt7IHRoaXMubWVzc2FnZSB8IHRyYW5zbGF0ZSB9fVxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgQGlmICh0aGlzLnNob3dDbG9zZSkge1xuICA8c3BhbiBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cInRoaXMuY2xvc2UoKVwiPlxuICAgIDx0YS1mb250LWljb24gbmFtZT1cImNsb3NlXCI+PC90YS1mb250LWljb24+XG4gIDwvc3Bhbj5cbiAgfVxuPC9kaXY+XG59IEBlbHNlIHtcbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbn0gQGlmICh0aGlzLmlzRXJyb3IpIHtcbjx0YS1saW5rXG4gIHNpemU9XCJzbVwiXG4gIGNsYXNzPVwiY29sb3Itc2VtYW50aWMtb3JhbmdlLWRhcmsgZmxleC1lbmRcIlxuICAoYWN0aW9uKT1cInRoaXMub3BlbkVycm9yQm94KClcIlxuICA+T3BlbjwvdGEtbGlua1xuPlxufVxuIl19