import { EventEmitter } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
/**
 * Demande confirmation avant de laisser passer l'action qu'il enveloppe.
 *
 * `modal` interrompt : c'est la forme qui convient quand la conséquence dépasse
 * ce qui est à l'écran. `inline` remplace le déclencheur par un encart de
 * confirmation, et garde visible ce sur quoi on agit — la ligne, la carte, la
 * personne — là où une modale l'aurait recouvert.
 */
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
