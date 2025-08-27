import { CamIconType } from '@ta/icons';
import { CamAbstractComponent } from '@ta/utils';
import { Domain, Level, PermissionFeature } from '../../services/permissions.service';
import * as i0 from "@angular/core";
export declare class GuardComponent extends CamAbstractComponent {
    level: Level | string;
    feature: PermissionFeature | Domain | string;
    canDisplayErrorMessage: boolean;
    private readonly _permissionsService;
    get noAccessIcon(): CamIconType;
    constructor();
    isGuardValid(): boolean;
    goToLogin(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GuardComponent, "ta-guard", never, { "level": { "alias": "level"; "required": false; }; "feature": { "alias": "feature"; "required": false; }; "canDisplayErrorMessage": { "alias": "canDisplayErrorMessage"; "required": false; }; }, {}, never, ["*"], true, never>;
}
