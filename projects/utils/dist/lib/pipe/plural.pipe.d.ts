import { PipeTransform } from "@angular/core";
import * as i0 from "@angular/core";
export declare class PluralTranslatePipe implements PipeTransform {
    /**
     * Le pluriel suit la langue affichée : zéro est un singulier en français (« 0 résultat »),
     * un pluriel en anglais, néerlandais et allemand (« 0 results »).
     */
    private readonly _rules;
    transform(key: string, number: number): string;
    private _rulesOf;
    static ɵfac: i0.ɵɵFactoryDeclaration<PluralTranslatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PluralTranslatePipe, "pluralTranslate", true>;
}
