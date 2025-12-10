import { ENotificationCode } from "../../../enum";
import * as i0 from "@angular/core";
export declare class ToastComponent {
    code: ENotificationCode;
    readonly getTypeClass: (code: ENotificationCode) => "" | "danger" | "info" | "warning" | "success";
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "ta-toast", never, { "code": { "alias": "code"; "required": false; }; }, {}, never, ["*"], true, never>;
}
