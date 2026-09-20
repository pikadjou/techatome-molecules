import { OnDestroy, OnInit } from '@angular/core';
import { InputChoices, InputLocality, InputTextBox } from '@ta/form-model';
import { TaAbstractInputComponent } from '@ta/form-input';
import { AddressLocality } from '@ta/utils';
import * as i0 from "@angular/core";
type LocalityValue = AddressLocality | AddressLocality[] | null;
/**
 * Choix d'une localité (code postal + commune) dans la liste officielle du pays.
 *
 * La liste complète du pays est gardée en mémoire ; la recherche filtre côté
 * client. Seul un pays sans données ouvre la saisie libre (code postal + ville).
 * Le composant porte la valeur métier (`AddressLocality`) : les champs internes
 * ne manipulent que des identifiants ou du texte.
 */
export declare class InputLocalityComponent extends TaAbstractInputComponent<InputLocality, LocalityValue> implements OnInit, OnDestroy {
    private _choicesRef?;
    private _localityItemTpl;
    /** `false` tant que le pays courant n'a pas de liste : on bascule en saisie libre. */
    readonly available: import("@angular/core").WritableSignal<boolean>;
    choicesInput: InputChoices;
    cityInput: InputTextBox;
    zipCodeInput: InputTextBox;
    private readonly _lookup;
    private _currentCountry;
    private _isApplyingValue;
    private _localities;
    private _localityMap;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    onChoicesChanged(): void;
    onFreeInputChanged(): void;
    private _fields;
    private _pack;
    private _setValue;
    /** Reflète `input.value` dans les champs — sans repasser par leurs `valueChanged`. */
    private _applyValueToFields;
    private _searchLocalities;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputLocalityComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputLocalityComponent, "ta-input-locality", never, {}, {}, never, never, true, never>;
}
export {};
