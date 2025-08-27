import { EventEmitter } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import { ENotificationCode } from '../../../enum';
import * as i0 from "@angular/core";
export declare class NotificationInlineComponent extends TaBaseComponent {
    set message(value: string);
    code: ENotificationCode;
    showClose: boolean;
    askClose: EventEmitter<null>;
    private _matDialog;
    showMessage: boolean;
    get message(): string;
    get isError(): boolean;
    get isWarning(): boolean;
    get isInformation(): boolean;
    get isSuccess(): boolean;
    private _message;
    constructor();
    close: () => void;
    getIcon(): string;
    getTypeClass(): string;
    openErrorBox(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationInlineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationInlineComponent, "ta-notification-inline", never, { "message": { "alias": "message"; "required": false; }; "code": { "alias": "code"; "required": false; }; "showClose": { "alias": "showClose"; "required": false; }; }, { "askClose": "askClose"; }, never, ["*"], true, never>;
}
