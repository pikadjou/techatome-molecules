import * as i0 from '@angular/core';
import { InjectionToken, Injectable, inject, Component, input, EventEmitter, effect, Output } from '@angular/core';
import { tap } from 'rxjs/operators';
import { newGuid, TaBaseModal, copyTextToClipboard, TaBaseComponent, isNonNullable, getUniqueArray } from '@ta/utils';
import { Subject, map, switchMap, of } from 'rxjs';
import { JsonPipe, NgClass, AsyncPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import * as i1 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { ButtonComponent, ExpandableTextComponent, LayoutModalComponent, TextComponent, TitleComponent, LinkComponent, BulletComponent as BulletComponent$1 } from '@ta/ui';
import { TaLazyTranslationService } from '@ta/translation';
import { TaServerErrorService, GraphSchema, Apollo_gql, graphQlTake, keyValueProps, graphQlPaginationFields, TaBaseService, HandleComplexRequest } from '@ta/server';

var ENotificationCode;
(function (ENotificationCode) {
    ENotificationCode[ENotificationCode["none"] = 0] = "none";
    ENotificationCode[ENotificationCode["error"] = 1] = "error";
    ENotificationCode[ENotificationCode["warning"] = 2] = "warning";
    ENotificationCode[ENotificationCode["information"] = 3] = "information";
    ENotificationCode[ENotificationCode["success"] = 4] = "success";
})(ENotificationCode || (ENotificationCode = {}));

const LAZY_SERVICE_TOKEN = new InjectionToken("TaNotificationService");
class TaNotificationService {
    constructor() {
        this.id = Math.random();
        this.newNotification$ = new Subject();
        this.removeNotification$ = new Subject();
    }
    addNotification(message, code, persistent) {
        const isPersistent = persistent !== undefined ? persistent : code === ENotificationCode.error;
        this.newNotification$.next({
            id: newGuid(),
            message,
            code,
            persistent: isPersistent,
        });
    }
    removeNotification(id) {
        this.removeNotification$.next(id);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });

class TaTranslationNotification extends TaLazyTranslationService {
    constructor() {
        super("notification");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationNotification, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationNotification, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationNotification, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });

class ErrorBoxModal extends TaBaseModal {
    constructor() {
        super(...arguments);
        this._notificationService = inject(LAZY_SERVICE_TOKEN);
        this._errorService = inject(TaServerErrorService);
        this.errorList = this._errorService.notifications;
        this.copyContent = async (entity) => {
            const successNotification = (message) => {
                this._notificationService.addNotification(message, ENotificationCode.success);
            };
            const errorNotification = (message) => {
                this._notificationService.addNotification(message, ENotificationCode.error);
            };
            await copyTextToClipboard(this._formatEntityForClipboard(entity), successNotification, errorNotification);
        };
    }
    _formatEntityForClipboard(entity) {
        const errorMessages = entity.errorsMessage?.map((m) => `- ${m.message}`).join("\n") ??
            "No error messages";
        return `
      🔴 Error Name:
      ${entity.error?.name ?? "N/A"}
      
      💬 Message:
      ${entity.error?.message ?? "N/A"}
      
      📜 Stack:
      ${entity.error?.stack ?? "N/A"}
      
      📄 Query:
      ${entity.query ?? "N/A"}
      
      📦 Variables:
      ${JSON.stringify(entity.variables, null, 2)}
      
      🧾 Error Messages:
      ${errorMessages}
      `.trim();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErrorBoxModal, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ErrorBoxModal, isStandalone: true, selector: "ta-error-box", usesInheritance: true, ngImport: i0, template: "<ta-layout-modal>\n  <div class=\"flex-column\">\n    @for (entity of this.errorList(); track entity; let i = $index) {\n    <ta-title [level]=\"3\">{{ entity.error.name }}</ta-title>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        @for (message of entity.errorsMessage; track message) {\n        <ta-text>{{ message.message }}</ta-text>\n        }\n      </div>\n      <div class=\"col-6\">\n        <ta-text size=\"sm\">{{ entity.query }}</ta-text>\n        <ta-text size=\"sm\">{{ entity.variables | json }}</ta-text>\n      </div>\n    </div>\n    <div class=\"extra\">\n      <ta-text size=\"sm\" [isBold]=\"true\"> {{ entity.error.message }}</ta-text>\n      <ta-expandable-text size=\"sm\" [height]=\"20\">{{\n        entity.error.stack\n      }}</ta-expandable-text>\n    </div>\n    <ta-button class=\"ml-a\" (action)=\"this.copyContent(entity)\">copy</ta-button>\n    <div class=\"sep\"></div>\n    }\n  </div>\n</ta-layout-modal>\n", styles: [".sep{height:1px;border-bottom:1px solid var(--ta-border-secondary);margin:var(--ta-space-xl) 0}\n"], dependencies: [{ kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: ExpandableTextComponent, selector: "ta-expandable-text", inputs: ["height"] }, { kind: "pipe", type: JsonPipe, name: "json" }, { kind: "component", type: LayoutModalComponent, selector: "ta-layout-modal", inputs: ["style", "title"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ErrorBoxModal, decorators: [{
            type: Component,
            args: [{ selector: "ta-error-box", standalone: true, imports: [
                        ButtonComponent,
                        ExpandableTextComponent,
                        JsonPipe,
                        LayoutModalComponent,
                        TextComponent,
                        TitleComponent,
                    ], template: "<ta-layout-modal>\n  <div class=\"flex-column\">\n    @for (entity of this.errorList(); track entity; let i = $index) {\n    <ta-title [level]=\"3\">{{ entity.error.name }}</ta-title>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        @for (message of entity.errorsMessage; track message) {\n        <ta-text>{{ message.message }}</ta-text>\n        }\n      </div>\n      <div class=\"col-6\">\n        <ta-text size=\"sm\">{{ entity.query }}</ta-text>\n        <ta-text size=\"sm\">{{ entity.variables | json }}</ta-text>\n      </div>\n    </div>\n    <div class=\"extra\">\n      <ta-text size=\"sm\" [isBold]=\"true\"> {{ entity.error.message }}</ta-text>\n      <ta-expandable-text size=\"sm\" [height]=\"20\">{{\n        entity.error.stack\n      }}</ta-expandable-text>\n    </div>\n    <ta-button class=\"ml-a\" (action)=\"this.copyContent(entity)\">copy</ta-button>\n    <div class=\"sep\"></div>\n    }\n  </div>\n</ta-layout-modal>\n", styles: [".sep{height:1px;border-bottom:1px solid var(--ta-border-secondary);margin:var(--ta-space-xl) 0}\n"] }]
        }] });
function openErrorModal(dialog) {
    return dialog.open(ErrorBoxModal, {
        width: "600px",
        maxHeight: "80vh",
    });
}

class NotificationInlineComponent extends TaBaseComponent {
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
    getTypeKey() {
        if (this.isError)
            return "error";
        if (this.isWarning)
            return "warning";
        if (this.isInformation)
            return "info";
        if (this.isSuccess)
            return "success";
        return "";
    }
    getTypeLabel() {
        return "notification.type." + this.getTypeKey();
    }
    getDefaultMessageKey() {
        return "notification.inline.label." + this.getTypeKey();
    }
    openErrorBox() {
        openErrorModal(this._matDialog);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationInlineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: NotificationInlineComponent, isStandalone: true, selector: "ta-notification-inline", inputs: { messageInput: { classPropertyName: "messageInput", publicName: "message", isSignal: true, isRequired: false, transformFunction: null }, code: { classPropertyName: "code", publicName: "code", isSignal: true, isRequired: false, transformFunction: null }, showClose: { classPropertyName: "showClose", publicName: "showClose", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { askClose: "askClose" }, usesInheritance: true, ngImport: i0, template: "@if (this.showMessage) {\n<div class=\"notification\" [ngClass]=\"this.getTypeClass()\">\n  <div class=\"notification_sidebar\"></div>\n  <div class=\"notification_content\">\n    <div class=\"notification_header\">\n      <div class=\"notification_type\">\n        <ta-font-icon [name]=\"this.getIcon()\" type=\"md\"></ta-font-icon>\n        <span class=\"notification_title\">{{\n          this.getTypeLabel() | translate\n        }}</span>\n      </div>\n      @if (this.showClose()) {\n      <button class=\"notification_close\" (click)=\"this.close()\">\n        <ta-font-icon name=\"close\" type=\"sm\"></ta-font-icon>\n      </button>\n      }\n    </div>\n    <div class=\"notification_body\">\n      @if (this.message) {\n      <span class=\"notification_message\">{{\n        this.message | translate\n      }}</span>\n      } @else {\n      <span class=\"notification_message\">{{\n        this.getDefaultMessageKey() | translate\n      }}</span>\n      }\n    </div>\n    @if (this.isError) {\n    <div class=\"notification_footer\">\n      <ta-link size=\"sm\" (action)=\"this.openErrorBox()\">{{\n        \"notification.action.viewDetails\" | translate\n      }}</ta-link>\n    </div>\n    }\n  </div>\n</div>\n} @else {\n<ng-content></ng-content>\n}\n", styles: [".notification{display:flex;overflow:hidden;border-radius:var(--ta-radius-rounded);background-color:var(--ta-surface-primary);box-shadow:0 4px 12px #0000001f}.notification_sidebar{width:4px;flex-shrink:0}.notification_content{display:flex;flex-direction:column;gap:var(--ta-space-xs);padding:var(--ta-space-sm) var(--ta-space-md);flex:1;min-width:0}.notification_header{display:flex;align-items:center;justify-content:space-between;gap:var(--ta-space-sm)}.notification_type{display:flex;align-items:center;gap:var(--ta-space-xs)}.notification_title{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);font-weight:600}.notification_close{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border:none;background:none;cursor:pointer;border-radius:var(--ta-radius-minimal);color:var(--ta-text-secondary);flex-shrink:0;padding:0;transition:background-color .15s ease}.notification_close:hover{background-color:var(--ta-surface-hover)}.notification_body{padding-left:calc(16px + var(--ta-space-xs))}.notification_message{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-secondary);word-break:break-word}.notification_footer{padding-left:calc(16px + var(--ta-space-xs));padding-top:var(--ta-space-xs)}.notification.success .notification_sidebar{background-color:var(--ta-semantic-token-success)}.notification.success .notification_type{color:var(--ta-semantic-token-success)}.notification.danger .notification_sidebar{background-color:var(--ta-semantic-token-alert)}.notification.danger .notification_type{color:var(--ta-semantic-token-alert)}.notification.warning .notification_sidebar{background-color:var(--ta-semantic-token-warning)}.notification.warning .notification_type{color:var(--ta-semantic-token-warning)}.notification.info .notification_sidebar{background-color:var(--ta-semantic-token-link)}.notification.info .notification_type{color:var(--ta-semantic-token-link)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationInlineComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-inline", standalone: true, imports: [FontIconComponent, LinkComponent, NgClass, TranslateModule], template: "@if (this.showMessage) {\n<div class=\"notification\" [ngClass]=\"this.getTypeClass()\">\n  <div class=\"notification_sidebar\"></div>\n  <div class=\"notification_content\">\n    <div class=\"notification_header\">\n      <div class=\"notification_type\">\n        <ta-font-icon [name]=\"this.getIcon()\" type=\"md\"></ta-font-icon>\n        <span class=\"notification_title\">{{\n          this.getTypeLabel() | translate\n        }}</span>\n      </div>\n      @if (this.showClose()) {\n      <button class=\"notification_close\" (click)=\"this.close()\">\n        <ta-font-icon name=\"close\" type=\"sm\"></ta-font-icon>\n      </button>\n      }\n    </div>\n    <div class=\"notification_body\">\n      @if (this.message) {\n      <span class=\"notification_message\">{{\n        this.message | translate\n      }}</span>\n      } @else {\n      <span class=\"notification_message\">{{\n        this.getDefaultMessageKey() | translate\n      }}</span>\n      }\n    </div>\n    @if (this.isError) {\n    <div class=\"notification_footer\">\n      <ta-link size=\"sm\" (action)=\"this.openErrorBox()\">{{\n        \"notification.action.viewDetails\" | translate\n      }}</ta-link>\n    </div>\n    }\n  </div>\n</div>\n} @else {\n<ng-content></ng-content>\n}\n", styles: [".notification{display:flex;overflow:hidden;border-radius:var(--ta-radius-rounded);background-color:var(--ta-surface-primary);box-shadow:0 4px 12px #0000001f}.notification_sidebar{width:4px;flex-shrink:0}.notification_content{display:flex;flex-direction:column;gap:var(--ta-space-xs);padding:var(--ta-space-sm) var(--ta-space-md);flex:1;min-width:0}.notification_header{display:flex;align-items:center;justify-content:space-between;gap:var(--ta-space-sm)}.notification_type{display:flex;align-items:center;gap:var(--ta-space-xs)}.notification_title{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);font-weight:600}.notification_close{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border:none;background:none;cursor:pointer;border-radius:var(--ta-radius-minimal);color:var(--ta-text-secondary);flex-shrink:0;padding:0;transition:background-color .15s ease}.notification_close:hover{background-color:var(--ta-surface-hover)}.notification_body{padding-left:calc(16px + var(--ta-space-xs))}.notification_message{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-secondary);word-break:break-word}.notification_footer{padding-left:calc(16px + var(--ta-space-xs));padding-top:var(--ta-space-xs)}.notification.success .notification_sidebar{background-color:var(--ta-semantic-token-success)}.notification.success .notification_type{color:var(--ta-semantic-token-success)}.notification.danger .notification_sidebar{background-color:var(--ta-semantic-token-alert)}.notification.danger .notification_type{color:var(--ta-semantic-token-alert)}.notification.warning .notification_sidebar{background-color:var(--ta-semantic-token-warning)}.notification.warning .notification_type{color:var(--ta-semantic-token-warning)}.notification.info .notification_sidebar{background-color:var(--ta-semantic-token-link)}.notification.info .notification_type{color:var(--ta-semantic-token-link)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { askClose: [{
                type: Output
            }] } });

const AUTO_DISMISS_DELAY = 3000;
class NotificationBoxComponent extends TaBaseComponent {
    constructor() {
        super();
        this.list = [];
        this._notificationService = inject(TaNotificationService);
        this._registerSubscription(this._notificationService.newNotification$
            .pipe(tap((notification) => {
            this.list.push(notification);
            if (!notification.persistent) {
                setTimeout(() => {
                    this._remove(notification.id);
                }, AUTO_DISMISS_DELAY);
            }
        }))
            .subscribe());
        this._registerSubscription(this._notificationService.removeNotification$
            .pipe(tap((id) => this._remove(id)))
            .subscribe());
    }
    dismiss(id) {
        this._remove(id);
    }
    _remove(id) {
        this.list = this.list.filter((item) => item.id !== id);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationBoxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: NotificationBoxComponent, isStandalone: true, selector: "ta-notification-box", usesInheritance: true, ngImport: i0, template: "<div class=\"notification-box_container flex-column g-space-sm\">\n  @for (item of this.list; track item.id) {\n  <ta-notification-inline\n    [message]=\"item.message\"\n    [code]=\"item.code\"\n    [showClose]=\"item.persistent\"\n    (askClose)=\"this.dismiss(item.id)\"\n  ></ta-notification-inline>\n  }\n</div>\n", styles: [".notification-box_container{position:fixed;bottom:calc(24px + env(safe-area-inset-bottom));right:var(--ta-space-md);z-index:5000;width:calc(100% - var(--ta-space-lg));max-width:420px}@media (max-width: 575px){.notification-box_container{right:var(--ta-space-sm);width:calc(100% - var(--ta-space-md))}}\n"], dependencies: [{ kind: "component", type: NotificationInlineComponent, selector: "ta-notification-inline", inputs: ["message", "code", "showClose"], outputs: ["askClose"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationBoxComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-box", standalone: true, imports: [NotificationInlineComponent], template: "<div class=\"notification-box_container flex-column g-space-sm\">\n  @for (item of this.list; track item.id) {\n  <ta-notification-inline\n    [message]=\"item.message\"\n    [code]=\"item.code\"\n    [showClose]=\"item.persistent\"\n    (askClose)=\"this.dismiss(item.id)\"\n  ></ta-notification-inline>\n  }\n</div>\n", styles: [".notification-box_container{position:fixed;bottom:calc(24px + env(safe-area-inset-bottom));right:var(--ta-space-md);z-index:5000;width:calc(100% - var(--ta-space-lg));max-width:420px}@media (max-width: 575px){.notification-box_container{right:var(--ta-space-sm);width:calc(100% - var(--ta-space-md))}}\n"] }]
        }], ctorParameters: () => [] });

const notificationProps = new GraphSchema([
    "id",
    "date",
    "level",
    "isNew",
    "userId",
    "tenantId",
    "tenantName",
    "type",
    "context",
    "redirectContext",
]);

function GET_NOTIFICATIONS(filters) {
    const where = computeFilters(filters);
    return {
        query: Apollo_gql `
    query Notifications {
        notifications(${where}, order: { isNew: DESC, date: DESC }, ${graphQlTake(filters?.take)}) {
            items {
              ${notificationProps.get("id")}
              ${notificationProps.get("date")}
              ${notificationProps.get("level")}
              ${notificationProps.get("isNew")}
              ${notificationProps.get("userId")}
              ${notificationProps.get("tenantId")}
              ${notificationProps.get("tenantName")}
              ${notificationProps.get("type")}
              ${notificationProps.get("context")} {
                ${keyValueProps.get("key")}
                ${keyValueProps.get("value")}
              }
              ${notificationProps.get("redirectContext")} {
                ${keyValueProps.get("key")}
                ${keyValueProps.get("value")}
              }
            }
        }
    }
      `,
        variables: {},
    };
}
function GET_NOTIFICATIONS_COUNT(filters) {
    const where = computeFilters(filters);
    return {
        query: Apollo_gql `
      query Notifications {
          notifications(${where}, order: { isNew: DESC, date: DESC }, ${graphQlTake(filters?.take)}) {
              ${graphQlPaginationFields()}
          }
      }
    `,
        variables: {},
    };
}
function READ_NOTIFICATION(id) {
    return {
        mutation: Apollo_gql `
      mutation NotificationRead($id: UUID!) {
        notificationRead(notificationId: $id) {
            ${notificationProps.get("id")}
            ${notificationProps.get("isNew")}
        }
      }
    `,
        variables: {
            id,
        },
    };
}
function computeFilters(filters) {
    const clause = [];
    if (filters) {
        if (filters.projectId) {
            clause.push(`projectId: { eq: ${filters.projectId} }`);
        }
        if (isNonNullable(filters.isNew)) {
            clause.push(`isNew: { eq: ${filters.isNew} }`);
        }
    }
    return `where: { ${clause.join(",")} }`;
}

class TaNotificationSharedService {
    constructor() {
        this.paymentStatusTemplate = null;
        this.projectStatusTemplate = null;
        this.getProjects$ = null;
        this.routing = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationSharedService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationSharedService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationSharedService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });

const graphEndpoint = {
    clientName: "notificationService",
    endpoint: "notification",
};
class TaNotificationDataService extends TaBaseService {
    constructor(_sharedService) {
        super();
        this._sharedService = _sharedService;
        this.list = new HandleComplexRequest();
        this.count = new HandleComplexRequest();
        this._graphService.registerGraphEndpoint(graphEndpoint);
    }
    fetchNotifications$(filters) {
        return this.list.fetch(this.computeKey(filters), this._graphService
            .fetchPagedQueryList(GET_NOTIFICATIONS(filters), "notifications", graphEndpoint.clientName)
            .pipe(map((data) => data.items ?? []), switchMap((entities) => {
            if (!this._sharedService.getProjects$) {
                return of(entities);
            }
            return this._sharedService
                .getProjects$(getUniqueArray(entities.map((entity) => entity.projectId)))
                .pipe(map((projects) => entities.map((entity) => ({
                ...entity,
                ...{
                    project: projects.find((project) => project.id === entity.projectId),
                },
            }))));
        })));
    }
    fetchNumberOfNotifications$(filters) {
        return this.count.fetch(this.computeKey(filters), this._graphService
            .fetchPagedQueryList(GET_NOTIFICATIONS_COUNT(filters), "notifications", graphEndpoint.clientName)
            .pipe(map((data) => data.totalCount)));
    }
    isRead$(id) {
        return this._graphService.mutate(READ_NOTIFICATION(id), "notificationRead", graphEndpoint.clientName);
    }
    computeKey(filters) {
        if (!filters) {
            return "all";
        }
        return `${filters.projectId}-${filters.isNew}-${filters.take}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationDataService, deps: [{ token: TaNotificationSharedService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationDataService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationDataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [{ type: TaNotificationSharedService }] });

class BulletComponent extends TaBaseComponent {
    get number$() {
        return this._notificationDataService.count.get$(this._notificationDataService.computeKey(this.filters()));
    }
    constructor(_notificationDataService) {
        super();
        this._notificationDataService = _notificationDataService;
        this.filters = input(null);
    }
    ngOnInit() {
        this.requestState.asked();
        this._notificationDataService
            .fetchNumberOfNotifications$(this.filters())
            .subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BulletComponent, deps: [{ token: TaNotificationDataService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: BulletComponent, isStandalone: true, selector: "ta-notification-bullet", inputs: { filters: { classPropertyName: "filters", publicName: "filters", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<ta-bullet type=\"notif\" size=\"md\">\n  {{ this.number$ | async }}\n</ta-bullet>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: BulletComponent$1, selector: "ta-bullet", inputs: ["size", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BulletComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-bullet", standalone: true, imports: [AsyncPipe, BulletComponent$1], template: "<ta-bullet type=\"notif\" size=\"md\">\n  {{ this.number$ | async }}\n</ta-bullet>\n" }]
        }], ctorParameters: () => [{ type: TaNotificationDataService }] });

/*
 * Public API Surface of notification
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BulletComponent, ENotificationCode, LAZY_SERVICE_TOKEN, NotificationBoxComponent, NotificationInlineComponent, TaNotificationService };
//# sourceMappingURL=ta-notification.mjs.map
