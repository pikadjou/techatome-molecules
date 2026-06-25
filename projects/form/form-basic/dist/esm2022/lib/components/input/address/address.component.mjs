import { Component, ViewChild, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subject, of, switchMap } from 'rxjs';
import { InputChoices, InputTextBox, } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { FormLabelComponent, InputChoicesComponent, TaAbstractInputComponent, TextBoxComponent, } from '@ta/form-input';
import { TranslatePipe } from '@ta/translation';
import { TaAddressLookupService, getCountryList } from '@ta/utils';
import { TaTranslationForm } from '../../../translation.service';
import * as i0 from "@angular/core";
export class InputAddressComponent extends TaAbstractInputComponent {
    constructor() {
        super();
        // La recherche Google n'est affichée que si l'API Maps/Places a bien été
        // injectée dans l'application (via provideGoogleMaps()).
        this.searchEnabled = false;
        // Le choix code postal / commune remplace les champs libres tant que le pays
        // a des données ; sinon on bascule sur la saisie libre (zipCode + ville).
        this.localityAvailable = true;
        this.cityInput = new InputTextBox({
            key: 'displayCity',
            label: 'form.address.city',
            validators: [Validators.required],
        });
        this.complementInput = new InputTextBox({
            key: 'displayFloor',
            label: 'form.address.floor',
        });
        this.numberInput = new InputTextBox({
            key: 'displayNumber',
            label: 'form.address.number',
        });
        this.streetInput = new InputTextBox({
            key: 'displayStreet',
            label: 'form.address.street',
            validators: [Validators.required],
        });
        this.zipCodeInput = new InputTextBox({
            key: 'displayZipCode',
            label: 'form.address.zipCode',
            validators: [Validators.required],
        });
        this._lookup = inject(TaAddressLookupService);
        this._translate = inject(TranslateService);
        this._country$ = new Subject();
        this._currentCountry = null;
        this._geo = { latitude: null, longitude: null, placeId: null };
        this._isApplyingValue = false;
        this._localities = [];
        this._localityMap = new Map();
        TaTranslationForm.getInstance();
        this.countryInput = new InputChoices({
            key: 'displayCountry',
            label: 'form.address.country',
            options$: of([]),
            validators: [Validators.required],
            value: ['BE'],
            withSearch: true,
        });
        this.localityInput = new InputChoices({
            // La liste complète du pays est gardée en mémoire ; advancedSearch$ filtre
            // côté client et plafonne l'affichage.
            advancedSearch$: (search) => of(this._searchLocalities(search)),
            key: 'displayLocality',
            label: 'form.address.locality',
            validators: [Validators.required],
            withSearch: true,
        });
        this.detailsInputs = [
            this.cityInput,
            this.complementInput,
            this.countryInput,
            this.localityInput,
            this.numberInput,
            this.streetInput,
            this.zipCodeInput,
        ];
    }
    ngOnInit() {
        super.ngOnInit();
        this.searchEnabled = this._isGoogleAvailable();
        // Rendu d'une option (le composant gère la boucle et l'empilement vertical).
        this.localityInput.choiceTemplate = { one: this._localityItemTpl };
        this.countryInput.choiceTemplate = { one: this._countryItemTpl };
        this.countryInput.options$ = of(getCountryList(this._translate.currentLang, this.input.priorityCountries).map(c => ({
            data: c,
            id: c.code,
            name: c.name,
        })));
        // Pour chaque pays, on récupère TOUTE la liste des codes postaux / communes ;
        // la recherche se fait ensuite côté client (advancedSearch$).
        this._registerSubscription(this._country$
            .pipe(switchMap(country => this._lookup.getCountryPostalCodes(country)))
            .subscribe(localities => {
            this._localities = localities;
            this._rebuildLocalityMap(localities);
            this.localityAvailable = localities.length > 0;
            this._choicesRef?.refresh();
        }));
        if (this.input.value) {
            this._applyValueToFields(this.input.value);
        }
        else {
            // Adresse vide : on sème le pays par défaut (Belgique) dans la valeur.
            this._updateValueFromInputs();
        }
        this._currentCountry = this.countryInput.value?.[0] ?? null;
        this._country$.next(this.countryInput.value?.[0] ?? '');
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.searchEnabled) {
            this._bindAutocomplete(this.googleSearchInput?.nativeElement);
        }
        this._choicesRef?.refresh();
    }
    ngOnDestroy() {
        if (this._autocomplete) {
            google?.maps?.event?.clearInstanceListeners?.(this._autocomplete);
            this._autocomplete.unbindAll?.();
        }
        this.detailsInputs.forEach(i => i.destroy());
        this._country$.complete();
        super.ngOnDestroy();
    }
    onSubInputChanged() {
        if (this._isApplyingValue) {
            return;
        }
        // Si le pays change, on recharge la liste et on réinitialise le choix.
        const country = this.countryInput.value?.[0] ?? null;
        if (country !== this._currentCountry) {
            this._currentCountry = country;
            this.localityInput.value = [];
            this._country$.next(country ?? '');
        }
        this._updateValueFromInputs();
        this._refreshValidity();
    }
    onLocalitySelected() {
        const id = this.localityInput.value?.[0];
        const locality = id ? this._localityMap.get(id) : undefined;
        if (!locality) {
            return;
        }
        this._geo = { latitude: locality.latitude, longitude: locality.longitude, placeId: null };
        this._isApplyingValue = true;
        this.zipCodeInput.value = locality.zipCode;
        this.cityInput.value = locality.city;
        this._isApplyingValue = false;
        this._updateValueFromInputs();
        this._refreshValidity();
    }
    _searchLocalities(search) {
        const term = (search ?? '').trim().toLowerCase();
        const matched = term
            ? this._localities.filter(locality => `${locality.zipCode} ${locality.city}`.toLowerCase().includes(term))
            : this._localities;
        return matched.map(locality => this._toOption(locality));
    }
    _toOption(locality) {
        return {
            data: locality,
            id: `${locality.zipCode}__${locality.city}`,
            name: `${locality.zipCode} ${locality.city}`,
        };
    }
    _rebuildLocalityMap(localities) {
        this._localityMap.clear();
        localities.forEach(locality => this._localityMap.set(`${locality.zipCode}__${locality.city}`, locality));
    }
    _refreshValidity() {
        this.input.formControl?.setErrors(this.detailsInputs.some(i => i.formControl?.invalid ?? false) ? { invalid: true } : null);
    }
    _applyValueToFields(value) {
        this._geo = {
            latitude: value.latitude ?? null,
            longitude: value.longitude ?? null,
            placeId: value.placeId ?? null,
        };
        this._setFields({
            city: value.city ?? '',
            country: value.country || 'BE',
            floor: value.floor ?? '',
            number: value.number ?? '',
            street: value.street ?? '',
            zipCode: value.zipCode ?? '',
        });
        // Présélection du choix code postal / commune (affiché une fois la liste chargée).
        if (value.zipCode && value.city) {
            this.localityInput.value = [`${value.zipCode}__${value.city}`];
        }
    }
    _isGoogleAvailable() {
        return typeof google !== 'undefined' && !!google?.maps?.places?.Autocomplete;
    }
    _bindAutocomplete(el) {
        if (!el) {
            return;
        }
        if (this._autocomplete) {
            google?.maps?.event?.clearInstanceListeners?.(this._autocomplete);
        }
        if (!google?.maps?.places?.Autocomplete) {
            return;
        }
        this._autocomplete = new google.maps.places.Autocomplete(el, {
            fields: ['address_components', 'geometry', 'place_id'],
        });
        this._autocomplete.addListener('place_changed', () => {
            const place = this._autocomplete?.getPlace();
            if (place?.geometry) {
                this._parseAddress(place);
            }
        });
    }
    _parseAddress(place) {
        const addressComponents = place.address_components;
        const geometry = place.geometry;
        const getComponent = (type, nameType = 'long_name') => {
            const component = addressComponents?.find((c) => c.types.includes(type));
            return component ? component[nameType] : '';
        };
        this._geo = {
            latitude: geometry?.location?.lat() ?? null,
            longitude: geometry?.location?.lng() ?? null,
            placeId: place.place_id ?? null,
        };
        // La recherche est une aide : elle préremplit les champs sans les figer,
        // et on conserve le complément (étage/appartement) déjà saisi.
        this._setFields({
            city: getComponent('locality'),
            country: getComponent('country', 'short_name'),
            floor: this.complementInput.value ?? '',
            number: getComponent('street_number'),
            street: getComponent('route'),
            zipCode: getComponent('postal_code'),
        });
        // Recharge la liste du pays et présélectionne la localité trouvée.
        this._currentCountry = this.countryInput.value?.[0] ?? null;
        this._country$.next(this.countryInput.value?.[0] ?? '');
        const zipCode = this.zipCodeInput.value;
        const city = this.cityInput.value;
        if (zipCode && city) {
            this.localityInput.value = [`${zipCode}__${city}`];
        }
        this._updateValueFromInputs();
        if (this.googleSearchInput?.nativeElement) {
            this.googleSearchInput.nativeElement.value = '';
        }
    }
    _setFields(fields) {
        this._isApplyingValue = true;
        this.cityInput.value = fields.city;
        this.complementInput.value = fields.floor;
        this.countryInput.value = [fields.country];
        this.numberInput.value = fields.number;
        this.streetInput.value = fields.street;
        this.zipCodeInput.value = fields.zipCode;
        this._isApplyingValue = false;
    }
    _updateValueFromInputs() {
        this.input.value = {
            city: this.cityInput.value ?? null,
            country: this.countryInput.value?.[0] ?? null,
            floor: this.complementInput.value ?? null,
            latitude: this._geo.latitude,
            longitude: this._geo.longitude,
            number: this.numberInput.value ?? null,
            placeId: this._geo.placeId,
            street: this.streetInput.value ?? null,
            zipCode: this.zipCodeInput.value ?? null,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputAddressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputAddressComponent, isStandalone: true, selector: "ta-input-address", viewQueries: [{ propertyName: "googleSearchInput", first: true, predicate: ["googleSearchInput"], descendants: true }, { propertyName: "_choicesRef", first: true, predicate: InputChoicesComponent, descendants: true }, { propertyName: "_localityItemTpl", first: true, predicate: ["localityItemTpl"], descendants: true, static: true }, { propertyName: "_countryItemTpl", first: true, predicate: ["countryItemTpl"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<ta-form-label [input]=\"this.input\"></ta-form-label>\n\n<div class=\"address-form flex-column g-space-md\">\n  @if (this.searchEnabled) {\n    <div class=\"address-search\">\n      <ta-font-icon class=\"address-search__icon\" name=\"search\" type=\"sm\"></ta-font-icon>\n      <input\n        #googleSearchInput\n        class=\"address-search__input\"\n        type=\"text\"\n        autocomplete=\"off\"\n        [placeholder]=\"'form.address.search-google' | translate\"\n      />\n    </div>\n    <span class=\"address-search__hint\">{{ 'form.address.search-hint' | translate }}</span>\n  }\n\n  <div class=\"grid g-space-sm\">\n    <div class=\"one-half\">\n      <ta-input-textbox\n        [input]=\"this.streetInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-fourth\">\n      <ta-input-textbox\n        [input]=\"this.numberInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-fourth\">\n      <ta-input-textbox\n        [input]=\"this.complementInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n\n    @if (this.localityAvailable) {\n      <div class=\"full\">\n        <ta-input-choices\n          [input]=\"this.localityInput\"\n          [standalone]=\"true\"\n          (valueChanged)=\"this.onLocalitySelected()\"\n        ></ta-input-choices>\n      </div>\n    } @else {\n      <div class=\"one-third\">\n        <ta-input-textbox\n          [input]=\"this.zipCodeInput\"\n          [standalone]=\"true\"\n          (valueChanged)=\"this.onSubInputChanged()\"\n        ></ta-input-textbox>\n      </div>\n      <div class=\"two-thirds\">\n        <ta-input-textbox\n          [input]=\"this.cityInput\"\n          [standalone]=\"true\"\n          (valueChanged)=\"this.onSubInputChanged()\"\n        ></ta-input-textbox>\n      </div>\n    }\n\n    <div class=\"full\">\n      <ta-input-choices\n        [input]=\"this.countryInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-choices>\n    </div>\n  </div>\n</div>\n\n<ng-template #localityItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.zipCode }} {{ item.city }}</span>\n</ng-template>\n\n<ng-template #countryItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.name }}</span>\n</ng-template>\n", styles: [":host{display:block}.address-search{display:flex;align-items:center;gap:var(--ta-space-sm);padding:var(--ta-space-sm) var(--ta-space-md);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);background:var(--ta-surface-primary);transition:border-color var(--ta-transition-fast),box-shadow var(--ta-transition-fast)}.address-search:focus-within{border-color:var(--ta-border-brand-primary);box-shadow:0 0 0 3px var(--ta-brand-100)}.address-search__icon{flex:0 0 auto;color:var(--ta-icon-brand)}.address-search__input{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.address-search__input::placeholder{color:var(--ta-text-tertiary)}.address-search__hint{color:var(--ta-text-secondary);font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.locality-option{color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: FormLabelComponent, selector: "ta-form-label", inputs: ["input", "withMarginBottom"] }, { kind: "component", type: InputChoicesComponent, selector: "ta-input-choices" }, { kind: "component", type: TextBoxComponent, selector: "ta-input-textbox", inputs: ["space"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputAddressComponent, decorators: [{
            type: Component,
            args: [{ imports: [
                        FontIconComponent,
                        FormLabelComponent,
                        InputChoicesComponent,
                        TextBoxComponent,
                        TranslatePipe,
                    ], selector: 'ta-input-address', standalone: true, template: "<ta-form-label [input]=\"this.input\"></ta-form-label>\n\n<div class=\"address-form flex-column g-space-md\">\n  @if (this.searchEnabled) {\n    <div class=\"address-search\">\n      <ta-font-icon class=\"address-search__icon\" name=\"search\" type=\"sm\"></ta-font-icon>\n      <input\n        #googleSearchInput\n        class=\"address-search__input\"\n        type=\"text\"\n        autocomplete=\"off\"\n        [placeholder]=\"'form.address.search-google' | translate\"\n      />\n    </div>\n    <span class=\"address-search__hint\">{{ 'form.address.search-hint' | translate }}</span>\n  }\n\n  <div class=\"grid g-space-sm\">\n    <div class=\"one-half\">\n      <ta-input-textbox\n        [input]=\"this.streetInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-fourth\">\n      <ta-input-textbox\n        [input]=\"this.numberInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n    <div class=\"one-fourth\">\n      <ta-input-textbox\n        [input]=\"this.complementInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-textbox>\n    </div>\n\n    @if (this.localityAvailable) {\n      <div class=\"full\">\n        <ta-input-choices\n          [input]=\"this.localityInput\"\n          [standalone]=\"true\"\n          (valueChanged)=\"this.onLocalitySelected()\"\n        ></ta-input-choices>\n      </div>\n    } @else {\n      <div class=\"one-third\">\n        <ta-input-textbox\n          [input]=\"this.zipCodeInput\"\n          [standalone]=\"true\"\n          (valueChanged)=\"this.onSubInputChanged()\"\n        ></ta-input-textbox>\n      </div>\n      <div class=\"two-thirds\">\n        <ta-input-textbox\n          [input]=\"this.cityInput\"\n          [standalone]=\"true\"\n          (valueChanged)=\"this.onSubInputChanged()\"\n        ></ta-input-textbox>\n      </div>\n    }\n\n    <div class=\"full\">\n      <ta-input-choices\n        [input]=\"this.countryInput\"\n        [standalone]=\"true\"\n        (valueChanged)=\"this.onSubInputChanged()\"\n      ></ta-input-choices>\n    </div>\n  </div>\n</div>\n\n<ng-template #localityItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.zipCode }} {{ item.city }}</span>\n</ng-template>\n\n<ng-template #countryItemTpl let-item=\"item\">\n  <span class=\"locality-option\">{{ item.name }}</span>\n</ng-template>\n", styles: [":host{display:block}.address-search{display:flex;align-items:center;gap:var(--ta-space-sm);padding:var(--ta-space-sm) var(--ta-space-md);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);background:var(--ta-surface-primary);transition:border-color var(--ta-transition-fast),box-shadow var(--ta-transition-fast)}.address-search:focus-within{border-color:var(--ta-border-brand-primary);box-shadow:0 0 0 3px var(--ta-brand-100)}.address-search__icon{flex:0 0 auto;color:var(--ta-icon-brand)}.address-search__input{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.address-search__input::placeholder{color:var(--ta-text-tertiary)}.address-search__hint{color:var(--ta-text-secondary);font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight)}.locality-option{color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { googleSearchInput: [{
                type: ViewChild,
                args: ['googleSearchInput']
            }], _choicesRef: [{
                type: ViewChild,
                args: [InputChoicesComponent]
            }], _localityItemTpl: [{
                type: ViewChild,
                args: ['localityItemTpl', { static: true }]
            }], _countryItemTpl: [{
                type: ViewChild,
                args: ['countryItemTpl', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFpQixTQUFTLEVBQThDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU5QyxPQUFPLEVBSUwsWUFBWSxFQUVaLFlBQVksR0FDYixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDeEIsZ0JBQWdCLEdBQ2pCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXBGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQXFCakUsTUFBTSxPQUFPLHFCQUNYLFNBQVEsd0JBQXNDO0lBbUQ5QztRQUNFLEtBQUssRUFBRSxDQUFDO1FBNUNWLHlFQUF5RTtRQUN6RSx5REFBeUQ7UUFDbEQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0Is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QUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBQ1MsZUFBZTtzQkFBckUsU0FBUzt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBnb29nbGU6IGFueTtcblxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBvZiwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIElBZGRyZXNzVmFsdWUsXG4gIElucHV0QWRkcmVzcyxcbiAgSW5wdXRCYXNlLFxuICBJbnB1dENob2ljZXMsXG4gIElucHV0Q2hvaWNlc09wdGlvbixcbiAgSW5wdXRUZXh0Qm94LFxufSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQge1xuICBGb3JtTGFiZWxDb21wb25lbnQsXG4gIElucHV0Q2hvaWNlc0NvbXBvbmVudCxcbiAgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50LFxuICBUZXh0Qm94Q29tcG9uZW50LFxufSBmcm9tICdAdGEvZm9ybS1pbnB1dCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IEFkZHJlc3NMb2NhbGl0eSwgVGFBZGRyZXNzTG9va3VwU2VydmljZSwgZ2V0Q291bnRyeUxpc3QgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uRm9ybSB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgQWRkcmVzc0dlbyB7XG4gIGxhdGl0dWRlOiBudW1iZXIgfCBudWxsO1xuICBsb25naXR1ZGU6IG51bWJlciB8IG51bGw7XG4gIHBsYWNlSWQ6IHN0cmluZyB8IG51bGw7XG59XG5cbkBDb21wb25lbnQoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9udEljb25Db21wb25lbnQsXG4gICAgRm9ybUxhYmVsQ29tcG9uZW50LFxuICAgIElucHV0Q2hvaWNlc0NvbXBvbmVudCxcbiAgICBUZXh0Qm94Q29tcG9uZW50LFxuICAgIFRyYW5zbGF0ZVBpcGUsXG4gIF0sXG4gIHNlbGVjdG9yOiAndGEtaW5wdXQtYWRkcmVzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHN0eWxlVXJsczogWycuL2FkZHJlc3MuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHJlc3MuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEFkZHJlc3NDb21wb25lbnRcbiAgZXh0ZW5kcyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQ8SW5wdXRBZGRyZXNzPlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95XG57XG4gIEBWaWV3Q2hpbGQoJ2dvb2dsZVNlYXJjaElucHV0JykgZ29vZ2xlU2VhcmNoSW5wdXQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKElucHV0Q2hvaWNlc0NvbXBvbmVudCkgcHJpdmF0ZSBfY2hvaWNlc1JlZj86IElucHV0Q2hvaWNlc0NvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnbG9jYWxpdHlJdGVtVHBsJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBfbG9jYWxpdHlJdGVtVHBsITogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgnY291bnRyeUl0ZW1UcGwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIF9jb3VudHJ5SXRlbVRwbCE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gTGEgcmVjaGVyY2hlIEdvb2dsZSBuJ2VzdCBhZmZpY2jDqWUgcXVlIHNpIGwnQVBJIE1hcHMvUGxhY2VzIGEgYmllbiDDqXTDqVxuICAvLyBpbmplY3TDqWUgZGFucyBsJ2FwcGxpY2F0aW9uICh2aWEgcHJvdmlkZUdvb2dsZU1hcHMoKSkuXG4gIHB1YmxpYyBzZWFyY2hFbmFibGVkID0gZmFsc2U7XG4gIC8vIExlIGNob2l4IGNvZGUgcG9zdGFsIC8gY29tbXVuZSByZW1wbGFjZSBsZXMgY2hhbXBzIGxpYnJlcyB0YW50IHF1ZSBsZSBwYXlzXG4gIC8vIGEgZGVzIGRvbm7DqWVzIDsgc2lub24gb24gYmFzY3VsZSBzdXIgbGEgc2Fpc2llIGxpYnJlICh6aXBDb2RlICsgdmlsbGUpLlxuICBwdWJsaWMgbG9jYWxpdHlBdmFpbGFibGUgPSB0cnVlO1xuICBwdWJsaWMgY2l0eUlucHV0ID0gbmV3IElucHV0VGV4dEJveCh7XG4gICAga2V5OiAnZGlzcGxheUNpdHknLFxuICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLmNpdHknLFxuICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG4gIHB1YmxpYyBjb21wbGVtZW50SW5wdXQgPSBuZXcgSW5wdXRUZXh0Qm94KHtcbiAgICBrZXk6ICdkaXNwbGF5Rmxvb3InLFxuICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLmZsb29yJyxcbiAgfSk7XG4gIHB1YmxpYyBjb3VudHJ5SW5wdXQhOiBJbnB1dENob2ljZXM7XG4gIHB1YmxpYyBkZXRhaWxzSW5wdXRzOiBJbnB1dEJhc2U8YW55PltdO1xuICBwdWJsaWMgbG9jYWxpdHlJbnB1dCE6IElucHV0Q2hvaWNlcztcbiAgcHVibGljIG51bWJlcklucHV0ID0gbmV3IElucHV0VGV4dEJveCh7XG4gICAga2V5OiAnZGlzcGxheU51bWJlcicsXG4gICAgbGFiZWw6ICdmb3JtLmFkZHJlc3MubnVtYmVyJyxcbiAgfSk7XG4gIHB1YmxpYyBzdHJlZXRJbnB1dCA9IG5ldyBJbnB1dFRleHRCb3goe1xuICAgIGtleTogJ2Rpc3BsYXlTdHJlZXQnLFxuICAgIGxhYmVsOiAnZm9ybS5hZGRyZXNzLnN0cmVldCcsXG4gICAgdmFsaWRhdG9yczogW1ZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcbiAgcHVibGljIHppcENvZGVJbnB1dCA9IG5ldyBJbnB1dFRleHRCb3goe1xuICAgIGtleTogJ2Rpc3BsYXlaaXBDb2RlJyxcbiAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy56aXBDb2RlJyxcbiAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gIH0pO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2xvb2t1cCA9IGluamVjdChUYUFkZHJlc3NMb29rdXBTZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfdHJhbnNsYXRlID0gaW5qZWN0KFRyYW5zbGF0ZVNlcnZpY2UpO1xuICBwcml2YXRlIF9hdXRvY29tcGxldGU6IGFueTtcbiAgcHJpdmF0ZSBfY291bnRyeSQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgX2N1cnJlbnRDb3VudHJ5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZ2VvOiBBZGRyZXNzR2VvID0geyBsYXRpdHVkZTogbnVsbCwgbG9uZ2l0dWRlOiBudWxsLCBwbGFjZUlkOiBudWxsIH07XG4gIHByaXZhdGUgX2lzQXBwbHlpbmdWYWx1ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9sb2NhbGl0aWVzOiBBZGRyZXNzTG9jYWxpdHlbXSA9IFtdO1xuICBwcml2YXRlIF9sb2NhbGl0eU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBBZGRyZXNzTG9jYWxpdHk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBUYVRyYW5zbGF0aW9uRm9ybS5nZXRJbnN0YW5jZSgpO1xuICAgIHRoaXMuY291bnRyeUlucHV0ID0gbmV3IElucHV0Q2hvaWNlcyh7XG4gICAgICBrZXk6ICdkaXNwbGF5Q291bnRyeScsXG4gICAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy5jb3VudHJ5JyxcbiAgICAgIG9wdGlvbnMkOiBvZihbXSksXG4gICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICB2YWx1ZTogWydCRSddLFxuICAgICAgd2l0aFNlYXJjaDogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLmxvY2FsaXR5SW5wdXQgPSBuZXcgSW5wdXRDaG9pY2VzKHtcbiAgICAgIC8vIExhIGxpc3RlIGNvbXBsw6h0ZSBkdSBwYXlzIGVzdCBnYXJkw6llIGVuIG3DqW1vaXJlIDsgYWR2YW5jZWRTZWFyY2gkIGZpbHRyZVxuICAgICAgLy8gY8O0dMOpIGNsaWVudCBldCBwbGFmb25uZSBsJ2FmZmljaGFnZS5cbiAgICAgIGFkdmFuY2VkU2VhcmNoJDogKHNlYXJjaD86IHN0cmluZykgPT4gb2YodGhpcy5fc2VhcmNoTG9jYWxpdGllcyhzZWFyY2gpKSxcbiAgICAgIGtleTogJ2Rpc3BsYXlMb2NhbGl0eScsXG4gICAgICBsYWJlbDogJ2Zvcm0uYWRkcmVzcy5sb2NhbGl0eScsXG4gICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICB3aXRoU2VhcmNoOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMuZGV0YWlsc0lucHV0cyA9IFtcbiAgICAgIHRoaXMuY2l0eUlucHV0LFxuICAgICAgdGhpcy5jb21wbGVtZW50SW5wdXQsXG4gICAgICB0aGlzLmNvdW50cnlJbnB1dCxcbiAgICAgIHRoaXMubG9jYWxpdHlJbnB1dCxcbiAgICAgIHRoaXMubnVtYmVySW5wdXQsXG4gICAgICB0aGlzLnN0cmVldElucHV0LFxuICAgICAgdGhpcy56aXBDb2RlSW5wdXQsXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuc2VhcmNoRW5hYmxlZCA9IHRoaXMuX2lzR29vZ2xlQXZhaWxhYmxlKCk7XG4gICAgLy8gUmVuZHUgZCd1bmUgb3B0aW9uIChsZSBjb21wb3NhbnQgZ8OocmUgbGEgYm91Y2xlIGV0IGwnZW1waWxlbWVudCB2ZXJ0aWNhbCkuXG4gICAgdGhpcy5sb2NhbGl0eUlucHV0LmNob2ljZVRlbXBsYXRlID0geyBvbmU6IHRoaXMuX2xvY2FsaXR5SXRlbVRwbCB9O1xuICAgIHRoaXMuY291bnRyeUlucHV0LmNob2ljZVRlbXBsYXRlID0geyBvbmU6IHRoaXMuX2NvdW50cnlJdGVtVHBsIH07XG4gICAgdGhpcy5jb3VudHJ5SW5wdXQub3B0aW9ucyQgPSBvZihcbiAgICAgIGdldENvdW50cnlMaXN0KHRoaXMuX3RyYW5zbGF0ZS5jdXJyZW50TGFuZywgdGhpcy5pbnB1dC5wcmlvcml0eUNvdW50cmllcykubWFwKGMgPT4gKHtcbiAgICAgICAgZGF0YTogYyxcbiAgICAgICAgaWQ6IGMuY29kZSxcbiAgICAgICAgbmFtZTogYy5uYW1lLFxuICAgICAgfSkpXG4gICAgKTtcbiAgICAvLyBQb3VyIGNoYXF1ZSBwYXlzLCBvbiByw6ljdXDDqHJlIFRPVVRFIGxhIGxpc3RlIGRlcyBjb2RlcyBwb3N0YXV4IC8gY29tbXVuZXMgO1xuICAgIC8vIGxhIHJlY2hlcmNoZSBzZSBmYWl0IGVuc3VpdGUgY8O0dMOpIGNsaWVudCAoYWR2YW5jZWRTZWFyY2gkKS5cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMuX2NvdW50cnkkXG4gICAgICAgIC5waXBlKHN3aXRjaE1hcChjb3VudHJ5ID0+IHRoaXMuX2xvb2t1cC5nZXRDb3VudHJ5UG9zdGFsQ29kZXMoY291bnRyeSkpKVxuICAgICAgICAuc3Vic2NyaWJlKGxvY2FsaXRpZXMgPT4ge1xuICAgICAgICAgIHRoaXMuX2xvY2FsaXRpZXMgPSBsb2NhbGl0aWVzO1xuICAgICAgICAgIHRoaXMuX3JlYnVpbGRMb2NhbGl0eU1hcChsb2NhbGl0aWVzKTtcbiAgICAgICAgICB0aGlzLmxvY2FsaXR5QXZhaWxhYmxlID0gbG9jYWxpdGllcy5sZW5ndGggPiAwO1xuICAgICAgICAgIHRoaXMuX2Nob2ljZXNSZWY/LnJlZnJlc2goKTtcbiAgICAgICAgfSlcbiAgICApO1xuICAgIGlmICh0aGlzLmlucHV0LnZhbHVlKSB7XG4gICAgICB0aGlzLl9hcHBseVZhbHVlVG9GaWVsZHModGhpcy5pbnB1dC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkcmVzc2UgdmlkZSA6IG9uIHPDqG1lIGxlIHBheXMgcGFyIGTDqWZhdXQgKEJlbGdpcXVlKSBkYW5zIGxhIHZhbGV1ci5cbiAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlRnJvbUlucHV0cygpO1xuICAgIH1cbiAgICB0aGlzLl9jdXJyZW50Q291bnRyeSA9IHRoaXMuY291bnRyeUlucHV0LnZhbHVlPy5bMF0gPz8gbnVsbDtcbiAgICB0aGlzLl9jb3VudHJ5JC5uZXh0KHRoaXMuY291bnRyeUlucHV0LnZhbHVlPy5bMF0gPz8gJycpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICBpZiAodGhpcy5zZWFyY2hFbmFibGVkKSB7XG4gICAgICB0aGlzLl9iaW5kQXV0b2NvbXBsZXRlKHRoaXMuZ29vZ2xlU2VhcmNoSW5wdXQ/Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLl9jaG9pY2VzUmVmPy5yZWZyZXNoKCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgZ29vZ2xlPy5tYXBzPy5ldmVudD8uY2xlYXJJbnN0YW5jZUxpc3RlbmVycz8uKHRoaXMuX2F1dG9jb21wbGV0ZSk7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUudW5iaW5kQWxsPy4oKTtcbiAgICB9XG4gICAgdGhpcy5kZXRhaWxzSW5wdXRzLmZvckVhY2goaSA9PiBpLmRlc3Ryb3koKSk7XG4gICAgdGhpcy5fY291bnRyeSQuY29tcGxldGUoKTtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgcHVibGljIG9uU3ViSW5wdXRDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLl9pc0FwcGx5aW5nVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2kgbGUgcGF5cyBjaGFuZ2UsIG9uIHJlY2hhcmdlIGxhIGxpc3RlIGV0IG9uIHLDqWluaXRpYWxpc2UgbGUgY2hvaXguXG4gICAgY29uc3QgY291bnRyeSA9IHRoaXMuY291bnRyeUlucHV0LnZhbHVlPy5bMF0gPz8gbnVsbDtcbiAgICBpZiAoY291bnRyeSAhPT0gdGhpcy5fY3VycmVudENvdW50cnkpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRDb3VudHJ5ID0gY291bnRyeTtcbiAgICAgIHRoaXMubG9jYWxpdHlJbnB1dC52YWx1ZSA9IFtdO1xuICAgICAgdGhpcy5fY291bnRyeSQubmV4dChjb3VudHJ5ID8/ICcnKTtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tSW5wdXRzKCk7XG4gICAgdGhpcy5fcmVmcmVzaFZhbGlkaXR5KCk7XG4gIH1cblxuICBwdWJsaWMgb25Mb2NhbGl0eVNlbGVjdGVkKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5sb2NhbGl0eUlucHV0LnZhbHVlPy5bMF07XG4gICAgY29uc3QgbG9jYWxpdHkgPSBpZCA/IHRoaXMuX2xvY2FsaXR5TWFwLmdldChpZCkgOiB1bmRlZmluZWQ7XG4gICAgaWYgKCFsb2NhbGl0eSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9nZW8gPSB7IGxhdGl0dWRlOiBsb2NhbGl0eS5sYXRpdHVkZSwgbG9uZ2l0dWRlOiBsb2NhbGl0eS5sb25naXR1ZGUsIHBsYWNlSWQ6IG51bGwgfTtcbiAgICB0aGlzLl9pc0FwcGx5aW5nVmFsdWUgPSB0cnVlO1xuICAgIHRoaXMuemlwQ29kZUlucHV0LnZhbHVlID0gbG9jYWxpdHkuemlwQ29kZTtcbiAgICB0aGlzLmNpdHlJbnB1dC52YWx1ZSA9IGxvY2FsaXR5LmNpdHk7XG4gICAgdGhpcy5faXNBcHBseWluZ1ZhbHVlID0gZmFsc2U7XG4gICAgdGhpcy5fdXBkYXRlVmFsdWVGcm9tSW5wdXRzKCk7XG4gICAgdGhpcy5fcmVmcmVzaFZhbGlkaXR5KCk7XG4gIH1cblxuICBwcml2YXRlIF9zZWFyY2hMb2NhbGl0aWVzKHNlYXJjaD86IHN0cmluZyk6IElucHV0Q2hvaWNlc09wdGlvbltdIHtcbiAgICBjb25zdCB0ZXJtID0gKHNlYXJjaCA/PyAnJykudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgbWF0Y2hlZCA9IHRlcm1cbiAgICAgID8gdGhpcy5fbG9jYWxpdGllcy5maWx0ZXIobG9jYWxpdHkgPT5cbiAgICAgICAgICBgJHtsb2NhbGl0eS56aXBDb2RlfSAke2xvY2FsaXR5LmNpdHl9YC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0pXG4gICAgICAgIClcbiAgICAgIDogdGhpcy5fbG9jYWxpdGllcztcbiAgICByZXR1cm4gbWF0Y2hlZC5tYXAobG9jYWxpdHkgPT4gdGhpcy5fdG9PcHRpb24obG9jYWxpdHkpKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RvT3B0aW9uKGxvY2FsaXR5OiBBZGRyZXNzTG9jYWxpdHkpOiBJbnB1dENob2ljZXNPcHRpb24ge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBsb2NhbGl0eSxcbiAgICAgIGlkOiBgJHtsb2NhbGl0eS56aXBDb2RlfV9fJHtsb2NhbGl0eS5jaXR5fWAsXG4gICAgICBuYW1lOiBgJHtsb2NhbGl0eS56aXBDb2RlfSAke2xvY2FsaXR5LmNpdHl9YCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVidWlsZExvY2FsaXR5TWFwKGxvY2FsaXRpZXM6IEFkZHJlc3NMb2NhbGl0eVtdKSB7XG4gICAgdGhpcy5fbG9jYWxpdHlNYXAuY2xlYXIoKTtcbiAgICBsb2NhbGl0aWVzLmZvckVhY2gobG9jYWxpdHkgPT5cbiAgICAgIHRoaXMuX2xvY2FsaXR5TWFwLnNldChgJHtsb2NhbGl0eS56aXBDb2RlfV9fJHtsb2NhbGl0eS5jaXR5fWAsIGxvY2FsaXR5KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9yZWZyZXNoVmFsaWRpdHkoKSB7XG4gICAgdGhpcy5pbnB1dC5mb3JtQ29udHJvbD8uc2V0RXJyb3JzKFxuICAgICAgdGhpcy5kZXRhaWxzSW5wdXRzLnNvbWUoaSA9PiBpLmZvcm1Db250cm9sPy5pbnZhbGlkID8/IGZhbHNlKSA/IHsgaW52YWxpZDogdHJ1ZSB9IDogbnVsbFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBseVZhbHVlVG9GaWVsZHModmFsdWU6IFBhcnRpYWw8SUFkZHJlc3NWYWx1ZT4pIHtcbiAgICB0aGlzLl9nZW8gPSB7XG4gICAgICBsYXRpdHVkZTogdmFsdWUubGF0aXR1ZGUgPz8gbnVsbCxcbiAgICAgIGxvbmdpdHVkZTogdmFsdWUubG9uZ2l0dWRlID8/IG51bGwsXG4gICAgICBwbGFjZUlkOiB2YWx1ZS5wbGFjZUlkID8/IG51bGwsXG4gICAgfTtcbiAgICB0aGlzLl9zZXRGaWVsZHMoe1xuICAgICAgY2l0eTogdmFsdWUuY2l0eSA/PyAnJyxcbiAgICAgIGNvdW50cnk6IHZhbHVlLmNvdW50cnkgfHwgJ0JFJyxcbiAgICAgIGZsb29yOiB2YWx1ZS5mbG9vciA/PyAnJyxcbiAgICAgIG51bWJlcjogdmFsdWUubnVtYmVyID8/ICcnLFxuICAgICAgc3RyZWV0OiB2YWx1ZS5zdHJlZXQgPz8gJycsXG4gICAgICB6aXBDb2RlOiB2YWx1ZS56aXBDb2RlID8/ICcnLFxuICAgIH0pO1xuICAgIC8vIFByw6lzw6lsZWN0aW9uIGR1IGNob2l4IGNvZGUgcG9zdGFsIC8gY29tbXVuZSAoYWZmaWNow6kgdW5lIGZvaXMgbGEgbGlzdGUgY2hhcmfDqWUpLlxuICAgIGlmICh2YWx1ZS56aXBDb2RlICYmIHZhbHVlLmNpdHkpIHtcbiAgICAgIHRoaXMubG9jYWxpdHlJbnB1dC52YWx1ZSA9IFtgJHt2YWx1ZS56aXBDb2RlfV9fJHt2YWx1ZS5jaXR5fWBdO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzR29vZ2xlQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgZ29vZ2xlICE9PSAndW5kZWZpbmVkJyAmJiAhIWdvb2dsZT8ubWFwcz8ucGxhY2VzPy5BdXRvY29tcGxldGU7XG4gIH1cblxuICBwcml2YXRlIF9iaW5kQXV0b2NvbXBsZXRlKGVsOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XG4gICAgICBnb29nbGU/Lm1hcHM/LmV2ZW50Py5jbGVhckluc3RhbmNlTGlzdGVuZXJzPy4odGhpcy5fYXV0b2NvbXBsZXRlKTtcbiAgICB9XG4gICAgaWYgKCFnb29nbGU/Lm1hcHM/LnBsYWNlcz8uQXV0b2NvbXBsZXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2F1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKGVsLCB7XG4gICAgICBmaWVsZHM6IFsnYWRkcmVzc19jb21wb25lbnRzJywgJ2dlb21ldHJ5JywgJ3BsYWNlX2lkJ10sXG4gICAgfSk7XG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlLmFkZExpc3RlbmVyKCdwbGFjZV9jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgY29uc3QgcGxhY2UgPSB0aGlzLl9hdXRvY29tcGxldGU/LmdldFBsYWNlKCk7XG4gICAgICBpZiAocGxhY2U/Lmdlb21ldHJ5KSB7XG4gICAgICAgIHRoaXMuX3BhcnNlQWRkcmVzcyhwbGFjZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZUFkZHJlc3MocGxhY2U6IGFueSkge1xuICAgIGNvbnN0IGFkZHJlc3NDb21wb25lbnRzID0gcGxhY2UuYWRkcmVzc19jb21wb25lbnRzO1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gcGxhY2UuZ2VvbWV0cnk7XG4gICAgY29uc3QgZ2V0Q29tcG9uZW50ID0gKHR5cGU6IHN0cmluZywgbmFtZVR5cGU6ICdsb25nX25hbWUnIHwgJ3Nob3J0X25hbWUnID0gJ2xvbmdfbmFtZScpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGFkZHJlc3NDb21wb25lbnRzPy5maW5kKChjOiBhbnkpID0+IGMudHlwZXMuaW5jbHVkZXModHlwZSkpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudCA/IGNvbXBvbmVudFtuYW1lVHlwZV0gOiAnJztcbiAgICB9O1xuXG4gICAgdGhpcy5fZ2VvID0ge1xuICAgICAgbGF0aXR1ZGU6IGdlb21ldHJ5Py5sb2NhdGlvbj8ubGF0KCkgPz8gbnVsbCxcbiAgICAgIGxvbmdpdHVkZTogZ2VvbWV0cnk/LmxvY2F0aW9uPy5sbmcoKSA/PyBudWxsLFxuICAgICAgcGxhY2VJZDogcGxhY2UucGxhY2VfaWQgPz8gbnVsbCxcbiAgICB9O1xuICAgIC8vIExhIHJlY2hlcmNoZSBlc3QgdW5lIGFpZGUgOiBlbGxlIHByw6lyZW1wbGl0IGxlcyBjaGFtcHMgc2FucyBsZXMgZmlnZXIsXG4gICAgLy8gZXQgb24gY29uc2VydmUgbGUgY29tcGzDqW1lbnQgKMOpdGFnZS9hcHBhcnRlbWVudCkgZMOpasOgIHNhaXNpLlxuICAgIHRoaXMuX3NldEZpZWxkcyh7XG4gICAgICBjaXR5OiBnZXRDb21wb25lbnQoJ2xvY2FsaXR5JyksXG4gICAgICBjb3VudHJ5OiBnZXRDb21wb25lbnQoJ2NvdW50cnknLCAnc2hvcnRfbmFtZScpLFxuICAgICAgZmxvb3I6IHRoaXMuY29tcGxlbWVudElucHV0LnZhbHVlID8/ICcnLFxuICAgICAgbnVtYmVyOiBnZXRDb21wb25lbnQoJ3N0cmVldF9udW1iZXInKSxcbiAgICAgIHN0cmVldDogZ2V0Q29tcG9uZW50KCdyb3V0ZScpLFxuICAgICAgemlwQ29kZTogZ2V0Q29tcG9uZW50KCdwb3N0YWxfY29kZScpLFxuICAgIH0pO1xuICAgIC8vIFJlY2hhcmdlIGxhIGxpc3RlIGR1IHBheXMgZXQgcHLDqXPDqWxlY3Rpb25uZSBsYSBsb2NhbGl0w6kgdHJvdXbDqWUuXG4gICAgdGhpcy5fY3VycmVudENvdW50cnkgPSB0aGlzLmNvdW50cnlJbnB1dC52YWx1ZT8uWzBdID8/IG51bGw7XG4gICAgdGhpcy5fY291bnRyeSQubmV4dCh0aGlzLmNvdW50cnlJbnB1dC52YWx1ZT8uWzBdID8/ICcnKTtcbiAgICBjb25zdCB6aXBDb2RlID0gdGhpcy56aXBDb2RlSW5wdXQudmFsdWU7XG4gICAgY29uc3QgY2l0eSA9IHRoaXMuY2l0eUlucHV0LnZhbHVlO1xuICAgIGlmICh6aXBDb2RlICYmIGNpdHkpIHtcbiAgICAgIHRoaXMubG9jYWxpdHlJbnB1dC52YWx1ZSA9IFtgJHt6aXBDb2RlfV9fJHtjaXR5fWBdO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVWYWx1ZUZyb21JbnB1dHMoKTtcbiAgICBpZiAodGhpcy5nb29nbGVTZWFyY2hJbnB1dD8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5nb29nbGVTZWFyY2hJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0RmllbGRzKGZpZWxkczoge1xuICAgIGNpdHk6IHN0cmluZztcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgZmxvb3I6IHN0cmluZztcbiAgICBudW1iZXI6IHN0cmluZztcbiAgICBzdHJlZXQ6IHN0cmluZztcbiAgICB6aXBDb2RlOiBzdHJpbmc7XG4gIH0pIHtcbiAgICB0aGlzLl9pc0FwcGx5aW5nVmFsdWUgPSB0cnVlO1xuICAgIHRoaXMuY2l0eUlucHV0LnZhbHVlID0gZmllbGRzLmNpdHk7XG4gICAgdGhpcy5jb21wbGVtZW50SW5wdXQudmFsdWUgPSBmaWVsZHMuZmxvb3I7XG4gICAgdGhpcy5jb3VudHJ5SW5wdXQudmFsdWUgPSBbZmllbGRzLmNvdW50cnldO1xuICAgIHRoaXMubnVtYmVySW5wdXQudmFsdWUgPSBmaWVsZHMubnVtYmVyO1xuICAgIHRoaXMuc3RyZWV0SW5wdXQudmFsdWUgPSBmaWVsZHMuc3RyZWV0O1xuICAgIHRoaXMuemlwQ29kZUlucHV0LnZhbHVlID0gZmllbGRzLnppcENvZGU7XG4gICAgdGhpcy5faXNBcHBseWluZ1ZhbHVlID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVWYWx1ZUZyb21JbnB1dHMoKSB7XG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IHtcbiAgICAgIGNpdHk6IHRoaXMuY2l0eUlucHV0LnZhbHVlID8/IG51bGwsXG4gICAgICBjb3VudHJ5OiB0aGlzLmNvdW50cnlJbnB1dC52YWx1ZT8uWzBdID8/IG51bGwsXG4gICAgICBmbG9vcjogdGhpcy5jb21wbGVtZW50SW5wdXQudmFsdWUgPz8gbnVsbCxcbiAgICAgIGxhdGl0dWRlOiB0aGlzLl9nZW8ubGF0aXR1ZGUsXG4gICAgICBsb25naXR1ZGU6IHRoaXMuX2dlby5sb25naXR1ZGUsXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVySW5wdXQudmFsdWUgPz8gbnVsbCxcbiAgICAgIHBsYWNlSWQ6IHRoaXMuX2dlby5wbGFjZUlkLFxuICAgICAgc3RyZWV0OiB0aGlzLnN0cmVldElucHV0LnZhbHVlID8/IG51bGwsXG4gICAgICB6aXBDb2RlOiB0aGlzLnppcENvZGVJbnB1dC52YWx1ZSA/PyBudWxsLFxuICAgIH07XG4gIH1cbn1cbiIsIjx0YS1mb3JtLWxhYmVsIFtpbnB1dF09XCJ0aGlzLmlucHV0XCI+PC90YS1mb3JtLWxhYmVsPlxuXG48ZGl2IGNsYXNzPVwiYWRkcmVzcy1mb3JtIGZsZXgtY29sdW1uIGctc3BhY2UtbWRcIj5cbiAgQGlmICh0aGlzLnNlYXJjaEVuYWJsZWQpIHtcbiAgICA8ZGl2IGNsYXNzPVwiYWRkcmVzcy1zZWFyY2hcIj5cbiAgICAgIDx0YS1mb250LWljb24gY2xhc3M9XCJhZGRyZXNzLXNlYXJjaF9faWNvblwiIG5hbWU9XCJzZWFyY2hcIiB0eXBlPVwic21cIj48L3RhLWZvbnQtaWNvbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICAjZ29vZ2xlU2VhcmNoSW5wdXRcbiAgICAgICAgY2xhc3M9XCJhZGRyZXNzLXNlYXJjaF9faW5wdXRcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInZm9ybS5hZGRyZXNzLnNlYXJjaC1nb29nbGUnIHwgdHJhbnNsYXRlXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzLXNlYXJjaF9faGludFwiPnt7ICdmb3JtLmFkZHJlc3Muc2VhcmNoLWhpbnQnIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICB9XG5cbiAgPGRpdiBjbGFzcz1cImdyaWQgZy1zcGFjZS1zbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJvbmUtaGFsZlwiPlxuICAgICAgPHRhLWlucHV0LXRleHRib3hcbiAgICAgICAgW2lucHV0XT1cInRoaXMuc3RyZWV0SW5wdXRcIlxuICAgICAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uU3ViSW5wdXRDaGFuZ2VkKClcIlxuICAgICAgPjwvdGEtaW5wdXQtdGV4dGJveD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwib25lLWZvdXJ0aFwiPlxuICAgICAgPHRhLWlucHV0LXRleHRib3hcbiAgICAgICAgW2lucHV0XT1cInRoaXMubnVtYmVySW5wdXRcIlxuICAgICAgICBbc3RhbmRhbG9uZV09XCJ0cnVlXCJcbiAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uU3ViSW5wdXRDaGFuZ2VkKClcIlxuICAgICAgPjwvdGEtaW5wdXQtdGV4dGJveD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwib25lLWZvdXJ0aFwiPlxuICAgICAgPHRhLWlucHV0LXRleHRib3hcbiAgICAgICAgW2lucHV0XT1cInRoaXMuY29tcGxlbWVudElucHV0XCJcbiAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICh2YWx1ZUNoYW5nZWQpPVwidGhpcy5vblN1YklucHV0Q2hhbmdlZCgpXCJcbiAgICAgID48L3RhLWlucHV0LXRleHRib3g+XG4gICAgPC9kaXY+XG5cbiAgICBAaWYgKHRoaXMubG9jYWxpdHlBdmFpbGFibGUpIHtcbiAgICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XG4gICAgICAgIDx0YS1pbnB1dC1jaG9pY2VzXG4gICAgICAgICAgW2lucHV0XT1cInRoaXMubG9jYWxpdHlJbnB1dFwiXG4gICAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uTG9jYWxpdHlTZWxlY3RlZCgpXCJcbiAgICAgICAgPjwvdGEtaW5wdXQtY2hvaWNlcz5cbiAgICAgIDwvZGl2PlxuICAgIH0gQGVsc2Uge1xuICAgICAgPGRpdiBjbGFzcz1cIm9uZS10aGlyZFwiPlxuICAgICAgICA8dGEtaW5wdXQtdGV4dGJveFxuICAgICAgICAgIFtpbnB1dF09XCJ0aGlzLnppcENvZGVJbnB1dFwiXG4gICAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uU3ViSW5wdXRDaGFuZ2VkKClcIlxuICAgICAgICA+PC90YS1pbnB1dC10ZXh0Ym94PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidHdvLXRoaXJkc1wiPlxuICAgICAgICA8dGEtaW5wdXQtdGV4dGJveFxuICAgICAgICAgIFtpbnB1dF09XCJ0aGlzLmNpdHlJbnB1dFwiXG4gICAgICAgICAgW3N0YW5kYWxvbmVdPVwidHJ1ZVwiXG4gICAgICAgICAgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLm9uU3ViSW5wdXRDaGFuZ2VkKClcIlxuICAgICAgICA+PC90YS1pbnB1dC10ZXh0Ym94PlxuICAgICAgPC9kaXY+XG4gICAgfVxuXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cbiAgICAgIDx0YS1pbnB1dC1jaG9pY2VzXG4gICAgICAgIFtpbnB1dF09XCJ0aGlzLmNvdW50cnlJbnB1dFwiXG4gICAgICAgIFtzdGFuZGFsb25lXT1cInRydWVcIlxuICAgICAgICAodmFsdWVDaGFuZ2VkKT1cInRoaXMub25TdWJJbnB1dENoYW5nZWQoKVwiXG4gICAgICA+PC90YS1pbnB1dC1jaG9pY2VzPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2xvY2FsaXR5SXRlbVRwbCBsZXQtaXRlbT1cIml0ZW1cIj5cbiAgPHNwYW4gY2xhc3M9XCJsb2NhbGl0eS1vcHRpb25cIj57eyBpdGVtLnppcENvZGUgfX0ge3sgaXRlbS5jaXR5IH19PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNjb3VudHJ5SXRlbVRwbCBsZXQtaXRlbT1cIml0ZW1cIj5cbiAgPHNwYW4gY2xhc3M9XCJsb2NhbGl0eS1vcHRpb25cIj57eyBpdGVtLm5hbWUgfX08L3NwYW4+XG48L25nLXRlbXBsYXRlPlxuIl19