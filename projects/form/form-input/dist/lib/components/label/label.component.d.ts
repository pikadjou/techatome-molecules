import { ValidatorFn, Validators } from "@angular/forms";
import * as i0 from "@angular/core";
export declare class FormLabelComponent {
    inputModel: import("@angular/core").InputSignal<{
        label: string;
        validators: ValidatorFn[];
    }>;
    withMarginBottom: import("@angular/core").InputSignal<boolean>;
    /**
     * `field` intitule un champ de saisie ; `choice` enonce l'option d'une case,
     * d'un radio ou d'un interrupteur — c'est alors du texte courant, pas un
     * intitule, et il se lit a la taille du corps de texte.
     */
    variant: import("@angular/core").InputSignal<"field" | "choice">;
    readonly validators: typeof Validators;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormLabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormLabelComponent, "ta-form-label", never, { "inputModel": { "alias": "input"; "required": true; "isSignal": true; }; "withMarginBottom": { "alias": "withMarginBottom"; "required": false; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
