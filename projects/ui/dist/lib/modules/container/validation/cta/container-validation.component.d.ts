import { EventEmitter } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
/** Demande confirmation avant l'action : `modal` interrompt, `inline` remplace le déclencheur par un encart. */
export declare class ContainerValidationComponent extends TaBaseComponent {
    disabled: import("@angular/core").InputSignal<boolean>;
    title: import("@angular/core").InputSignal<string>;
    subtitle: import("@angular/core").InputSignal<string>;
    variant: import("@angular/core").InputSignal<"modal" | "inline">;
    validated: EventEmitter<any>;
    isModalOpen: import("@angular/core").WritableSignal<boolean>;
    readonly isInlineOpen: import("@angular/core").Signal<boolean>;
    constructor();
    openModal(): void;
    onNoClick(): void;
    onYesClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContainerValidationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContainerValidationComponent, "ta-container-validation", never, { "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "subtitle": { "alias": "subtitle"; "required": false; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; }, { "validated": "validated"; }, never, ["*"], true, never>;
}
