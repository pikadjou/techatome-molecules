import { EventEmitter } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class ContainerValidationComponent extends TaBaseComponent {
    disabled: import("@angular/core").InputSignal<boolean>;
    title: import("@angular/core").InputSignal<string>;
    subtitle: import("@angular/core").InputSignal<string>;
    validated: EventEmitter<any>;
    isModalOpen: import("@angular/core").WritableSignal<boolean>;
    constructor();
    openModal(): void;
    onNoClick(): void;
    onYesClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContainerValidationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContainerValidationComponent, "ta-container-validation", never, { "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "subtitle": { "alias": "subtitle"; "required": false; "isSignal": true; }; }, { "validated": "validated"; }, never, ["*"], true, never>;
}
