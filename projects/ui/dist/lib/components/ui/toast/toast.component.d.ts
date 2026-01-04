import { ENotificationCode } from "../../../enum";
import * as i0 from "@angular/core";
export declare class ToastComponent {
    code: import("@angular/core").InputSignal<ENotificationCode>;
    readonly getTypeClass: (code: ENotificationCode) => "danger" | "warning" | "success" | "info" | "";
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "ta-toast", never, { "code": { "alias": "code"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
