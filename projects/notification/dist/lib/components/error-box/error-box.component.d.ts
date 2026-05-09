import { ServerError } from "@ta/server";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class ErrorBoxModal extends TaBaseComponent {
    open: import("@angular/core").InputSignal<boolean>;
    closeEvent: import("@angular/core").OutputEmitterRef<void>;
    protected _notificationService: import("../../services/notification.service").TaNotificationService;
    private readonly _errorService;
    readonly errorList: import("@angular/core").WritableSignal<ServerError[]>;
    copyContent: (entity: ServerError) => Promise<void>;
    private _formatEntityForClipboard;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorBoxModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErrorBoxModal, "ta-error-box", never, { "open": { "alias": "open"; "required": true; "isSignal": true; }; }, { "closeEvent": "closeEvent"; }, never, never, true, never>;
}
