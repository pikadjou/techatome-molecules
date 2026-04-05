import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class ErrorComponent extends TaBaseComponent {
    message: import("@angular/core").InputSignal<string>;
    code: import("@angular/core").InputSignal<number>;
    showRetry: import("@angular/core").InputSignal<boolean>;
    retryLabel: import("@angular/core").InputSignal<string>;
    retry: import("@angular/core").OutputEmitterRef<void>;
    onRetry(): void;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErrorComponent, "ta-error", never, { "message": { "alias": "message"; "required": false; "isSignal": true; }; "code": { "alias": "code"; "required": false; "isSignal": true; }; "showRetry": { "alias": "showRetry"; "required": false; "isSignal": true; }; "retryLabel": { "alias": "retryLabel"; "required": false; "isSignal": true; }; }, { "retry": "retry"; }, never, ["*"], true, never>;
}
