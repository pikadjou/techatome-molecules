import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { LinkComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
import { ENotificationCode } from '../../../enum';
import { TaTranslationNotification } from '../../../translation.service';
import { openErrorModal } from '../../error-box/error-box.component';
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
            return 'close-tool';
        }
        if (this.isWarning) {
            return 'warning';
        }
        if (this.isSuccess) {
            return 'checked';
        }
        return 'help';
    }
    getTypeClass() {
        if (this.isError) {
            return 'danger';
        }
        else if (this.isWarning) {
            return 'warning';
        }
        else if (this.isInformation) {
            return 'info';
        }
        else if (this.isSuccess) {
            return 'success';
        }
        else {
            return '';
        }
    }
    openErrorBox() {
        openErrorModal(this._matDialog);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationInlineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: NotificationInlineComponent, isStandalone: true, selector: "ta-notification-inline", inputs: { message: "message", code: "code", showClose: "showClose" }, outputs: { askClose: "askClose" }, usesInheritance: true, ngImport: i0, template: "@if (this.showMessage) {\n  <div class=\"notification-container\">\n    <div class=\"text\">\n      <div class=\"label\" [ngClass]=\"this.getTypeClass()\">\n        <ta-font-icon class=\"mr-space-xs\" [name]=\"this.getIcon()\" type=\"md\"></ta-font-icon>\n        @if (!this.message) {\n          @switch (true) {\n            @case (this.isError) {\n              {{ 'notification.inline.label.error' | translate }}\n            }\n            @case (this.isWarning) {\n              {{ 'notification.inline.label.warning' | translate }}\n            }\n            @case (this.isInformation) {\n              {{ 'notification.inline.label.info' | translate }}\n            }\n            @case (this.isSuccess) {\n              {{ 'notification.inline.label.success' | translate }}\n            }\n          }\n        } @else {\n          {{ this.message | translate }}\n        }\n      </div>\n    </div>\n    @if (this.showClose) {\n      <span class=\"close\" (click)=\"this.close()\">\n        <ta-font-icon name=\"close\"></ta-font-icon>\n      </span>\n    }\n  </div>\n} @else {\n    <ng-content></ng-content>\n}\n\n@if (this.isError) {\n  <ta-link size=\"sm\" class=\"color-semantic-orange-dark flex-end\" (action)=\"this.openErrorBox()\">Open</ta-link>\n}\n", styles: [".notification-container{position:relative;font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.wrapper{padding:var(--ta-space-sm)}.icon{display:flex;align-items:center}.text .label{display:flex;justify-content:flex-start;align-items:flex-start}.text .label.success{color:var(--ta-semantic-token-success)}.text .label.danger{color:var(--ta-semantic-token-alert)}.text .label.warning{color:var(--ta-semantic-token-warning)}.text .label.info{color:var(--ta-semantic-token-link)}.close{position:absolute;top:0;right:0;width:auto;padding:5px;cursor:pointer}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationInlineComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-notification-inline', standalone: true, imports: [FontIconComponent, LinkComponent, NgClass, TranslateModule], template: "@if (this.showMessage) {\n  <div class=\"notification-container\">\n    <div class=\"text\">\n      <div class=\"label\" [ngClass]=\"this.getTypeClass()\">\n        <ta-font-icon class=\"mr-space-xs\" [name]=\"this.getIcon()\" type=\"md\"></ta-font-icon>\n        @if (!this.message) {\n          @switch (true) {\n            @case (this.isError) {\n              {{ 'notification.inline.label.error' | translate }}\n            }\n            @case (this.isWarning) {\n              {{ 'notification.inline.label.warning' | translate }}\n            }\n            @case (this.isInformation) {\n              {{ 'notification.inline.label.info' | translate }}\n            }\n            @case (this.isSuccess) {\n              {{ 'notification.inline.label.success' | translate }}\n            }\n          }\n        } @else {\n          {{ this.message | translate }}\n        }\n      </div>\n    </div>\n    @if (this.showClose) {\n      <span class=\"close\" (click)=\"this.close()\">\n        <ta-font-icon name=\"close\"></ta-font-icon>\n      </span>\n    }\n  </div>\n} @else {\n    <ng-content></ng-content>\n}\n\n@if (this.isError) {\n  <ta-link size=\"sm\" class=\"color-semantic-orange-dark flex-end\" (action)=\"this.openErrorBox()\">Open</ta-link>\n}\n", styles: [".notification-container{position:relative;font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.wrapper{padding:var(--ta-space-sm)}.icon{display:flex;align-items:center}.text .label{display:flex;justify-content:flex-start;align-items:flex-start}.text .label.success{color:var(--ta-semantic-token-success)}.text .label.danger{color:var(--ta-semantic-token-alert)}.text .label.warning{color:var(--ta-semantic-token-warning)}.text .label.info{color:var(--ta-semantic-token-link)}.close{position:absolute;top:0;right:0;width:auto;padding:5px;cursor:pointer}\n"] }]
        }], ctorParameters: () => [], propDecorators: { message: [{
                type: Input
            }], code: [{
                type: Input
            }], showClose: [{
                type: Input
            }], askClose: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWlubGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvcG9wdXAvaW5saW5lL25vdGlmaWNhdGlvbi1pbmxpbmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3BvcHVwL2lubGluZS9ub3RpZmljYXRpb24taW5saW5lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7O0FBU3JFLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxlQUFlO0lBQzlELElBQWEsT0FBTyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFlRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7SUFDakQsQ0FBQztJQUNELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7SUFDckQsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7SUFDakQsQ0FBQztJQUlEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUEvQlYsU0FBSSxHQUFzQixpQkFBaUIsQ0FBQyxXQUFXLENBQUM7UUFHeEQsY0FBUyxHQUFHLElBQUksQ0FBQztRQUdqQixhQUFRLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUMsZUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVoQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQXlCcEIsVUFBSyxHQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUxBLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFNTSxPQUFPO1FBQ1osSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsT0FBTyxZQUFZLENBQUM7UUFDdEIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25CLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuQixPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNNLFlBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQzthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzFCLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7YUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM5QixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDMUIsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7SUFDSCxDQUFDO0lBRU0sWUFBWTtRQUNqQixjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7K0dBMUVVLDJCQUEyQjttR0FBM0IsMkJBQTJCLGtOQ3JCeEMsd3ZDQXNDQSxnc0JEbkJZLGlCQUFpQixtRkFBRSxhQUFhLGlJQUFFLE9BQU8sbUZBQUUsZUFBZTs7NEZBRXpELDJCQUEyQjtrQkFQdkMsU0FBUzsrQkFDRSx3QkFBd0IsY0FHdEIsSUFBSSxXQUNQLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUM7d0RBR3hELE9BQU87c0JBQW5CLEtBQUs7Z0JBTU4sSUFBSTtzQkFESCxLQUFLO2dCQUlOLFNBQVM7c0JBRFIsS0FBSztnQkFJTixRQUFRO3NCQURQLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBMaW5rQ29tcG9uZW50IH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IEVOb3RpZmljYXRpb25Db2RlIH0gZnJvbSAnLi4vLi4vLi4vZW51bSc7XG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBvcGVuRXJyb3JNb2RhbCB9IGZyb20gJy4uLy4uL2Vycm9yLWJveC9lcnJvci1ib3guY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtbm90aWZpY2F0aW9uLWlubGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpZmljYXRpb24taW5saW5lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbm90aWZpY2F0aW9uLWlubGluZS5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9udEljb25Db21wb25lbnQsIExpbmtDb21wb25lbnQsIE5nQ2xhc3MsIFRyYW5zbGF0ZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbklubGluZUNvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNldCBtZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWU7XG4gICAgdGhpcy5zaG93TWVzc2FnZSA9ICEhdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBjb2RlOiBFTm90aWZpY2F0aW9uQ29kZSA9IEVOb3RpZmljYXRpb25Db2RlLmluZm9ybWF0aW9uO1xuXG4gIEBJbnB1dCgpXG4gIHNob3dDbG9zZSA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIGFza0Nsb3NlOiBFdmVudEVtaXR0ZXI8bnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfbWF0RGlhbG9nID0gaW5qZWN0KE1hdERpYWxvZyk7XG5cbiAgcHVibGljIHNob3dNZXNzYWdlID0gZmFsc2U7XG5cbiAgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxuICBnZXQgaXNFcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb2RlID09PSBFTm90aWZpY2F0aW9uQ29kZS5lcnJvcjtcbiAgfVxuICBnZXQgaXNXYXJuaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvZGUgPT09IEVOb3RpZmljYXRpb25Db2RlLndhcm5pbmc7XG4gIH1cbiAgZ2V0IGlzSW5mb3JtYXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29kZSA9PT0gRU5vdGlmaWNhdGlvbkNvZGUuaW5mb3JtYXRpb247XG4gIH1cbiAgZ2V0IGlzU3VjY2VzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb2RlID09PSBFTm90aWZpY2F0aW9uQ29kZS5zdWNjZXNzO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWVzc2FnZSE6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIFRhVHJhbnNsYXRpb25Ob3RpZmljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLmFza0Nsb3NlLmVtaXQoKTtcbiAgfTtcblxuICBwdWJsaWMgZ2V0SWNvbigpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmlzRXJyb3IpIHtcbiAgICAgIHJldHVybiAnY2xvc2UtdG9vbCc7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzV2FybmluZykge1xuICAgICAgcmV0dXJuICd3YXJuaW5nJztcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNTdWNjZXNzKSB7XG4gICAgICByZXR1cm4gJ2NoZWNrZWQnO1xuICAgIH1cbiAgICByZXR1cm4gJ2hlbHAnO1xuICB9XG4gIHB1YmxpYyBnZXRUeXBlQ2xhc3MoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5pc0Vycm9yKSB7XG4gICAgICByZXR1cm4gJ2Rhbmdlcic7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzV2FybmluZykge1xuICAgICAgcmV0dXJuICd3YXJuaW5nJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNJbmZvcm1hdGlvbikge1xuICAgICAgcmV0dXJuICdpbmZvJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNTdWNjZXNzKSB7XG4gICAgICByZXR1cm4gJ3N1Y2Nlc3MnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9wZW5FcnJvckJveCgpIHtcbiAgICBvcGVuRXJyb3JNb2RhbCh0aGlzLl9tYXREaWFsb2cpO1xuICB9XG59XG4iLCJAaWYgKHRoaXMuc2hvd01lc3NhZ2UpIHtcbiAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbi1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCIgW25nQ2xhc3NdPVwidGhpcy5nZXRUeXBlQ2xhc3MoKVwiPlxuICAgICAgICA8dGEtZm9udC1pY29uIGNsYXNzPVwibXItc3BhY2UteHNcIiBbbmFtZV09XCJ0aGlzLmdldEljb24oKVwiIHR5cGU9XCJtZFwiPjwvdGEtZm9udC1pY29uPlxuICAgICAgICBAaWYgKCF0aGlzLm1lc3NhZ2UpIHtcbiAgICAgICAgICBAc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBAY2FzZSAodGhpcy5pc0Vycm9yKSB7XG4gICAgICAgICAgICAgIHt7ICdub3RpZmljYXRpb24uaW5saW5lLmxhYmVsLmVycm9yJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGNhc2UgKHRoaXMuaXNXYXJuaW5nKSB7XG4gICAgICAgICAgICAgIHt7ICdub3RpZmljYXRpb24uaW5saW5lLmxhYmVsLndhcm5pbmcnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAY2FzZSAodGhpcy5pc0luZm9ybWF0aW9uKSB7XG4gICAgICAgICAgICAgIHt7ICdub3RpZmljYXRpb24uaW5saW5lLmxhYmVsLmluZm8nIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAY2FzZSAodGhpcy5pc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAge3sgJ25vdGlmaWNhdGlvbi5pbmxpbmUubGFiZWwuc3VjY2VzcycgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgIHt7IHRoaXMubWVzc2FnZSB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBAaWYgKHRoaXMuc2hvd0Nsb3NlKSB7XG4gICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cInRoaXMuY2xvc2UoKVwiPlxuICAgICAgICA8dGEtZm9udC1pY29uIG5hbWU9XCJjbG9zZVwiPjwvdGEtZm9udC1pY29uPlxuICAgICAgPC9zcGFuPlxuICAgIH1cbiAgPC9kaXY+XG59IEBlbHNlIHtcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG59XG5cbkBpZiAodGhpcy5pc0Vycm9yKSB7XG4gIDx0YS1saW5rIHNpemU9XCJzbVwiIGNsYXNzPVwiY29sb3Itc2VtYW50aWMtb3JhbmdlLWRhcmsgZmxleC1lbmRcIiAoYWN0aW9uKT1cInRoaXMub3BlbkVycm9yQm94KClcIj5PcGVuPC90YS1saW5rPlxufVxuIl19