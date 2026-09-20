import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { InputAddress, InputBase, InputChoices, InputLocality, InputTextBox } from '@ta/form-model';
import { TaAbstractInputComponent } from '@ta/form-input';
import { AddressLocality } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class InputAddressComponent extends TaAbstractInputComponent<InputAddress> implements OnInit, AfterViewInit, OnDestroy {
    googleSearchInput?: ElementRef<HTMLInputElement>;
    private _countryItemTpl;
    searchEnabled: boolean;
    complementInput: InputTextBox<string>;
    countryInput: InputChoices;
    detailsInputs: InputBase<any>[];
    localityInput: InputLocality;
    numberInput: InputTextBox<string>;
    streetInput: InputTextBox<string>;
    private readonly _translate;
    private _autocomplete;
    private _country$;
    private _currentCountry;
    private _geo;
    private _isApplyingValue;
    private _locality;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onSubInputChanged(): void;
    onLocalityChanged(value: AddressLocality | AddressLocality[] | null): void;
    private _refreshValidity;
    private _applyValueToFields;
    private _isGoogleAvailable;
    private _bindAutocomplete;
    private _parseAddress;
    /**
     * Pose les champs sans déclencher leurs `valueChanged`.
     *
     * Le pays part avant la localité : la brique localité vide son choix à chaque
     * changement de pays, et écraserait sinon la localité qu'on vient de poser.
     */
    private _setFields;
    private _updateValueFromInputs;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputAddressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputAddressComponent, "ta-input-address", never, {}, {}, never, never, true, never>;
}
