import { TaIconType } from "@ta/icons";
import { TaAbstractComponent } from "@ta/utils";
import { Level } from "../../services/permissions.service";
import * as i0 from "@angular/core";
export declare class GuardComponent extends TaAbstractComponent {
    level: import("@angular/core").InputSignal<Level | undefined>;
    feature: import("@angular/core").InputSignal<string | undefined>;
    role: import("@angular/core").InputSignal<string | undefined>;
    canDisplayErrorMessage: import("@angular/core").InputSignal<boolean>;
    private readonly _permissionsService;
    get noAccessIcon(): TaIconType;
    constructor();
    isGuardValid$(): import("rxjs").Observable<boolean>;
    goToLogin(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GuardComponent, "ta-guard", never, { "level": { "alias": "level"; "required": false; "isSignal": true; }; "feature": { "alias": "feature"; "required": false; "isSignal": true; }; "role": { "alias": "role"; "required": false; "isSignal": true; }; "canDisplayErrorMessage": { "alias": "canDisplayErrorMessage"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
