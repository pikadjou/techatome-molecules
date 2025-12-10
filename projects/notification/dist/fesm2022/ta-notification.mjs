import { JsonPipe, NgClass, NgFor, NgTemplateOutlet, NgIf, AsyncPipe, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, InjectionToken, inject, Component, EventEmitter, Output, Input, NgModule } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ButtonComponent, ExpandableTextComponent, LayoutModalComponent, TextComponent, TitleComponent, LinkComponent, ToastComponent, TimeAgoComponent, EmptyComponent, ErrorComponent, LoaderComponent, BulletComponent as BulletComponent$1, TaUiModule, TaContainerModule } from '@ta/ui';
import { TaBaseModal, copyTextToClipboard, TaBaseComponent, isNonNullable, getUniqueArray, TaDirectivePipeModule } from '@ta/utils';
import { MatDialog } from '@angular/material/dialog';
import * as i1 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent, TaIconsModule } from '@ta/icons';
import { TaLazyTranslationService, TranslatePipe } from '@ta/translation';
import { TaServerErrorService, GraphSchema, Apollo_gql, graphQlTake, keyValueProps, graphQlPaginationFields, TaBaseService, HandleComplexRequest } from '@ta/server';
import { Subject, map, switchMap, of, tap as tap$1 } from 'rxjs';

var ENotificationCode;
(function (ENotificationCode) {
    ENotificationCode[ENotificationCode["none"] = 0] = "none";
    ENotificationCode[ENotificationCode["error"] = 1] = "error";
    ENotificationCode[ENotificationCode["warning"] = 2] = "warning";
    ENotificationCode[ENotificationCode["information"] = 3] = "information";
    ENotificationCode[ENotificationCode["success"] = 4] = "success";
})(ENotificationCode || (ENotificationCode = {}));

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

const LAZY_SERVICE_TOKEN = new InjectionToken("TaNotificationService");
class TaNotificationService {
    constructor() {
        this.id = Math.random();
        this.newNotification$ = new Subject();
    }
    addNotification(message, code) {
        this.newNotification$.next({ message, code });
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

class NotificationBoxComponent extends TaBaseComponent {
    constructor(_notificationService) {
        super();
        this._notificationService = _notificationService;
        this.list = [];
        this._registerSubscription(this._notificationService.newNotification$
            .pipe(tap((notification) => {
            this.list.push(notification);
        }), tap((notification) => {
            setTimeout(() => {
                this.list = this.list.filter((item) => item !== notification);
            }, 3000);
        }))
            .subscribe());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationBoxComponent, deps: [{ token: TaNotificationService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: NotificationBoxComponent, isStandalone: true, selector: "ta-notification-box", usesInheritance: true, ngImport: i0, template: "<div class=\"notification-box_container flex-column g-space-sm\">\n  @for (item of this.list; track item) {\n  <div>\n    <ta-toast [code]=\"item.code\">\n      <ta-notification-inline\n        [message]=\"item.message\"\n        [code]=\"item.code\"\n        [showClose]=\"false\"\n      ></ta-notification-inline>\n    </ta-toast>\n  </div>\n  }\n</div>\n", styles: [".notification-box_container{position:fixed;bottom:calc(24px + env(safe-area-inset-bottom));width:90%;right:5%;z-index:5000}@media (min-width: 768px){.notification-box_container{width:auto;min-width:200px;max-width:500px}}\n"], dependencies: [{ kind: "component", type: NotificationInlineComponent, selector: "ta-notification-inline", inputs: ["message", "code", "showClose"], outputs: ["askClose"] }, { kind: "component", type: ToastComponent, selector: "ta-toast", inputs: ["code"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationBoxComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-box", standalone: true, imports: [NgFor, NotificationInlineComponent, ToastComponent], template: "<div class=\"notification-box_container flex-column g-space-sm\">\n  @for (item of this.list; track item) {\n  <div>\n    <ta-toast [code]=\"item.code\">\n      <ta-notification-inline\n        [message]=\"item.message\"\n        [code]=\"item.code\"\n        [showClose]=\"false\"\n      ></ta-notification-inline>\n    </ta-toast>\n  </div>\n  }\n</div>\n", styles: [".notification-box_container{position:fixed;bottom:calc(24px + env(safe-area-inset-bottom));width:90%;right:5%;z-index:5000}@media (min-width: 768px){.notification-box_container{width:auto;min-width:200px;max-width:500px}}\n"] }]
        }], ctorParameters: () => [{ type: TaNotificationService }] });

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

class AbstractNotificationTemplateComponent {
    constructor() {
        this.sharedService = inject(TaNotificationSharedService);
        this.dataService = inject(TaNotificationDataService);
    }
    goTo() {
        this.dataService.isRead$(this.notification.id).subscribe();
    }
    getTranslation() {
        return this.notification.context.reduce((acc, item) => {
            acc[item.key] = item.value;
            return acc;
        }, {});
    }
    extractContext(key) {
        return (this.notification.context.find((item) => item.key === key)
            ?.value ?? "");
    }
    extractredirectContext(key) {
        return (this.notification.redirectContext.find((item) => item.key === key)?.value ?? "");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AbstractNotificationTemplateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: AbstractNotificationTemplateComponent, selector: "ng-component", inputs: { notification: "notification" }, ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AbstractNotificationTemplateComponent, decorators: [{
            type: Component,
            args: [{ template: "" }]
        }], propDecorators: { notification: [{
                type: Input
            }] } });

class IconComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: IconComponent, isStandalone: true, selector: "ta-notification-item-icon", inputs: { level: "level", icon: "icon" }, ngImport: i0, template: "<div class=\"icon-container\">\n  <ta-font-icon [name]=\"this.icon\"></ta-font-icon>\n</div>\n", styles: [".icon-container{padding:var(--ta-space-md);border-radius:var(--ta-radius-full);background-color:var(--ta-surface-hover-secondary);color:var(--ta-icon-brand-primary)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-item-icon", standalone: true, imports: [FontIconComponent], template: "<div class=\"icon-container\">\n  <ta-font-icon [name]=\"this.icon\"></ta-font-icon>\n</div>\n", styles: [".icon-container{padding:var(--ta-space-md);border-radius:var(--ta-radius-full);background-color:var(--ta-surface-hover-secondary);color:var(--ta-icon-brand-primary)}\n"] }]
        }], propDecorators: { level: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });

class ItemComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ItemComponent, isStandalone: true, selector: "ta-notification-item", inputs: { notification: "notification" }, ngImport: i0, template: "<div class=\"item-container\" [class.new]=\"this.notification.isNew\">\n  <div>\n    <ng-content select=\"ta-notification-item-icon\"></ng-content>\n  </div>\n  <div class=\"full-width\">\n    <div class=\"space-between\">\n      <div class=\"tenant-name\">{{ this.notification.tenantName }}</div>\n\n      <div class=\"extra-info\">\n        <ta-time-ago [date]=\"this.notification.date\"></ta-time-ago>\n      </div>\n    </div>\n    <div class=\"title\">\n      <ng-content select=\"ta-notification-item-title\"></ng-content>\n    </div>\n    <div class=\"cta-container space-between\">\n      <div class=\"info\">\n        <div>\n          <ng-content select=\"ta-notification-item-info\"></ng-content>\n        </div>\n        <div class=\"project-name\">\n          {{ this.notification.project?.name }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".item-container{display:flex;flex-direction:row;gap:var(--ta-space-md);padding:var(--ta-space-lg)}.item-container:hover,.item-container.new{background-color:var(--ta-surface-brand-tertiary)}.item-container .tenant-name{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-brand-primary)}.item-container .title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}.item-container .info{display:flex;flex-direction:row}.item-container .info .project-name{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-secondary)}.item-container .extra-info{font-size:var(--ta-font-key-xs-default-size);line-height:var(--ta-font-key-xs-default-line);font-weight:var(--ta-font-key-xs-default-weight);color:var(--ta-text-tertiary)}\n"], dependencies: [{ kind: "component", type: TimeAgoComponent, selector: "ta-time-ago", inputs: ["date", "withHours"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ItemComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-item", standalone: true, imports: [TimeAgoComponent], template: "<div class=\"item-container\" [class.new]=\"this.notification.isNew\">\n  <div>\n    <ng-content select=\"ta-notification-item-icon\"></ng-content>\n  </div>\n  <div class=\"full-width\">\n    <div class=\"space-between\">\n      <div class=\"tenant-name\">{{ this.notification.tenantName }}</div>\n\n      <div class=\"extra-info\">\n        <ta-time-ago [date]=\"this.notification.date\"></ta-time-ago>\n      </div>\n    </div>\n    <div class=\"title\">\n      <ng-content select=\"ta-notification-item-title\"></ng-content>\n    </div>\n    <div class=\"cta-container space-between\">\n      <div class=\"info\">\n        <div>\n          <ng-content select=\"ta-notification-item-info\"></ng-content>\n        </div>\n        <div class=\"project-name\">\n          {{ this.notification.project?.name }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".item-container{display:flex;flex-direction:row;gap:var(--ta-space-md);padding:var(--ta-space-lg)}.item-container:hover,.item-container.new{background-color:var(--ta-surface-brand-tertiary)}.item-container .tenant-name{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-brand-primary)}.item-container .title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}.item-container .info{display:flex;flex-direction:row}.item-container .info .project-name{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-secondary)}.item-container .extra-info{font-size:var(--ta-font-key-xs-default-size);line-height:var(--ta-font-key-xs-default-line);font-weight:var(--ta-font-key-xs-default-weight);color:var(--ta-text-tertiary)}\n"] }]
        }], propDecorators: { notification: [{
                type: Input
            }] } });

class NotificationTitleComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: NotificationTitleComponent, isStandalone: true, selector: "ta-notification-item-title", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationTitleComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-item-title", standalone: true, imports: [], template: "<ng-content></ng-content>\n" }]
        }] });

class InvoicePaymentStatusChangedComponent extends AbstractNotificationTemplateComponent {
    constructor() {
        super(...arguments);
        this.template = this.sharedService.paymentStatusTemplate;
    }
    get paymentStatus() {
        return (this.notification.context.find((item) => item.key === "PaymentStatus")?.value ?? 0);
    }
    goTo() {
        if (!this.sharedService.routing || !this.sharedService.routing.invoice) {
            return;
        }
        super.goTo();
        this.sharedService.routing?.invoice({
            projectId: this.extractredirectContext("ProjectId"),
            invoiceId: this.extractredirectContext("InvoiceId"),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InvoicePaymentStatusChangedComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InvoicePaymentStatusChangedComponent, isStandalone: true, selector: "ta-invoice-payment-status-changed", usesInheritance: true, ngImport: i0, template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    <div class=\"flex-row g-space-sm\">\n      {{\n        \"notification.items.invoice-payment-status-changed.title\"\n          | translate : this.getTranslation()\n      }}\n      <div class=\"flex\">\n        @if (this.template) {\n        <ng-container\n          [ngTemplateOutlet]=\"this.template\"\n          [ngTemplateOutletContext]=\"{\n              data: this.paymentStatus,\n            }\"\n        ></ng-container>\n        }\n      </div>\n    </div>\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"bills\"></ta-notification-item-icon>\n</ta-notification-item>\n", styles: [""], dependencies: [{ kind: "component", type: IconComponent, selector: "ta-notification-item-icon", inputs: ["level", "icon"] }, { kind: "component", type: ItemComponent, selector: "ta-notification-item", inputs: ["notification"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NotificationTitleComponent, selector: "ta-notification-item-title" }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InvoicePaymentStatusChangedComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-invoice-payment-status-changed", standalone: true, imports: [
                        IconComponent,
                        ItemComponent,
                        NgIf,
                        NgTemplateOutlet,
                        NotificationTitleComponent,
                        TranslateModule,
                    ], template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    <div class=\"flex-row g-space-sm\">\n      {{\n        \"notification.items.invoice-payment-status-changed.title\"\n          | translate : this.getTranslation()\n      }}\n      <div class=\"flex\">\n        @if (this.template) {\n        <ng-container\n          [ngTemplateOutlet]=\"this.template\"\n          [ngTemplateOutletContext]=\"{\n              data: this.paymentStatus,\n            }\"\n        ></ng-container>\n        }\n      </div>\n    </div>\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"bills\"></ta-notification-item-icon>\n</ta-notification-item>\n" }]
        }] });

class NewInvoiceComponent extends AbstractNotificationTemplateComponent {
    goTo() {
        if (!this.sharedService.routing || !this.sharedService.routing.invoice) {
            return;
        }
        super.goTo();
        this.sharedService.routing?.invoice({
            projectId: this.extractredirectContext("ProjectId"),
            invoiceId: this.extractredirectContext("InvoiceId"),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NewInvoiceComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: NewInvoiceComponent, isStandalone: true, selector: "ta-new-invoice", usesInheritance: true, ngImport: i0, template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.new-invoice.title\" | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"bills\"></ta-notification-item-icon>\n</ta-notification-item>\n", styles: [""], dependencies: [{ kind: "component", type: IconComponent, selector: "ta-notification-item-icon", inputs: ["level", "icon"] }, { kind: "component", type: ItemComponent, selector: "ta-notification-item", inputs: ["notification"] }, { kind: "component", type: NotificationTitleComponent, selector: "ta-notification-item-title" }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NewInvoiceComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-new-invoice", standalone: true, imports: [
                        IconComponent,
                        ItemComponent,
                        NotificationTitleComponent,
                        TranslateModule,
                    ], template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.new-invoice.title\" | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"bills\"></ta-notification-item-icon>\n</ta-notification-item>\n" }]
        }] });

class NewQuotationVersionComponent extends AbstractNotificationTemplateComponent {
    goTo() {
        if (!this.sharedService.routing ||
            !this.sharedService.routing.quotationVersion) {
            return;
        }
        super.goTo();
        this.sharedService.routing?.quotationVersion({
            projectId: this.extractredirectContext("ProjectId"),
            quotationId: this.extractredirectContext("QuotationId"),
            quotationVersionId: this.extractredirectContext("QuotationVersionId"),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NewQuotationVersionComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: NewQuotationVersionComponent, isStandalone: true, selector: "ta-new-quotation-version", usesInheritance: true, ngImport: i0, template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.new-quotation-version.title\"\n        | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"article-line\"></ta-notification-item-icon>\n</ta-notification-item>\n", styles: [""], dependencies: [{ kind: "component", type: IconComponent, selector: "ta-notification-item-icon", inputs: ["level", "icon"] }, { kind: "component", type: ItemComponent, selector: "ta-notification-item", inputs: ["notification"] }, { kind: "component", type: NotificationTitleComponent, selector: "ta-notification-item-title" }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NewQuotationVersionComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-new-quotation-version", standalone: true, imports: [
                        IconComponent,
                        ItemComponent,
                        NotificationTitleComponent,
                        TranslateModule,
                    ], template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.new-quotation-version.title\"\n        | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"article-line\"></ta-notification-item-icon>\n</ta-notification-item>\n" }]
        }] });

class ProjectStatusChangedComponent extends AbstractNotificationTemplateComponent {
    constructor() {
        super(...arguments);
        this.template = this.sharedService.projectStatusTemplate;
    }
    get projectStatus() {
        return Number(this.extractContext("ProjectStatus"));
    }
    goTo() {
        if (!this.sharedService.routing || !this.sharedService.routing.project) {
            return;
        }
        super.goTo();
        this.sharedService.routing.project({
            projectId: this.extractredirectContext("ProjectId"),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ProjectStatusChangedComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ProjectStatusChangedComponent, isStandalone: true, selector: "ta-notification-project-status-changed", usesInheritance: true, ngImport: i0, template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    <div class=\"flex-row g-space-sm\">\n      {{\n        \"notification.items.project-status-changed.title\"\n          | translate : this.getTranslation()\n      }}\n      <div class=\"d-flex\">\n        @if (this.template) {\n        <ng-container\n          [ngTemplateOutlet]=\"this.template\"\n          [ngTemplateOutletContext]=\"{\n              data: this.projectStatus,\n            }\"\n        ></ng-container>\n        }\n      </div>\n    </div>\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"projects\"></ta-notification-item-icon>\n</ta-notification-item>\n", styles: [""], dependencies: [{ kind: "component", type: IconComponent, selector: "ta-notification-item-icon", inputs: ["level", "icon"] }, { kind: "component", type: ItemComponent, selector: "ta-notification-item", inputs: ["notification"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NotificationTitleComponent, selector: "ta-notification-item-title" }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ProjectStatusChangedComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-project-status-changed", standalone: true, imports: [
                        IconComponent,
                        ItemComponent,
                        NgIf,
                        NgTemplateOutlet,
                        NotificationTitleComponent,
                        TranslateModule,
                    ], template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    <div class=\"flex-row g-space-sm\">\n      {{\n        \"notification.items.project-status-changed.title\"\n          | translate : this.getTranslation()\n      }}\n      <div class=\"d-flex\">\n        @if (this.template) {\n        <ng-container\n          [ngTemplateOutlet]=\"this.template\"\n          [ngTemplateOutletContext]=\"{\n              data: this.projectStatus,\n            }\"\n        ></ng-container>\n        }\n      </div>\n    </div>\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"projects\"></ta-notification-item-icon>\n</ta-notification-item>\n" }]
        }] });

class TaskAssignedComponent extends AbstractNotificationTemplateComponent {
    goTo() {
        if (!this.sharedService.routing || !this.sharedService.routing.task) {
            return;
        }
        super.goTo();
        this.sharedService.routing?.task({
            taskId: this.extractredirectContext("TaskId"),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaskAssignedComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaskAssignedComponent, isStandalone: true, selector: "ta-task-assigned", usesInheritance: true, ngImport: i0, template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.task-assigned.title\"\n        | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"tasks\"></ta-notification-item-icon>\n</ta-notification-item>\n", styles: [""], dependencies: [{ kind: "component", type: IconComponent, selector: "ta-notification-item-icon", inputs: ["level", "icon"] }, { kind: "component", type: ItemComponent, selector: "ta-notification-item", inputs: ["notification"] }, { kind: "component", type: NotificationTitleComponent, selector: "ta-notification-item-title" }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaskAssignedComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-task-assigned", standalone: true, imports: [
                        IconComponent,
                        ItemComponent,
                        NotificationTitleComponent,
                        TranslateModule,
                    ], template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.task-assigned.title\"\n        | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"tasks\"></ta-notification-item-icon>\n</ta-notification-item>\n" }]
        }] });

class TaskDueTodayComponent extends AbstractNotificationTemplateComponent {
    goTo() {
        if (!this.sharedService.routing || !this.sharedService.routing.task) {
            return;
        }
        super.goTo();
        this.sharedService.routing?.task({
            taskId: this.extractredirectContext("TaskId"),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaskDueTodayComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaskDueTodayComponent, isStandalone: true, selector: "ta-task-due-today", usesInheritance: true, ngImport: i0, template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.task-due-today.title\"\n        | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"tasks\"></ta-notification-item-icon>\n</ta-notification-item>\n", styles: [""], dependencies: [{ kind: "component", type: IconComponent, selector: "ta-notification-item-icon", inputs: ["level", "icon"] }, { kind: "component", type: ItemComponent, selector: "ta-notification-item", inputs: ["notification"] }, { kind: "component", type: NotificationTitleComponent, selector: "ta-notification-item-title" }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaskDueTodayComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-task-due-today", standalone: true, imports: [
                        IconComponent,
                        ItemComponent,
                        NotificationTitleComponent,
                        TranslateModule,
                    ], template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.task-due-today.title\"\n        | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"tasks\"></ta-notification-item-icon>\n</ta-notification-item>\n" }]
        }] });

class TaskNewActivityComponent extends AbstractNotificationTemplateComponent {
    goTo() {
        if (!this.sharedService.routing || !this.sharedService.routing.task) {
            return;
        }
        super.goTo();
        this.sharedService.routing?.task({
            taskId: this.extractredirectContext("TaskId"),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaskNewActivityComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaskNewActivityComponent, isStandalone: true, selector: "ta-task-new-activity", usesInheritance: true, ngImport: i0, template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.task-new-activity.title\"\n        | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"tasks\"></ta-notification-item-icon>\n</ta-notification-item>\n", styles: [""], dependencies: [{ kind: "component", type: IconComponent, selector: "ta-notification-item-icon", inputs: ["level", "icon"] }, { kind: "component", type: ItemComponent, selector: "ta-notification-item", inputs: ["notification"] }, { kind: "component", type: NotificationTitleComponent, selector: "ta-notification-item-title" }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaskNewActivityComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-task-new-activity", standalone: true, imports: [
                        IconComponent,
                        ItemComponent,
                        NotificationTitleComponent,
                        TranslateModule,
                    ], template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.task-new-activity.title\"\n        | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"tasks\"></ta-notification-item-icon>\n</ta-notification-item>\n" }]
        }] });

class ToDoAssignedComponent extends AbstractNotificationTemplateComponent {
    goTo() {
        if (!this.sharedService.routing || !this.sharedService.routing.task) {
            return;
        }
        super.goTo();
        this.sharedService.routing?.task({
            taskId: this.extractredirectContext("TaskId"),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToDoAssignedComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ToDoAssignedComponent, isStandalone: true, selector: "ta-to-do-assigned", usesInheritance: true, ngImport: i0, template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.to-do-assigned.title\"\n        | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"tasks\"></ta-notification-item-icon>\n</ta-notification-item>\n", styles: [""], dependencies: [{ kind: "component", type: IconComponent, selector: "ta-notification-item-icon", inputs: ["level", "icon"] }, { kind: "component", type: ItemComponent, selector: "ta-notification-item", inputs: ["notification"] }, { kind: "component", type: NotificationTitleComponent, selector: "ta-notification-item-title" }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToDoAssignedComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-to-do-assigned", standalone: true, imports: [
                        IconComponent,
                        ItemComponent,
                        NotificationTitleComponent,
                        TranslateModule,
                    ], template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.to-do-assigned.title\"\n        | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"tasks\"></ta-notification-item-icon>\n</ta-notification-item>\n" }]
        }] });

class ToDoDueTodayComponent extends AbstractNotificationTemplateComponent {
    goTo() {
        if (!this.sharedService.routing || !this.sharedService.routing.task) {
            return;
        }
        super.goTo();
        this.sharedService.routing?.task({
            taskId: this.extractredirectContext("TaskId"),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToDoDueTodayComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ToDoDueTodayComponent, isStandalone: true, selector: "ta-to-do-due-today", usesInheritance: true, ngImport: i0, template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.to-do-due-today.title\"\n        | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"tasks\"></ta-notification-item-icon>\n</ta-notification-item>\n", styles: [""], dependencies: [{ kind: "component", type: IconComponent, selector: "ta-notification-item-icon", inputs: ["level", "icon"] }, { kind: "component", type: ItemComponent, selector: "ta-notification-item", inputs: ["notification"] }, { kind: "component", type: NotificationTitleComponent, selector: "ta-notification-item-title" }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToDoDueTodayComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-to-do-due-today", standalone: true, imports: [
                        IconComponent,
                        ItemComponent,
                        NotificationTitleComponent,
                        TranslateModule,
                    ], template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.to-do-due-today.title\"\n        | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"tasks\"></ta-notification-item-icon>\n</ta-notification-item>\n" }]
        }] });

class UserTaggedInConversationComponent extends AbstractNotificationTemplateComponent {
    goTo() {
        if (!this.sharedService.routing || !this.sharedService.routing.task) {
            return;
        }
        super.goTo();
        this.sharedService.routing?.task({
            taskId: this.extractredirectContext("TaskId"),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UserTaggedInConversationComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: UserTaggedInConversationComponent, isStandalone: true, selector: "ta-user-tagged-in-conversation", usesInheritance: true, ngImport: i0, template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.user-tagged-in-conversation.title\"\n        | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"tasks\"></ta-notification-item-icon>\n</ta-notification-item>\n", styles: [""], dependencies: [{ kind: "component", type: IconComponent, selector: "ta-notification-item-icon", inputs: ["level", "icon"] }, { kind: "component", type: ItemComponent, selector: "ta-notification-item", inputs: ["notification"] }, { kind: "component", type: NotificationTitleComponent, selector: "ta-notification-item-title" }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UserTaggedInConversationComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-user-tagged-in-conversation", standalone: true, imports: [
                        IconComponent,
                        ItemComponent,
                        NotificationTitleComponent,
                        TranslateModule,
                    ], template: "<ta-notification-item [notification]=\"this.notification\" (click)=\"this.goTo()\">\n  <ta-notification-item-title>\n    {{\n      \"notification.items.user-tagged-in-conversation.title\"\n        | translate : this.getTranslation()\n    }}\n  </ta-notification-item-title>\n  <ta-notification-item-icon icon=\"tasks\"></ta-notification-item-icon>\n</ta-notification-item>\n" }]
        }] });

class ContainerComponent extends TaBaseComponent {
    get notifications$() {
        return this._notificationDataService.list
            .get$(this._notificationDataService.computeKey(this.filters))
            .pipe(tap$1((list) => this.nbChanged.emit(list.length)));
    }
    constructor(_notificationDataService, _sharedService) {
        super();
        this._notificationDataService = _notificationDataService;
        this._sharedService = _sharedService;
        this.filters = null;
        this.templates = null;
        this.services = null;
        this.routing = null;
        this.nbChanged = new EventEmitter();
    }
    ngOnInit() {
        this.requestState.asked();
        this._registerSubscription(this._notificationDataService
            .fetchNotifications$(this.filters)
            .subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        }));
        if (this.templates) {
            this._sharedService.paymentStatusTemplate = this.templates?.paymentStatus;
            this._sharedService.projectStatusTemplate = this.templates?.projectStatus;
        }
        if (this.services) {
            this._sharedService.getProjects$ = this.services.getProjects$;
        }
        if (this.routing) {
            this._sharedService.routing = this.routing;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ContainerComponent, deps: [{ token: TaNotificationDataService }, { token: TaNotificationSharedService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ContainerComponent, isStandalone: true, selector: "ta-notification-container", inputs: { filters: "filters", templates: "templates", services: "services", routing: "routing" }, outputs: { nbChanged: "nbChanged" }, usesInheritance: true, ngImport: i0, template: "<ta-loader\n  [isLoading]=\"this.requestState.isLoading()\"\n  *ngLet=\"this.notifications$ | async as notifications\"\n>\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <ta-empty\n      [isEmpty]=\"!notifications || notifications.length === 0\"\n      icon=\"ghost\"\n      [isLight]=\"false\"\n      text=\"notification.empty\"\n    >\n      <div class=\"notification-container\">\n        @for (notif of this.notifications; track notif) {\n        <div class=\"item-container c-pointer\">\n          @switch (notif.type) { @case ('ProjectStatusChanged') {\n          <ta-notification-project-status-changed\n            [notification]=\"notif\"\n          ></ta-notification-project-status-changed>\n          } @case ('NewQuotationVersion') {\n          <ta-new-quotation-version\n            [notification]=\"notif\"\n          ></ta-new-quotation-version>\n          } @case ('NewInvoice') {\n          <ta-new-invoice [notification]=\"notif\"></ta-new-invoice>\n          } @case ('InvoicePaymentStatusChanged') {\n          <ta-invoice-payment-status-changed\n            [notification]=\"notif\"\n          ></ta-invoice-payment-status-changed>\n          } @case ('TaskAssigned') {\n          <ta-task-assigned [notification]=\"notif\"></ta-task-assigned>\n          } @case ('ToDoAssigned') {\n          <ta-to-do-assigned [notification]=\"notif\"></ta-to-do-assigned>\n          } @case ('TaskDueToday') {\n          <ta-task-due-today [notification]=\"notif\"></ta-task-due-today>\n          } @case ('ToDoDueToday') {\n          <ta-to-do-due-today [notification]=\"notif\"></ta-to-do-due-today>\n          } @case ('TaskNewActivity') {\n          <ta-task-new-activity [notification]=\"notif\"></ta-task-new-activity>\n          } @case ('UserTaggedInConversation') {\n          <ta-user-tagged-in-conversation\n            [notification]=\"notif\"\n          ></ta-user-tagged-in-conversation>\n          } }\n        </div>\n        }\n      </div>\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n", styles: [".item-container{border-bottom:1px solid var(--ta-border-primary)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: InvoicePaymentStatusChangedComponent, selector: "ta-invoice-payment-status-changed" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: NewInvoiceComponent, selector: "ta-new-invoice" }, { kind: "component", type: NewQuotationVersionComponent, selector: "ta-new-quotation-version" }, { kind: "component", type: ProjectStatusChangedComponent, selector: "ta-notification-project-status-changed" }, { kind: "component", type: TaskAssignedComponent, selector: "ta-task-assigned" }, { kind: "component", type: TaskDueTodayComponent, selector: "ta-task-due-today" }, { kind: "component", type: TaskNewActivityComponent, selector: "ta-task-new-activity" }, { kind: "component", type: ToDoAssignedComponent, selector: "ta-to-do-assigned" }, { kind: "component", type: ToDoDueTodayComponent, selector: "ta-to-do-due-today" }, { kind: "component", type: UserTaggedInConversationComponent, selector: "ta-user-tagged-in-conversation" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-container", standalone: true, imports: [
                        AsyncPipe,
                        EmptyComponent,
                        ErrorComponent,
                        InvoicePaymentStatusChangedComponent,
                        LoaderComponent,
                        NewInvoiceComponent,
                        NewQuotationVersionComponent,
                        NgFor,
                        ProjectStatusChangedComponent,
                        TaskAssignedComponent,
                        TaskDueTodayComponent,
                        TaskNewActivityComponent,
                        ToDoAssignedComponent,
                        ToDoDueTodayComponent,
                        UserTaggedInConversationComponent,
                    ], template: "<ta-loader\n  [isLoading]=\"this.requestState.isLoading()\"\n  *ngLet=\"this.notifications$ | async as notifications\"\n>\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <ta-empty\n      [isEmpty]=\"!notifications || notifications.length === 0\"\n      icon=\"ghost\"\n      [isLight]=\"false\"\n      text=\"notification.empty\"\n    >\n      <div class=\"notification-container\">\n        @for (notif of this.notifications; track notif) {\n        <div class=\"item-container c-pointer\">\n          @switch (notif.type) { @case ('ProjectStatusChanged') {\n          <ta-notification-project-status-changed\n            [notification]=\"notif\"\n          ></ta-notification-project-status-changed>\n          } @case ('NewQuotationVersion') {\n          <ta-new-quotation-version\n            [notification]=\"notif\"\n          ></ta-new-quotation-version>\n          } @case ('NewInvoice') {\n          <ta-new-invoice [notification]=\"notif\"></ta-new-invoice>\n          } @case ('InvoicePaymentStatusChanged') {\n          <ta-invoice-payment-status-changed\n            [notification]=\"notif\"\n          ></ta-invoice-payment-status-changed>\n          } @case ('TaskAssigned') {\n          <ta-task-assigned [notification]=\"notif\"></ta-task-assigned>\n          } @case ('ToDoAssigned') {\n          <ta-to-do-assigned [notification]=\"notif\"></ta-to-do-assigned>\n          } @case ('TaskDueToday') {\n          <ta-task-due-today [notification]=\"notif\"></ta-task-due-today>\n          } @case ('ToDoDueToday') {\n          <ta-to-do-due-today [notification]=\"notif\"></ta-to-do-due-today>\n          } @case ('TaskNewActivity') {\n          <ta-task-new-activity [notification]=\"notif\"></ta-task-new-activity>\n          } @case ('UserTaggedInConversation') {\n          <ta-user-tagged-in-conversation\n            [notification]=\"notif\"\n          ></ta-user-tagged-in-conversation>\n          } }\n        </div>\n        }\n      </div>\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n", styles: [".item-container{border-bottom:1px solid var(--ta-border-primary)}\n"] }]
        }], ctorParameters: () => [{ type: TaNotificationDataService }, { type: TaNotificationSharedService }], propDecorators: { filters: [{
                type: Input
            }], templates: [{
                type: Input
            }], services: [{
                type: Input
            }], routing: [{
                type: Input
            }], nbChanged: [{
                type: Output
            }] } });

class BulletComponent extends TaBaseComponent {
    get number$() {
        return this._notificationDataService.count.get$(this._notificationDataService.computeKey(this.filters));
    }
    constructor(_notificationDataService) {
        super();
        this._notificationDataService = _notificationDataService;
        this.filters = null;
    }
    ngOnInit() {
        this.requestState.asked();
        this._notificationDataService
            .fetchNumberOfNotifications$(this.filters)
            .subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BulletComponent, deps: [{ token: TaNotificationDataService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: BulletComponent, isStandalone: true, selector: "ta-notification-bullet", inputs: { filters: "filters" }, usesInheritance: true, ngImport: i0, template: "<ta-bullet type=\"notif\" size=\"md\">\n  {{ this.number$ | async }}\n</ta-bullet>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: BulletComponent$1, selector: "ta-bullet", inputs: ["size", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BulletComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-bullet", standalone: true, imports: [AsyncPipe, BulletComponent$1], template: "<ta-bullet type=\"notif\" size=\"md\">\n  {{ this.number$ | async }}\n</ta-bullet>\n" }]
        }], ctorParameters: () => [{ type: TaNotificationDataService }], propDecorators: { filters: [{
                type: Input
            }] } });

class ItemInfoComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ItemInfoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ItemInfoComponent, isStandalone: true, selector: "ta-item-info", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ItemInfoComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-item-info", standalone: true, imports: [], template: "<ng-content></ng-content>\n" }]
        }] });

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaNotificationModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { NotificationInlineComponent, ContainerComponent, BulletComponent } from '@ta/library-name';
 */
class TaNotificationModule {
    static forRoot() {
        return {
            ngModule: TaNotificationModule,
            providers: [
                { provide: LAZY_SERVICE_TOKEN, useExisting: TaNotificationService },
                TaNotificationDataService,
                TaNotificationSharedService,
            ],
        };
    }
    constructor() {
        TaTranslationNotification.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationModule, imports: [CommonModule,
            TaDirectivePipeModule,
            TaIconsModule,
            TaUiModule,
            TaContainerModule,
            TranslatePipe,
            NotificationBoxComponent,
            NotificationInlineComponent,
            ContainerComponent,
            ItemComponent,
            IconComponent,
            ItemInfoComponent,
            ProjectStatusChangedComponent,
            NewQuotationVersionComponent,
            NewInvoiceComponent,
            InvoicePaymentStatusChangedComponent,
            NotificationTitleComponent,
            TaskAssignedComponent,
            ToDoAssignedComponent,
            TaskDueTodayComponent,
            ToDoDueTodayComponent,
            TaskNewActivityComponent,
            UserTaggedInConversationComponent,
            BulletComponent], exports: [NotificationInlineComponent,
            ContainerComponent,
            BulletComponent,
            NotificationBoxComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationModule, imports: [CommonModule,
            TaDirectivePipeModule,
            TaIconsModule,
            TaUiModule,
            TaContainerModule,
            NotificationBoxComponent,
            NotificationInlineComponent,
            ContainerComponent,
            ItemComponent,
            IconComponent,
            ProjectStatusChangedComponent,
            NewQuotationVersionComponent,
            NewInvoiceComponent,
            InvoicePaymentStatusChangedComponent,
            TaskAssignedComponent,
            ToDoAssignedComponent,
            TaskDueTodayComponent,
            ToDoDueTodayComponent,
            TaskNewActivityComponent,
            UserTaggedInConversationComponent,
            BulletComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        TaDirectivePipeModule,
                        TaIconsModule,
                        TaUiModule,
                        TaContainerModule,
                        TranslatePipe,
                        NotificationBoxComponent,
                        NotificationInlineComponent,
                        ContainerComponent,
                        ItemComponent,
                        IconComponent,
                        ItemInfoComponent,
                        ProjectStatusChangedComponent,
                        NewQuotationVersionComponent,
                        NewInvoiceComponent,
                        InvoicePaymentStatusChangedComponent,
                        NotificationTitleComponent,
                        TaskAssignedComponent,
                        ToDoAssignedComponent,
                        TaskDueTodayComponent,
                        ToDoDueTodayComponent,
                        TaskNewActivityComponent,
                        UserTaggedInConversationComponent,
                        BulletComponent,
                    ],
                    declarations: [],
                    exports: [
                        NotificationInlineComponent,
                        ContainerComponent,
                        BulletComponent,
                        NotificationBoxComponent,
                    ],
                }]
        }], ctorParameters: () => [] });
class TaNotificationProvider {
    static forRoot() {
        return {
            ngModule: TaNotificationProvider,
            providers: [
                { provide: LAZY_SERVICE_TOKEN, useExisting: TaNotificationService },
                TaNotificationDataService,
                TaNotificationSharedService,
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationProvider, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationProvider }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationProvider }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationProvider, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [],
                    exports: [],
                }]
        }] });

/*
 * Public API Surface of notification
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BulletComponent, ContainerComponent, ENotificationCode, LAZY_SERVICE_TOKEN, NotificationBoxComponent, NotificationInlineComponent, TaNotificationModule, TaNotificationProvider, TaNotificationService };
//# sourceMappingURL=ta-notification.mjs.map
