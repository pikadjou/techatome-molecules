import { MatDialog } from "@angular/material/dialog";
import { ServerError } from "@ta/server";
import { TaBaseModal } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class ErrorBoxModal extends TaBaseModal {
    protected _notificationService: import("../../services/notification.service").TaNotificationService;
    private readonly _errorService;
    readonly errorList: import("@angular/core").WritableSignal<ServerError[]>;
    copyContent: (entity: ServerError) => Promise<void>;
    private _formatEntityForClipboard;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorBoxModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErrorBoxModal, "ta-error-box", never, {}, {}, never, never, true, never>;
}
export declare function openErrorModal(dialog: MatDialog): import("@angular/material/dialog").MatDialogRef<ErrorBoxModal, any>;
