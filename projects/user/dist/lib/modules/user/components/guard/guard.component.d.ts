import { TaIconType } from "@ta/icons";
import { TaAbstractComponent } from "@ta/utils";
import { Level } from "../../services/permissions.service";
import * as i0 from "@angular/core";
export declare class GuardComponent extends TaAbstractComponent {
    level?: Level;
    feature?: string;
    role?: string;
    canDisplayErrorMessage: boolean;
    private readonly _permissionsService;
    get noAccessIcon(): TaIconType;
    constructor();
    isGuardValid$(): import("rxjs").Observable<boolean>;
    goToLogin(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GuardComponent, "ta-guard", never, { "level": { "alias": "level"; "required": false; }; "feature": { "alias": "feature"; "required": false; }; "role": { "alias": "role"; "required": false; }; "canDisplayErrorMessage": { "alias": "canDisplayErrorMessage"; "required": false; }; }, {}, never, ["*"], true, never>;
}
