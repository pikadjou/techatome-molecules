import { EventEmitter } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import { ENotificationCode } from "../../../enum";
import * as i0 from "@angular/core";
export declare class NotificationInlineComponent extends TaBaseComponent {
    messageInput: import("@angular/core").InputSignal<string>;
    code: import("@angular/core").InputSignal<ENotificationCode>;
    showClose: import("@angular/core").InputSignal<boolean>;
    askClose: EventEmitter<null>;
    private _matDialog;
    showMessage: boolean;
    get message(): string;
    get isError(): boolean;
    get isWarning(): boolean;
    get isInformation(): boolean;
    get isSuccess(): boolean;
    constructor();
    close: () => void;
    getIcon(): string;
    getTypeClass(): string;
    openErrorBox(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationInlineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationInlineComponent, "ta-notification-inline", never, { "messageInput": { "alias": "message"; "required": false; "isSignal": true; }; "code": { "alias": "code"; "required": false; "isSignal": true; }; "showClose": { "alias": "showClose"; "required": false; "isSignal": true; }; }, { "askClose": "askClose"; }, never, ["*"], true, never>;
}
